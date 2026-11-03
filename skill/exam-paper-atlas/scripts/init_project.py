#!/usr/bin/env python3
"""在目标目录初始化一个"试卷解析"项目骨架。

用法：
    python init_project.py <项目目录> --title "工程热力学 · 四套期末卷 交互解析"

生成：
    <项目>/
      解析.html        ← 从 assets/template.html 复制，占位符已替换
      build.json       ← 构建清单：html 文件名 + 数据文件顺序
      a.js             ← 第一套卷数据骨架
      pdfs/            ← 放原始 PDF
      pdfs/imgs/       ← pdf_probe.py 导出的页面图
"""
import os
import sys
import json
import argparse

SKILL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 注意：这里整段是普通原始字符串，里面的 ${...} 与反引号都是字面量，会原样写进 js 文件
DATA_SKELETON = r'''/* ===== 第 1 套卷数据 =====
   注意：R / fx / fxl / dg / TBL / AXV / st / stl / std / ax / lb / lr 由模板提供，
   这里不要再声明，否则 const 重复声明会让整页白屏。 */

DIAG.example = `<svg viewBox="0 0 400 220" width="400">${AXV}
 <line x1="50" y1="190" x2="360" y2="190" ${ax}/>
 <line x1="50" y1="190" x2="50" y2="30" ${ax}/>
 <text x="344" y="208" ${lb}>x</text><text x="32" y="36" ${lb}>y</text>
</svg>`;

PAPERS.push({
 id:'A', k:'A', short:'第一套', title:'____ 学年 第 __ 学期《____》期末试卷',
 meta:'____大学 · 满分 100 分',
 code:'课程代码 ____', score:'100 分', total:2,
 sections:[
 {roman:'一',idx:'1',title:'填空题',score:'共 __ 分',items:[

  {n:'1',q:'题干文字，可直接写 HTML（<i>p</i>、<sub>1</sub>、<b>粗体</b>）',
   a:'一句话答案，显示在红色答案条里',
   sol:`<p>解析正文。</p>
   ${F(R`\eta_t=1-\frac{T_L}{T_H}`)}
   ${TBL(['符号','含义','单位'],[
     ['<i>h</i>','比焓','kJ/kg']
   ])}
   ${dg('example','图注：这张图画的是什么')}
   <div class="key"><b>结论</b>：……</div>
   <div class="warn"><b>⚠ 易错</b>：……</div>`},

  {n:'2',q:'选择题示例',o:['① 选项一','② 选项二','③ 选项三','④ 选项四'],s:'2 分',
   a:'②　选项二',
   sol:`<p>为什幺选它。</p>`}
 ]}
]});
'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('dest')
    ap.add_argument('--title', default='试卷解析')
    ap.add_argument('--sub', default='')
    ap.add_argument('--footer', default='符号约定与数据来源写在这里。')
    args = ap.parse_args()

    os.makedirs(args.dest, exist_ok=True)
    os.makedirs(os.path.join(args.dest, 'pdfs', 'imgs'), exist_ok=True)

    tpl_path = os.path.join(SKILL, 'assets', 'template.html')
    html = open(tpl_path, encoding='utf-8').read()
    html = (html.replace('{{TITLE}}', args.title)
                .replace('{{SUB}}', args.sub)
                .replace('{{FOOTER}}', args.footer))
    with open(os.path.join(args.dest, '解析.html'), 'w', encoding='utf-8') as f:
        f.write(html)

    with open(os.path.join(args.dest, 'build.json'), 'w', encoding='utf-8') as f:
        json.dump({'html': '解析.html', 'data': ['a.js']}, f, ensure_ascii=False, indent=2)

    with open(os.path.join(args.dest, 'a.js'), 'w', encoding='utf-8') as f:
        f.write(DATA_SKELETON)

    print(f'已创建: {args.dest}')
    print('  解析.html   骨架（先写数据，再跑 rebuild.py）')
    print('  build.json  构建清单，加新卷就往 data 数组里加文件名')
    print('  a.js        第一卷数据骨架')
    print('  pdfs/       原始 PDF 放这里')
    print('')
    print('下一步: python pdf_probe.py pdfs/xxx.pdf --out pdfs/imgs')


if __name__ == '__main__':
    main()
