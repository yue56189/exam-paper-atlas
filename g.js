/* ================= 卷 G（深入）：热力学第二定律 & 蒸汽动力循环 ================= */

/* ---- 提高初参数的三种手段 T-s ---- */
DIAG.paramTS = `<svg viewBox="0 0 640 380" width="640">${AXV}
 <line x1="60" y1="300" x2="570" y2="300" ${ax}/>
 <line x1="60" y1="300" x2="60" y2="30" ${ax}/>
 <text x="554" y="318" ${lb}>s</text><text x="42" y="36" ${lb}>T</text>
 <path d="M140,280 C200,220 262,150 312,104" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M312,104 C380,152 452,220 512,280" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="318" y="98" fill="#8c8578" font-family="Segoe UI" font-size="10">C</text>
 <line x1="110" y1="262" x2="548" y2="262" ${std}/>
 <text x="552" y="258" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <!-- 基准循环 -->
 <path d="M380,112 L380,262" fill="none" stroke="#1b1e23" stroke-width="2"/>
 <circle cx="380" cy="112" r="3.4" fill="#1b1e23"/><circle cx="380" cy="262" r="3.4" fill="#1b1e23"/>
 <text x="388" y="106" ${lb}>1</text><text x="388" y="276" ${lb}>2</text>
 <!-- 提高初温 -->
 <path d="M448,74 L448,262" fill="none" stroke="#a8322a" stroke-width="2" stroke-dasharray="6 4"/>
 <path d="M394,104 C412,92 430,82 442,76" fill="none" stroke="#a8322a" stroke-width="1.6" marker-end="url(#ar)"/>
 <circle cx="448" cy="74" r="3.4" fill="#a8322a"/><circle cx="448" cy="262" r="3.4" fill="#a8322a"/>
 <text x="456" y="70" fill="#a8322a" font-family="Segoe UI" font-size="10.5">1′</text>
 <text x="456" y="276" fill="#a8322a" font-family="Segoe UI" font-size="10.5">2′</text>
 <!-- 提高初压 -->
 <path d="M330,88 L330,262" fill="none" stroke="#1d4c66" stroke-width="2" stroke-dasharray="6 4"/>
 <path d="M374,112 C362,102 348,94 336,90" fill="none" stroke="#1d4c66" stroke-width="1.6" marker-end="url(#ar)"/>
 <circle cx="330" cy="88" r="3.4" fill="#1d4c66"/><circle cx="330" cy="262" r="3.4" fill="#1d4c66"/>
 <text x="312" y="82" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">1″</text>
 <text x="308" y="276" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">2″</text>
 <line x1="120" y1="120" x2="500" y2="120" ${std}/>
 <text x="504" y="116" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;1</text>
 <text x="470" y="150" fill="#a8322a" font-family="Segoe UI" font-size="10.5" font-weight="600">提温：η↑、x&#8202;2↑</text>
 <text x="188" y="150" fill="#1d4c66" font-family="Segoe UI" font-size="10.5" font-weight="600">提压：η↑、x&#8202;2↓</text>
 <text x="60" y="340" fill="#1b1e23" font-family="Segoe UI" font-size="11">1 点沿等压线右上移 = 提高初温；沿等温线左上移 = 提高初压；把 p&#8202;2 线下移 = 降低背压</text>
 <text x="60" y="360" fill="#7a8089" font-family="Segoe UI" font-size="10.5">看 2 点落在哪：越靠右越干（x&#8202;2 高），越靠左越湿（x&#8202;2 低，叶片易冲蚀）</text>
</svg>`;

/* ---- 卡诺循环 T-s ---- */
DIAG.carnotTS = `<svg viewBox="0 0 500 320" width="500">${AXV}
 <line x1="56" y1="262" x2="456" y2="262" ${ax}/>
 <line x1="56" y1="262" x2="56" y2="30" ${ax}/>
 <text x="440" y="280" ${lb}>s</text><text x="38" y="36" ${lb}>T</text>
 <line x1="60" y1="90" x2="450" y2="90" ${std}/>
 <line x1="60" y1="200" x2="450" y2="200" ${std}/>
 <text x="426" y="84" fill="#8c8578" font-family="Segoe UI" font-size="10.5">T&#8202;H</text>
 <text x="426" y="194" fill="#8c8578" font-family="Segoe UI" font-size="10.5">T&#8202;L</text>
 <path d="M150,90 L330,90 L330,200 L150,200 Z" fill="rgba(168,50,42,.06)" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M196,90 l22,0" stroke="#a8322a" stroke-width="1.6" marker-end="url(#ar)"/>
 <path d="M330,128 l0,20" stroke="#a8322a" stroke-width="1.6" marker-end="url(#ar)"/>
 <path d="M284,200 l-22,0" stroke="#a8322a" stroke-width="1.6" marker-end="url(#ar)"/>
 <path d="M150,162 l0,-20" stroke="#a8322a" stroke-width="1.6" marker-end="url(#ar)"/>
 <circle cx="150" cy="90" r="3.2" fill="#a8322a"/><circle cx="330" cy="90" r="3.2" fill="#a8322a"/>
 <circle cx="330" cy="200" r="3.2" fill="#a8322a"/><circle cx="150" cy="200" r="3.2" fill="#a8322a"/>
 <text x="128" y="84" ${lb}>1</text><text x="338" y="84" ${lb}>2</text>
 <text x="338" y="214" ${lb}>3</text><text x="128" y="214" ${lb}>4</text>
 <text x="196" y="80" fill="#a8322a" font-family="Segoe UI" font-size="10.5">q&#8202;1 = T&#8202;H·Δs（吸热）</text>
 <text x="196" y="222" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">q&#8202;2 = T&#8202;L·Δs（放热）</text>
 <text x="196" y="152" fill="#1b1e23" font-family="Segoe UI" font-size="11" font-weight="600">矩形面积 = w&#8202;net</text>
 <text x="352" y="150" fill="#7a8089" font-family="Segoe UI" font-size="10">1→2 定温吸热</text>
 <text x="352" y="168" fill="#7a8089" font-family="Segoe UI" font-size="10">2→3 定熵膨胀</text>
 <text x="86" y="150" fill="#7a8089" font-family="Segoe UI" font-size="10">3→4 定温放热</text>
 <text x="86" y="168" fill="#7a8089" font-family="Segoe UI" font-size="10">4→1 定熵压缩</text>
 <text x="56" y="300" fill="#1b1e23" font-family="Segoe UI" font-size="11">四条边只有两种：水平的等温线（放/吸热）+ 竖直的等熵线（不换热，只是温度变）</text>
</svg>`;

/* ---- 卡诺循环 p-v ---- */
DIAG.carnotPV = `<svg viewBox="0 0 500 320" width="500">${AXV}
 <line x1="56" y1="262" x2="456" y2="262" ${ax}/>
 <line x1="56" y1="262" x2="56" y2="30" ${ax}/>
 <text x="440" y="280" ${lb}>v</text><text x="38" y="36" ${lb}>p</text>
 <path d="M150,96 C214,114 274,128 334,136" fill="none" stroke="#a8322a" stroke-width="2.1"/>
 <path d="M334,136 C356,166 376,202 392,232" fill="none" stroke="#a8322a" stroke-width="2.1"/>
 <path d="M392,232 C332,224 250,212 174,201" fill="none" stroke="#a8322a" stroke-width="2.1"/>
 <path d="M174,201 C162,169 154,129 150,96" fill="none" stroke="#a8322a" stroke-width="2.1"/>
 <path d="M232,120 l20,5" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M362,180 l10,16" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M286,218 l-20,-4" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M162,164 l-4,-16" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <circle cx="150" cy="96" r="3.2" fill="#a8322a"/><circle cx="334" cy="136" r="3.2" fill="#a8322a"/>
 <circle cx="392" cy="232" r="3.2" fill="#a8322a"/><circle cx="174" cy="201" r="3.2" fill="#a8322a"/>
 <text x="130" y="90" ${lb}>1</text><text x="342" y="130" ${lb}>2</text>
 <text x="400" y="238" ${lb}>3</text><text x="156" y="216" ${lb}>4</text>
 <text x="238" y="108" fill="#7a8089" font-family="Segoe UI" font-size="10">1→2 等温膨胀（吸热）</text>
 <text x="368" y="158" fill="#7a8089" font-family="Segoe UI" font-size="10">2→3 绝热膨胀</text>
 <text x="248" y="240" fill="#7a8089" font-family="Segoe UI" font-size="10">3→4 等温压缩（放热）</text>
 <text x="60" y="150" fill="#7a8089" font-family="Segoe UI" font-size="10">4→1 绝热压缩</text>
 <text x="56" y="300" fill="#1b1e23" font-family="Segoe UI" font-size="11">陡的是绝热线（pv&#8202;k=C），缓的是等温线（pv=C）；围成的面积同样是 w&#8202;net</text>
</svg>`;

