/* ================= 卷 E（专题）：活塞式内燃机三种循环 ================= */

/* 三循环 p-v 对比 */
DIAG.pv3 = `<svg viewBox="0 0 540 290" width="540">${AXV}
 <line x1="60" y1="238" x2="350" y2="238" ${ax}/>
 <line x1="60" y1="238" x2="60" y2="34" ${ax}/>
 <text x="336" y="256" ${lb}>v</text><text x="42" y="40" ${lb}>p</text>
 <!-- 压缩 1→2（三者共用） -->
 <path d="M330,210 C 270,180 190,132 130,95" fill="none" stroke="#1b1e23" stroke-width="2.1"/>
 <!-- 奥托 -->
 <path d="M130,95 L130,44" fill="none" stroke="#a8322a" stroke-width="2"/>
 <path d="M130,44 C 210,86 280,120 330,148" fill="none" stroke="#a8322a" stroke-width="2"/>
 <path d="M330,148 L330,210" fill="none" stroke="#a8322a" stroke-width="2"/>
 <!-- 混合 -->
 <path d="M130,95 L130,70" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M130,70 L186,70" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M186,70 C 250,100 295,132 330,156" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M330,156 L330,210" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <!-- 狄塞尔 -->
 <path d="M130,95 L196,95" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <path d="M196,95 C 258,120 300,142 330,166" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <path d="M330,166 L330,210" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <circle cx="330" cy="210" r="3.2" fill="#1b1e23"/><circle cx="130" cy="95" r="3.2" fill="#1b1e23"/>
 <text x="336" y="206" ${lb}>1</text><text x="112" y="92" ${lb}>2</text>
 <text x="140" y="40" fill="#a8322a" font-family="Segoe UI" font-size="10.5">3</text>
 <text x="336" y="144" fill="#a8322a" font-family="Segoe UI" font-size="10.5">4</text>
 <text x="196" y="60" fill="#9a6b1a" font-family="Segoe UI" font-size="10.5">4</text>
 <text x="336" y="152" fill="#9a6b1a" font-family="Segoe UI" font-size="10.5">5</text>
 <text x="204" y="90" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">3</text>
 <text x="336" y="162" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">4</text>
 <text x="196" y="228" fill="#7a8089" font-family="Segoe UI" font-size="10">ε = v&#8202;1/v&#8202;2</text>
 <line x1="372" y1="72" x2="400" y2="72" stroke="#a8322a" stroke-width="2.4"/>
 <text x="406" y="76" fill="#a8322a" font-family="Segoe UI" font-size="11.5" font-weight="600">奥托</text>
 <text x="406" y="92" fill="#7a8089" font-family="Segoe UI" font-size="10.5">定容加热</text>
 <line x1="372" y1="124" x2="400" y2="124" stroke="#9a6b1a" stroke-width="2.4" stroke-dasharray="7 3"/>
 <text x="406" y="128" fill="#9a6b1a" font-family="Segoe UI" font-size="11.5" font-weight="600">混合（萨巴德）</text>
 <text x="406" y="144" fill="#7a8089" font-family="Segoe UI" font-size="10.5">先定容、后定压</text>
 <line x1="372" y1="176" x2="400" y2="176" stroke="#1d4c66" stroke-width="2.4"/>
 <text x="406" y="180" fill="#1d4c66" font-family="Segoe UI" font-size="11.5" font-weight="600">狄塞尔</text>
 <text x="406" y="196" fill="#7a8089" font-family="Segoe UI" font-size="10.5">定压加热</text>
 <text x="60" y="272" fill="#1b1e23" font-family="Segoe UI" font-size="11">三者共用同一条压缩线 1→2（同 ε）；差别只在加热段 2→3：竖直 = 定容，水平 = 定压</text>
</svg>`;

