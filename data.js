/* ================= 数据 ================= */
const R = String.raw;
const fx  = (s)=>'<div class="fx">'+mx(s)+'</div>';
const fxl = (s)=>'<div class="fx l">'+mx(s)+'</div>';
const dg  = (k,c)=>'<div class="dg">'+DIAG[k]+(c?'<div class="cap">'+c+'</div>':'')+'</div>';

const AXV = '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1b1e23"/></marker></defs>';
const st = 'fill="none" stroke="#1b1e23" stroke-width="1.7" stroke-linecap="round"';
const stl= 'fill="none" stroke="#a8322a" stroke-width="1.7" stroke-linecap="round"';
const std= 'fill="none" stroke="#8c8578" stroke-width="1.2" stroke-dasharray="4 4"';
const ax = 'fill="none" stroke="#1b1e23" stroke-width="1.4" marker-end="url(#ar)"';
const lb = 'font-family="Cambria,Georgia,serif" font-style="italic" font-size="13" fill="#1b1e23"';
const lr = 'font-family="Segoe UI,Microsoft YaHei" font-size="11" fill="#7a8089"';

const DIAG = {};

/* 混合加热循环 p-v + T-s */
DIAG.dual = `<svg viewBox="0 0 620 250" width="620">${AXV}
 <line x1="42" y1="212" x2="292" y2="212" ${ax}/>
 <line x1="42" y1="212" x2="42" y2="30" ${ax}/>
 <text x="272" y="230" ${lb}>v</text><text x="24" y="36" ${lb}>p</text>
 <path d="M150,196 L88,110 L88,72 L136,72 L150,150 Z" ${stl}/>
 <circle cx="150" cy="196" r="2.6" fill="#1b1e23"/><circle cx="88" cy="110" r="2.6" fill="#1b1e23"/>
 <circle cx="88" cy="72" r="2.6" fill="#1b1e23"/><circle cx="136" cy="72" r="2.6" fill="#1b1e23"/>
 <circle cx="150" cy="150" r="2.6" fill="#1b1e23"/>
 <text x="160" y="200" ${lb}>1</text><text x="72" y="108" ${lb}>2</text>
 <text x="70" y="66" ${lb}>3</text><text x="140" y="64" ${lb}>4</text><text x="158" y="152" ${lb}>5</text>
 <text x="100" y="92" ${lr} font-size="10" transform="rotate(-64 100 92)">s</text>
 <text x="110" y="66" ${lr} font-size="10">v=const</text>
 <text x="140" y="88" ${lr} font-size="10">p=const</text>
 <line x1="320" y1="212" x2="580" y2="212" ${ax}/>
 <line x1="320" y1="212" x2="320" y2="30" ${ax}/>
 <text x="562" y="230" ${lb}>s</text><text x="302" y="36" ${lb}>T</text>
 <path d="M398,196 L398,112 C398,112 420,86 436,74 L498,60" ${stl}/>
 <path d="M498,60 L498,152" ${stl}/>
 <path d="M498,152 C470,178 430,192 398,196" ${stl}/>
 <circle cx="398" cy="196" r="2.6" fill="#1b1e23"/><circle cx="398" cy="112" r="2.6" fill="#1b1e23"/>
 <circle cx="436" cy="74" r="2.6" fill="#1b1e23"/><circle cx="498" cy="60" r="2.6" fill="#1b1e23"/>
 <circle cx="498" cy="152" r="2.6" fill="#1b1e23"/>
 <text x="384" y="212" ${lb}>1</text><text x="384" y="110" ${lb}>2</text>
 <text x="428" y="70" ${lb}>3</text><text x="506" y="58" ${lb}>4</text><text x="506" y="156" ${lb}>5</text>
 <text x="412" y="100" ${lr} font-size="10">v=const</text>
 <text x="450" y="56" ${lr} font-size="10">p=const</text>
</svg>`;

/* 三种内燃机循环：同一 Tmax 与同一 q1 */
DIAG.three = `<svg viewBox="0 0 620 250" width="620">${AXV}
 <line x1="46" y1="212" x2="590" y2="212" ${ax}/>
 <line x1="46" y1="212" x2="46" y2="32" ${ax}/>
 <text x="572" y="230" ${lb}>s</text><text x="28" y="38" ${lb}>T</text>
 <line x1="46" y1="62" x2="566" y2="62" ${std}/>
 <text x="392" y="56" fill="#8c8578" font-family="Segoe UI" font-size="10.5">T = T&#8202;max（三者最高温度相同）</text>
 <line x1="46" y1="192" x2="330" y2="192" ${std}/>
 <text x="60" y="188" fill="#8c8578" font-family="Segoe UI" font-size="10.5">T&#8202;1</text>
 <path d="M74,192 L74,124 C74,124 96,96 108,62" fill="none" stroke="#a8322a" stroke-width="1.7"/>
 <path d="M108,62 L108,176" fill="none" stroke="#a8322a" stroke-width="1.7"/>
 <path d="M108,176 C92,186 82,190 74,192" fill="none" stroke="#a8322a" stroke-width="1.7"/>
 <text x="52" y="126" fill="#a8322a" font-family="Segoe UI" font-size="10.5">奥托</text>
 <path d="M140,192 L140,116 C140,116 156,98 170,84 L196,62" fill="none" stroke="#9a6b1a" stroke-width="1.7"/>
 <path d="M196,62 L196,168" fill="none" stroke="#9a6b1a" stroke-width="1.7"/>
 <path d="M196,168 C180,182 158,190 140,192" fill="none" stroke="#9a6b1a" stroke-width="1.7"/>
 <text x="118" y="118" fill="#9a6b1a" font-family="Segoe UI" font-size="10.5">混合</text>
 <path d="M232,192 L232,104 L316,62" fill="none" stroke="#1d4c66" stroke-width="1.7"/>
 <path d="M316,62 L316,160" fill="none" stroke="#1d4c66" stroke-width="1.7"/>
 <path d="M316,160 C286,178 250,188 232,192" fill="none" stroke="#1d4c66" stroke-width="1.7"/>
 <text x="210" y="106" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">狄塞尔</text>
 <text x="410" y="120" fill="#1b1e23" font-family="Segoe UI" font-size="11.5">三条吸热线下方面积 = q&#8202;1（相等）</text>
 <text x="410" y="140" fill="#1b1e23" font-family="Segoe UI" font-size="11.5">三者均到达 T&#8202;max</text>
 <text x="410" y="168" fill="#a8322a" font-family="Segoe UI" font-size="11.5" font-weight="600">η&#8202;狄塞尔 &gt; η&#8202;混合 &gt; η&#8202;奥托</text>
</svg>`;

