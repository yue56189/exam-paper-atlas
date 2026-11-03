#!/usr/bin/env python3
"""四项交付前校验：语法 / 标签 / 数据完整性 / SVG 溢出 / 卡片渲染。

用法：
    python verify.py <项目目录>

退出码 0 = 全部通过；1 = 有问题（详见输出）。
"""
import os
import re
import sys
import json
import glob
import shutil
import argparse
import subprocess

CHECK_JS = r'''
const __R = {syntax:'ok', papers:[], tagErr:[], bslash:[], overflow:[], badCard:[], unrendered:[]};

/* ---------- 1. 标签配对 ---------- */
const VOID = new Set(['br','hr','img','input','meta','link','area','base','col','embed',
  'source','track','wbr','circle','path','line','rect','polygon','polyline','use','stop','ellipse']);
function checkTags(s){
  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g;
  let m, st = [], errs = [];
  while ((m = re.exec(s))) {
    const full = m[0], tag = m[1].toLowerCase();
    if (full.startsWith('</')) {
      const top = st.pop();
      if (top !== tag) errs.push('mismatch </' + tag + '> vs <' + (top || 'EMPTY') + '>');
    } else if (full.endsWith('/>') || VOID.has(tag)) {
      /* 自闭合 */
    } else {
      st.push(tag);
    }
  }
  if (st.length) errs.push('unclosed: ' + st.join(','));
  return errs;
}

/* ---------- 2. SVG 文字宽度估算 ---------- */
function txtW(str, fs) {
  let w = 0;
  for (const ch of str) {
    const c = ch.codePointAt(0);
    if (c > 0x2e80) w += 1.0 * fs;
    else if ("iljtfr.,:;!|'".includes(ch)) w += 0.32 * fs;
    else if (ch === ' ') w += 0.28 * fs;
    else if (/[A-Z]/.test(ch)) w += 0.68 * fs;
    else w += 0.55 * fs;
  }
  return w;
}

/* ---------- 3. 逐卷逐题 ---------- */
const D = '$' + '{';
PAPERS.forEach(p => {
  let n = 0;
  p.sections.forEach(s => s.items.forEach((it, ix) => {
    n++;
    const all = (it.q || '') + (it.a || '') + (it.sol || '');
    const e = checkTags(all);
    if (e.length) __R.tagErr.push(p.id + '-' + s.idx + '-' + (ix + 1) + ': ' + e.slice(0, 3).join(' | '));
    if (all.indexOf('\\\\') >= 0) __R.bslash.push(p.id + '-' + s.idx + '-' + (ix + 1));
    if (all.indexOf(D) >= 0) __R.unrendered.push(p.id + '-' + s.idx + '-' + (ix + 1));
    if (all.indexOf('undefined') >= 0) __R.unrendered.push(p.id + '-' + s.idx + '-' + (ix + 1) + ' (undefined)');
  }));
  __R.papers.push({ id: p.id, items: n, declared: p.total, match: n === (p.total || n) });
});

/* ---------- 4. SVG 溢出 ---------- */
for (const k of Object.keys(DIAG)) {
  const svg = DIAG[k];
  const vb = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
  if (!vb) continue;
  const VW = +vb[1], VH = +vb[2];
  const re = /<text([^>]*)>([\s\S]*?)<\/text>/g;
  let m;
  while ((m = re.exec(svg))) {
    const attrs = m[1], body = m[2];
    if (/transform=/.test(attrs)) continue;
    const xm = attrs.match(/x="([\d.]+)"/); if (!xm) continue;
    const ym = attrs.match(/y="([\d.]+)"/);
    const fm = attrs.match(/font-size="([\d.]+)"/);
    const fsz = fm ? +fm[1] : 13;
    const txt = body.replace(/&#?(8202|thinsp|nbsp);/g, '').replace(/&gt;/g, '>')
                    .replace(/&lt;/g, '<').replace(/<[^>]+>/g, '');
    const right = +xm[1] + txtW(txt, fsz);
    const yy = ym ? +ym[1] : 0;
    if (right > VW - 1 || yy > VH - 2) {
      __R.overflow.push(k + ' x=' + xm[1] + ' y=' + yy + ' right=' + Math.round(right) +
        '/' + VW + '  「' + txt.slice(0, 30) + '」');
    }
  }
}

/* ---------- 5. 卡片渲染 ---------- */
const state = {};
PAPERS.forEach(p => {
  if (!p.sections[0]) return;
  try {
    const h = card(p, p.sections[0], p.sections[0].items[0], 1);
    if (!h || h.indexOf('class="q') < 0) __R.badCard.push(p.id + ': 输出为空');
    if (h.indexOf('undefined') >= 0) __R.badCard.push(p.id + ': 含 undefined');
  } catch (e) {
    __R.badCard.push(p.id + ': ' + e.message);
  }
});

console.log('@@JSON@@' + JSON.stringify(__R));
'''


