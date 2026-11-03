#!/usr/bin/env python3
"""探测 PDF 类型：文字版直接抽文本；扫描版导出内嵌页面图。

用法：
    python pdf_probe.py <input.pdf> [--out imgs]

输出：
    - 每页字符数、判定文字版 / 扫描版
    - 扫描版：把每页内嵌图片写到 --out 目录，命名 p{页号}.jpg
    - 文字版：把合并后的文本写到 <input>.txt
"""
import sys
import os
import argparse

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit('需要 pypdf：pip install pypdf')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('pdf')
    ap.add_argument('--out', default='imgs')
    args = ap.parse_args()

    reader = PdfReader(args.pdf)
    pages = len(reader.pages)
    texts = []
    for p in reader.pages:
        try:
            texts.append(p.extract_text() or '')
        except Exception:
            texts.append('')

    total_chars = sum(len(t.strip()) for t in texts)
    print(f'文件: {args.pdf}')
    print(f'页数: {pages}')
    print(f'可提取文字总字符数: {total_chars}')

    if total_chars > 200 * pages:
        print('判定: 【文字版】可以直接抽取文本')
        out_txt = os.path.splitext(args.pdf)[0] + '.txt'
        with open(out_txt, 'w', encoding='utf-8') as f:
            for i, t in enumerate(texts, 1):
                f.write(f'\n===== 第 {i} 页 =====\n{t}\n')
        print(f'已写出: {out_txt}')
        return

    print('判定: 【扫描版】无文字层，需导出页面图像后人工/多模态识读')
    os.makedirs(args.out, exist_ok=True)
    n = 0
    for i, p in enumerate(reader.pages, 1):
        try:
            imgs = list(p.images)
        except Exception as e:
            print(f'  第 {i} 页取图失败: {e}')
            continue
        if not imgs:
            print(f'  第 {i} 页无内嵌图片（可能是矢量内容）')
            continue
        for k, im in enumerate(imgs):
            ext = os.path.splitext(im.name)[1] or '.jpg'
            name = f'p{i}{"" if k == 0 else "_" + str(k)}' + ext
            with open(os.path.join(args.out, name), 'wb') as f:
                f.write(im.data)
            n += 1
    print(f'已导出 {n} 张图到 {args.out}/')
    print('提示: 分辨率不足时用 PIL 放大 + 锐化再读，见 references/pitfalls.md')


if __name__ == '__main__':
    main()
