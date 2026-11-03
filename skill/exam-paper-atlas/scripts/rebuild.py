#!/usr/bin/env python3
"""把 build.json 里列出的数据 js 内联进 HTML 的 BEGIN_DATA / END_DATA 之间。

用法：
    python rebuild.py <项目目录>

行为：
    只替换 HTML 中 /*BEGIN_DATA*/ 与 /*END_DATA*/ 之间的内容，
    HTML 的样式、渲染引擎、UI 全部原样保留 —— 所以可以放心反复运行。
"""
import os
import sys
import json
import argparse


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('proj')
    ap.add_argument('--print', action='store_true', help='只统计不写入')
    args = ap.parse_args()

    cfg_path = os.path.join(args.proj, 'build.json')
    if not os.path.exists(cfg_path):
        sys.exit(f'找不到 {cfg_path}，先用 init_project.py 初始化')
    cfg = json.load(open(cfg_path, encoding='utf-8'))

    html_path = os.path.join(args.proj, cfg['html'])
    html = open(html_path, encoding='utf-8').read()

    B, E = '/*BEGIN_DATA*/', '/*END_DATA*/'
    i, j = html.find(B), html.find(E)
    if i < 0 or j < 0:
        sys.exit('HTML 里找不到 /*BEGIN_DATA*/ 与 /*END_DATA*/ 标记')

    parts = []
    for f in cfg['data']:
        p = os.path.join(args.proj, f)
        if not os.path.exists(p):
            sys.exit(f'数据文件不存在: {f}')
        parts.append(open(p, encoding='utf-8').read())
    payload = '\n'.join(parts)

    if args.print:
        print(f'{len(cfg["data"])} 个数据文件，共 {len(payload)} 字符，未写入')
        return

    new = html[:i + len(B)] + '\n' + payload + '\n' + html[j:]
    open(html_path, 'w', encoding='utf-8').write(new)
    print(f'ok  内联 {len(cfg["data"])} 个文件  html {len(new)} 字符  (Δ{len(new) - len(html):+d})')


if __name__ == '__main__':
    main()