/* ---- 朗肯循环 T-s ---- */
DIAG.rankineTS = `<svg viewBox="0 0 600 370" width="600">${AXV}
 <line x1="60" y1="292" x2="540" y2="292" ${ax}/>
 <line x1="60" y1="292" x2="60" y2="30" ${ax}/>
 <text x="524" y="310" ${lb}>s</text><text x="42" y="36" ${lb}>T</text>
 <!-- 饱和曲线 -->
 <path d="M140,272 C200,212 260,142 310,100" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M310,100 C372,146 440,212 500,272" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="316" y="94" fill="#8c8578" font-family="Segoe UI" font-size="10">C（临界点）</text>
 <text x="176" y="220" fill="#8c8578" font-family="Segoe UI" font-size="10" transform="rotate(-52 176 220)">饱和液线</text>
 <text x="404" y="196" fill="#8c8578" font-family="Segoe UI" font-size="10" transform="rotate(46 404 196)">干饱和蒸汽线</text>
 <!-- p1 / p2 等压线 -->
 <line x1="126" y1="148" x2="500" y2="148" ${std}/>
 <line x1="120" y1="250" x2="520" y2="250" ${std}/>
 <text x="504" y="144" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;1</text>
 <text x="504" y="246" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <!-- 循环 -->
 <path d="M392,76 L392,250" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M392,250 L160,250" fill="none" stroke="#1d4c66" stroke-width="2.2"/>
 <path d="M160,250 L157,241" fill="none" stroke="#9a6b1a" stroke-width="2.4"/>
 <path d="M157,241 C180,205 220,175 268,150" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M268,150 L356,148" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M356,148 C372,126 384,100 392,76" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M392,120 l0,24" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M330,250 l-24,0" stroke="#1d4c66" stroke-width="1.5" marker-end="url(#ar)"/>
 <circle cx="392" cy="76" r="3.4" fill="#a8322a"/><circle cx="392" cy="250" r="3.4" fill="#a8322a"/>
 <circle cx="160" cy="250" r="3.4" fill="#1d4c66"/><circle cx="157" cy="241" r="3.4" fill="#9a6b1a"/>
 <text x="400" y="70" ${lb}>1</text><text x="400" y="264" ${lb}>2</text>
 <text x="142" y="264" ${lb}>3</text><text x="138" y="238" ${lb}>4</text>
 <!-- 面积标注 -->
 <text x="248" y="196" fill="#a8322a" font-family="Segoe UI" font-size="10.5" font-weight="600">循环面积 = w&#8202;net</text>
 <text x="196" y="286" fill="#1d4c66" font-family="Segoe UI" font-size="10.5">2→3 下方面积 = q&#8202;2（被冷却水带走）</text>
 <text x="410" y="108" fill="#9a6b1a" font-family="Segoe UI" font-size="10">4→1 锅炉加热 q&#8202;1</text>
 <text x="60" y="334" fill="#1b1e23" font-family="Segoe UI" font-size="11">1 新汽（过热）→ 2 乏汽（湿蒸汽，在穹顶内）→ 3 凝结水（饱和水）→ 4 泵出口（与 3 几乎重合）</text>
 <text x="60" y="354" fill="#7a8089" font-family="Segoe UI" font-size="10.5">穹顶内是汽液两相区，等压线 = 等温线（水平）；穹顶外右侧是过热区，左侧是压缩水区</text>
</svg>`;

/* ---- 朗肯循环 p-v ---- */
DIAG.rankinePV = `<svg viewBox="0 0 600 370" width="600">${AXV}
 <line x1="60" y1="296" x2="540" y2="296" ${ax}/>
 <line x1="60" y1="296" x2="60" y2="30" ${ax}/>
 <text x="524" y="314" ${lb}>v</text><text x="42" y="36" ${lb}>p</text>
 <!-- 饱和曲线：液线近竖直，蒸汽线向右下 -->
 <path d="M96,290 C96,220 110,140 186,96" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M186,96 C270,140 340,210 430,290" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="192" y="90" fill="#8c8578" font-family="Segoe UI" font-size="10">C（临界点）</text>
 <text x="100" y="200" fill="#8c8578" font-family="Segoe UI" font-size="10" transform="rotate(-78 100 200)">饱和液线</text>
 <text x="330" y="230" fill="#8c8578" font-family="Segoe UI" font-size="10" transform="rotate(40 330 230)">干饱和蒸汽线</text>
 <line x1="72" y1="112" x2="500" y2="112" ${std}/>
 <line x1="72" y1="252" x2="500" y2="252" ${std}/>
 <text x="506" y="108" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;1</text>
 <text x="506" y="248" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <!-- 循环 -->
 <path d="M96,252 L98,112" fill="none" stroke="#9a6b1a" stroke-width="2.4"/>
 <path d="M98,112 L330,112" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M330,112 C346,150 360,205 372,252" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M372,252 L96,252" fill="none" stroke="#1d4c66" stroke-width="2.2"/>
 <path d="M200,112 l24,0" stroke="#9a6b1a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M356,190 l6,18" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M300,252 l-24,0" stroke="#1d4c66" stroke-width="1.5" marker-end="url(#ar)"/>
 <circle cx="98" cy="112" r="3.2" fill="#9a6b1a"/><circle cx="330" cy="112" r="3.2" fill="#9a6b1a"/>
 <circle cx="372" cy="252" r="3.4" fill="#a8322a"/><circle cx="96" cy="252" r="3.4" fill="#1d4c66"/>
 <text x="104" y="106" ${lb}>4</text><text x="336" y="106" ${lb}>1</text>
 <text x="380" y="264" ${lb}>2</text><text x="78" y="266" ${lb}>3</text>
 <text x="150" y="104" fill="#9a6b1a" font-family="Segoe UI" font-size="10">4→1 锅炉（定压加热，v 急剧增大）</text>
 <text x="386" y="180" fill="#a8322a" font-family="Segoe UI" font-size="10">1→2 汽轮机</text>
 <text x="150" y="272" fill="#1d4c66" font-family="Segoe UI" font-size="10">2→3 凝汽器（定压凝结）</text>
 <text x="60" y="338" fill="#1b1e23" font-family="Segoe UI" font-size="11">p–v 图上 3→4（泵）几乎是一条竖直线：v 几乎不变、p 大幅升高——这正是泵功很小的原因</text>
 <text x="60" y="358" fill="#7a8089" font-family="Segoe UI" font-size="10.5">饱和液线贴近 v 轴（液体比容极小），干饱和蒸汽线向外张开，中间就是两相区</text>
</svg>`;