/* B卷 填空(3)：ab 定容加热、bc 定压加热 的 p-v 图 */
DIAG.pvab = `<svg viewBox="0 0 470 250" width="470">${AXV}
 <line x1="58" y1="186" x2="300" y2="186" ${ax}/>
 <line x1="58" y1="186" x2="58" y2="30" ${ax}/>
 <text x="286" y="204" ${lb}>v</text><text x="40" y="36" ${lb}>p</text>
 <path d="M96,140 C150,108 200,94 258,86" ${std}/>
 <text x="198" y="78" ${lr} font-size="10">等温线（参考）</text>
 <line x1="112" y1="168" x2="112" y2="90" stroke="#a8322a" stroke-width="2"/>
 <line x1="112" y1="90" x2="252" y2="90" stroke="#a8322a" stroke-width="2"/>
 <path d="M112,150 l0,-16" stroke="#1b1e23" stroke-width="1.4" marker-end="url(#ar)"/>
 <path d="M182,90 l18,0" stroke="#1b1e23" stroke-width="1.4" marker-end="url(#ar)"/>
 <circle cx="112" cy="168" r="3.2" fill="#a8322a"/>
 <circle cx="112" cy="90" r="3.2" fill="#a8322a"/>
 <circle cx="252" cy="90" r="3.2" fill="#a8322a"/>
 <text x="94" y="182" ${lb}>a</text><text x="94" y="84" ${lb}>b</text><text x="260" y="84" ${lb}>c</text>
 <text x="120" y="132" ${lr} font-size="10">v 不变</text>
 <text x="196" y="108" ${lr} font-size="10">p 不变</text>
 <text x="316" y="70" fill="#1b1e23" font-family="Segoe UI" font-size="11">a→b 定容加热</text>
 <text x="316" y="90" fill="#7a8089" font-family="Segoe UI" font-size="10.5">W = 0，W&#8202;t &lt; 0，q &gt; 0</text>
 <text x="316" y="126" fill="#1b1e23" font-family="Segoe UI" font-size="11">b→c 定压加热</text>
 <text x="316" y="146" fill="#7a8089" font-family="Segoe UI" font-size="10.5">W &gt; 0，W&#8202;t = 0，q &gt; 0</text>
 <text x="58" y="236" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p–v 图上：定容 = 竖直线，定压 = 水平线</text>
</svg>`;

/* B卷 计算3：循环 1231 的 T-s 图 */
DIAG.ts1231 = `<svg viewBox="0 0 420 240" width="420">${AXV}
 <line x1="56" y1="206" x2="386" y2="206" ${ax}/>
 <line x1="56" y1="206" x2="56" y2="30" ${ax}/>
 <text x="368" y="224" ${lb}>s</text><text x="38" y="36" ${lb}>T</text>
 <path d="M96,186 C96,186 122,140 148,104" fill="none" stroke="#a8322a" stroke-width="1.8"/>
 <path d="M148,104 L148,152" fill="none" stroke="#a8322a" stroke-width="1.8"/>
 <path d="M148,152 C124,172 108,180 96,186" fill="none" stroke="#a8322a" stroke-width="1.8"/>
 <circle cx="96" cy="186" r="3" fill="#a8322a"/><circle cx="148" cy="104" r="3" fill="#a8322a"/>
 <circle cx="148" cy="152" r="3" fill="#a8322a"/>
 <text x="80" y="200" ${lb}>1</text><text x="152" y="100" ${lb}>2</text><text x="152" y="166" ${lb}>3</text>
 <text x="112" y="150" ${lr} font-size="10" transform="rotate(-58 112 150)">v=const</text>
 <text x="154" y="126" ${lr} font-size="10">s=const</text>
 <text x="88" y="176" ${lr} font-size="10">p=const</text>
 <text x="230" y="90" fill="#1b1e23" font-family="Segoe UI" font-size="11">1→2 定容升压（吸热）</text>
 <text x="230" y="110" fill="#1b1e23" font-family="Segoe UI" font-size="11">2→3 定熵膨胀</text>
 <text x="230" y="130" fill="#1b1e23" font-family="Segoe UI" font-size="11">3→1 定压放热</text>
</svg>`;

/* C卷 简答(3)：两级压缩中间冷却 p-v 图 */
DIAG.multi = `<svg viewBox="0 0 460 250" width="460">${AXV}
 <line x1="56" y1="212" x2="420" y2="212" ${ax}/>
 <line x1="56" y1="212" x2="56" y2="34" ${ax}/>
 <text x="404" y="230" ${lb}>v</text><text x="38" y="40" ${lb}>p</text>
 <path d="M96,186 C138,150 178,104 208,74" ${std}/>
 <text x="212" y="70" ${lr} font-size="10">等温线</text>
 <path d="M96,186 C130,150 178,96 214,66" fill="none" stroke="#8c8578" stroke-width="1.5" stroke-dasharray="6 3"/>
 <text x="220" y="60" ${lr} font-size="10">单级压缩</text>
 <path d="M96,186 C120,158 150,128 174,108" fill="none" stroke="#a8322a" stroke-width="1.9"/>
 <line x1="174" y1="108" x2="120" y2="108" stroke="#1d4c66" stroke-width="1.9"/>
 <path d="M120,108 C146,96 184,78 214,66" fill="none" stroke="#a8322a" stroke-width="1.9"/>
 <circle cx="96" cy="186" r="3" fill="#1b1e23"/><circle cx="174" cy="108" r="3" fill="#a8322a"/>
 <circle cx="120" cy="108" r="3" fill="#1d4c66"/><circle cx="214" cy="66" r="3" fill="#a8322a"/>
 <text x="80" y="200" ${lb}>1</text><text x="180" y="118" ${lb}>2</text><text x="112" y="124" ${lb}>2'</text>
 <text x="220" y="76" ${lb}>3</text>
 <text x="196" y="120" ${lr} font-size="10">中间冷却</text>
 <text x="120" y="146" ${lr} font-size="10">第一级</text>
 <text x="172" y="88" ${lr} font-size="10">第二级</text>
</svg>`;