/* 同 ε、同 q1 的 T-s 对比 */
DIAG.tseps = `<svg viewBox="0 0 560 280" width="560">${AXV}
 <line x1="60" y1="240" x2="340" y2="240" ${ax}/>
 <line x1="60" y1="240" x2="60" y2="34" ${ax}/>
 <text x="326" y="258" ${lb}>s</text><text x="42" y="40" ${lb}>T</text>
 <line x1="90" y1="205" x2="90" y2="120" fill="none" stroke="#1b1e23" stroke-width="2.1"/>
 <!-- 奥托：定容加热，陡 -->
 <path d="M90,120 C 116,96 146,72 175,55" fill="none" stroke="#a8322a" stroke-width="2"/>
 <path d="M175,55 L175,178" fill="none" stroke="#a8322a" stroke-width="2"/>
 <path d="M175,178 C 148,192 114,201 90,205" fill="none" stroke="#a8322a" stroke-width="2"/>
 <!-- 混合 -->
 <path d="M90,120 C 100,106 110,96 120,90" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M120,90 C 140,80 160,72 178,68" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M178,68 L178,172" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <path d="M178,172 C 150,190 114,201 90,205" fill="none" stroke="#9a6b1a" stroke-width="2" stroke-dasharray="7 3"/>
 <!-- 狄塞尔：定压加热，缓 -->
 <path d="M90,120 C 122,102 152,86 182,74" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <path d="M182,74 L182,158" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <path d="M182,158 C 152,182 114,199 90,205" fill="none" stroke="#1d4c66" stroke-width="2"/>
 <circle cx="90" cy="205" r="3.2" fill="#1b1e23"/><circle cx="90" cy="120" r="3.2" fill="#1b1e23"/>
 <text x="72" y="210" ${lb}>1</text><text x="72" y="116" ${lb}>2</text>
 <text x="180" y="50" fill="#a8322a" font-family="Segoe UI" font-size="10.5">3</text>
 <text x="182" y="68" fill="#9a6b1a" font-family="Segoe UI" font-size="10.5">4</text>
 <text x="96" y="140" fill="#7a8089" font-family="Segoe UI" font-size="10">ε 相同</text>
 <text x="120" y="112" fill="#7a8089" font-family="Segoe UI" font-size="10">q&#8202;1 面积相同</text>
 <line x1="374" y1="72" x2="400" y2="72" stroke="#a8322a" stroke-width="2.4"/>
 <text x="406" y="76" fill="#a8322a" font-family="Segoe UI" font-size="11.5" font-weight="600">奥托</text>
 <text x="406" y="92" fill="#7a8089" font-family="Segoe UI" font-size="10.5">最陡 → Δs 最小</text>
 <line x1="374" y1="124" x2="400" y2="124" stroke="#9a6b1a" stroke-width="2.4" stroke-dasharray="7 3"/>
 <text x="406" y="128" fill="#9a6b1a" font-family="Segoe UI" font-size="11.5" font-weight="600">混合</text>
 <text x="406" y="144" fill="#7a8089" font-family="Segoe UI" font-size="10.5">居中</text>
 <line x1="374" y1="176" x2="400" y2="176" stroke="#1d4c66" stroke-width="2.4"/>
 <text x="406" y="180" fill="#1d4c66" font-family="Segoe UI" font-size="11.5" font-weight="600">狄塞尔</text>
 <text x="406" y="196" fill="#7a8089" font-family="Segoe UI" font-size="10.5">最缓 → Δs 最大</text>
 <text x="60" y="272" fill="#1b1e23" font-family="Segoe UI" font-size="11">约束：同 ε、同 q&#8202;1 → 起点 2 相同、吸热面积相同 ⇒ 比"谁把平均吸热温度抬得高"</text>
</svg>`;