/* ---- 再热循环 T-s ---- */
DIAG.reheatTS = `<svg viewBox="0 0 620 380" width="620">${AXV}
 <line x1="60" y1="300" x2="560" y2="300" ${ax}/>
 <line x1="60" y1="300" x2="60" y2="30" ${ax}/>
 <text x="544" y="318" ${lb}>s</text><text x="42" y="36" ${lb}>T</text>
 <path d="M140,280 C200,220 262,150 312,104" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M312,104 C380,152 452,220 512,280" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="318" y="98" fill="#8c8578" font-family="Segoe UI" font-size="10">C</text>
 <line x1="120" y1="168" x2="520" y2="168" ${std}/>
 <line x1="120" y1="256" x2="540" y2="256" ${std}/>
 <text x="524" y="164" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;再热</text>
 <text x="544" y="252" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <!-- 循环 -->
 <path d="M388,76 L388,168" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M388,168 L470,142" fill="none" stroke="#9a6b1a" stroke-width="2.4"/>
 <path d="M470,142 L470,256" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M470,256 L160,256" fill="none" stroke="#1d4c66" stroke-width="2.2"/>
 <path d="M160,256 L157,247" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M157,247 C182,212 222,182 270,166" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M270,166 L360,168" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M360,168 C374,142 384,104 388,76" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M388,110 l0,22" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <path d="M470,180 l0,22" stroke="#a8322a" stroke-width="1.5" marker-end="url(#ar)"/>
 <circle cx="388" cy="76" r="3.4" fill="#a8322a"/><circle cx="388" cy="168" r="3.4" fill="#a8322a"/>
 <circle cx="470" cy="142" r="3.4" fill="#9a6b1a"/><circle cx="470" cy="256" r="3.4" fill="#a8322a"/>
 <circle cx="160" cy="256" r="3.4" fill="#1d4c66"/>
 <text x="396" y="70" ${lb}>1</text><text x="372" y="182" ${lb}>a</text>
 <text x="478" y="136" ${lb}>b</text><text x="478" y="270" ${lb}>2</text>
 <text x="142" y="270" ${lb}>3</text>
 <text x="392" y="150" fill="#9a6b1a" font-family="Segoe UI" font-size="10">b→a 再热</text>
 <text x="476" y="200" fill="#a8322a" font-family="Segoe UI" font-size="10">b→2 低压缸</text>
 <text x="396" y="110" fill="#a8322a" font-family="Segoe UI" font-size="10">1→a 高压缸</text>
 <text x="60" y="342" fill="#1b1e23" font-family="Segoe UI" font-size="11">再热把膨胀线整体向右推：a 点先到再热器升温，再沿 b→2 膨胀，使 2 点落在更干的区域（x&#8202;2 提高）</text>
 <text x="60" y="362" fill="#7a8089" font-family="Segoe UI" font-size="10.5">代价是 q&#8202;1 增加（多了一段 a→b 加热），所以热效率不一定提高，要看再热压力选得对不对</text>
</svg>`;

/* ---- 再热循环 p-v ---- */
DIAG.reheatPV = `<svg viewBox="0 0 620 380" width="620">${AXV}
 <line x1="60" y1="300" x2="560" y2="300" ${ax}/>
 <line x1="60" y1="300" x2="60" y2="30" ${ax}/>
 <text x="544" y="318" ${lb}>v</text><text x="42" y="36" ${lb}>p</text>
 <path d="M96,294 C96,226 110,150 190,108" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M190,108 C280,152 360,222 450,294" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="196" y="102" fill="#8c8578" font-family="Segoe UI" font-size="10">C</text>
 <line x1="72" y1="124" x2="520" y2="124" ${std}/>
 <line x1="72" y1="216" x2="540" y2="216" ${std}/>
 <line x1="72" y1="268" x2="540" y2="268" ${std}/>
 <text x="524" y="120" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;1</text>
 <text x="544" y="212" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;再热</text>
 <text x="544" y="264" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <path d="M96,268 L98,124" fill="none" stroke="#9a6b1a" stroke-width="2.4"/>
 <path d="M98,124 L330,124" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M330,124 C344,160 356,190 360,216" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M360,216 L432,216" fill="none" stroke="#9a6b1a" stroke-width="2.4"/>
 <path d="M432,216 C444,240 452,256 458,268" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M458,268 L96,268" fill="none" stroke="#1d4c66" stroke-width="2.2"/>
 <circle cx="98" cy="124" r="3.2" fill="#9a6b1a"/><circle cx="330" cy="124" r="3.2" fill="#9a6b1a"/>
 <circle cx="360" cy="216" r="3.2" fill="#a8322a"/><circle cx="432" cy="216" r="3.2" fill="#9a6b1a"/>
 <circle cx="458" cy="268" r="3.4" fill="#a8322a"/><circle cx="96" cy="268" r="3.4" fill="#1d4c66"/>
 <text x="104" y="118" ${lb}>4</text><text x="336" y="118" ${lb}>1</text>
 <text x="366" y="210" ${lb}>a</text><text x="438" y="210" ${lb}>b</text>
 <text x="466" y="280" ${lb}>2</text><text x="78" y="282" ${lb}>3</text>
 <text x="196" y="116" fill="#9a6b1a" font-family="Segoe UI" font-size="10">4→1 锅炉</text>
 <text x="368" y="238" fill="#9a6b1a" font-family="Segoe UI" font-size="10">a→b 再热器（定压）</text>
 <text x="60" y="342" fill="#1b1e23" font-family="Segoe UI" font-size="11">p–v 图上再热段 a→b 是一条水平线：压力不变、比容增大，说明再热器里蒸汽在"边加热边膨胀"</text>
</svg>`;

/* ---- 回热循环 T-s ---- */
DIAG.regenTS = `<svg viewBox="0 0 620 380" width="620">${AXV}
 <line x1="60" y1="300" x2="560" y2="300" ${ax}/>
 <line x1="60" y1="300" x2="60" y2="30" ${ax}/>
 <text x="544" y="318" ${lb}>s</text><text x="42" y="36" ${lb}>T</text>
 <path d="M140,280 C200,220 262,150 312,104" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <path d="M312,104 C380,152 452,220 512,280" fill="none" stroke="#8c8578" stroke-width="1.5"/>
 <text x="318" y="98" fill="#8c8578" font-family="Segoe UI" font-size="10">C</text>
 <line x1="120" y1="168" x2="520" y2="168" ${std}/>
 <line x1="120" y1="262" x2="540" y2="262" ${std}/>
 <text x="524" y="164" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;抽汽</text>
 <text x="544" y="258" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p&#8202;2</text>
 <path d="M388,76 L388,262" fill="none" stroke="#a8322a" stroke-width="2.2"/>
 <path d="M388,262 L160,262" fill="none" stroke="#1d4c66" stroke-width="2.2"/>
 <path d="M160,262 L157,253" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M157,253 C176,224 208,196 246,172" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M246,172 L360,168" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M360,168 C374,142 384,104 388,76" fill="none" stroke="#9a6b1a" stroke-width="2.2"/>
 <path d="M388,180 L246,172" fill="none" stroke="#1d4c66" stroke-width="1.6" stroke-dasharray="5 4"/>
 <circle cx="388" cy="76" r="3.4" fill="#a8322a"/><circle cx="388" cy="168" r="3.4" fill="#1d4c66"/>
 <circle cx="388" cy="262" r="3.4" fill="#a8322a"/><circle cx="160" cy="262" r="3.4" fill="#a8322a"/>
 <circle cx="246" cy="172" r="3.4" fill="#9a6b1a"/>
 <text x="396" y="70" ${lb}>1</text><text x="396" y="162" ${lb}>a</text>
 <text x="396" y="276" ${lb}>2</text><text x="142" y="276" ${lb}>3</text><text x="228" y="166" ${lb}>b</text>
 <text x="300" y="164" fill="#1d4c66" font-family="Segoe UI" font-size="10">α 抽汽 → 加热器</text>
 <text x="240" y="196" fill="#9a6b1a" font-family="Segoe UI" font-size="10">给水被加热到 b</text>
 <text x="60" y="342" fill="#1b1e23" font-family="Segoe UI" font-size="11">回热把"2→3 的低温放热"挪去加热给水：外部吸热从 3→1 缩短为 b→1，q&#8202;1 减小而 w&#8202;net 几乎不变</text>
 <text x="60" y="362" fill="#7a8089" font-family="Segoe UI" font-size="10.5">虚线 a→b 是抽汽与凝结水在混合式加热器中的不可逆混合过程，T–s 图上不能用实线连</text>
</svg>`;