/* D卷 计算3：一次抽汽回热循环 T-s 图 */
DIAG.regen = `<svg viewBox="0 0 460 260" width="460">${AXV}
 <line x1="56" y1="226" x2="420" y2="226" ${ax}/>
 <line x1="56" y1="226" x2="56" y2="30" ${ax}/>
 <text x="404" y="244" ${lb}>s</text><text x="38" y="36" ${lb}>T</text>
 <path d="M110,206 C104,120 140,66 200,58 C262,50 306,110 330,206" fill="none" stroke="#8c8578" stroke-width="1.4"/>
 <path d="M204,58 L330,196" stroke="#a8322a" stroke-width="1.9" fill="none"/>
 <line x1="120" y1="126" x2="286" y2="126" stroke="#1d4c66" stroke-width="1.5"/>
 <line x1="110" y1="206" x2="330" y2="206" stroke="#1d4c66" stroke-width="1.5" stroke-dasharray="5 3"/>
 <circle cx="200" cy="58" r="3" fill="#a8322a"/><circle cx="256" cy="126" r="3" fill="#a8322a"/>
 <circle cx="330" cy="196" r="3" fill="#a8322a"/>
 <circle cx="120" cy="126" r="3" fill="#1d4c66"/><circle cx="110" cy="206" r="3" fill="#1d4c66"/>
 <text x="186" y="50" ${lb}>1</text><text x="264" y="120" ${lb}>a</text><text x="336" y="210" ${lb}>2</text>
 <text x="100" y="124" ${lb}>b</text><text x="94" y="222" ${lb}>3</text>
 <text x="300" y="120" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">p&#8202;抽汽 = 1.0 MPa</text>
 <text x="336" y="200" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">p&#8202;2 = 0.006 MPa</text>
 <text x="130" y="240" fill="#7a8089" font-family="Segoe UI" font-size="10.5">b→1：加热器出口为抽汽压力下的饱和水</text>
</svg>`;