def find_node():
    cands = []
    cands += sorted(glob.glob(os.path.expanduser('~/.workbuddy/binaries/node/*/node.exe')), reverse=True)
    cands += sorted(glob.glob('C:/Users/*/.workbuddy/binaries/node/*/node.exe'), reverse=True)
    cands += sorted(glob.glob(os.path.expanduser('~/.workbuddy/binaries/node/*/bin/node')), reverse=True)
    w = shutil.which('node')
    if w:
        cands.append(w)
    for c in cands:
        if os.path.exists(c):
            return c
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('proj')
    args = ap.parse_args()

    cfg_path = os.path.join(args.proj, 'build.json')
    if not os.path.exists(cfg_path):
        sys.exit(f'找不到 {cfg_path}')
    cfg = json.load(open(cfg_path, encoding='utf-8'))
    html_path = os.path.join(args.proj, cfg['html'])
    if not os.path.exists(html_path):
        sys.exit(f'找不到 {html_path}')
    html = open(html_path, encoding='utf-8').read()

    blocks = re.findall(r'<script>([\s\S]*?)</script>', html)
    if len(blocks) < 3:
        sys.exit(f'期望 3 段 <script>（引擎/数据/UI），实际 {len(blocks)} 段')

    ui = blocks[2]
    i = ui.find('function card(')
    j = ui.find('function render(')
    if i < 0 or j < 0:
        sys.exit('UI 脚本里找不到 card() 或 render()，模板可能被改坏了')

    js = blocks[0] + '\n;\n' + blocks[1] + '\n;\n' + ui[i:j] + '\n;\n' + CHECK_JS

    node = find_node()
    if not node:
        sys.exit('找不到 node，无法执行校验（可装 node 或改 find_node()）')

    tmp = os.path.join(args.proj, '_verify.js')
    open(tmp, 'w', encoding='utf-8').write(js)
    try:
        r = subprocess.run([node, tmp], capture_output=True, text=True, encoding='utf-8', timeout=120)
    except subprocess.TimeoutExpired:
        sys.exit('校验超时')
    finally:
        try:
            os.remove(tmp)
        except OSError:
            pass

    out = r.stdout or ''
    err = r.stderr or ''
    if '@@JSON@@' not in out:
        print('脚本执行失败：')
        print(err[-2000:])
        sys.exit(1)

    R = json.loads(out.split('@@JSON@@', 1)[1].strip())

    print('=' * 56)
    print('  交付前校验')
    print('=' * 56)

    ok = True

    # 1
    tot = sum(p['items'] for p in R['papers'])
    print(f'\n[1] 结构   {len(R["papers"])} 卷 / {tot} 个知识点')
    for p in R['papers']:
        flag = '✓' if p['match'] else '✗'
        if not p['match']:
            ok = False
        print(f'    {flag} {p["id"]}  {p["items"]} 项  (声明 total={p["declared"]})')

    # 2
    print(f'\n[2] 标签配对   {len(R["tagErr"])} 处错误')
    if R['tagErr']:
        ok = False
        for e in R['tagErr'][:12]:
            print('    ✗', e)

    # 3
    print(f'\n[3] 模板残留   {len(R["unrendered"])} 处（未渲染的模板标记或 undefined）')
    if R['unrendered']:
        ok = False
        for e in R['unrendered'][:12]:
            print('    ✗', e)

    bsl = R['bslash']
    print(f'[4] 双反斜杠   {len(bsl)} 处（R`...` 内必须单反斜杠）')
    if bsl:
        ok = False
        for e in bsl[:12]:
            print('    ✗', e)

    # 5
    print(f'\n[5] SVG 文字溢出   {len(R["overflow"])} 处')
    if R['overflow']:
        ok = False
        for e in R['overflow'][:12]:
            print('    ✗', e)

    # 6
    print(f'\n[6] 卡片渲染   {len(R["badCard"])} 处异常')
    if R['badCard']:
        ok = False
        for e in R['badCard'][:12]:
            print('    ✗', e)

    print('\n' + '=' * 56)
    print('  全部通过，可以交付' if ok else '  有问题，按上面的 ✗ 逐条修')
    print('=' * 56)
    sys.exit(0 if ok else 1)


if __name__ == '__main__':
    main()