/* ---- 水蒸气 p-v 图上的五个状态 ---- */
DIAG.steamPV = `<svg viewBox="0 0 620 340" width="620">${AXV}
 <line x1="60" y1="284" x2="560" y2="284" ${ax}/>
 <line x1="60" y1="284" x2="60" y2="30" ${ax}/>
 <text x="544" y="302" ${lb}>v</text><text x="42" y="36" ${lb}>p</text>
 <path d="M92,280 C92,206 108,128 192,86" fill="none" stroke="#8c8578" stroke-width="1.6"/>
 <path d="M192,86 C286,134 366,208 452,280" fill="none" stroke="#8c8578" stroke-width="1.6"/>
 <text x="198" y="80" fill="#8c8578" font-family="Segoe UI" font-size="10.5">C 临界点</text>
 <line x1="70" y1="140" x2="540" y2="140" ${std}/>
 <text x="546" y="136" fill="#8c8578" font-family="Segoe UI" font-size="10.5">p = 定值</text>
 <circle cx="88" cy="140" r="3.4" fill="#1d4c66"/><circle cx="106" cy="140" r="3.4" fill="#2c6149"/>
 <circle cx="214" cy="140" r="3.4" fill="#2c6149"/><circle cx="330" cy="140" r="3.4" fill="#9a6b1a"/>
 <circle cx="430" cy="140" r="3.4" fill="#a8322a"/>
 <text x="72" y="132" fill="#1d4c66" font-family="Segoe UI" font-size="10.5" font-weight="600">①</text>
 <text x="102" y="132" fill="#2c6149" font-family="Segoe UI" font-size="10.5" font-weight="600">②</text>
 <text x="208" y="132" fill="#2c6149" font-family="Segoe UI" font-size="10.5" font-weight="600">③</text>
 <text x="324" y="132" fill="#9a6b1a" font-family="Segoe UI" font-size="10.5" font-weight="600">④</text>
 <text x="424" y="132" fill="#a8322a" font-family="Segoe UI" font-size="10.5" font-weight="600">⑤</text>
 <text x="76" y="166" fill="#1d4c66" font-family="Segoe UI" font-size="10">①未饱和水</text>
 <text x="96" y="182" fill="#2c6149" font-family="Segoe UI" font-size="10">②饱和水</text>
 <text x="200" y="166" fill="#2c6149" font-family="Segoe UI" font-size="10">③湿蒸汽</text>
 <text x="322" y="182" fill="#9a6b1a" font-family="Segoe UI" font-size="10">④干饱和蒸汽</text>
 <text x="418" y="166" fill="#a8322a" font-family="Segoe UI" font-size="10">⑤过热蒸汽</text>
 <text x="60" y="320" fill="#1b1e23" font-family="Segoe UI" font-size="11">定压加热水：①→② 比容略增（液体受热膨胀）→ ②→④ 定温定压汽化（比容剧增，穿过两相区）→ ④→⑤ 过热</text>
 <text x="60" y="336" fill="#7a8089" font-family="Segoe UI" font-size="10.5">关键：汽化段在 p–v 图上是一条水平线，但在 v 方向上跨度极大（约 1000 倍），这是水蒸气 p–v 图难画的原因</text>
</svg>`;

/* ================= 卷 G（深入）：热二 & 蒸汽循环 · 内容 ================= */

