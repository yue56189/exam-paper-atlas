# 试卷图谱 · 工程热力学四套期末卷

把扫描版试卷 PDF 做成**单文件、离线可开、可交互**的解析网页——逐题详解、知识点频率统计、重难点专题。

本项目既是成品，也是工具：`skill/` 目录下是可以复用到任何科目的成套脚本。

## 在线预览

<https://yue56189.github.io/exam-paper-atlas/>

（`index.html` 是 `工程热力学-四套期末卷-交互解析.html` 的副本，仅为 Pages 提供首页；本地使用请以中文文件名的那份为准。）

## 成品

`工程热力学-四套期末卷-交互解析.html` —— 双击即可打开，无需联网、无外部依赖。

| Tab | 内容 |
|---|---|
| A · 22—23 期末 | 30 题 |
| B · 15—16 补考 | 22 题 |
| C · 16—17 期末 | 32 题 |
| D · 15—16 期末 | 26 题 |
| ★ 内燃机三循环 | 14 讲专题（奥托 / 狄塞尔 / 混合加热） |
| ▲ 热二 & 蒸汽循环 | 15 讲专题（含 9 张 T–s / p–v 图，逐量标注） |
| ◆ 考点地图 | 110 题的知识点频率、重复率、必背清单 |

合计 **149 个知识点**，全部含公式推导与计算过程。

功能：试卷切换、逐题手风琴展开、答案条 + 分步推导、SVG 流程图、标记「已掌握」（localStorage 本地保存）、卷内进度条、打印友好。

## 内容要点

- 所有计算题给出**两条独立路径的交叉验算**（如 η = w/q₁ 与 η = 1−q₂/q₁、Π = T₀ΔS 与 Π = W_max−W_net）
- 教材口径有分歧的题目标 ⚠，并列写出两种判法
- 作图题给出几何自洽的 SVG，并用脚本校验文字不溢出画布
- 考点统计按「一题一个主考点」归类，附卷 × 考点热力矩阵

## 目录

```
工程热力学-四套期末卷-交互解析.html   成品（单文件，约 178 KB）
build.json                            构建清单：html 文件名 + 数据文件顺序
data.js  b.js  c.js  d.js  e.js  f.js  g.js   各卷数据
skill/exam-paper-atlas/               可复用工具（见下）
```

## 工具：skill/exam-paper-atlas

把这套流程搬到其他科目。

```
SKILL.md                        八阶段流程 + 质量红线
assets/template.html            HTML 骨架（样式 + 迷你 LaTeX 渲染器 + UI）
scripts/pdf_probe.py            PDF 类型判定（文字版 / 扫描版）+ 页面图导出
scripts/init_project.py         建项目骨架
scripts/rebuild.py              数据 js 内联进 HTML
scripts/verify.py               六项交付前校验
references/data-format.md       数据格式速查
references/pitfalls.md          18 条已知坑
references/solution-patterns.md 四类题型的解析写法
```

用法：

```bash
python skill/exam-paper-atlas/scripts/init_project.py ./my-project --title "《XX》期末卷 解析"
python skill/exam-paper-atlas/scripts/pdf_probe.py ./my-project/pdfs/paper.pdf --out ./my-project/pdfs/imgs
# 逐题写数据 → 构建 → 校验
python skill/exam-paper-atlas/scripts/rebuild.py ./my-project
python skill/exam-paper-atlas/scripts/verify.py  ./my-project
```

`verify.py` 检查六项：结构计数 / HTML 标签配对 / 模板残留 / 双反斜杠 / SVG 文字溢出 / 卡片渲染。**全绿才算做完**。

## 技术说明

- 公式渲染：自写的迷你 LaTeX 子集解析器（约 60 行），支持 `\frac` `\sqrt` `^{}` `_{}` `\bar` 与常用希腊字母，不依赖 MathJax/KaTeX，保证离线可用。
- 图：手写 SVG，坐标逐个核对（定熵线必须竖直、两相区等压线必须水平）。
- 数据与呈现分离：每卷一个 js 文件，`rebuild.py` 内联进 HTML，改内容不用碰样式。

## 免责声明

试卷原文版权归原出题单位（北京化工大学）所有，本项目仅为个人复习整理，解析与图示为原创。原始扫描件未包含在本仓库中。