PAPERS.push({
 id:'E', k:'★', short:'内燃机三循环', title:'专题 · 活塞式内燃机三种循环：从零讲起',
 meta:'奥托 / 狄塞尔 / 混合加热 · 只讲这一件事，讲透',
 code:'配合 A、B、C、D 四套卷内燃机相关题目食用', score:'专题', unit:'讲已读', total:14,
 sections:[
 {roman:'①',idx:'1',title:'先把事情说清楚：内燃机循环是什么',score:'3 讲',items:[

  {n:'1',q:'活塞式内燃机到底在干什么？为什么能抽象成一个"闭口系循环"？',
   a:'进气—压缩—燃烧膨胀—排气，曲轴转两圈完成一个循环；热力学上取"进气门关闭后封在气缸里的定量工质"为闭口系，把燃烧换成"外部加热"',
   sol:`<div class="h">一、机器实际在做什么</div>
   <p>四冲程内燃机一个工作循环 = 曲轴转 <b>720°</b>：</p>
   <ol>
   <li><b>进气</b>：活塞下行，吸入空气（柴油机）或空气+汽油混合气（汽油机）；</li>
   <li><b>压缩</b>：活塞上行，把工质压到很小的容积，温度、压力飙升；</li>
   <li><b>燃烧 + 膨胀做功</b>：点火或喷油自燃，高温燃气推动活塞下行，这是<b>唯一对外输出功</b>的冲程；</li>
   <li><b>排气</b>：活塞上行把废气推出，同时带入下一循环的新鲜充量。</li>
   </ol>
   <div class="h">二、热力学上怎么"砍"成理想循环</div>
   <p>真实过程极其复杂（湍流燃烧、传热、泄漏、摩擦），必须做三步简化：</p>
   <ol>
   <li><b>取定量工质为闭口系</b>：把"进气门关闭那一瞬"封在气缸里的气体当作研究对象，忽略进、排气两个冲程。理由是：进排气在 p–v 图上只是"换气"，正负功基本抵消，<b>不产生净功</b>。</li>
   <li><b>燃烧 → 外部加热 q₁</b>：化学能释放等价于"从高温热源吸热"，加热量的多少只影响 q₁，不影响循环的<b>形状</b>。</li>
   <li><b>排气 → 定容放热 q₂</b>：废气带走的热量等价于"向冷源放热"，工质在 v₁ 不变的条件下降压回到初态。</li>
   </ol>
   <p>于是真实机器变成 p–v 图上一根<b>闭合曲线</b>，循环方向<b>顺时针</b>，围成的面积即净功。</p>
   <div class="key"><b>五条理想化假设（背下来，简答题常考）</b>
   <ol style="margin:6px 0 0">
   <li>定量工质、<b>闭口系统</b>，忽略进排气过程；</li>
   <li>工质为<b>理想气体</b>，比热容取常数（定比热）；</li>
   <li>压缩与膨胀均为<b>可逆定熵</b>过程（无摩擦、无散热）；</li>
   <li>燃烧为<b>外部加热</b>，排气为<b>定容放热</b>；</li>
   <li>忽略泄漏、流动阻力与零件散热。</li>
   </ol></div>
   <div class="warn"><b>为什么这里必须用 <i>c<sub>v</sub></i> 算功，而不是 <i>c<sub>p</sub></i>？</b>因为它是<b>闭口系</b>，做的是容积功 ${mx(R`w=\int p\,\mathrm{d}v`)}。开口系（燃气轮机、压气机）才用技术功 ${mx(R`-\int v\,\mathrm{d}p`)} 和 <i>c<sub>p</sub></i>。这一点 A 卷没考、C 卷第 1 题与 D 卷第 1 题就是在考它——两题答案一个用 <i>c<sub>v</sub></i>、一个用 <i>c<sub>p</sub></i>，原因就在这里。</div>`},

  {n:'2',q:'为什么偏偏是"三种"循环？—— 三种循环只差在"怎么烧"',
   a:'汽油机火花点燃、燃烧极快 ⇒ 定容加热（奥托）；柴油机压燃、边喷边烧 ⇒ 定压加热（狄塞尔）；高速柴油机介于两者 ⇒ 混合加热（萨巴德）',
   sol:`<p>三种循环的<b>压缩、膨胀、放热完全一样</b>，唯一的分歧点是<b>加热段 2→3 的形状</b>。而这个形状由"燃烧有多快"决定。</p>
   ${TBL(['机型','着火方式','燃烧特征','加热段的理想化'],[
     ['汽油机','火花塞点燃','火焰传播 30～50 m/s，燃烧历时 2～3 ms，活塞几乎来不及移动，容积基本不变','<b>定容加热</b>（奥托循环）'],
     ['柴油机','压缩自燃','喷油持续一段时间，活塞已下行，燃烧在压力大致不变下进行','<b>定压加热</b>（狄塞尔循环）'],
     ['高速柴油机','压缩自燃','喷油初期快速燃烧（定容），后期边喷边烧（定压）','<b>混合加热</b>（萨巴德循环）']
   ])}
   <div class="h">一句话记住</div>
   <p>三种循环<b>不是三种机器</b>，而是对"燃烧快慢"的三种理想化：</p>
   <ul>
   <li>烧得<b>极快</b> → 容积来不及变 → <b>定容</b>；</li>
   <li>烧得<b>很慢</b> → 压力来不及升 → <b>定压</b>；</li>
   <li>真实的高速柴油机两者兼有 → <b>先定容后定压</b>。</li>
   </ul>
   <div class="key"><b>命名对照</b>：奥托（Otto）= 定容加热；狄塞尔（Diesel）= 定压加热；萨巴德（Sabathé，也译"萨巴蒂"）= 混合加热。国产教材常把混合循环直接叫"混合加热循环"。</div>`},

  {n:'3',q:'三个"身份证"：压缩比 ε、压力升高比 λ、初膨胀比 ρ',
   a:'ε = v₁/v₂；λ = p₃/p₂；ρ = v₄/v₃。ρ = 1 退化为奥托，λ = 1 退化为狄塞尔，两者都 > 1 就是混合循环',
   sol:`${TBL(['参数','定义','几何含义','典型值'],[
     ['压缩比 <i>ε</i>','<i>ε</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>','气缸总容积 / 燃烧室容积','汽油机 8～11；柴油机 16～22'],
     ['压力升高比 <i>λ</i>','<i>λ</i> = <i>p</i><sub>3</sub>/<i>p</i><sub>2</sub>','定容加热把压力抬高多少倍','汽油机 2～4；柴油机 1'],
     ['初膨胀比 <i>ρ</i>','<i>ρ</i> = <i>v</i><sub>4</sub>/<i>v</i><sub>3</sub>','定压加热把容积胀大多少倍','柴油机 1.2～2.0；汽油机 1']
   ])}
   <div class="h">关键：λ 和 ρ 是"退化开关"</div>
   ${F(R`\rho=1\ \Rightarrow\ \text{没有定压段}\ \Rightarrow\ \text{奥托循环}`)}
   ${F(R`\lambda=1\ \Rightarrow\ \text{没有定容段}\ \Rightarrow\ \text{狄塞尔循环}`)}
   ${F(R`\lambda>1\ \text{且}\ \rho>1\ \Rightarrow\ \text{混合循环}`)}
   <p>这个"退化关系"极其有用：混合循环的公式只要记住一个，令 <i>ρ</i> = 1 或 <i>λ</i> = 1 就能得到另两个，不必背三套。</p>
   <div class="warn"><b>易错</b>：狄塞尔循环的<b>膨胀比不是 ε</b>，而是 <i>ε</i>/<i>ρ</i>（因为 3 点已经比 2 点更靠右）。所有"为什么狄塞尔效率低"的推导都卡在这一步上。</div>`}
 ]},

 {roman:'②',idx:'2',title:'两张图：所有结论都能从图上看出来',score:'3 讲',items:[

  {n:'4',q:'p–v 图和 T–s 图各看什么？两个"面积"就是全部',
   a:'p–v 图上闭合曲线围的面积 = 循环净功 w_net；T–s 图上吸热线下的面积 = q₁、放热线下的面积 = q₂，两者之差即净功',
   sol:`<div class="h">p–v 图：看"功"</div>
   ${F(R`w_{net}=\oint p\,\mathrm{d}v`)}
   <p>顺时针为正。曲线"越靠上、越靠左"，压缩耗功越小、膨胀做功越多。</p>
   <div class="h">T–s 图：看"热"</div>
   ${F(R`q_1=\int_{2}^{3}T\,\mathrm{d}s,\qquad q_2=\left|\int_{4}^{1}T\,\mathrm{d}s\right|`)}
   <p>吸热线在上、放热线在下，两条线围成的面积 = <i>q</i><sub>1</sub> − <i>q</i><sub>2</sub> = <i>w</i><sub>net</sub>。<b>提高效率在图上的操作只有两个</b>：把吸热线往上抬（提高平均吸热温度）、把放热线往下压（降低平均放热温度）。</p>
   <div class="h">平均温度式：把"面积"变成"温度"</div>
   <p>循环的熵增与熵减必然相等（回到初态），记作 Δ<i>s</i>，则</p>
   ${F(R`q_1=\bar T_1\Delta s,\qquad q_2=\bar T_2\Delta s`)}
   ${F(R`\eta_t=1-\frac{q_2}{q_1}=1-\frac{\bar T_2}{\bar T_1}`)}
   <p>这就是<b>平均温度式</b>——后面所有"谁效率高"的比较，都可以归结为"谁的平均吸热温度高"。</p>
   <div class="key"><b>A 卷判断第 2 题就是考它</b>："吸/放热的平均温度相差越大，效率越低"——<b>错</b>。由 ${mx(R`\eta_t=1-\bar T_2/\bar T_1`)}，<i>T̄</i><sub>1</sub> 越高、<i>T̄</i><sub>2</sub> 越低，两者相差越大，效率<b>越高</b>。题干把方向说反了。</div>`},

  {n:'5',q:'三种循环叠在同一张 p–v 图上，长什么样',
   a:'压缩段 1→2 三者完全重合；分歧只在加热段 2→3：奥托竖直（定容）、狄塞尔水平（定压）、混合先竖直后水平',
   sol:`${dg('pv3','同一 ε 下三种内燃机循环的 p–v 图：共用 1→2，加热段分三路')}
   <div class="h">读图三条要点</div>
   <ol>
   <li><b>1→2 是同一条线</b>：三者压缩比相同，所以压缩过程完全重合，压缩终点 2 也是同一个点。</li>
   <li><b>2→3 分三路</b>：竖直 = 定容（v 不变，p 猛升）；水平 = 定压（p 不变，v 胀大）；先竖后平 = 混合。</li>
   <li><b>3(4)→4(5) 是绝热膨胀</b>：三条膨胀线都回落到底边 <i>v</i><sub>1</sub>，但落点压力不同——<b>落得越低，膨胀越充分，放热越少</b>。</li>
   </ol>
   <div class="key"><b>一眼判位口诀</b>：竖直 = 定容，水平 = 定压，陡曲线 = 定熵，缓曲线 = 定温。图上任何一条线，先看它是"平的、竖的、还是弯的"，就能立刻说出过程名称。</div>`},

  {n:'6',q:'三种循环叠在同一张 T–s 图上：两种约束，两张不同的图',
   a:'同 ε、同 q₁ 时三条吸热线从同一点出发、面积相同，比"谁更陡"；同 T_max、同 q₁ 时三条吸热线都收到同一水平线上，比"谁更贴高温"',
   sol:`<div class="h">图 A　同 ε、同 q₁</div>
   ${dg('tseps','同压缩比、同吸热量下三循环的 T–s 图：吸热线陡缓不同，Δs 与 T̄₁ 随之不同')}
   <p>起点 2 相同（同 ε）、吸热面积相同（同 <i>q</i><sub>1</sub>），唯一差别是三条加热线的<b>斜率</b>：</p>
   ${F(R`\text{定容线}\ \frac{\mathrm{d}T}{\mathrm{d}s}=\frac{T}{c_v},\qquad \text{定压线}\ \frac{\mathrm{d}T}{\mathrm{d}s}=\frac{T}{c_p}`)}
   <p>因 <i>c<sub>p</sub></i> &gt; <i>c<sub>v</sub></i>，<b>定容线更陡</b>。同样面积下，陡的那条 Δ<i>s</i> 小、温度升得高。</p>
   <div class="h">图 B　同 T_max、同 q₁</div>
   ${dg('three','同最高温度、同吸热量下三循环的 T–s 图：三条吸热线都终止在 T&#8202;max 水平线上')}
   <p>三条吸热线的<b>终点都被锁在同一水平线 T = T<sub>max</sub></b> 上，面积又相同，于是起点 2 的高低就各不相同——定压线更平，要凑够同样面积，起点必须更低（压缩比更大）。</p>
   <div class="warn"><b>⚠ 最容易混的一点</b>：两张图的<b>形状看起来很像</b>，但约束完全不同。考场上先确认题目说的是"<b>相同压缩比</b>"还是"<b>相同最高温度</b>"，这决定用哪张图、也决定最终排序。</div>`}
 ]},

 {roman:'③',idx:'3',title:'热效率是怎么推出来的（三步走）',score:'3 讲',items:[

  {n:'7',q:'奥托循环：为什么最后只剩下压缩比 ε',
   a:'η_t = 1 − 1/ε^(k−1)，只与 ε 和 k 有关，与吸热量 q₁ 无关',
   sol:`<p>循环：1→2 定熵压缩、2→3 定容加热、3→4 定熵膨胀、4→1 定容放热。</p>
   <div class="h">① 吸热与放热</div>
   ${F(R`q_1=c_v\left(T_3-T_2\right),\qquad q_2=c_v\left(T_4-T_1\right)`)}
   ${F(R`\eta_t=1-\frac{q_2}{q_1}=1-\frac{T_4-T_1}{T_3-T_2}`)}
   <div class="h">② 用两个定熵关系把温度"消掉"</div>
   ${F(R`\frac{T_2}{T_1}=\left(\frac{v_1}{v_2}\right)^{k-1}=\varepsilon^{k-1}`)}
   ${F(R`\frac{T_3}{T_4}=\left(\frac{v_4}{v_3}\right)^{k-1}=\left(\frac{v_1}{v_2}\right)^{k-1}=\varepsilon^{k-1}`)}
   <p>两式相等 ⇒ <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = <i>T</i><sub>3</sub>/<i>T</i><sub>4</sub> ⇒ <i>T</i><sub>4</sub> = <i>T</i><sub>3</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>。代入效率式：</p>
   ${F(R`\eta_t=1-\frac{T_1\left(T_3/T_2-1\right)}{T_3-T_2}=1-\frac{T_1}{T_2}=1-\frac{1}{\varepsilon^{k-1}}`)}
   <div class="h">③ 结论与数值</div>
   <p>取 <i>k</i> = 1.4：<i>ε</i> = 6 → 51.2%，<i>ε</i> = 8 → 56.5%，<i>ε</i> = 10 → 60.2%，<i>ε</i> = 12 → 63.0%。</p>
   <div class="key"><b>三句话记住奥托</b><br>
   ① <i>η</i> 只由 <i>ε</i> 决定，<b>与吸热量无关</b>——加大油门不改变效率，只改变功率；<br>
   ② <i>ε</i>↑ → <i>η</i>↑，但受<b>爆震</b>限制，汽油机 <i>ε</i> 一般不超过 11；<br>
   ③ 这就是 B 卷选择第 9 题"压缩比升高、循环热效率升高"选 ① 的依据。</div>
   <div class="warn"><b>对照 A 卷计算第 2 题</b>：<i>ε</i> = 8、<i>T</i><sub>1</sub> = 298.15 K、<i>q</i><sub>1</sub> = 780 kJ/kg。先由 <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub><i>ε</i><sup><i>k</i>−1</sup> = 684.9 K 求出压缩终点，再由 <i>q</i><sub>1</sub> = <i>c<sub>v</sub></i>(<i>T</i><sub>3</sub> − <i>T</i><sub>2</sub>) 得 <i>T</i><sub>3</sub> = 1771 K，最后 <i>η</i> = 1 − 1/8<sup>0.4</sup> = <b>56.5%</b>、<i>w</i><sub>net</sub> = 0.5647 × 780 = <b>440.5 kJ/kg</b>。<b>注意</b>：<i>η</i> 那一步完全不需要用到 780，是独立算出来的——这正是"<i>η</i> 与 <i>q</i><sub>1</sub> 无关"的直接体现。</div>`},

  {n:'8',q:'狄塞尔循环：多出来的 ρ 是干什么的',
   a:'η_t = 1 − (1/ε^(k−1))·(ρ^k − 1)/[k(ρ − 1)]；因 ρ ≥ 1 时后面这个因子恒 ≥ 1，所以同 ε 下狄塞尔效率低于奥托',
   sol:`<p>循环：1→2 定熵压缩、2→3 <b>定压</b>加热、3→4 定熵膨胀、4→1 定容放热。</p>
   <div class="h">① 各点温度（用 ε、ρ 表示）</div>
   ${F(R`T_2=T_1\varepsilon^{k-1}`)}
   ${F(R`T_3=\rho T_2\quad\left(\text{定压：}\ \frac{v_3}{v_2}=\frac{T_3}{T_2}=\rho\right)`)}
   <p>膨胀比不是 <i>ε</i> 而是 <i>ε</i>/<i>ρ</i>：</p>
   ${F(R`T_4=T_3\left(\frac{v_3}{v_4}\right)^{k-1}=T_3\left(\frac{\rho}{\varepsilon}\right)^{k-1}=T_1\rho^{k}`)}
   <div class="h">② 吸热与放热</div>
   ${F(R`q_1=c_p\left(T_3-T_2\right)=c_pT_1\varepsilon^{k-1}\left(\rho-1\right)`)}
   ${F(R`q_2=c_v\left(T_4-T_1\right)=c_vT_1\left(\rho^{k}-1\right)`)}
   ${F(R`\eta_t=1-\frac{q_2}{q_1}=1-\frac{1}{\varepsilon^{k-1}}\cdot\frac{\rho^{k}-1}{k\left(\rho-1\right)}`)}
   <div class="h">③ 为什么它一定不如奥托（同 ε 时）</div>
   <p>记 ${mx(R`f(\rho)=\frac{\rho^{k}-1}{k\left(\rho-1\right)}`)}，显然 <i>f</i>(1) = 1；对 <i>ρ</i> &gt; 1 可证 <i>f</i>(<i>ρ</i>) &gt; 1 且单调递增。所以</p>
   ${F(R`\eta_{Diesel}=1-\frac{f(\rho)}{\varepsilon^{k-1}}<1-\frac{1}{\varepsilon^{k-1}}=\eta_{Otto}`)}
   <p>物理原因：定压加热时工质<b>一边吸热一边膨胀做功</b>，这部分膨胀功在"加热段"就提前放掉了，相当于把一部分本该在膨胀冲程做的功"提前消费"，最终<b>膨胀比被压缩到 ε/ρ</b>，膨胀不充分、放热温度偏高。</p>
   <div class="key"><b>一句话</b>：<i>ρ</i> 是"欠膨胀的度量"。<i>ρ</i> 越大，膨胀越不充分，效率越低。这正是 D 卷判断第 8 题"狄塞尔循环由定熵压缩、定压加热、定熵膨胀、定容放热组成"判 <b>√</b> 的依据。</div>`},

  {n:'9',q:'混合加热循环：一个式子收编另外两个',
   a:'η_t = 1 − (λρ^k − 1)/{ε^(k−1)[(λ−1) + kλ(ρ−1)]}；令 ρ = 1 得奥托式，令 λ = 1 得狄塞尔式',
   sol:`<p>循环五个点：1→2 定熵压缩、2→3 定容加热、3→4 定压加热、4→5 定熵膨胀、5→1 定容放热。</p>
   <div class="h">① 各点温度</div>
   ${F(R`T_2=T_1\varepsilon^{k-1},\qquad T_3=\lambda T_2,\qquad T_4=\rho T_3=\lambda\rho T_2`)}
   ${F(R`T_5=T_4\left(\frac{v_4}{v_5}\right)^{k-1}=T_4\left(\frac{\rho}{\varepsilon}\right)^{k-1}=T_1\lambda\rho^{k}`)}
   <div class="h">② 吸热分两段，这是混合循环唯一的新东西</div>
   ${F(R`q_1=c_v\left(T_3-T_2\right)+c_p\left(T_4-T_3\right)=c_vT_2\left[\left(\lambda-1\right)+k\lambda\left(\rho-1\right)\right]`)}
   ${F(R`q_2=c_v\left(T_5-T_1\right)=c_vT_1\left(\lambda\rho^{k}-1\right)`)}
   ${F(R`\eta_t=1-\frac{\lambda\rho^{k}-1}{\varepsilon^{k-1}\left[\left(\lambda-1\right)+k\lambda\left(\rho-1\right)\right]}`)}
   <div class="h">③ 验算：真的能退化吗</div>
   <ul>
   <li><i>ρ</i> = 1：分子 <i>λ</i>−1，分母 <i>ε</i><sup><i>k</i>−1</sup>(<i>λ</i>−1) ⇒ <i>η</i> = 1 − 1/<i>ε</i><sup><i>k</i>−1</sup> <b>= 奥托</b> ✓</li>
   <li><i>λ</i> = 1：分子 <i>ρ</i><sup><i>k</i></sup>−1，分母 <i>ε</i><sup><i>k</i>−1</sup>·<i>k</i>(<i>ρ</i>−1) ⇒ <b>= 狄塞尔</b> ✓</li>
   </ul>
   <div class="key"><b>记忆法</b>：只背混合循环这一个公式。<b>分子</b>是"放热端温比 −1"（<i>λ</i><i>ρ</i><sup><i>k</i></sup> − 1），<b>分母</b>是"<i>ε</i><sup><i>k</i>−1</sup> × 两段吸热之和"。结构上跟奥托、狄塞尔完全一致，只是 <i>q</i><sub>1</sub> 多了一段。</div>
   <div class="warn"><b>对照 C 卷填空第 1 题</b>：题目只要求写 <i>q</i><sub>1</sub>、膨胀功、压缩功三个式子——正是上面推导的第 ① 步。C 卷那道题拿到分，这题的三段式就必然拿得到分。</div>`}
 ]},

 {roman:'④',idx:'4',title:'两种约束，两种排序（考试必考，也是唯一真正的坑）',score:'3 讲',items:[

  {n:'10',q:'约束一：同压缩比 ε、同吸热量 q₁ 时，谁最高？',
   a:'η_奥托 > η_混合 > η_狄塞尔（D 卷简答第 3 题）',
   sol:`<p>取 <i>ε</i> = 10、<i>T</i><sub>1</sub> = 300 K、<i>q</i><sub>1</sub> = 500 kJ/kg、<i>k</i> = 1.4、<i>c<sub>v</sub></i> = 0.718、<i>c<sub>p</sub></i> = 1.005，实算三种循环：</p>
   ${TBL(['循环','加热终点温度 / K','吸热熵增 Δs','平均吸热温度 T̄₁ / K','放热终点 / K','q₂','η'],[
     ['奥托（全定容）','1450','0.470','<b>1065</b>','577','199','<b>60.2%</b>'],
     ['混合（先定容后定压）','1097 → 1349','0.477','1048','583','204','59.3%'],
     ['狄塞尔（全定压）','1251','<b>0.510</b>','<b>981</b>','610','223','55.5%']
   ])}
   <div class="h">为什么是这个顺序</div>
   <ol>
   <li><b>压缩段完全一样</b>：同 <i>ε</i> ⇒ 压缩终点 <i>T</i><sub>2</sub> = 753.6 K 三者相同，压缩耗功也相同。</li>
   <li><b>吸热量一样</b>：<i>q</i><sub>1</sub> 相同 ⇒ 三条吸热线下方面积相同。</li>
   <li><b>定容加热最"省熵"</b>：<i>c<sub>v</sub></i> &lt; <i>c<sub>p</sub></i> ⇒ 同样热量下定容加热的温升大、熵增小（Δ<i>s</i> = 0.470 &lt; 0.510）。</li>
   <li><b>Δs 小 ⇒ 平均吸热温度高</b>：<i>T̄</i><sub>1</sub> = <i>q</i><sub>1</sub>/Δ<i>s</i>，分子相同、分母最小者 <i>T̄</i><sub>1</sub> 最高（1065 K）。</li>
   <li>放热都回到同一 <i>T</i><sub>1</sub>，<i>T̄</i><sub>2</sub> 差别不大 ⇒ 由 <i>η</i> = 1 − <i>T̄</i><sub>2</sub>/<i>T̄</i><sub>1</sub>，<b><i>T̄</i><sub>1</sub> 最高的效率最高</b>。</li>
   </ol>
   <div class="key"><b>一句话口诀</b>：<b>"同压缩比，看谁把温度抬得最高"</b>——定容加热升温最快，所以奥托赢。</div>`},

  {n:'11',q:'约束二：同最高温度 T_max、同吸热量 q₁ 时，谁最高？',
   a:'η_狄塞尔 > η_混合 > η_奥托（A 卷简答第 7 题）—— 结论与约束一完全相反',
   sol:`<p>取 <i>T</i><sub>max</sub> = 2000 K、<i>T</i><sub>1</sub> = 300 K、<i>q</i><sub>1</sub> = 500 kJ/kg、<i>k</i> = 1.4：</p>
   ${TBL(['循环','压缩终点 T₂ / K','由约束反算的 ε','膨胀比','η'],[
     ['奥托（全定容）','1304','39.3','39.3','77.0%'],
     ['混合（先定容后定压）','约 1400','约 47','—','约 78.0%'],
     ['狄塞尔（全定压）','1503','<b>56.1</b>','56.1 / 1.33 = 42.1','<b>78.8%</b>']
   ])}
   <div class="h">为什么这次反过来了</div>
   <ol>
   <li><b>约束变了，ε 不再是同一个数</b>。这是全部关键：题目锁住的是"加热终点温度"，不再锁"压缩比"。三种循环要想在同一起点温度 <i>T</i><sub>1</sub> 下、用同样多的热量达到同一 <i>T</i><sub>max</sub>，<b>必须各自用不同的压缩比</b>。</li>
   <li><b>定压加热升温慢</b>（<i>q</i> = <i>c<sub>p</sub></i>Δ<i>T</i>，<i>c<sub>p</sub></i> 大），同样 500 kJ/kg 只升温 497 K ⇒ 加热起点可以很高（<i>T</i><sub>2</sub> = 1503 K）⇒ <b>压缩比可以做得很大</b>（<i>ε</i> = 56.1）。</li>
   <li><b>ε 大 ⇒ 膨胀比大 ⇒ 膨胀更充分</b> ⇒ 膨胀终点温度低（610 K vs 奥托的 577 K…注意这里 <i>T</i><sub>4</sub> 接近，但 <i>q</i><sub>2</sub> 由膨胀比决定，狄塞尔实际放热更少：106 kJ/kg vs 115 kJ/kg）。</li>
   <li>放热少 ⇒ <i>η</i> = 1 − <i>q</i><sub>2</sub>/<i>q</i><sub>1</sub> 高。</li>
   </ol>
   <div class="key"><b>一句话口诀</b>：<b>"同最高温度，看谁能压得更狠"</b>——定压加热升温慢，所以能配上更大的压缩比，狄塞尔赢。</div>
   <div class="warn"><b>⚠ 这就是 A 卷第 7 题与 D 卷第 3 题答案相反的全部原因。</b>两题都对，约束不同而已。答题时<b>先抄题目的约束条件</b>再写结论，别凭印象。</div>`},

  {n:'12',q:'为什么约束一换，结论就翻个儿？—— 一张表讲透',
   a:'"同 ε"锁住的是压缩终点，"同 T_max"锁住的是加热终点；锁住的位置不同，被比较的量就从"加热方式"换成了"压缩比"',
   sol:`${TBL(['约束','题目锁住的量','实际被比较的量','排序'],[
     ['同 <i>ε</i>、同 <i>q</i><sub>1</sub>','<b>压缩终点</b>：三者 <i>T</i><sub>2</sub>、压缩功全相同','谁的加热段把平均吸热温度抬得最高（定容最陡最省熵）','<b>奥托 &gt; 混合 &gt; 狄塞尔</b>'],
     ['同 <i>T</i><sub>max</sub>、同 <i>q</i><sub>1</sub>','<b>加热终点</b>：三者最高温度相同','谁能配上更大的压缩比 / 膨胀比（定压升温慢、能压得更狠）','<b>狄塞尔 &gt; 混合 &gt; 奥托</b>']
   ])}
   <div class="h">考场三步判断法</div>
   <ol>
   <li><b>第一步：找约束。</b>题目给的是"<b>压缩比相同</b>"还是"<b>最高温度相同</b>"？看到"同 ε"就往"奥托第一"想，看到"同 T<sub>max</sub>"就往"狄塞尔第一"想。</li>
   <li><b>第二步：看 <i>q</i><sub>1</sub> 是否也相同。</b>只给"同 T<sub>max</sub>"而不限 <i>q</i><sub>1</sub>，结论可能不唯一——必须两个条件都在，才有确定排序。</li>
   <li><b>第三步：用平均温度式收尾。</b>无论哪种约束，最终都落到 <i>η</i> = 1 − <i>T̄</i><sub>2</sub>/<i>T̄</i><sub>1</sub>，把"谁的 <i>T̄</i><sub>1</sub> 高"讲清楚就能拿满分。</li>
   </ol>
   <div class="key"><b>六字记忆</b>：<b>"同 ε 看加热，同 T 看压缩"</b>。<br>
   同 <i>ε</i> → 比加热方式（定容赢）；同 <i>T</i><sub>max</sub> → 比压缩比（定压赢）。</div>
   <div class="warn"><b>另一个更隐蔽的坑</b>：约束一里"狄塞尔最低"并不等于"柴油机效率低"。真实柴油机因为 <i>ε</i> 能做到 16～22（远高于汽油机的 8～11），<b>实际效率反而高于汽油机</b>。教材比较的是"<b>同一 ε 下</b>"的理想循环，别把理想循环的排序直接套到真机上。</div>`}
 ]},

 {roman:'⑤',idx:'5',title:'落到工程上：三种循环各自长什么样',score:'2 讲',items:[

  {n:'13',q:'三种循环的工程对照表',
   a:'奥托 ε 小、功率密度高但受爆震限制；狄塞尔 ε 大、效率高但笨重噪声大；混合循环是高速柴油机的真实写照',
   sol:`${TBL(['项目','奥托（汽油机）','狄塞尔（柴油机）','混合（高速柴油机）'],[
     ['着火方式','火花塞点燃','压缩自燃','压缩自燃'],
     ['加热近似','定容','定压','先定容、后定压'],
     ['压缩比 <i>ε</i>','8～11','16～22','12～18'],
     ['压力升高比 <i>λ</i>','2～4','1','1.2～1.8'],
     ['初膨胀比 <i>ρ</i>','1','1.2～2.0','1.1～1.5'],
     ['指示热效率','30%～35%','35%～45%','介于两者'],
     ['功率密度','高（同排量功率大）','低（机体笨重）','中'],
     ['主要限制','<b>爆震</b>，<i>ε</i> 提不上去','噪声、NO<sub>x</sub>、颗粒物','兼顾动力与排放']
   ])}
   <div class="h">为什么柴油机 <i>ε</i> 能做得这么大</div>
   <p>汽油机提高 <i>ε</i> 会让混合气在火花点火前<b>自燃爆震</b>，这是硬约束；柴油机本来就是靠自燃着火，不存在"提前自燃"的问题，只受压燃温度需求和机械负荷限制，所以 <i>ε</i> 可以做到 20 以上。</p>
   <p>于是出现一个"反直觉"的事实：<b>理想循环里狄塞尔效率最低，真实机器里柴油机效率最高</b>——因为真实比较的是"各自最优的 ε"，而不是"同一个 ε"。</p>
   <div class="key"><b>这条对比本身就是一道好题</b>：如果简答题问"为什么柴油机效率高于汽油机"，标准答法是"柴油机压缩比大得多，由 <i>η</i> = 1 − 1/<i>ε</i><sup><i>k</i>−1</sup>，<i>ε</i> 大则效率高；虽然定压加热使效率略有下降，但压缩比带来的收益远大于这一损失"。</div>`},

  {n:'14',q:'考场易错清单（内燃机部分全部陷阱）',
   a:'按出现频率排序：约束条件看错 > 功的公式用错 > 膨胀比当 ε 用 > 混合循环 q₁ 漏一段 > T–s 图陡缓搞反',
   sol:`<ol>
   <li><b>约束条件看错（最高频）</b>：同 <i>ε</i> ⇒ 奥托第一；同 <i>T</i><sub>max</sub> ⇒ 狄塞尔第一。<b>两题答案相反不是矛盾。</b>（A 卷简答 7 / D 卷简答 3）</li>
   <li><b>闭口系却用了 <i>c<sub>p</sub></i> 算功</b>：活塞式内燃机是闭口系，<i>w</i> = ∫<i>p</i>d<i>v</i>，用 <i>c<sub>v</sub></i>；只有开口系（燃气轮机、压气机）才用 <i>c<sub>p</sub></i>。（C 卷第 1 题 vs D 卷第 1 题）</li>
   <li><b>把膨胀比当成 <i>ε</i></b>：狄塞尔和混合循环的膨胀比是 <i>ε</i>/<i>ρ</i>，不是 <i>ε</i>。写错这一步，<i>T</i><sub>4</sub> 必错、<i>q</i><sub>2</sub> 必错。</li>
   <li><b>混合循环 <i>q</i><sub>1</sub> 只算一段</b>：<i>q</i><sub>1</sub> = <i>c<sub>v</sub></i>(<i>T</i><sub>3</sub> − <i>T</i><sub>2</sub>) <b>+</b> <i>c<sub>p</sub></i>(<i>T</i><sub>4</sub> − <i>T</i><sub>3</sub>)，两段缺一不可。</li>
   <li><b>T–s 图陡缓搞反</b>：定容线斜率 <i>T</i>/<i>c<sub>v</sub></i> ＞ 定压线斜率 <i>T</i>/<i>c<sub>p</sub></i> ⇒ <b>定容更陡</b>。凡是"图上标 v 和 p 让你认"的题，先比斜率。</li>
   <li><b>平均温度式写反</b>：<i>η</i> = 1 − <i>T̄</i><sub>2</sub>/<i>T̄</i><sub>1</sub>，分子是<b>放热</b>平均温度、分母是<b>吸热</b>平均温度。（A 卷判断 2 就设了这个坑）</li>
   <li><b>以为加大油门能提高效率</b>：奥托循环 <i>η</i> 只与 <i>ε</i> 有关，<i>q</i><sub>1</sub> 增加只提高功率，不提高效率。</li>
   </ol>
   <div class="key"><b>自测：四道真题能全对，这部分就过关了</b><br>
   ① A 卷简答 7（同 <i>T</i><sub>max</sub>、同 <i>q</i><sub>1</sub> 排序）　② A 卷计算 2（奥托实算）<br>
   ③ D 卷简答 3（同 <i>ε</i>、同 <i>q</i><sub>1</sub> 排序）　④ B 卷选择 9（<i>ε</i> 对 <i>η</i> 的影响）</div>`}
 ]}
]});