PAPERS.push({
 id:'G', k:'▲', short:'热二 & 蒸汽循环', title:'深入 · 热力学第二定律 与 蒸汽动力循环',
 meta:'六张图、逐量标注 · 把"每个符号在图上哪一段"讲清楚',
 code:'配合 A、B、C、D 卷相关题目使用', score:'专题', unit:'讲已读', total:15,
 sections:[
 {roman:'Ⅰ',idx:'1',title:'为什么必须有第二定律',score:'2 讲',items:[

  {n:'1',q:'第一定律管"收支"，但它管不了三件事',
   a:'第一定律只管能量守恒，既不能判断过程能否发生，也不能给出效率上限，更解释不了"为什么摩擦生热容易、热生功难"',
   sol:`<p>第一定律是一个<b>记账式</b>的定律：能量进来多少、出去多少，账能平就行。它<b>不区分能量的品质</b>。于是留下三个它答不了的问题：</p>
   ${TBL(['问题','第一定律的回答','真实答案'],[
     ['热量能否自发从低温物体流向高温物体？','可以，只要能量守恒','<b>不能</b>（克劳修斯说法）'],
     ['能否把海水里的热量全部取出变成功？','可以，只要 Q = W','<b>不能</b>，必须有冷源（开尔文说法）'],
     ['热机效率有没有上限？','没有，只要 Q₁ − Q₂ = W','<b>有</b>，η ≤ 1 − T_L/T_H（卡诺）']
   ])}
   <div class="h">两个"永动机"的区分（常考）</div>
   <ul>
   <li><b>第一类永动机</b>：不消耗能量而持续做功 ⇒ 违反<b>第一定律</b>（能量凭空产生）。</li>
   <li><b>第二类永动机</b>：从单一热源吸热、全部变成功、不产生其他影响 ⇒ 违反<b>第二定律</b>。它<b>不违反</b>第一定律，所以更"隐蔽"。</li>
   </ul>
   <div class="key"><b>一句话记住</b>：第一定律说"<b>能量不能凭空产生</b>"，第二定律说"<b>能量的品质只会贬值</b>"。<br>
   后者才是"为什么效率永远小于 1""为什么必须有两个热源"的根本原因。</div>`},

  {n:'2',q:'四种表述，其实是同一件事',
   a:'克劳修斯说法（热不能自发由冷到热）⇔ 开尔文–普朗克说法（单一热源不能全变功）⇔ 熵增原理 ⇔ 喀喇氏说法；四者可互相反证',
   sol:`<div class="h">① 克劳修斯说法（1850）</div>
   <p><b>不可能把热量从低温物体传到高温物体而不引起其他变化。</b></p>
   <p>注意"不引起其他变化"——冰箱可以把热从冷藏室搬到室外，但<b>消耗了电功</b>，所以不算违反。</p>
   <div class="h">② 开尔文–普朗克说法（1851）</div>
   <p><b>不可能制造出从单一热源吸热、使之完全变为功而不产生其他影响的热机。</b></p>
   <p>即第二类永动机不可能。注意"单一热源"——如果允许两个热源，卡诺热机就能工作，只是效率小于 1。</p>
   <div class="h">③ 熵增原理（推论）</div>
   ${F(R`\Delta S_{iso}\ge0\quad\text{（可逆取等号）}`)}
   <div class="h">④ 喀喇氏说法（1909，公理化表述）</div>
   <p>在系统任意给定状态的邻域内，总存在<b>绝热不可达</b>的状态。</p>
   <div class="h">等价性怎么证：一律反证</div>
   <p>例如"克劳修斯 ⇒ 开尔文"：假设存在一台能从单一热源吸热全部变功的热机，用它做的功去驱动一台制冷机，把热量从低温搬到高温——净效果就是"热自发从冷到热"，与克劳修斯说法矛盾。其余各组同理。</p>
   ${TBL(['表述','关键词','对应考点'],[
     ['克劳修斯','热不能自发由冷到热','冰箱必须耗功、热泵必须耗功'],
     ['开尔文–普朗克','单一热源不能全变功','第二类永动机、循环可实现性判断'],
     ['熵增原理','<i>ΔS</i><sub>iso</sub> ≥ 0','绝大多数计算题的落点'],
     ['喀喇氏','绝热不可达','概念题，偶尔考']
   ])}
   <div class="key"><b>A 卷简答第 4 题</b>考的正是"写出三种表述"；<b>D 卷填空第 4 题</b>考"三个数学表达式"。两题答案都是上面这几条，只是<b>文字版</b>与<b>公式版</b>的区别。</div>`}
 ]},

 {roman:'Ⅱ',idx:'2',title:'卡诺循环：一切热机的天花板',score:'3 讲',items:[

  {n:'3',q:'卡诺循环：四个过程，两张图',
   a:'两个等温 + 两个等熵；T–s 图上是矩形，p–v 图上是"两条缓曲线夹两条陡曲线"',
   sol:`<div class="h">T–s 图（看"热"）</div>
   ${dg('carnotTS','卡诺循环 T–s 图：矩形，高 = T_H − T_L，宽 = Δs')}
   ${TBL(['过程','图上是什么','物理含义','换热量'],[
     ['1→2','顶部水平线，向右','在 <i>T</i><sub>H</sub> 下<b>定温吸热</b>（锅炉/燃烧）','<i>q</i><sub>1</sub> = <i>T</i><sub>H</sub>Δ<i>s</i>'],
     ['2→3','右侧竖直线，向下','<b>定熵膨胀</b>（汽轮机），只降温不换热','<i>q</i> = 0'],
     ['3→4','底部水平线，向左','在 <i>T</i><sub>L</sub> 下<b>定温放热</b>（凝汽器）','<i>q</i><sub>2</sub> = <i>T</i><sub>L</sub>Δ<i>s</i>'],
     ['4→1','左侧竖直线，向上','<b>定熵压缩</b>（泵/压气机），只升温不换热','<i>q</i> = 0']
   ])}
   <div class="h">p–v 图（看"功"）</div>
   ${dg('carnotPV','卡诺循环 p–v 图：缓的是等温线，陡的是绝热线')}
   ${TBL(['图上读什么','怎么看'],[
     ['哪条是等温线','<b>缓</b>的那两条（<i>pv</i> = 常数），1→2 与 3→4'],
     ['哪条是绝热线','<b>陡</b>的那两条（<i>pv<sup>k</sup></i> = 常数），2→3 与 4→1'],
     ['围成的面积','<b>循环净功</b> <i>w</i><sub>net</sub>，顺时针为正'],
     ['为什么 1→2 比 2→3 缓','因为 <i>k</i> = 1.4 &gt; 1，绝热线比等温线陡']
   ])}
   <div class="key"><b>两张图的关系</b>：T–s 图上矩形面积 = <i>q</i><sub>1</sub> − <i>q</i><sub>2</sub> = <i>w</i><sub>net</sub>；p–v 图上闭合曲线面积 = <i>w</i><sub>net</sub>。<b>两张图算出来的净功必须相等</b>——这是检验作图是否正确的自检方法。</div>`},

  {n:'4',q:'卡诺效率：推导只用了两行',
   a:'η_c = 1 − T_L/T_H，与工质无关、与吸热量无关，只由两个热源温度决定',
   sol:`<div class="h">① 从定义出发</div>
   ${F(R`\eta_c=\frac{w_{net}}{q_1}=\frac{q_1-q_2}{q_1}=1-\frac{q_2}{q_1}`)}
   <div class="h">② 代入等温过程的换热量</div>
   ${F(R`q_1=T_H\Delta s,\qquad q_2=T_L\Delta s`)}
   <p>两式的 Δ<i>s</i> 是同一个（矩形同宽），直接约掉：</p>
   ${F(R`\eta_c=1-\frac{T_L\Delta s}{T_H\Delta s}=1-\frac{T_L}{T_H}`)}
   <div class="h">③ 三个必须记住的推论</div>
   <ol>
   <li><b>与工质无关</b>：推导中只出现 <i>T</i> 和 Δ<i>s</i>，没有任何工质参数。水、空气、氟利昂，效率都一样。<b>B 卷填空第 4 题</b>问的就是这一点。</li>
   <li><b>与吸热量无关</b>：Δ<i>s</i> 被约掉了。<b>这与奥托循环"效率与 <i>q</i>₁ 无关"是同一类结论</b>，但原因不同。</li>
   <li><b>η &lt; 1 恒成立</b>：只要 <i>T</i><sub>L</sub> &gt; 0，效率必小于 1。想让 η = 1，必须 <i>T</i><sub>L</sub> = 0 K，不可能。</li>
   </ol>
   <div class="h">数字感</div>
   ${TBL(['T_H','T_L','η_c'],[
     ['1000 K','300 K（环境）','70.0%'],
     ['600 K（超超临界蒸汽）','300 K','50.0%'],
     ['350 K（热水）','300 K','14.3%'],
     ['2000 K（燃气轮机燃烧室）','300 K','85.0%']
   ])}
   <div class="warn"><b>⚠ 常见误用</b>：<i>T</i> 必须用<b>热力学温度 K</b>。用 ℃ 代入会算出荒谬结果（例如 1000 ℃ 与 27 ℃ 代入得 1 − 27/1000 = 97.3%，实际是 1 − 300/1273 = 76.4%）。</div>`},

  {n:'5',q:'逆卡诺循环：把机器倒过来开',
   a:'同一个矩形反着走：消耗功 w_net，从低温吸热 q₂、向高温放热 q₁；制冷系数 ε = T_L/(T_H−T_L)，可大于 1',
   sol:`<p>把卡诺循环的箭头全部反向（逆时针），就得到<b>制冷机/热泵</b>：</p>
   ${dg('carnotTS','把这张图的箭头全部反向就是逆卡诺循环：耗功 w，从低温吸 q₂、向高温放 q₁')}
   ${TBL(['参数','定义式','含义','典型值'],[
     ['制冷系数 <i>ε</i>','<i>q</i><sub>2</sub>/<i>w</i><sub>net</sub> = <i>T</i><sub>L</sub>/(<i>T</i><sub>H</sub>−<i>T</i><sub>L</sub>)','每花 1 kJ 功，能从冷库取走多少 kJ 热','空调 3～4'],
     ['热泵系数 <i>ε</i>′','<i>q</i><sub>1</sub>/<i>w</i><sub>net</sub> = <i>T</i><sub>H</sub>/(<i>T</i><sub>H</sub>−<i>T</i><sub>L</sub>)','每花 1 kJ 功，能往室内送多少 kJ 热','<i>ε</i>′ = <i>ε</i> + 1']
   ])}
   ${F(R`\varepsilon'=\frac{q_1}{w_{net}}=\frac{q_2+w_{net}}{w_{net}}=\varepsilon+1`)}
   <div class="h">为什么 ε 可以大于 1</div>
   <p>因为分子是"<b>搬运</b>的热量"，分母是"<b>消耗</b>的功"，两者不是同一种东西。<b>空调耗 1 kW 电搬走 3 kW 热</b>，不违反能量守恒——因为那 3 kW 里有 2 kW 本来就是室内的，只是被搬到了室外。</p>
   <div class="h">ε 怎么随温度变（C 卷简答第 1 题）</div>
   ${TBL(['条件','分子 T_L','分母 T_H−T_L','ε 怎么变'],[
     ['室内温度 <i>T</i><sub>L</sub> 降低','减小','增大','<b>减小</b>（设定温度越低越费电）'],
     ['室外温度 <i>T</i><sub>H</sub> 升高','不变','增大','<b>减小</b>（外机越热越费电）']
   ])}
   <div class="key"><b>一句话</b>：制冷系数对两个温度的依赖<b>都是负向</b>的——温差越大，搬运越困难，<i>ε</i> 越小。这就是空调"三伏天最费电、冬天设定越低越费电"的热力学根据。</div>
   <div class="warn"><b>⚠ A 卷填空第 5 题</b>："热源温度是冷源温度的 3 倍，制冷效率 = ?" —— <i>ε</i> = <i>T</i><sub>L</sub>/(3<i>T</i><sub>L</sub> − <i>T</i><sub>L</sub>) = <b>0.5</b>，不是 1 − 1/3 = 0.667。题目问的是<b>制冷系数</b>，别套热机效率公式。</div>`}
 ]},

 {roman:'Ⅲ',idx:'3',title:'熵与㶲：把"不可逆"变成可计算的数',score:'3 讲',items:[

  {n:'6',q:'熵是怎么被"发明"出来的',
   a:'克劳修斯发现 ∮δq/T 对可逆循环恒为零，于是断定存在一个状态参数 s，其微分 ds = (δq/T)_rev',
   sol:`<div class="h">① 起点：克劳修斯积分</div>
   ${F(R`\oint\frac{\delta q}{T}\le0\quad\begin{cases}=0 & \text{可逆循环}\\<0 & \text{不可逆循环}\end{cases}`)}
   <p>对<b>可逆</b>循环积分为零，说明被积函数 δ<i>q</i>/<i>T</i> 的积分<b>与路径无关</b>——这正是"存在势函数"的判据。</p>
   <div class="h">② 定义</div>
   ${F(R`\mathrm{d}s=\left(\frac{\delta q}{T}\right)_{rev}\qquad \Delta s=\int_1^2\left(\frac{\delta q}{T}\right)_{rev}`)}
   <p>下标 <i>rev</i> 表示<b>沿可逆路径</b>积分。这是熵的定义式，<b>B 卷选择第 6 题</b>就考这一点（选"ds = δq<sub>rev</sub>/T"，不是 δq/T）。</p>
   <div class="h">③ 三个性质</div>
   <ul>
   <li><b>状态参数</b>：Δ<i>s</i> 只取决于初终态，与路径无关。任何循环 ∮d<i>s</i> = 0（可逆不可逆都一样）。</li>
   <li><b>广延量</b>：<i>S</i> = <i>ms</i>，单位 J/K；比熵 <i>s</i> 单位 kJ/(kg·K)。</li>
   <li><b>不可逆过程的 Δs 照样能算</b>：设计一条连接同样初终态的<b>可逆路径</b>去积分即可。<b>C 卷判断第 11 题</b>"不可逆过程的熵变无法计算"——<b>错</b>，正是考这一点。</li>
   </ul>
   <div class="h">④ 理想气体的两条实用公式</div>
   ${F(R`\Delta s=c_v\ln\frac{T_2}{T_1}+R\ln\frac{v_2}{v_1}`)}
   ${F(R`\Delta s=c_p\ln\frac{T_2}{T_1}-R\ln\frac{p_2}{p_1}`)}
   <div class="key"><b>怎么选</b>：题目给 <i>v</i> 变化就用第一条，给 <i>p</i> 变化就用第二条；两条算出来必然相同（可互相验证）。</div>`},

  {n:'7',q:'熵方程：熵流与熵产，两个来源要分清',
   a:'ds = δq/T_b + δs_g；第一项是"随热流进出的熵"（可正可负），第二项是"过程不可逆自己产生的熵"（恒非负）',
   sol:`${F(R`\mathrm{d}s=\underbrace{\frac{\delta q}{T_b}}_{\text{熵流 }\delta s_f}+\underbrace{\delta s_g}_{\text{熵产}\ \ge0}`)}
   ${TBL(['项','叫什么','由什么引起','能否为负'],[
     ['<i>δq</i>/<i>T</i><sub>b</sub>','<b>熵流</b>','与外界换热（<i>T</i><sub>b</sub> 是边界温度）','<b>可以</b>（放热时为负）'],
     ['<i>δs<sub>g</sub></i>','<b>熵产</b>','摩擦、温差传热、自由膨胀等一切不可逆因素','<b>不可以</b>，恒 ≥ 0']
   ])}
   <div class="h">三个直接推论（都是判断题考点）</div>
   <ol>
   <li><b>绝热</b>（<i>δq</i> = 0）⇒ d<i>s</i> = <i>δs<sub>g</sub></i> ≥ 0：绝热系统熵只增不减。<b>C 卷选择第 7 题</b>。</li>
   <li><b>可逆绝热</b> ⇒ d<i>s</i> = 0：这就是"定熵过程"的定义。</li>
   <li><b>吸热</b>（<i>δq</i> &gt; 0）⇒ 熵必增（两项都非负，第一项为正）。<b>C 卷判断第 13 题</b>判"对"。</li>
   </ol>
   <div class="h">反过来不成立（易错）</div>
   <ul>
   <li>熵增 ⇏ 吸热：绝热不可逆过程也熵增（如节流、自由膨胀）。</li>
   <li>放热 ⇏ 熵减：绝热放热不可能，但<b>有摩擦的放热</b>可能熵增（熵产抵消了熵流）。</li>
   </ul>
   <div class="key"><b>孤立系熵增原理</b>是熵方程的特例：孤立系 <i>δq</i> = 0 ⇒ <i>ΔS</i><sub>iso</sub> = <i>S</i><sub>g</sub> ≥ 0。<b>注意"孤立系"三个字不能省</b>——一般系统放热时熵是可以减小的（C 卷判断第 6 题的陷阱）。</div>`},

  {n:'8',q:'㶲损失：把熵增换算成"白扔掉的功"',
   a:'Π = T₀·ΔS_iso，等于"本可做出的最大功"减"实际做出的功"；四套卷考了 3 次',
   sol:`<div class="h">两种算法（互为验算）</div>
   <p><b>算法一：从熵增算</b></p>
   ${F(R`\Pi=T_0\,\Delta S_{iso}`)}
   <p><b>算法二：从功差算</b></p>
   ${F(R`\Pi=W_{\max}-W_{net}`)}
   <p>两种算法结果必须相等，<b>这就是最好的自检</b>。C 卷计算 2 与 D 卷计算 2 都可以这样互检。</p>
   <div class="h">典型算例（D 卷计算 2）</div>
   ${TBL(['步骤','算式','结果'],[
     ['热源放热 1000 kJ/kg @773 K','<i>ΔS</i><sub>热源</sub> = −1000/773','−1.2934 kJ/(kg·K)'],
     ['冷源吸热 408.5 kJ/kg @293 K','<i>ΔS</i><sub>冷源</sub> = +408.5/293.15','+1.3934 kJ/(kg·K)'],
     ['工质循环一周','<i>ΔS</i><sub>工质</sub> = 0','0'],
     ['孤立系合计','<i>ΔS</i><sub>iso</sub>','+0.1 kJ/(kg·K)'],
     ['㶲损失','<i>Π</i> = 293.15 × 0.1','<b>29.3 kJ/kg</b>'],
     ['验算','620.8（卡诺）− 591.5（实际）','<b>29.3</b> ✓']
   ])}
   <div class="h">孤立系怎么划（关键技巧）</div>
   <p>把所有<b>参与换热的热源、冷源、环境</b>都划进来，再加上工质本身：</p>
   ${F(R`\Delta S_{iso}=\Delta S_{\text{热源}}+\Delta S_{\text{冷源}}+\Delta S_{\text{工质}}`)}
   <p>工质走完一个循环，<i>ΔS</i> = 0，所以只剩热源和冷源两项——<b>这就是为什么循环的㶲损失只跟两边换热有关</b>。</p>
   <div class="warn"><b>⚠ 只算"工质"的熵变是不够的</b>。工质循环一周熵变为零，如果只算它，会得出"没有损失"的错误结论。<b>必须划孤立系。</b></div>`}
 ]},

 {roman:'Ⅳ',idx:'4',title:'蒸汽动力循环：为什么图长得不一样',score:'5 讲',items:[

  {n:'9',q:'水蒸气的 p–v 图：先学会读这张"穹顶图"',
   a:'左支是饱和液线、右支是干饱和蒸汽线、顶点是临界点；穹顶内是两相区，定压线在这里是水平的',
   sol:`${dg('steamPV','水蒸气 p–v 图上的定压加热过程：①未饱和水 → ②饱和水 → ③湿蒸汽 → ④干饱和蒸汽 → ⑤过热蒸汽')}
   ${TBL(['图上元素','含义','为什么长这样'],[
     ['左支（几乎竖直）','<b>饱和液线</b>','液体几乎不可压缩，<i>v</i>′ 极小且随 <i>T</i> 变化很小'],
     ['右支（向外张开）','<b>干饱和蒸汽线</b>','蒸汽 <i>v</i>″ 随温度升高急剧增大'],
     ['顶点 C','<b>临界点</b>（水：22.06 MPa、374.15 ℃）','此处 <i>v</i>′ = <i>v</i>″，汽液不分，潜热为零'],
     ['穹顶内部','<b>汽液两相区</b>','湿蒸汽，<i>p</i> 与 <i>T</i> 不独立'],
     ['穹顶外右侧','<b>过热蒸汽区</b>','单相气体，<i>p</i>、<i>T</i> 独立'],
     ['穹顶外左上','<b>压缩水区</b>','单相液体，未饱和']
   ])}
   <div class="h">为什么水蒸气的 p–v 图"很难看"</div>
   <p>汽化时比容从 0.001 m³/kg 涨到几十 m³/kg，<b>跨度上万倍</b>。所以教材几乎不用水蒸气的 p–v 图做工程计算，改用 <b>T–s 图</b>和 <b>h–s 图</b>。</p>
   <div class="key"><b>但 p–v 图仍然要会看</b>：<b>D 卷填空第 5 题</b>问"五个典型状态"，就是这张图上的 ①②③④⑤。<b>C 卷填空第 5 题</b>问"三个相区"，是同一件事的粗粒度版本。<br>
   记法：<b>①过冷水 → ②饱和水 →（湿蒸汽）→ ④干饱和蒸汽 → ⑤过热蒸汽</b>，五个名字、三段过程。</div>
   <div class="warn"><b>⚠ p–v 图上"水平线"的含义</b>：在两相区内，定压线同时是定温线，所以在 p–v 图上表现为<b>水平线</b>（压力不变、比容剧增）。这跟理想气体完全不同，是水蒸气题的标志性特征。</div>`},

  {n:'10',q:'朗肯循环：四个设备、四个过程、两张图',
   a:'泵（定熵压缩）→ 锅炉（定压吸热）→ 汽轮机（定熵膨胀）→ 凝汽器（定压放热）',
   sol:`<div class="h">T–s 图（工程上最常用）</div>
   ${dg('rankineTS','朗肯循环 T–s 图：1 新汽 → 2 乏汽 → 3 凝结水 → 4 泵出口')}
   ${TBL(['点 / 过程','在图上的位置','设备','状态'],[
     ['<b>1</b>','右上，穹顶外','汽轮机进口','高温高压<b>过热蒸汽</b>'],
     ['1→2','竖直线，向下穿过穹顶','<b>汽轮机</b>','定熵膨胀，<i>s</i> 不变，落到穹顶内 ⇒ 湿蒸汽'],
     ['<b>2</b>','右下，穹顶内','汽轮机出口（乏汽）','低压<b>湿蒸汽</b>，干度 <i>x</i>₂'],
     ['2→3','水平线，向左','<b>凝汽器</b>','定压定温凝结，放热 <i>q</i>₂ 给冷却水'],
     ['<b>3</b>','左下，饱和液线上','凝结水泵进口','低压<b>饱和水</b>'],
     ['3→4','几乎竖直的一小段','<b>给水泵</b>','定熵压缩，<i>v</i> 几乎不变、<i>p</i> 大幅升高'],
     ['4→1','贴着饱和液线上升 → 水平穿过两相区 → 过热区上升','<b>锅炉 + 过热器</b>','定压吸热 <i>q</i>₁']
   ])}
   <div class="h">p–v 图（理解泵功为什么可以忽略）</div>
   ${dg('rankinePV','朗肯循环 p–v 图：3→4 泵几乎是一条竖直线，位移极小')}
   <p>泵的功 <i>w</i><sub>p</sub> = ∫<i>v</i>d<i>p</i>，因为液体 <i>v</i> ≈ 0.001 m³/kg，即使压升 20 MPa，泵功也只有约 20 kJ/kg，<b>不到汽轮机功的 2%</b>。这就是"忽略泵功"这个常见近似的依据。</p>
   <div class="key"><b>两个面积要认清</b>：<br>
   ① <b>T–s 图上循环围成的面积</b> = 净功 <i>w</i><sub>net</sub>；<br>
   ② <b>1→2→3→4 下方到横轴</b>的那块大区域不是吸热量，别搞混——<b>吸热量是 4→1 曲线下方的面积</b>，横跨 s 方向。</div>`},

  {n:'11',q:'朗肯循环的计算链条：五步走，一步都不能跳',
   a:'查表定 h₁、s₁ → 算 x₂ → 算 h₂ → 算 q₁、q₂、w_t → 算 η 与气耗率 d',
   sol:`<div class="h">第 1 步：查表定新汽参数</div>
   <p>由 <i>p</i>₁、<i>t</i>₁ 查过热蒸汽表得 <b><i>h</i>₁、<i>s</i>₁</b>（题目一般直接给）。</p>
   <div class="h">第 2 步：算乏汽干度（本题的核心）</div>
   ${F(R`x_2=\frac{s_1-s'}{s''-s'}`)}
   <p>其中 <i>s</i>′、<i>s</i>″ 是<b>背压 <i>p</i>₂ 下</b>饱和水与干饱和蒸汽的熵。<b><i>s</i>₂ = <i>s</i>₁ 是定熵膨胀的直接结果</b>。</p>
   <div class="h">第 3 步：算乏汽焓</div>
   ${F(R`h_2=h'+x_2\left(h''-h'\right)`)}
   <div class="h">第 4 步：算三个能量量</div>
   ${F(R`w_t=h_1-h_2\qquad q_1=h_1-h_2'\qquad q_2=h_2-h_2'`)}
   <p>（<i>h</i>′₂ 是背压下饱和水焓；忽略泵功时 <i>h</i>₄ ≈ <i>h</i>′₂。）</p>
   <div class="h">第 5 步：算效率与气耗率</div>
   ${F(R`\eta_t=\frac{w_t}{q_1}=1-\frac{q_2}{q_1}\qquad d=\frac{3600}{w_t}\ \text{kg/(kW·h)}`)}
   <div class="h">符号释义表（背下来）</div>
   ${TBL(['符号','名称','单位','怎么来的'],[
     ['<i>h</i>₁, <i>s</i>₁','新汽焓、新汽熵','kJ/kg, kJ/(kg·K)','查表（题目给）'],
     ['<i>x</i>₂','乏汽干度','—','由 <i>s</i>₂ = <i>s</i>₁ 内插'],
     ['<i>h</i>₂','乏汽焓','kJ/kg','<i>h</i>′ + <i>x</i>₂(<i>h</i>″−<i>h</i>′)'],
     ['<i>h</i>′₂','背压下饱和水焓','kJ/kg','查饱和表'],
     ['<i>w</i><sub>t</sub>','汽轮机比功','kJ/kg','<i>h</i>₁ − <i>h</i>₂'],
     ['<i>q</i>₁','锅炉吸热量','kJ/kg','<i>h</i>₁ − <i>h</i>′₂'],
     ['<i>q</i>₂','凝汽器放热量','kJ/kg','<i>h</i>₂ − <i>h</i>′₂'],
     ['<i>d</i>','气耗率','kg/(kW·h)','3600/<i>w</i><sub>t</sub>']
   ])}
   <div class="key"><b>自检两条</b>：① <i>w</i><sub>t</sub> = <i>q</i>₁ − <i>q</i>₂ 必须成立；② <i>η</i> 用两种算法（<i>w</i>/<i>q</i>₁ 与 1−<i>q</i>₂/<i>q</i>₁）必须一致。<b>B 卷计算 2</b>（η = 37.2%）与 <b>D 卷计算 3</b>（回热，η = 38.8%）都按这个链条走。</div>`},

  {n:'12',q:'为什么工程上不用卡诺循环？',
   a:'卡诺循环要求"湿蒸汽压缩"，压缩机和汽轮机都受不了；且它在 T–s 图上的上限受临界点限制，实际做不到',
   sol:`<div class="h">理论最优 ≠ 工程可行</div>
   <p>在同样的 <i>T</i><sub>H</sub>、<i>T</i><sub>L</sub> 之间，卡诺循环效率最高。但如果照它造机器，会遇到三个硬障碍：</p>
   <ol>
   <li><b>4→1 是"湿蒸汽压缩"</b>：卡诺循环要把湿蒸汽（含大量液滴）压缩到锅炉压力。<b>压缩机不能压缩两相混合物</b>——液滴会打坏叶片、造成严重气蚀。</li>
   <li><b>2→3 在湿蒸汽区膨胀</b>：汽轮机末级叶片长期在湿度 &gt; 15% 的蒸汽中工作，水滴高速撞击会造成严重冲蚀。</li>
   <li><b>T–s 图上的"死区"</b>：卡诺循环被限制在饱和曲线以下，最高温度只能到临界温度（374 ℃）。而实际机组主蒸汽温度已达 600 ℃，必须进入<b>过热区</b>才能利用更高的温度。</li>
   </ol>
   <div class="h">朗肯循环做的三处"妥协"</div>
   ${TBL(['环节','卡诺循环','朗肯循环','妥协换来什么'],[
     ['压缩','压缩湿蒸汽','<b>压缩液态水</b>（泵）','泵体小、耗功极小'],
     ['膨胀','在湿蒸汽区结束','从<b>过热区</b>出发膨胀','可用更高初温，提高效率'],
     ['加热','定温吸热','<b>定压</b>加热（含预热、汽化、过热三段）','设备简单，可连续给水']
   ])}
   <div class="key"><b>一句话</b>：朗肯循环<b>牺牲了理论效率</b>（多了 4→5 的预热段，平均吸热温度被拉低），<b>换来了工程可行性</b>。这是"理想 vs 现实"的经典案例，简答题常问。</div>`},

  {n:'13',q:'提高效率的三条路：在 T–s 图上都是"抬高压线、下压底线"',
   a:'提高初温（η↑ 且 x₂↑，两全其美）、提高初压（η↑ 但 x₂↓，受限）、降低背压（η↑，受冷却水温度限制）',
   sol:`${dg('paramTS','提高初温 / 提高初压两种手段在 T–s 图上的位置变化：1 点往哪移，2 点就跟着往哪移')}
   <div class="h">手段一：提高初温 <i>t</i>₁</div>
   <p>1 点沿等压线<b>向右上</b>移动：<i>T̄</i>₁ 升高 ⇒ <b>η↑</b>；膨胀线整体右移 ⇒ <b><i>x</i>₂↑</b>。</p>
   <p><b>两全其美</b>，唯一限制是<b>金属耐高温能力</b>（当前超超临界机组约 600 ℃，用奥氏体耐热钢）。</p>
   <div class="h">手段二：提高初压 <i>p</i>₁</div>
   <p>1 点沿等温线<b>向左移</b>：<i>T̄</i>₁ 升高 ⇒ <b>η↑</b>；但膨胀终点更深地进入湿蒸汽区 ⇒ <b><i>x</i>₂↓</b>。</p>
   <p><b>主要障碍是湿度</b>：一般要求 <i>x</i>₂ ≥ 0.86～0.88。所以提高初压必须<b>配合再热</b>。</p>
   <div class="h">手段三：降低背压 <i>p</i>₂</div>
   <p>放热线<b>下移</b>：<i>T̄</i>₂ 降低 ⇒ <b>η↑</b>。限制是<b>冷却水温度</b>——背压不可能低于冷却水对应的饱和压力（一般 4～6 kPa）。</p>
   ${TBL(['手段','η','x₂','主要限制','配套措施'],[
     ['提高初温 <i>t</i>₁','↑','<b>↑</b>','材料耐热','—'],
     ['提高初压 <i>p</i>₁','↑','<b>↓</b>','末级湿度','<b>再热</b>'],
     ['降低背压 <i>p</i>₂','↑','↓','冷却水温度、真空度','—']
   ])}
   <div class="key"><b>三套卷都考了这道简答</b>（B 简2、C 简2、D 简2），答案几乎一字不差。背这一张表就够：<b>提温两全其美但受材料限制；提压提效但降干度，须配再热；降背压提效但受冷却水限制。</b></div>`}
 ]},

 {roman:'Ⅴ',idx:'5',title:'再热与回热：两种"改良版"朗肯',score:'2 讲',items:[

  {n:'14',q:'再热循环：把膨胀"折"一下，换回干度',
   a:'高压缸膨胀到中间压力 → 回锅炉再加热到初温 → 低压缸继续膨胀；x₂ 显著提高，η 通常也提高',
   sol:`<div class="h">T–s 图</div>
   ${dg('reheatTS','再热循环 T–s 图：1→a 高压缸，a→b 再热器，b→2 低压缸')}
   <div class="h">p–v 图</div>
   ${dg('reheatPV','再热循环 p–v 图：a→b 再热段是一条水平线')}
   ${TBL(['点','状态','说明'],[
     ['<b>1</b>','新汽（高压过热）','主蒸汽'],
     ['<b>a</b>','高压缸排汽（再热压力）','进入再热器'],
     ['<b>b</b>','再热后蒸汽','温度回到 <i>t</i>₁ 或略低'],
     ['<b>2</b>','低压缸排汽（乏汽）','干度比不再热时高 0.10～0.15']
   ])}
   <div class="h">计算链条（多两段）</div>
   ${F(R`w_t=\left(h_1-h_a\right)+\left(h_b-h_2\right)`)}
   ${F(R`q_1=\left(h_1-h'\right)+\left(h_b-h_a\right)`)}
   ${F(R`\eta_t=\frac{w_t}{q_1}\qquad x_2=\frac{s_b-s'}{s''-s'}`)}
   <p>注意 <b><i>x</i>₂ 要用 <i>s_b</i> 算</b>（低压缸进口的熵），不是 <i>s</i>₁。</p>
   <div class="h">为什么能提干度</div>
   <p>不再热时，膨胀从 1 一直到底，终点深在湿区；再热把 b 点推到<b>更高的温度、更大的熵</b>，膨胀线整体右移，终点自然更干。<b>C 卷计算 3</b>的算例：不再热 <i>x</i>₂ = 0.754，再热后 <b>0.871</b>，同时 η 从 44.0% 提到 <b>45.6%</b>。</p>
   <div class="warn"><b>⚠ 再热不一定提效</b>：再热使 <i>q</i>₁ 增加，若再热压力选得太低，<i>q</i>₁ 的增幅超过 <i>w</i><sub>net</sub>，效率反而下降。<b>D 卷判断第 10 题</b>判"对"，就是这个道理。最佳再热压力一般取主蒸汽压力的 <b>20%～30%</b>。</div>`},

  {n:'15',q:'回热循环：用抽汽"预热点火"，把低温放热省下来',
   a:'从汽轮机中间抽一部分蒸汽去加热给水，使锅炉吸热从 3→1 缩短为 b→1，q₁ 减小而 w_net 变化不大 ⇒ η 提高',
   sol:`${dg('regenTS','一次抽汽回热循环 T–s 图：a 抽汽点，b 加热器出口，虚线为不可逆混合')}
   <div class="h">为什么回热能提效（看图就懂）</div>
   <p>朗肯循环里，4→1 的低温段（从 <i>t</i>₃ 加热到 <i>t</i>₅）用的热量温度很低，<b>拉低了平均吸热温度</b>。回热用抽汽的凝结潜热把这段"代劳"了，锅炉只需从 <i>b</i> 点开始加热——<b>相当于把那一段低温吸热从循环里删掉</b>，<i>T̄</i>₁ 因此升高。</p>
   <div class="h">抽汽量 α 的推导（混合式加热器能量平衡）</div>
   ${F(R`\alpha h_a+\left(1-\alpha\right)h_2'=h_b`)}
   ${F(R`\alpha=\frac{h_b-h_2'}{h_a-h_2'}`)}
   ${TBL(['符号','含义','单位'],[
     ['<i>α</i>','抽汽量（每 kg 新汽抽出的份额）','kg/kg，无量纲'],
     ['<i>h<sub>a</sub></i>','抽汽点焓（抽汽压力下的状态）','kJ/kg'],
     ['<i>h</i>′₂','背压下饱和水焓（凝结水）','kJ/kg'],
     ['<i>h<sub>b</sub></i>','加热器出口焓（抽汽压力下饱和水）','kJ/kg']
   ])}
   <div class="h">功、热、效率</div>
   ${F(R`w_t=\left(h_1-h_a\right)+\left(1-\alpha\right)\left(h_a-h_2\right)`)}
   ${F(R`q_1=h_1-h_b\qquad q_2=\left(1-\alpha\right)\left(h_2-h_2'\right)`)}
   ${F(R`\eta_t=1-\frac{q_2}{q_1}=\frac{w_t}{q_1}`)}
   <div class="h">回热的"代价"</div>
   <p>抽走的那部分蒸汽<b>没有膨胀到底</b>，所以单位质量做功减少、气耗率上升。<b>D 卷计算 3</b>的算例：<i>η</i> 从 37.2% 升到 38.8%，但 <i>w</i><sub>t</sub> 从 1228 降到 1045 kJ/kg，<i>d</i> 从 2.93 升到 3.45。</p>
   <div class="key"><b>一句话</b>：回热是"<b>用更大的汽耗换更高的效率</b>"——设备变大、单位质量功变小，但每度电烧的煤变少。工程上普遍采用多级抽汽回热（6～8 级）。</div>`}
 ]}
]});
