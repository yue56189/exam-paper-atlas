# 数据格式速查

## 1. 顶层结构

每个数据文件（`a.js`、`b.js`…）往全局数组 `PAPERS` 里 push 一个对象。**一卷一个对象**。

```js
PAPERS.push({
  id:'A',                    // 唯一标识，用于 localStorage 键和 DOM data-p
  k:'A',                     // tab 上的小符号，试卷用 A/B/C，专题可用 ★ ▲ ◆
  short:'第一套',             // tab 上的短名
  title:'2022—2023 学年 第 1 学期《工程热力学》期末试卷',  // 卷首大标题
  meta:'北京化工大学 · 满分 100 分',                        // 副标题
  code:'课程代码 XXX',        // 可选，显示在 meta 后
  score:'100 分',            // 右侧角标
  total:30,                  // 题数，verify.py 会与实际 items 数比对
  // unit:'讲已读',          // 可选，进度文案后缀，默认 '题已掌握'
  sections:[ ... ]           // 见下
});
```

## 2. section 与 item

```js
sections:[
  { roman:'一', idx:'1', title:'填空题', score:'10 小题 × 2 分 = 20 分',
    items:[
      { n:'1',                           // 题号（显示在序号块里）
        q:'题干，可直接写 HTML',           // 题干
        a:'一句话答案',                    // 红色答案条
        s:'4 分',                         // 可选，分值时标
        o:['① A','② B','③ C','④ D'],     // 可选，选择题选项
        sol:`解析正文`                     // 解析 HTML
      }
    ]
  }
]
```

## 3. 解析正文可用的组件

| 写法 | 效果 |
|---|---|
| `${F(R`\eta=1-\frac{T_L}{T_H}`)}` | 独立成块的公式（居中带底色） |
| `${mx(R`x_2=0.859`)}` | 行内公式 |
| `${dg('key','图注')}` | 插入 `DIAG.key` 这张 SVG + 图注 |
| `${TBL(['表头1','表头2'],[['行1列1','行1列2']])}` | 表格，第一列自动加粗 |
| `<div class="h">小标题</div>` | 段内小标题（灰色大写） |
| `<div class="key">…</div>` | 金色结论块 |
| `<div class="warn">…</div>` | 红色易错块 |
| `<p class="note">…</p>` | 灰色小字注 |

## 4. 迷你 LaTeX（mx）支持的语法

**只支持这些**，多了会原样吐出来：

| 语法 | 说明 |
|---|---|
| `\frac{a}{b}` | 分式 |
| `\sqrt{x}` | 根号 |
| `x^{2}` `x_{i}` | 上下标（单字符可省略花括号） |
| `\text{中文}` `\mathrm{d}` | 正体 |
| `\bar{T}` | 上划线（平均温度用） |
| `\left( \right)` | 大括号（只是不加粗的括号，不缩放） |
| `\Delta \delta \eta \lambda \rho \varepsilon \alpha \beta \gamma \theta \mu \nu \pi \sigma \omega \tau \phi \Pi \Omega \Sigma \Phi \Theta \Lambda \Gamma` | 希腊字母 |
| `\infty \to \approx \le \ge \times \cdot \pm \circ \sum \int \oint \partial \Rightarrow \neq \equiv \propto \prime \ldots \cdots` | 数学符号 |
| `\qquad \quad \, \; \! \%` | 间距与百分号 |

**不支持**：`\sum_{i=1}^{n}` 的上下限排版、`\begin{matrix}`、`\overbrace`、`\left[ \right]` 的自动缩放、`\color`。

> 需要多行推导时，**一条公式一个 `F()`**，不要试图在一条里写 `\\` 换行。

## 5. 图元常量（模板已提供，数据文件不要再声明）

```js
AXV  // <defs> 箭头 marker，每张 svg 开头都要加 ${AXV}
st   // 黑色实线 1.7
stl  // 红色实线 1.7
std  // 灰色虚线 1.2 dasharray 4 4
ax   // 坐标轴（带箭头）
lb   // 斜体标签字体（变量名，如 v / p / T / s）
lr   // 小号说明文字字体
```

## 6. 画 SVG 的约定

```js
DIAG.myname = `<svg viewBox="0 0 500 300" width="500">${AXV}
 <line x1="56" y1="255" x2="450" y2="255" ${ax}/>
 <line x1="56" y1="255" x2="56" y2="30" ${ax}/>
 <text x="434" y="273" ${lb}>s</text><text x="38" y="36" ${lb}>T</text>
 ...
</svg>`;
```

- `viewBox` 与 `width` 保持一致，宽度建议 420–620（手机端会缩放）
- 坐标轴留白：左 56、下 45，给轴标签留位置
- 底部说明文字放在 `y = 高度 − 20` 与 `− 40` 两行，字号 10.5–11
- `width` 别超过 640，否则窄屏溢出

## 7. 加新卷的步骤

1. 新建 `x.js`，照上面的结构写
2. 在 `build.json` 的 `data` 数组里按**想要的 tab 顺序**加入 `"x.js"`
3. 跑 `rebuild.py` + `verify.py`