/* ================= 卷 A：2022—2023 第1学期 期末 ================= */
PAPERS.push({
 id:'A', k:'A', short:'22—23 期末', title:'2022—2023 学年 第 1 学期《工程热力学》期末考试试卷',
 meta:'北京化工大学 · 满分 100 分 · 填空 20 + 判断选择 20 + 简答作图 27 + 计算 33',
 code:'课程代码 M E E 3 3 4 0 0 T', score:'100 分', total:30,
 sections:[
 {roman:'一',idx:'1',title:'填空题',score:'10 小题 × 2 分 = 20 分',items:[

  {n:'1',q:'某装有空气的刚性密封容器，容器上装有压力表，该压力表在环境气压 0.1 MPa 中显示表压为 200 kPa，则在温度不变、气压 0.09 MPa 的环境中，其压力表读数为 ______ MPa。',
   a:'0.21 MPa',
   sol:`<div class="h">思路</div>
   <p>表压 = 绝对压力 − 当地大气压。先由第一环境求绝对压力，再换算到第二环境的表压。刚性容器 + 温度不变 ⇒ 空气的 <i>p</i>、<i>v</i>、<i>T</i> 均不变，<b>绝对压力恒定</b>。</p>
   ${F(R`p=p_g+p_b=200+100=300\ \text{kPa}=0.30\ \text{MPa}`)}
   ${F(R`p_{g}'=p-p_{b}'=0.30-0.09=0.21\ \text{MPa}`)}
   <div class="key"><b>关键</b>：压力表读数随环境气压变化，被测量的<b>绝对压力</b>并不变。</div>`},

  {n:'2',q:'如 t = 250 ℃、4 kg 水以某种状态占有 0.1 m³ 容积的容器，则容器内处于 ______ 状态。该温度下 v′ = 0.001252 m³/kg，v″ = 0.050085 m³/kg。',
   a:'湿饱和蒸汽（汽液两相共存），干度 x ≈ 0.487',
   sol:`<p>先求比容，再与<b>同温度</b>下的饱和值比较：</p>
   ${F(R`v=\frac{V}{m}=\frac{0.1}{4}=0.0250\ \text{m}^3/\text{kg}`)}
   ${F(R`v'=0.001252<v=0.0250<v''=0.050085`)}
   <p>比容介于饱和液与干饱和蒸汽之间 ⇒ 容器内是<b>湿饱和蒸汽</b>（两相共存），压力为该温度对应的饱和压力 <i>p<sub>s</sub></i>(250 ℃) = 3.973 MPa。</p>
   <p>干度：</p>
   ${F(R`x=\frac{v-v'}{v''-v'}=\frac{0.0250-0.001252}{0.050085-0.001252}=0.487`)}
   <div class="warn"><b>易错</b>：判据必须用<b>同温度</b>的 v′、v″；用压力或其他温度的表值都会误判。</div>`},

  {n:'3',q:'已知水和水蒸气的温熵图（图 1）中等压线上 a、b、c 三点的焓为 h<sub>a</sub>、h<sub>b</sub>、h<sub>c</sub>，则 a 点的干度可表示为 ______（用 h<sub>a</sub>、h<sub>b</sub>、h<sub>c</sub> 表示）。',
   a:'x<sub>a</sub> = (h<sub>a</sub> − h<sub>c</sub>) / (h<sub>b</sub> − h<sub>c</sub>)',
   sol:`<p>两相区内等压线同时是等温线，在 T–s 图上为<b>水平线</b>。c 落在饱和液线上（<i>h<sub>c</sub></i> = <i>h</i>′），b 落在干饱和蒸汽线上（<i>h<sub>b</sub></i> = <i>h</i>″），a 在两者之间。</p>
   ${F(R`h_a=h'+x_a\left(h''-h'\right)`)}
   <p>代入 <i>h</i>′ = <i>h<sub>c</sub></i>、<i>h</i>″ = <i>h<sub>b</sub></i> 得</p>
   ${F(R`x_a=\frac{h_a-h_c}{h_b-h_c}`)}
   <div class="key"><b>判据</b>：凡是在两相区用一个"状态量"线性内插求干度，都可写成 <i>x</i> = (待求量 − 饱和液值)/(干饱和值 − 饱和液值)。</div>`},

  {n:'4',q:'恒温热源（T = 1000 K）向恒温热源（T = 500 K）传热 100 kJ，如果环境温度为 27 ℃，则做功能力损失为 ______ kJ。',
   a:'30 kJ',
   sol:`<p>做功能力损失（<i>㶲</i>损失）用<b>孤立系熵增</b>换算：</p>
   ${F(R`\Pi=T_0\Delta S_{iso}=T_0\left(-\frac{Q}{T_H}+\frac{Q}{T_L}\right)`)}
   ${F(R`\Delta S_{iso}=-\frac{100}{1000}+\frac{100}{500}=-0.1+0.2=0.1\ \text{kJ/K}`)}
   ${F(R`\Pi=300\times0.1=30\ \text{kJ}`)}
   <p>验证：高温热源放出的热量若可逆地通过可逆热机，最多可做功 ${mx(R`Q(1-T_0/T_H)=100(1-0.3)=70`)} kJ；而直接传到 500 K 后最多只能做 ${mx(R`100(1-300/500)=40`)} kJ，损失 70 − 40 = 30 kJ。<b>两条路径一致</b>。</p>`},

  {n:'5',q:'一卡诺制冷机，热源温度是冷源温度的 3 倍，则其（制冷）效率为 ______。',
   a:'ε = 0.5',
   sol:`<p>逆卡诺循环制冷系数只取决于两热源温度：</p>
   ${F(R`\varepsilon=\frac{T_L}{T_H-T_L}=\frac{T_L}{3T_L-T_L}=\frac{1}{2}=0.5`)}
   <div class="warn"><b>注意</b>：本题"效率"指<b>制冷系数</b>，不是热效率。若误用 ${mx(R`\eta=1-T_L/T_H=2/3`)} 即错。</div>`},

  {n:'6',q:'蒸汽压缩制冷循环如图 2 所示，h<sub>1</sub> = 573 kJ/kg，h<sub>2</sub> = 590 kJ/kg，h<sub>4</sub> = 448 kJ/kg，则制冷系数为 ______。',
   a:'ε = 7.35',
   sol:`<p>1 为蒸发器出口（压缩机进口），2 为压缩机出口，3 为冷凝器出口，4 为节流阀出口且 <i>h</i><sub>4</sub> = <i>h</i><sub>3</sub>（节流等焓）。</p>
   ${F(R`\varepsilon=\frac{q_2}{w_{net}}=\frac{h_1-h_4}{h_2-h_1}=\frac{573-448}{590-573}=\frac{125}{17}=7.35`)}
   <p>其中制冷量 <i>q</i><sub>2</sub> = 125 kJ/kg，耗功 <i>w</i> = 17 kJ/kg。</p>`},

  {n:'7',q:'环境对一闭口系统做功 40 kJ，该系统并对环境放热 20 kJ，则其内能变化为 ______ kJ。',
   a:'+20 kJ（内能增加 20 kJ）',
   sol:`<p>取系统为对象，闭口系第一定律（符号：吸热为正、对外做功为正）：</p>
   ${F(R`Q=\Delta U+W\ \Rightarrow\ \Delta U=Q-W`)}
   <p>系统放热 <i>Q</i> = −20 kJ；环境对系统做功 40 kJ ⇒ 系统对外做功 <i>W</i> = −40 kJ。</p>
   ${F(R`\Delta U=(-20)-(-40)=+20\ \text{kJ}`)}`},

  {n:'8',q:'理想的勃雷登循环是由两个 ______ 过程和两个等熵过程组成的。',
   a:'等压（定压）',
   sol:`<p>勃雷登（Brayton）循环 = 压气机中<b>定熵压缩</b> 1→2 + 燃烧室中<b>定压吸热</b> 2→3 + 燃气轮机中<b>定熵膨胀</b> 3→4 + 定压放热 4→1。</p>
   <p>故填"两个等压过程 + 两个等熵过程"。</p>`},

  {n:'9',q:'如图 3 所示，如果 T<sub>L</sub> = 300 K，T<sub>H</sub> = 500 K，Q<sub>H</sub> = 200 kJ，W = 250 kJ，则该循环为 ______。（填不可能、不可逆或可逆）',
   a:'不可能',
   sol:`<p>同温限下卡诺循环的最大功：</p>
   ${F(R`W_{\max}=\eta_cQ_H=\left(1-\frac{300}{500}\right)\times200=0.4\times200=80\ \text{kJ}`)}
   <p>题给 <i>W</i> = 250 kJ ≫ 80 kJ，违反第二定律。</p>
   <p>另可检验：<i>Q<sub>L</sub></i> = <i>Q<sub>H</sub></i> − <i>W</i> = 200 − 250 = −50 kJ，即"放热"为负 ⇒ 实际还在从冷源吸热，这是<b>同时从两个热源吸热全部变成功</b>的第二类永动机，绝不可能。</p>`},

  {n:'10',q:'已知蒸汽再热循环如图 4 所示，已知各点 h 值，则该循环中汽轮机单位工质循环做功量为 ______。',
   a:'w<sub>t</sub> = (h<sub>1</sub> − h<sub>b</sub>) + (h<sub>a</sub> − h<sub>2</sub>)',
   sol:`<p><b>先认图</b>：图 4 中 1 在最左上（新汽），b 在 1 的右下方（高压缸排汽，也就是再热器进口），a 在 b 的右上方（再热器出口，也就是低压缸进口），2 在最下方（乏汽）。</p>
   <p>于是汽轮机分两段做功：高压缸 1→b 定熵膨胀；再热器 b→a 定压吸热（<i>s</i>、<i>T</i> 同增，<b>不做功</b>）；低压缸 a→2 定熵膨胀。</p>
   ${F(R`w_t=\left(h_1-h_b\right)+\left(h_a-h_2\right)`)}
   <div class="warn"><b>易错</b>：图 4 的字母走向是 <b>1 → b → a → 2</b>，<b>b 是再热器进口、a 是再热器出口</b>。若把 a、b 写反，等于把"再热吸热量"当成"做功"，结果必然错。</div>
   <p>若忽略泵功，循环净功 ≈ <i>w<sub>t</sub></i>；循环吸热量 <i>q</i><sub>1</sub> = (<i>h</i><sub>1</sub> − <i>h</i><sub>3</sub>) + (<i>h<sub>a</sub></i> − <i>h<sub>b</sub></i>)。</p>`}
 ]},

 {roman:'二',idx:'2',title:'判断与选择（正确打 √，错误打 ×）',score:'10 小题 × 2 分 = 20 分',items:[
  {n:'1',q:'比热容是过程量。',a:'×（错）',
   sol:`<p>比热容是<b>物质的热物性参数</b>，不是过程量。过程量指与路径有关、其微元不是全微分的量，即<b>热量 Q 与功 W</b>。</p>
   <div class="warn"><b>⚠ 说法辨析</b>：<i>c</i> = δ<i>q</i>/d<i>T</i> 的<b>数值</b>确实随过程而变（<i>c<sub>p</sub></i> ≠ <i>c<sub>v</sub></i>），所以有些教材强调"比热容与过程有关"。但"比热容是过程量"这一说法把物性与过程量混为一谈，标准判错。要点是：<b>比热容不是状态参数</b>。</div>`},
  {n:'2',q:'对于内燃机正循环，其吸/放热的平均温度相差越大，效率越低。',a:'×（错）',
   sol:`<p>由 ${mx(R`\eta_t=1-\frac{\bar T_2}{\bar T_1}`)} 可知：平均吸热温度 <i>T̄</i><sub>1</sub> 越高、平均放热温度 <i>T̄</i><sub>2</sub> 越低，二者<b>相差越大，效率越高</b>。题干结论正好说反。</p>`},
  {n:'3',q:'同高、低温限下的一切热机，卡诺热机的热效率最高。',a:'√（对）',
   sol:`<p>卡诺定理：同温限间一切热机中，可逆热机效率最高；一切可逆热机效率都等于 ${mx(R`1-T_L/T_H`)}。故在给定 <i>T<sub>H</sub></i>、<i>T<sub>L</sub></i> 下卡诺热机效率最高。</p>`},
  {n:'4',q:'空气制冷循环通常采用节流阀来膨胀工质。',a:'×（错）',
   sol:`<p>空气制冷（逆勃雷登）循环中工质始终是<b>气态</b>，节流（<i>h</i> = 常数）对理想气体<b>不降温</b>，无法获得低温。因此空气制冷循环必须用<b>膨胀机</b>（绝热膨胀降温并回收膨胀功）。</p>
   <p>反之，蒸汽压缩制冷循环中工质在节流前是<b>饱和液</b>，节流后部分汽化而降温，才用节流阀。</p>`},
  {n:'5',q:'0.4 kmol 氧气和 0.6 kmol 的氧气在同温同压下混合，其熵变为 0。',a:'√（对）',
   sol:`<p>混合熵变公式 ${mx(R`\Delta S=-R\sum n_i\ln y_i`)} 只适用于<b>不同种</b>气体。本题两侧都是 O₂（同种气体、同温同压），混合后宏观状态与原来完全等效，属<b>吉布斯佯谬</b>的正确结论：Δ<i>S</i> = 0。</p>
   <div class="key"><b>对照</b>：若为 0.4 kmol O₂ 与 0.6 kmol N₂，则 Δ<i>S</i> = −8.314×(0.4ln0.4 + 0.6ln0.6) = 5.61 kJ/K ≠ 0。</div>`},
  {n:'6',q:'一个系统的熵不可能减小。',a:'×（错）',
   sol:`<p>只有<b>孤立系统</b>熵才不可能减小（Δ<i>S</i><sub>iso</sub> ≥ 0）。一般闭口系统放热时可逆地减小熵：${mx(R`\mathrm{d}S=\delta Q_{rev}/T<0`)}，例如定压放热冷却。</p>`},
  {n:'7',q:'在热力学上，饱和气线和饱和液线相交于临界点。',a:'√（对）',
   sol:`<p>p–v、T–s 图上的饱和液线与干饱和蒸汽线在<b>临界点</b>重合，此时汽化潜热为零，汽液不分。</p>`},
  {n:'8',q:'系统稳定即平衡。',a:'×（错）',
   sol:`<p>稳定只要求状态不随时间变化，不要求系统内部<b>没有势差</b>。例如稳定流动的换热器中各处状态恒定，但存在温差、压差，是稳定<b>而不平衡</b>。</p>
   <p>平衡态 = 热平衡 + 力平衡 + 化学平衡，是稳定之上更强的条件（平衡必稳定，稳定未必平衡）。</p>`},
  {n:'9',q:'确定过热蒸汽的状态只需要知道压力或温度。',a:'×（错）',
   sol:`<p>过热蒸汽是<b>单相</b>物质，需<b>两个独立状态参数</b>（如 <i>p</i>、<i>T</i>）才能确定状态。只知其一，等压线上仍有无穷多状态点。</p>
   <p>（只有两相共存的湿蒸汽，因 <i>p</i>、<i>T</i> 不独立，知道一个再加干度即可。）</p>`},
  {n:'10',q:'理想气体经历绝热节流过程，其焓前后不变。',a:'√（对）',
   sol:`<p>绝热节流：<i>q</i> = 0，<i>w</i><sub>t</sub> = 0，动能、位能变化忽略 ⇒ <i>h</i><sub>1</sub> = <i>h</i><sub>2</sub>，是<b>等焓</b>过程（但不可逆，Δ<i>s</i> > 0）。</p>
   <p>对理想气体，<i>h</i> = <i>f</i>(<i>T</i>) ⇒ 节流后温度也不变（焦耳–汤姆逊系数为零）。</p>`}
 ]},

 {roman:'三',idx:'3',title:'简答、作图题',score:'共 27 分',items:[
  {n:'1',q:'简述理想气体的假设条件。',s:'4 分',a:'分子不占体积、分子间无作用力、碰撞完全弹性',
   sol:`<ol>
   <li><b>分子本身不占体积</b>：分子自身体积远小于气体所占容积（可忽略）。</li>
   <li><b>分子间无相互作用力</b>：除碰撞瞬间外，分子间无引力、无斥力。</li>
   <li><b>碰撞是完全弹性的</b>：分子间及分子与器壁的碰撞不损失动能。</li>
   <li>（部分教材加）分子可视为<b>弹性质点</b>，服从经典力学。</li>
   </ol>
   <p>由此推出的两个可直接使用的结论：</p>
   ${F(R`pV=nRT,\qquad u=u(T),\quad h=h(T),\quad c_p-c_v=R`)}`},

  {n:'2',q:'在 p–v 和 T–s 图中示意画出内燃机混合加热循环（用数字序号标识过程状态），并标明循环方向。',s:'4 分',
   a:'1→2 定熵压缩、2→3 定容加热、3→4 定压加热、4→5 定熵膨胀、5→1 定容放热',
   sol:`${dg('dual','图 混合加热（萨巴德）循环：左 p–v 图，右 T–s 图；顺时针为正向循环')}
   <p><b>作图要点</b></p>
   <ol>
   <li>1→2 定熵压缩：p–v 图上陡升（比等温线陡），T–s 图上<b>竖直线</b>（s 不变）。</li>
   <li>2→3 定容加热：p–v 图<b>竖直线</b>（v 不变），T–s 图上斜率为 <i>T</i>/<i>c<sub>v</sub></i> 的曲线（较陡）。</li>
   <li>3→4 定压加热：p–v 图<b>水平线</b>（p 不变），T–s 图上斜率为 <i>T</i>/<i>c<sub>p</sub></i>（比 2→3 平缓）。</li>
   <li>4→5 定熵膨胀：T–s 图竖直线下降；5→1 定容放热：p–v 图竖直线，T–s 图向左下弯曲。</li>
   <li>方向：<b>顺时针</b>（净功为正）。</li>
   </ol>`},

  {n:'3',q:'以理想朗肯循环为例，在 T–s 图上分析提升蒸汽轮机入口温度所带来的优缺点？',s:'4 分',
   a:'优点：平均吸热温度↑ → 热效率↑，且乏汽干度↑；缺点：受金属耐高温性能限制，设备与运行成本高',
   sol:`<p>在 T–s 图上把 1 点沿等压线 <i>p</i><sub>1</sub> 向右上移到 1′（<i>T</i><sub>1</sub>↑）：</p>
   <ol>
   <li><b>热效率提高</b>。吸热过程平均温度 <i>T̄</i><sub>1</sub> = <i>q</i><sub>1</sub>/Δ<i>s</i> 升高，而放热温度 <i>T</i><sub>2</sub>（由背压决定）不变，${mx(R`\eta_t=1-\bar T_2/\bar T_1`)} 增大；T–s 图上循环面积增大。</li>
   <li><b>乏汽干度提高</b>（重要优点）。膨胀线 1′→2′ 起点更高，终点 2′ 落在更靠右的位置，<i>x</i><sub>2</sub> 从 0.86 级提高到 0.88～0.90，减轻末级叶片的水蚀。</li>
   <li><b>缺点</b>：受<b>金属材料耐高温强度</b>限制（超超临界机组主蒸汽温度目前约 600 ℃ 量级）；过热器、主蒸汽管道须用昂贵的奥氏体耐热钢，造价与维护成本显著上升；锅炉受热面结渣、氧化皮问题加剧。</li>
   </ol>
   <div class="key"><b>配套手段</b>：单纯提温受限时，工程上采用<b>再热</b>（既提效率又保干度）。</div>`},

  {n:'4',q:'至少写出 3 种热力学第二定律的表述或者推论表述。',s:'3 分',
   a:'克劳修斯说法、开尔文–普朗克说法、熵增原理（或卡诺定理、喀喇氏说法）',
   sol:`<ol>
   <li><b>克劳修斯说法</b>：不可能把热量从低温物体传向高温物体而不引起其他变化。</li>
   <li><b>开尔文–普朗克说法</b>：不可能制造出从单一热源吸热、使之完全变为功而不产生其他影响的热机（第二类永动机不可能）。</li>
   <li><b>熵增原理（推论）</b>：孤立系统的熵不可能减小，${mx(R`\Delta S_{iso}\ge0`)}；可逆取等号。</li>
   <li>（备选）<b>卡诺定理</b>：同温限间一切热机效率不超过可逆热机；<b>喀喇氏说法</b>：不可能用绝热过程使系统从一个状态到另一个状态后又回到原态。</li>
   </ol>`},

  {n:'5',q:'试分析为什么以蒸汽为制冷剂的空调系统往往不采用膨胀机而采用节流阀？',s:'4 分',
   a:'节流阀结构简单、可靠、廉价，且液体节流降压降温效果已满足需要；膨胀机回收的功极小、两相区效率极低',
   sol:`<ol>
   <li><b>工质状态合适</b>：蒸汽压缩制冷中节流前是<b>饱和液</b>（比容极小），经节流阀降压后部分闪发降温，正好得到所需低温湿蒸汽，无须做功即可实现"降压 + 降温"。</li>
   <li><b>回收功太小</b>：液体比容 <i>v</i> ≈ 10<sup>−3</sup> m³/kg，理想膨胀功 ${mx(R`w=\int v\,\mathrm{d}p`)} 量级仅几 kJ/kg，相对压缩机耗功（百 kJ/kg 量级）可忽略。</li>
   <li><b>膨胀机在两相区工作</b>：进出口均为湿蒸汽，湿度大、转速高，叶片冲蚀严重、效率低（远低于节流"损失"的那点功），且体积流量小而密封困难。</li>
   <li><b>经济性</b>：节流阀无运动部件、成本低、免维护；膨胀机造价高、可靠性差。</li>
   </ol>
   <div class="key"><b>结论</b>：用节流阀造成的不可逆损失（约合制冷量的几个百分点）远小于膨胀机的投资与维护代价，故工程上一律用节流阀。<b>空气制冷循环则相反</b>——工质全为气态，节流不降温，必须用膨胀机。</div>`},

  {n:'6',q:'名词解释：比热容、可逆过程。',s:'4 分',
   a:'比热容：单位质量物质温度升高 1 K 所需的热量；可逆过程：系统经历某过程后能沿原路径逆向复原且外界也完全复原',
   sol:`<p><b>比热容</b> <i>c</i>：单位质量物质温度升高 1 K（或 1 ℃）所吸收（放出）的热量，${mx(R`c_x=\frac{\delta q}{\mathrm{d}T}`)}，单位 kJ/(kg·K)。它是<b>与过程有关的物性参数</b>，常用的有定容比热容 <i>c<sub>v</sub></i> 和定压比热容 <i>c<sub>p</sub></i>，且 <i>c<sub>p</sub></i> − <i>c<sub>v</sub></i> = <i>R</i>（理想气体）。</p>
   <p><b>可逆过程</b>：系统完成某一过程后，若能沿<b>原路径逆向</b>进行，使系统与外界<b>同时、完全</b>恢复到初态而不留下任何痕迹，该过程称可逆过程。它要求：过程无限缓慢（准静态）+ 无耗散效应（无摩擦、无温差传热、无不平衡膨胀）。可逆过程是实际过程的理想极限，<b>可逆即准静态，准静态未必可逆</b>。</p>`},

  {n:'7',q:'在最高温度 T<sub>max</sub>、吸热量 q<sub>1</sub> 一致的情况下，试在同一张 T–s 图上作出活塞式内燃机三种循环，并比较该三种循环的热效率大小。',s:'4 分',
   a:'η<sub>狄塞尔</sub> > η<sub>混合</sub> > η<sub>奥托</sub>',
   sol:`${dg('three','同一 Tmax、同一 q1 下三种活塞式内燃机循环的 T–s 图')}
   <p><b>作图要点</b>：三条吸热线都要终止在 <i>T</i> = <i>T</i><sub>max</sub> 的水平线上，且<b>吸热线下方所围面积（= <i>q</i><sub>1</sub>）彼此相等</b>；奥托全部定容吸热（曲线最陡），狄塞尔全部定压吸热（最平缓），混合循环先定容后定压。</p>
   <p><b>结论与原因</b>：</p>
   ${F(R`\eta_{Diesel}>\eta_{dual}>\eta_{Otto}`)}
   <ol>
   <li>三种循环 <i>T</i><sub>max</sub> 相同、<i>q</i><sub>1</sub> 相同，比较效率即比较<b>平均吸热温度</b>（<i>q</i><sub>1</sub> 相同时 Δ<i>s</i> 越小，<i>T̄</i><sub>1</sub> = <i>q</i><sub>1</sub>/Δ<i>s</i> 越高）。</li>
   <li>狄塞尔循环定压吸热的"升温效率"高（同样 Δ<i>s</i> 对应更大的 Δ<i>T</i>），在相同 <i>q</i><sub>1</sub> 下 Δ<i>s</i> 最小；同时它能以<b>最大的压缩比</b>把压缩终点温度压得最低，从而使吸热区间最靠近 <i>T</i><sub>max</sub> ⇒ <i>T̄</i><sub>1</sub> 最高 ⇒ η 最高。</li>
   </ol>
   <div class="warn"><b>⚠ 对比记忆</b>：本题约束是"<b>同 <i>T</i><sub>max</sub>、同 <i>q</i><sub>1</sub></b>"，结论是狄塞尔最高。若换成"<b>同压缩比 ε、同 <i>q</i><sub>1</sub></b>"，则结论<b>恰好反过来</b>：η<sub>奥托</sub> > η<sub>混合</sub> > η<sub>狄塞尔</sub>（见 D 卷第 3 题）。约束条件不同，结论相反，是本章最典型的陷阱。</div>`}
 ]},

 {roman:'四',idx:'4',title:'计算题',score:'共 33 分',items:[
  {n:'1',q:'将 10 kg、27 ℃ 的水与 60 kg、77 ℃ 的水在绝热容器中混合，求混合前后该绝热容器内的熵变。水的比热容为 4.2 kJ/(kg·K)。',s:'9 分',
   a:'ΔS = 0.412 kJ/K（> 0，不可逆）',
   sol:`<div class="h">① 求混合后的平衡温度（绝热容器，能量守恒）</div>
   ${F(R`m_1c\left(T_m-T_1\right)+m_2c\left(T_m-T_2\right)=0`)}
   ${F(R`T_m=\frac{m_1T_1+m_2T_2}{m_1+m_2}=\frac{10\times300.15+60\times350.15}{70}=343.0\ \text{K}\ (=69.9\ ℃)`)}
   <div class="h">② 分别计算两部分水的熵变</div>
   <p>液体近似不可压缩，${mx(R`\mathrm{d}s=c\frac{\mathrm{d}T}{T}`)}，积分得 Δ<i>s</i> = <i>c</i> ln(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)。</p>
   ${F(R`\Delta S_{cold}=m_1c\ln\frac{T_m}{T_1}=10\times4.2\times\ln\frac{343.0}{300.15}=42\times0.1335=+5.607\ \text{kJ/K}`)}
   ${F(R`\Delta S_{hot}=m_2c\ln\frac{T_m}{T_2}=60\times4.2\times\ln\frac{343.0}{350.15}=252\times(-0.02061)=-5.194\ \text{kJ/K}`)}
   <div class="h">③ 求总熵变</div>
   ${F(R`\Delta S=\Delta S_{cold}+\Delta S_{hot}=5.607-5.194=0.412\ \text{kJ/K}`)}
   <div class="key"><b>校验</b>：绝热容器 + 有限温差传热 ⇒ 内部不可逆 ⇒ Δ<i>S</i> &gt; 0，符号合理。数量级也合理：两部分熵变各约 5 kJ/K，几乎抵消，差值 0.4 kJ/K 恰是"不可逆程度"的度量。</div>
   <div class="warn"><b>易错</b>：温度必须代入<b>热力学温度 K</b>；若用 ℃ 取对数将得到完全错误的负数。</div>`},

  {n:'2',q:'压缩比为 8 的奥托（Otto）循环，吸气状态为 0.1 MPa、25 ℃，工质视为空气且定比热容，对每千克工质加热的热量为 780 kJ/kg。求：a) 循环最高压力和最高温度；b) 循环热效率；c) 循环净功量。',s:'12 分',
   a:'p<sub>3</sub> = 4.75 MPa，T<sub>3</sub> = 1771 K（1498 ℃）；η<sub>t</sub> = 56.5%；w<sub>net</sub> = 440 kJ/kg',
   sol:`<p>已知：<i>ε</i> = 8，<i>p</i><sub>1</sub> = 0.1 MPa，<i>T</i><sub>1</sub> = 298.15 K，<i>k</i> = 1.4，<i>c<sub>v</sub></i> = 0.718 kJ/(kg·K)，<i>q</i><sub>1</sub> = 780 kJ/kg。<br>循环：1→2 定熵压缩，2→3 定容加热，3→4 定熵膨胀，4→1 定容放热。</p>
   <div class="h">① 压缩终点 2</div>
   ${F(R`T_2=T_1\varepsilon^{k-1}=298.15\times8^{0.4}=298.15\times2.297=684.9\ \text{K}`)}
   ${F(R`p_2=p_1\varepsilon^{k}=0.1\times8^{1.4}=0.1\times18.38=1.838\ \text{MPa}`)}
   <div class="h">② 定容加热终点 3（最高温度、最高压力）</div>
   ${F(R`q_1=c_v\left(T_3-T_2\right)\ \Rightarrow\ T_3=T_2+\frac{q_1}{c_v}=684.9+\frac{780}{0.718}=684.9+1086.4=1771\ \text{K}`)}
   ${F(R`p_3=p_2\frac{T_3}{T_2}=1.838\times\frac{1771}{684.9}=4.75\ \text{MPa}`)}
   <p>即 <i>t</i><sub>3</sub> = 1771 − 273.15 ≈ <b>1498 ℃</b>。</p>
   <div class="h">③ 热效率</div>
   ${F(R`\eta_t=1-\frac{1}{\varepsilon^{k-1}}=1-\frac{1}{2.297}=0.5647=56.5\%`)}
   <div class="h">④ 循环净功</div>
   ${F(R`w_{net}=\eta_tq_1=0.5647\times780=440.5\ \text{kJ/kg}`)}
   <div class="key"><b>交叉验算</b>：<i>T</i><sub>4</sub> = <i>T</i><sub>3</sub>/<i>ε</i><sup><i>k</i>−1</sup> = 1771/2.297 = 771.0 K；<i>q</i><sub>2</sub> = <i>c<sub>v</sub></i>(<i>T</i><sub>4</sub> − <i>T</i><sub>1</sub>) = 0.718×(771.0 − 298.15) = 339.5 kJ/kg；<i>w</i> = <i>q</i><sub>1</sub> − <i>q</i><sub>2</sub> = 780 − 339.5 = <b>440.5 kJ/kg</b>，与 ③ 结果一致 ✓</div>`},

  {n:'3',q:'某蒸汽动力循环装置采用一次抽汽回热循环，已知新汽参数 3.5 MPa、435 ℃，抽汽压力 0.3 MPa，乏汽压力 4 kPa，忽略泵功。求：a) 抽汽量 α；b) 乏汽干度；c) 循环热效率。',s:'12 分',
   a:'α = 0.169；x<sub>2</sub> = 0.812；η<sub>t</sub> = 40.1%',
   sol:`<p>查题给表：新汽 <i>h</i><sub>1</sub> = 3303.61、<i>s</i><sub>1</sub> = 6.96；0.3 MPa 下 <i>s</i>″ = 6.96、<i>h</i>″ = 2724.89、<i>h</i>′ = 561.45；4 kPa 下 <i>h</i>′ = 121.40、<i>h</i>″ = 2553.71、<i>s</i>′ = 0.42、<i>s</i>″ = 8.47。</p>
   <div class="h">① 定熵膨胀到 0.3 MPa（抽汽点 a）</div>
   <p><i>s</i><sub>a</sub> = <i>s</i><sub>1</sub> = 6.96 = <i>s</i>″(0.3 MPa) ⇒ 抽汽点恰为<b>干饱和蒸汽</b>，<i>h<sub>a</sub></i> = 2724.89 kJ/kg。</p>
   <div class="h">② 继续定熵膨胀到 4 kPa（乏汽点 2）</div>
   ${F(R`x_2=\frac{s_1-s'}{s''-s'}=\frac{6.96-0.42}{8.47-0.42}=\frac{6.54}{8.05}=0.812`)}
   ${F(R`h_2=h'+x_2\left(h''-h'\right)=121.40+0.8124\times2432.31=121.40+1976.0=2097.4\ \text{kJ/kg}`)}
   <div class="h">③ 抽汽量（混合式加热器能量平衡，忽略泵功）</div>
   ${F(R`\alpha h_a+\left(1-\alpha\right)h_2'=h_b`)}
   ${F(R`\alpha=\frac{h_b-h_2'}{h_a-h_2'}=\frac{561.45-121.40}{2724.89-121.40}=\frac{440.05}{2603.49}=0.169`)}
   <p>（<i>h<sub>b</sub></i> 为 0.3 MPa 饱和水焓，<i>h</i>′<sub>2</sub> 为 4 kPa 饱和水焓。）</p>
   <div class="h">④ 功、热量与热效率</div>
   ${F(R`w_t=\left(h_1-h_a\right)+\left(1-\alpha\right)\left(h_a-h_2\right)=578.72+0.8310\times627.50=578.72+521.45=1100.2\ \text{kJ/kg}`)}
   ${F(R`q_1=h_1-h_b=3303.61-561.45=2742.2\ \text{kJ/kg}`)}
   ${F(R`\eta_t=\frac{w_t}{q_1}=\frac{1100.2}{2742.2}=40.1\%`)}
   <div class="key"><b>交叉验算</b>：<i>q</i><sub>2</sub> = (1−<i>α</i>)(<i>h</i><sub>2</sub> − <i>h</i>′<sub>2</sub>) = 0.8310×1976.0 = 1642.1 kJ/kg；1 − <i>q</i><sub>2</sub>/<i>q</i><sub>1</sub> = 1 − 0.5988 = <b>40.1%</b> ✓</div>
   <p class="note">对照：同参数纯朗肯循环 <i>η</i> ≈ 37.9%，回热使效率提高约 2 个百分点。</p>`}
 ]}
]});
