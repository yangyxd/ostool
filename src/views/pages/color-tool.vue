<template>
  <div class="container color-tool full">
  <el-tabs v-model="activeName" class="tabs">
    <el-tab-pane label="中国传统色彩" name="first">
        <div class="conents">
        <ul @click="handleClick">
            <li style="background: rgb(112, 243, 255);"><a>蔚蓝<span class="btn" data-clipboard-text="#70f3ff">#70f3ff</span></a></li>
            <li style="background: rgb(68, 206, 246);"><a>蓝<span class="btn" data-clipboard-text="#44cef6">#44cef6</span></a></li>
            <li style="background: rgb(62, 237, 231);"><a>碧蓝<span class="btn" data-clipboard-text="#3eede7">#3eede7</span></a></li>
            <li class="white" style="background: rgb(22, 133, 169);"><a>石青<span class="btn" data-clipboard-text="#1685a9">#1685a9</span></a></li>
            <li class="white" style="background: rgb(23, 124, 176);"><a>靛青<span class="btn" data-clipboard-text="#177cb0">#177cb0</span></a></li>
            <li class="white" style="background: rgb(6, 82, 121);"><a>靛蓝<span class="btn" data-clipboard-text="#065279">#065279</span></a></li>
            <li class="white" style="background: rgb(0, 52, 114);"><a>花青<span class="btn" data-clipboard-text="#003472">#003472</span></a></li>
            <li class="white" style="background: rgb(75, 92, 196);"><a>宝蓝<span class="btn" data-clipboard-text="#4b5cc4">#4b5cc4</span></a></li>
            <li class="white" style="background: rgb(161, 175, 201);"><a>蓝灰色<span class="btn" data-clipboard-text="#a1afc9">#a1afc9</span></a></li>
            <li class="white" style="background: rgb(46, 78, 126);"><a>藏青<span class="btn" data-clipboard-text="#2e4e7e">#2e4e7e</span></a></li>
            <li class="white" style="background: rgb(59, 46, 126);"><a>藏蓝<span class="btn" data-clipboard-text="#3b2e7e">#3b2e7e</span></a></li>
            <li class="white" style="background: rgb(74, 66, 102);"><a>黛<span class="btn" data-clipboard-text="#4a4266">#4a4266</span></a></li>
            <li class="white" style="background: rgb(66, 102, 102);"><a>黛绿<span class="btn" data-clipboard-text="#426666">#426666</span></a></li>
            <li class="white" style="background: rgb(66, 80, 102);"><a>黛蓝<span class="btn" data-clipboard-text="#425066">#425066</span></a></li>
            <li class="white" style="background: rgb(87, 66, 102);"><a>黛紫<span class="btn" data-clipboard-text="#574266">#574266</span></a></li>
            <li class="white" style="background: rgb(141, 75, 187);"><a>紫色<span class="btn" data-clipboard-text="#8d4bbb">#8d4bbb</span></a></li>
            <li class="white" style="background: rgb(129, 84, 99);"><a>紫酱<span class="btn" data-clipboard-text="#815463">#815463</span></a></li>
            <li class="white" style="background: rgb(129, 84, 118);"><a>酱紫<span class="btn" data-clipboard-text="#815476">#815476</span></a></li>
            <li class="white" style="background: rgb(76, 34, 27);"><a>紫檀<span class="btn" data-clipboard-text="#4c221b">#4c221b</span></a></li>
            <li class="white" style="background: rgb(0, 51, 113);"><a>绀青<span class="btn" data-clipboard-text="#003371">#003371</span></a></li>
            <li class="white" style="background: rgb(86, 0, 79);"><a>紫棠<span class="btn" data-clipboard-text="#56004f">#56004f</span></a></li>
            <li class="white" style="background: rgb(128, 29, 174);"><a>青莲<span class="btn" data-clipboard-text="#801dae">#801dae</span></a></li>
            <li class="white" style="background: rgb(76, 141, 174);"><a>群青<span class="btn" data-clipboard-text="#4c8dae">#4c8dae</span></a></li>
            <li style="background: rgb(176, 164, 227);"><a>雪青<span class="btn" data-clipboard-text="#b0a4e3">#b0a4e3</span></a></li>
            <li style="background: rgb(204, 164, 227);"><a>丁香色<span class="btn" data-clipboard-text="#cca4e3">#cca4e3</span></a></li>
            <li style="background: rgb(237, 209, 216);"><a>藕色<span class="btn" data-clipboard-text="#edd1d8">#edd1d8</span></a></li>
            <li style="background: rgb(228, 198, 208);"><a>藕荷色<span class="btn" data-clipboard-text="#e4c6d0">#e4c6d0</span></a></li>
        </ul>
        <ul @click="handleClick">
            <li class="white" style="background: rgb(255, 70, 31);"><a>朱砂<span class="btn" data-clipboard-text="#ff461f">#ff461f</span></a></li>
            <li class="white" style="background: rgb(255, 45, 81);"><a>火红<span class="btn" data-clipboard-text="#ff2d51">#ff2d51</span></a></li>
            <li class="white" style="background: rgb(243, 104, 56);"><a>朱膘<span class="btn" data-clipboard-text="#f36838">#f36838</span></a></li>
            <li class="white" style="background: rgb(237, 87, 54);"><a>妃色<span class="">#ed5736</span></a></li>
            <li class="white" style="background: rgb(255, 71, 119);"><a>洋红<span class="btn" data-clipboard-text="#ff4777">#ff4777</span></a></li>
            <li class="white" style="background: rgb(240, 0, 86);"><a>品红<span class="btn" data-clipboard-text="#f00056">#f00056</span></a></li>
            <li class="white" style="background: rgb(255, 179, 167);"><a>粉红<span class="btn" data-clipboard-text="#ffb3a7">#ffb3a7</span></a></li>
            <li class="white" style="background: rgb(244, 121, 131);"><a>桃红<span class="btn" data-clipboard-text="#f47983">#f47983</span></a></li>
            <li class="white" style="background: rgb(219, 90, 107);"><a>海棠红<span class="btn" data-clipboard-text="#db5a6b">#db5a6b</span></a></li>
            <li class="white" style="background: rgb(201, 55, 86);"><a>樱桃色<span class="btn" data-clipboard-text="#c93756">#c93756</span></a></li>
            <li class="white" style="background: rgb(249, 144, 111);"><a>酡颜<span class="btn" data-clipboard-text="#f9906f">#f9906f</span></a></li>
            <li class="white" style="background: rgb(240, 86, 84);"><a>银红<span class="btn" data-clipboard-text="#f05654">#f05654</span></a></li>
            <li class="white" style="background: rgb(255, 33, 33);"><a>大红<span class="btn" data-clipboard-text="#ff2121">#ff2121</span></a></li>
            <li class="white" style="background: rgb(242, 12, 0);"><a>石榴红<span class="btn" data-clipboard-text="#f20c00">#f20c00</span></a></li>
            <li class="white" style="background: rgb(140, 67, 86);"><a>绛紫<span class="btn" data-clipboard-text="#8c4356">#8c4356</span></a></li>
            <li class="white" style="background: rgb(200, 60, 35);"><a>绯红<span class="btn" data-clipboard-text="#c83c23">#c83c23</span></a></li>
            <li class="white" style="background: rgb(157, 41, 51);"><a>胭脂<span class="btn" data-clipboard-text="#9d2933">#9d2933</span></a></li>
            <li class="white" style="background: rgb(255, 76, 0);"><a>朱红<span class="btn" data-clipboard-text="#ff4c00">#ff4c00</span></a></li>
            <li class="white" style="background: rgb(255, 78, 32);"><a>丹<span class="btn" data-clipboard-text="#ff4e20">#ff4e20</span></a></li>
            <li class="white" style="background: rgb(243, 83, 54);"><a>彤<span class="btn" data-clipboard-text="#f35336">#f35336</span></a></li>
            <li class="white" style="background: rgb(220, 48, 35);"><a>酡红<span class="btn" data-clipboard-text="#dc3023">#dc3023</span></a></li>
            <li class="white" style="background: rgb(255, 51, 0);"><a>炎<span class="btn" data-clipboard-text="#ff3300">#ff3300</span></a></li>
            <li class="white" style="background: rgb(203, 58, 86);"><a>茜色<span class="btn" data-clipboard-text="#cb3a56">#cb3a56</span></a></li>
            <li class="white" style="background: rgb(169, 129, 117);"><a>绾<span class="btn" data-clipboard-text="#a98175">#a98175</span></a></li>
            <li class="white" style="background: rgb(179, 109, 97);"><a>檀<span class="btn" data-clipboard-text="#b36d61">#b36d61</span></a></li>
            <li class="white" style="background: rgb(239, 122, 130);"><a>嫣红<span class="btn" data-clipboard-text="#ef7a82">#ef7a82</span></a></li>
            <li class="white" style="background: rgb(255, 0, 151);"><a>洋红<span class="btn" data-clipboard-text="#ff0097">#ff0097</span></a></li>
            <li class="white" style="background: rgb(195, 33, 54);"><a>枣红<span class="btn" data-clipboard-text="#c32136">#c32136</span></a></li>
            <li class="white" style="background: rgb(190, 0, 47);"><a>殷红<span class="btn" data-clipboard-text="#be002f">#be002f</span></a></li>
            <li class="white" style="background: rgb(201, 31, 55);"><a>赫赤<span class="btn" data-clipboard-text="#c91f37">#c91f37</span></a></li>
            <li class="white" style="background: rgb(191, 36, 42);"><a>银朱<span class="btn" data-clipboard-text="#bf242a">#bf242a</span></a></li>
            <li class="white" style="background: rgb(195, 39, 43);"><a>赤<span class="btn" data-clipboard-text="#c3272b">#c3272b</span></a></li>
            <li class="white" style="background: rgb(157, 41, 51);"><a>胭脂<span class="btn" data-clipboard-text="#9d2933">#9d2933</span></a></li>
            <li class="white" style="background: rgb(96, 40, 30);"><a>栗色<span class="btn" data-clipboard-text="#60281e">#60281e</span></a></li>
            <li class="white" style="background: rgb(98, 42, 29);"><a>玄色<span class="btn" data-clipboard-text="#622a1d">#622a1d</span></a></li>
        </ul>
        <ul @click="handleClick">
            <li style="background: rgb(188, 230, 114);"><a>松花色<span class="btn" data-clipboard-text="#bce672">#bce672</span></a></li>
            <li style="background: rgb(201, 221, 34);"><a>柳黄<span class="btn" data-clipboard-text="#c9dd22">#c9dd22</span></a></li>
            <li style="background: rgb(189, 221, 34);"><a>嫩绿<span class="btn" data-clipboard-text="#bddd22">#bddd22</span></a></li>
            <li style="background: rgb(175, 221, 34);"><a>柳绿<span class="btn" data-clipboard-text="#afdd22">#afdd22</span></a></li>
            <li style="background: rgb(163, 217, 0);"><a>葱黄<span class="btn" data-clipboard-text="#a3d900">#a3d900</span></a></li>
            <li style="background: rgb(158, 217, 0);"><a>葱绿<span class="btn" data-clipboard-text="#9ed900">#9ed900</span></a></li>
            <li style="background: rgb(158, 208, 72);"><a>豆绿<span class="btn" data-clipboard-text="#9ed048">#9ed048</span></a></li>
            <li style="background: rgb(150, 206, 84);"><a>豆青<span class="btn" data-clipboard-text="#96ce54">#96ce54</span></a></li>
            <li style="background: rgb(0, 188, 18);"><a>油绿<span class="btn" data-clipboard-text="#00bc12">#00bc12</span></a></li>
            <li style="background: rgb(14, 184, 58);"><a>葱倩<span class="btn" data-clipboard-text="#0eb83a">#0eb83a</span></a></li>
            <li style="background: rgb(14, 184, 58);"><a>葱青<span class="btn" data-clipboard-text="#0eb83a">#0eb83a</span></a></li>
            <li style="background: rgb(10, 163, 68);"><a>青葱<span class="btn" data-clipboard-text="#0aa344">#0aa344</span></a></li>
            <li class="white" style="background: rgb(22, 169, 81);"><a>石绿<span class="btn" data-clipboard-text="#16a951">#16a951</span></a></li>
            <li class="white" style="background: rgb(33, 166, 117);"><a>松柏绿<span class="btn" data-clipboard-text="#21a675">#21a675</span></a></li>
            <li class="white" style="background: rgb(5, 119, 72);"><a>松花绿<span class="btn" data-clipboard-text="#057748">#057748</span></a></li>
            <li class="white" style="background: rgb(12, 137, 24);"><a>绿沈<span class="btn" data-clipboard-text="#0c8918">#0c8918</span></a></li>
            <li style="background: rgb(0, 229, 0);"><a>绿色<span class="btn" data-clipboard-text="#00e500">#00e500</span></a></li>
            <li style="background: rgb(64, 222, 90);"><a>草绿<span class="btn" data-clipboard-text="#40de5a">#40de5a</span></a></li>
            <li style="background: rgb(0, 224, 121);"><a>青翠<span class="btn" data-clipboard-text="#00e079">#00e079</span></a></li>
            <li style="background: rgb(0, 224, 158);"><a>青色<span class="btn" data-clipboard-text="#00e09e">#00e09e</span></a></li>
            <li style="background: rgb(61, 225, 173);"><a>翡翠色<span class="btn" data-clipboard-text="#3de1ad">#3de1ad</span></a></li>
            <li style="background: rgb(42, 221, 156);"><a>碧绿<span class="btn" data-clipboard-text="#2add9c">#2add9c</span></a></li>
            <li style="background: rgb(46, 223, 163);"><a>玉色<span class="btn" data-clipboard-text="#2edfa3">#2edfa3</span></a></li>
            <li style="background: rgb(127, 236, 173);"><a>缥<span class="btn" data-clipboard-text="#7fecad">#7fecad</span></a></li>
            <li style="background: rgb(164, 226, 198);"><a>艾绿<span class="btn" data-clipboard-text="#a4e2c6">#a4e2c6</span></a></li>
            <li style="background: rgb(123, 207, 166);"><a>石青<span class="btn" data-clipboard-text="#7bcfa6">#7bcfa6</span></a></li>
            <li style="background: rgb(27, 209, 165);"><a>碧色<span class="btn" data-clipboard-text="#1bd1a5">#1bd1a5</span></a></li>
            <li style="background: rgb(72, 192, 163);"><a>青碧<span class="btn" data-clipboard-text="#48c0a3">#48c0a3</span></a></li>
            <li style="background: rgb(84, 150, 136);"><a>铜绿<span class="btn" data-clipboard-text="#549688">#549688</span></a></li>
            <li style="background: rgb(120, 146, 98);"><a>竹青<span class="btn" data-clipboard-text="#789262">#789262</span></a></li>
            <li class="white" style="background: rgb(117, 138, 153);"><a>墨灰<span class="btn" data-clipboard-text="#758a99">#758a99</span></a></li>
            <li class="white" style="background: rgb(80, 97, 109);"><a>墨色<span class="btn" data-clipboard-text="#50616d">#50616d</span></a></li>
            <li class="white" style="background: rgb(66, 76, 80);"><a>鸦青<span class="btn" data-clipboard-text="#424c50">#424c50</span></a></li>
            <li class="white" style="background: rgb(65, 85, 93);"><a>黯<span class="btn" data-clipboard-text="#41555d">#41555d</span></a></li>
        </ul>
        <ul @click="handleClick">
            <li style="background: rgb(234, 255, 86);"><a>樱草色<span class="btn" data-clipboard-text="#eaff56">#eaff56</span></a></li>
            <li style="background: rgb(255, 241, 67);"><a>鹅黄<span class="btn" data-clipboard-text="#fff143">#fff143</span></a></li>
            <li style="background: rgb(250, 255, 114);"><a>鸭黄<span class="btn" data-clipboard-text="#faff72">#faff72</span></a></li>
            <li style="background: rgb(255, 166, 49);"><a>杏黄<span class="btn" data-clipboard-text="#ffa631">#ffa631</span></a></li>
            <li class="white" style="background: rgb(255, 164, 0);"><a>橙黄<span class="btn" data-clipboard-text="#ffa400">#ffa400</span></a></li>
            <li class="white" style="background: rgb(250, 140, 53);"><a>橙色<span class="btn" data-clipboard-text="#fa8c35">#fa8c35</span></a></li>
            <li style="background: rgb(255, 140, 49);"><a>杏红<span class="btn" data-clipboard-text="#ff8c31">#ff8c31</span></a></li>
            <li style="background: rgb(255, 137, 54);"><a>橘黄<span class="btn" data-clipboard-text="#ff8936">#ff8936</span></a></li>
            <li style="background: rgb(255, 117, 0);"><a>橘红<span class="btn" data-clipboard-text="#ff7500">#ff7500</span></a></li>
            <li style="background: rgb(255, 182, 30);"><a>藤黄<span class="btn" data-clipboard-text="#ffb61e">#ffb61e</span></a></li>
            <li style="background: rgb(255, 199, 115);"><a>姜黄<span class="btn" data-clipboard-text="#ffc773">#ffc773</span></a></li>
            <li style="background: rgb(255, 198, 75);"><a>雌黄<span class="btn" data-clipboard-text="#ffc64b">#ffc64b</span></a></li>
            <li style="background: rgb(242, 190, 69);"><a>赤金<span class="btn" data-clipboard-text="#f2be45">#f2be45</span></a></li>
            <li style="background: rgb(240, 194, 57);"><a>缃色<span class="btn" data-clipboard-text="#f0c239">#f0c239</span></a></li>
            <li style="background: rgb(233, 187, 29);"><a>雄黄<span class="btn" data-clipboard-text="#e9bb1d">#e9bb1d</span></a></li>
            <li style="background: rgb(217, 182, 17);"><a>秋香色<span class="btn" data-clipboard-text="#d9b611">#d9b611</span></a></li>
            <li style="background: rgb(234, 205, 118);"><a>金色<span class="btn" data-clipboard-text="#eacd76">#eacd76</span></a></li>
            <li style="background: rgb(238, 222, 176);"><a>牙色<span class="btn" data-clipboard-text="#eedeb0">#eedeb0</span></a></li>
            <li style="background: rgb(211, 177, 125);"><a>枯黄<span class="btn" data-clipboard-text="#d3b17d">#d3b17d</span></a></li>
            <li class="white" style="background: rgb(226, 156, 69);"><a>黄栌<span class="btn" data-clipboard-text="#e29c45">#e29c45</span></a></li>
            <li style="background: rgb(167, 142, 68);"><a>乌金<span class="btn" data-clipboard-text="#a78e44">#a78e44</span></a></li>
            <li class="white" style="background: rgb(200, 155, 64);"><a>昏黄<span class="btn" data-clipboard-text="#c89b40">#c89b40</span></a></li>
            <li class="white" style="background: rgb(174, 112, 0);"><a>棕黄<span class="btn" data-clipboard-text="#ae7000">#ae7000</span></a></li>
            <li class="white" style="background: rgb(202, 105, 36);"><a>琥珀<span class="btn" data-clipboard-text="#ca6924">#ca6924</span></a></li>
            <li class="white" style="background: rgb(178, 93, 37);"><a>棕色<span class="btn" data-clipboard-text="#b25d25">#b25d25</span></a></li>
            <li class="white" style="background: rgb(179, 92, 68);"><a>茶色<span class="btn" data-clipboard-text="#b35c44">#b35c44</span></a></li>
            <li class="white" style="background: rgb(155, 68, 0);"><a>棕红<span class="btn" data-clipboard-text="#9b4400">#9b4400</span></a></li>
            <li class="white" style="background: rgb(156, 83, 51);"><a>赭<span class="btn" data-clipboard-text="#9c5333">#9c5333</span></a></li>
            <li class="white" style="background: rgb(168, 132, 98);"><a>驼色<span class="btn" data-clipboard-text="#a88462">#a88462</span></a></li>
            <li class="white" style="background: rgb(137, 108, 57);"><a>秋色<span class="btn" data-clipboard-text="#896c39">#896c39</span></a></li>
            <li class="white" style="background: rgb(130, 113, 0);"><a>棕绿<span class="btn" data-clipboard-text="#827100">#827100</span></a></li>
            <li class="white" style="background: rgb(110, 81, 30);"><a>褐色<span class="btn" data-clipboard-text="#6e511e">#6e511e</span></a></li>
            <li class="white" style="background: rgb(124, 75, 0);"><a>棕黑<span class="btn" data-clipboard-text="#7c4b00">#7c4b00</span></a></li>
            <li class="white" style="background: rgb(149, 85, 57);"><a>赭色<span class="btn" data-clipboard-text="#955539">#955539</span></a></li>
            <li class="white" style="background: rgb(132, 90, 51);"><a>赭石<span class="btn" data-clipboard-text="#845a33">#845a33</span></a></li>
        </ul>
        <ul @click="handleClick">
            <li style="background: rgb(255, 255, 255);"><a>精白<span class="btn" data-clipboard-text="#ffffff">#ffffff</span></a></li>
            <li style="background: rgb(233, 231, 239);"><a>银白<span class="">#e9e7ef</span></a></li>
            <li style="background: rgb(240, 240, 244);"><a>铅白<span class="btn" data-clipboard-text="#f0f0f4">#f0f0f4</span></a></li>
            <li style="background: rgb(233, 241, 246);"><a>霜色<span class="btn" data-clipboard-text="#e9f1f6">#e9f1f6</span></a></li>
            <li style="background: rgb(240, 252, 255);"><a>雪白<span class="btn" data-clipboard-text="#f0fcff">#f0fcff</span></a></li>
            <li style="background: rgb(227, 249, 253);"><a>莹白<span class="btn" data-clipboard-text="#e3f9fd">#e3f9fd</span></a></li>
            <li style="background: rgb(214, 236, 240);"><a>月白<span class="btn" data-clipboard-text="#d6ecf0">#d6ecf0</span></a></li>
            <li style="background: rgb(255, 251, 240);"><a>象牙白<span class="btn" data-clipboard-text="#fffbf0">#fffbf0</span></a></li>
            <li style="background: rgb(242, 236, 222);"><a>缟<span class="btn" data-clipboard-text="#f2ecde">#f2ecde</span></a></li>
            <li style="background: rgb(252, 239, 232);"><a>鱼肚白<span class="btn" data-clipboard-text="#fcefe8">#fcefe8</span></a></li>
            <li style="background: rgb(255, 242, 223);"><a>白粉<span class="btn" data-clipboard-text="#fff2df">#fff2df</span></a></li>
            <li style="background: rgb(243, 249, 241);"><a>荼白<span class="btn" data-clipboard-text="#f3f9f1">#f3f9f1</span></a></li>
            <li style="background: rgb(224, 238, 232);"><a>鸭卵青<span class="btn" data-clipboard-text="#e0eee8">#e0eee8</span></a></li>
            <li style="background: rgb(224, 240, 233);"><a>素<span class="btn" data-clipboard-text="#e0f0e9">#e0f0e9</span></a></li>
            <li style="background: rgb(192, 235, 215);"><a>青白<span class="btn" data-clipboard-text="#c0ebd7">#c0ebd7</span></a></li>
            <li style="background: rgb(187, 205, 197);"><a>蟹壳青<span class="btn" data-clipboard-text="#bbcdc5">#bbcdc5</span></a></li>
            <li style="background: rgb(194, 204, 208);"><a>花白<span class="btn" data-clipboard-text="#c2ccd0">#c2ccd0</span></a></li>
            <li style="background: rgb(186, 202, 198);"><a>老银<span class="btn" data-clipboard-text="#bacac6">#bacac6</span></a></li>
            <li class="white" style="background: rgb(128, 128, 128);"><a>灰色<span class="btn" data-clipboard-text="#808080">#808080</span></a></li>
            <li class="white" style="background: rgb(117, 135, 138);"><a>苍色<span class="btn" data-clipboard-text="#75878a">#75878a</span></a></li>
            <li class="white" style="background: rgb(136, 173, 166);"><a>水色<span class="btn" data-clipboard-text="#88ada6">#88ada6</span></a></li>
            <li class="white" style="background: rgb(107, 104, 130);"><a>黝<span class="btn" data-clipboard-text="#6b6882">#6b6882</span></a></li>
            <li class="white" style="background: rgb(114, 94, 130);"><a>乌色<span class="btn" data-clipboard-text="#725e82">#725e82</span></a></li>
            <li class="white" style="background: rgb(61, 59, 79);"><a>玄青<span class="btn" data-clipboard-text="#3d3b4f">#3d3b4f</span></a></li>
            <li class="white" style="background: rgb(57, 47, 65);"><a>乌黑<span class="btn" data-clipboard-text="#392f41">#392f41</span></a></li>
            <li class="white" style="background: rgb(117, 102, 77);"><a>黎<span class="btn" data-clipboard-text="#75664d">#75664d</span></a></li>
            <li class="white" style="background: rgb(93, 81, 60);"><a>黧<span class="btn" data-clipboard-text="#5d513c">#5d513c</span></a></li>
            <li class="white" style="background: rgb(102, 87, 87);"><a>黝黑<span class="btn" data-clipboard-text="#665757">#665757</span></a></li>
            <li class="white" style="background: rgb(73, 49, 49);"><a>缁色<span class="btn" data-clipboard-text="#493131">#493131</span></a></li>
            <li class="white" style="background: rgb(49, 37, 32);"><a>煤黑<span class="btn" data-clipboard-text="#312520">#312520</span></a></li>
            <li class="white" style="background: rgb(22, 24, 35);"><a>漆黑<span class="btn" data-clipboard-text="#161823">#161823</span></a></li>
            <li class="white" style="background: rgb(0, 0, 0);"><a>黑色<span class="btn" data-clipboard-text="#000000">#000000</span></a></li>
        </ul>
        </div>
    </el-tab-pane>
    <el-tab-pane label="日本传统颜色" name="a2">
        <div class="conents">
            <ul @click="handleClick">
                <li class="white" style="background: rgb(137, 91, 138);"><a>古代紫 <span class="btn" data-clipboard-text="#895b8a">#895b8a </span></a></li>
                <li class="white" style="background: rgb(130, 72, 128);"><a>茄子紺 <span class="btn" data-clipboard-text="#824880">#824880 </span></a></li>
                <li class="white" style="background: rgb(145, 92, 139);"><a>二藍 <span class="btn" data-clipboard-text="#915c8b">#915c8b </span></a></li>
                <li class="white" style="background: rgb(157, 91, 139);"><a>京紫 <span class="btn" data-clipboard-text="#9d5b8b">#9d5b8b </span></a></li>
                <li class="white" style="background: rgb(122, 65, 113);"><a>蒲葡<span class="btn" data-clipboard-text="#7a4171">#7a4171 </span></a></li>
                <li class="white" style="background: rgb(188, 100, 164);"><a>若紫<span class="btn" data-clipboard-text="#bc64a4">#bc64a4 </span></a></li>
                <li class="white" style="background: rgb(180, 76, 151);"><a>紅紫<span class="btn" data-clipboard-text="#b44c97">#b44c97 </span></a></li>
                <li class="white" style="background: rgb(170, 76, 143);"><a>梅紫<span class="btn" data-clipboard-text="#aa4c8f">#aa4c8f </span></a></li>
                <li class="white" style="background: rgb(204, 126, 177);"><a>菖蒲色<span class="btn" data-clipboard-text="#cc7eb1">#cc7eb1 </span></a></li>
                <li class="white" style="background: rgb(204, 166, 191);"><a>紅藤色 <span class="btn" data-clipboard-text="#cca6bf">#cca6bf </span></a></li>
                <li class="white" style="background: rgb(196, 163, 191);"><a>浅紫 <span class="btn" data-clipboard-text="#c4a3bf">#c4a3bf </span></a></li>
                <li style="background: rgb(231, 231, 235);"><a>紫水晶 <span class="btn" data-clipboard-text="#e7e7eb">#e7e7eb </span></a></li>
                <li style="background: rgb(220, 214, 217);"><a>薄梅鼠<span class="btn" data-clipboard-text="#dcd6d9">#dcd6d9</span></a></li>
                <li style="background: rgb(211, 207, 217);"><a>暁鼠<span class="btn" data-clipboard-text="#d3cfd9">#d3cfd9</span></a></li>
                <li style="background: rgb(211, 204, 214);"><a>牡丹鼠<span class="btn" data-clipboard-text="#d3ccd6">#d3ccd6</span></a></li>
                <li class="white" style="background: rgb(200, 194, 198);"><a>霞色<span class="btn" data-clipboard-text="#c8c2c6">#c8c2c6</span></a></li>
                <li class="white" style="background: rgb(166, 165, 196);"><a>藤鼠<span class="btn" data-clipboard-text="#a6a5c4">#a6a5c4 </span></a></li>
                <li class="white" style="background: rgb(166, 154, 189);"><a>半色<span class="btn" data-clipboard-text="#a69abd">#a69abd </span></a></li>
                <li class="white" style="background: rgb(168, 157, 172);"><a>薄色<span class="btn" data-clipboard-text="#a89dac">#a89dac </span></a></li>
                <li class="white" style="background: rgb(151, 144, 164);"><a>薄鼠<span class="btn" data-clipboard-text="#9790a4">#9790a4 </span></a></li>
                <li class="white" style="background: rgb(158, 139, 142);"><a>鳩羽鼠<span class="btn" data-clipboard-text="#9e8b8e">#9e8b8e</span></a></li>
                <li class="white" style="background: rgb(149, 133, 156);"><a>鳩羽色<span class="btn" data-clipboard-text="#95859c">#95859c </span></a></li>
                <li class="white" style="background: rgb(149, 148, 154);"><a>桔梗鼠<span class="btn" data-clipboard-text="#95949a">#95949a </span></a></li>
                <li class="white" style="background: rgb(113, 104, 108);"><a>紫鼠<span class="btn" data-clipboard-text="#71686c">#71686c </span></a></li>
                <li class="white" style="background: rgb(112, 91, 103);"><a>葡萄鼠<span class="btn" data-clipboard-text="#705b67">#705b67 </span></a></li>
                <li class="white" style="background: rgb(99, 73, 80);"><a>濃色<span class="btn" data-clipboard-text="#634950">#634950 </span></a></li>
                <li class="white" style="background: rgb(95, 65, 75);"><a>紫鳶<span class="btn" data-clipboard-text="#5f414b">#5f414b </span></a></li>
                <li class="white" style="background: rgb(79, 69, 92);"><a>濃鼠 <span class="btn" data-clipboard-text="#4f455c">#4f455c </span></a></li>
                <li class="white" style="background: rgb(90, 83, 89);"><a>藤煤竹 <span class="btn" data-clipboard-text="#5a5359">#5a5359 </span></a></li>
                <li class="white" style="background: rgb(89, 66, 85);"><a>滅紫<span class="btn" data-clipboard-text="#594255">#594255 </span></a></li>
                <li class="white" style="background: rgb(82, 71, 72);"><a>紅消鼠<span class="btn" data-clipboard-text="#524748">#524748 </span></a></li>
                <li class="white" style="background: rgb(81, 55, 67);"><a>似せ紫<span class="btn" data-clipboard-text="#513743">#513743 </span></a></li>
                <li style="background: rgb(230, 234, 227);"><a>灰黄緑 <span class="btn" data-clipboard-text="#e6eae3">#e6eae3</span></a></li>
                <li style="background: rgb(212, 220, 214);"><a>蕎麦切色 <span class="btn" data-clipboard-text="#d4dcd6">#d4dcd6</span></a></li>
                <li style="background: rgb(212, 220, 218);"><a>薄雲鼠<span class="btn" data-clipboard-text="#d4dcda">#d4dcda</span></a></li>
                <li style="background: rgb(211, 203, 198);"><a>枯野色<span class="btn" data-clipboard-text="#d3cbc6">#d3cbc6</span></a></li>
                <li class="white" style="background: rgb(200, 194, 190);"><a>潤色<span class="btn" data-clipboard-text="#c8c2be">#c8c2be </span></a></li>
                <li class="white" style="background: rgb(179, 173, 160);"><a>利休白茶<span class="btn" data-clipboard-text="#b3ada0">#b3ada0 </span></a></li>
                <li class="white" style="background: rgb(169, 158, 147);"><a>茶鼠 <span class="btn" data-clipboard-text="#a99e93">#a99e93 </span></a></li>
                <li class="white" style="background: rgb(165, 143, 134);"><a>胡桃染<span class="btn" data-clipboard-text="#a58f86">#a58f86 </span></a></li>
                <li class="white" style="background: rgb(146, 129, 120);"><a>江戸鼠<span class="btn" data-clipboard-text="#928178">#928178 </span></a></li>
                <li class="white" style="background: rgb(136, 127, 122);"><a>煤色<span class="btn" data-clipboard-text="#887f7a">#887f7a </span></a></li>
                <li class="white" style="background: rgb(180, 134, 107);"><a>丁子茶<span class="btn" data-clipboard-text="#b4866b">#b4866b </span></a></li>
                <li class="white" style="background: rgb(178, 140, 110);"><a>柴染 <span class="btn" data-clipboard-text="#b28c6e">#b28c6e </span></a></li>
                <li class="white" style="background: rgb(161, 109, 93);"><a>宗伝唐茶<span class="btn" data-clipboard-text="#a16d5d">#a16d5d </span></a></li>
                <li class="white" style="background: rgb(159, 111, 85);"><a>砺茶<span class="btn" data-clipboard-text="#9f6f55">#9f6f55 </span></a></li>
                <li class="white" style="background: rgb(140, 100, 80);"><a>煎茶色<span class="btn" data-clipboard-text="#8c6450">#8c6450 </span></a></li>
                <li class="white" style="background: rgb(133, 104, 89);"><a>銀煤竹 <span class="btn" data-clipboard-text="#856859">#856859 </span></a></li>
                <li class="white" style="background: rgb(118, 92, 71);"><a>黄枯茶<span class="btn" data-clipboard-text="#765c47">#765c47 </span></a></li>
                <li class="white" style="background: rgb(111, 81, 76);"><a>煤竹色 <span class="btn" data-clipboard-text="#6f514c">#6f514c </span></a></li>
                <li class="white" style="background: rgb(111, 75, 62);"><a>焦茶<span class="btn" data-clipboard-text="#6f4b3e">#6f4b3e </span></a></li>
                <li class="white" style="background: rgb(84, 74, 71);"><a>黒橡<span class="btn" data-clipboard-text="#544a47">#544a47 </span></a></li>
                <li class="white" style="background: rgb(84, 63, 50);"><a>憲法色<span class="btn" data-clipboard-text="#543f32">#543f32 </span></a></li>
                <li class="white" style="background: rgb(85, 71, 56);"><a>涅色<span class="btn" data-clipboard-text="#554738">#554738 </span></a></li>
                <li class="white" style="background: rgb(67, 61, 60);"><a>檳榔子染<span class="btn" data-clipboard-text="#433d3c">#433d3c </span></a></li>
                <li class="white" style="background: rgb(67, 47, 47);"><a>黒鳶<span class="btn" data-clipboard-text="#432f2f">#432f2f </span></a></li>
                <li class="white" style="background: rgb(63, 49, 43);"><a>赤墨<span class="btn" data-clipboard-text="#3f312b">#3f312b </span></a></li>
                <li class="white" style="background: rgb(48, 40, 51);"><a>黒紅<span class="btn" data-clipboard-text="#302833">#302833 </span></a></li>
                <li style="background: rgb(255, 255, 255);"><a>白<span class="btn" data-clipboard-text="#ffffff">#ffffff </span></a></li>
                <li style="background: rgb(255, 255, 252);"><a>胡粉色<span class="btn" data-clipboard-text="#fffffc">#fffffc </span></a></li>
                <li style="background: rgb(247, 252, 254);"><a>卯の花色<span class="btn" data-clipboard-text="#f7fcfe">#f7fcfe </span></a></li>
                <li style="background: rgb(248, 251, 248);"><a>白磁<span class="btn" data-clipboard-text="#f8fbf8">#f8fbf8 </span></a></li>
                <li style="background: rgb(251, 250, 245);"><a>生成り色<span class="btn" data-clipboard-text="#fbfaf5">#fbfaf5 </span></a></li>
                <li style="background: rgb(243, 243, 243);"><a>乳白色<span class="btn" data-clipboard-text="#f3f3f3">#f3f3f3 </span></a></li>
                <li style="background: rgb(243, 243, 242);"><a>白練<span class="btn" data-clipboard-text="#f3f3f2">#f3f3f2 </span></a></li>
                <li style="background: rgb(234, 229, 227);"><a>素色<span class="btn" data-clipboard-text="#eae5e3">#eae5e3 </span></a></li>
                <li style="background: rgb(229, 228, 230);"><a>白梅鼠<span class="btn" data-clipboard-text="#e5e4e6">#e5e4e6 </span></a></li>
                <li style="background: rgb(220, 221, 221);"><a>白鼠<span class="btn" data-clipboard-text="#dcdddd">#dcdddd </span></a></li>
                <li style="background: rgb(221, 220, 214);"><a>絹鼠<span class="btn" data-clipboard-text="#dddcd6">#dddcd6 </span></a></li>
                <li class="white" style="background: rgb(192, 198, 201);"><a>灰青<span class="btn" data-clipboard-text="#c0c6c9">#c0c6c9 </span></a></li>
                <li class="white" style="background: rgb(175, 175, 176);"><a>銀鼠<span class="btn" data-clipboard-text="#afafb0">#afafb0 </span></a></li>
                <li class="white" style="background: rgb(173, 173, 173);"><a>薄鈍<span class="btn" data-clipboard-text="#adadad">#adadad </span></a></li>
                <li class="white" style="background: rgb(163, 163, 162);"><a>薄墨色<span class="btn" data-clipboard-text="#a3a3a2">#a3a3a2 </span></a></li>
                <li class="white" style="background: rgb(158, 161, 163);"><a>錫色<span class="btn" data-clipboard-text="#9ea1a3">#9ea1a3 </span></a></li>
                <li class="white" style="background: rgb(159, 160, 160);"><a>素鼠<span class="btn" data-clipboard-text="#9fa0a0">#9fa0a0 </span></a></li>
                <li class="white" style="background: rgb(148, 148, 149);"><a>鼠色<span class="btn" data-clipboard-text="#949495">#949495 </span></a></li>
                <li class="white" style="background: rgb(136, 128, 132);"><a>源氏鼠<span class="btn" data-clipboard-text="#888084">#888084 </span></a></li>
                <li class="white" style="background: rgb(125, 125, 125);"><a>灰色<span class="btn" data-clipboard-text="#7d7d7d">#7d7d7d </span></a></li>
                <li class="white" style="background: rgb(123, 124, 125);"><a>鉛色<span class="btn" data-clipboard-text="#7b7c7d">#7b7c7d </span></a></li>
                <li class="white" style="background: rgb(114, 113, 113);"><a>鈍色<span class="btn" data-clipboard-text="#727171">#727171 </span></a></li>
                <li class="white" style="background: rgb(89, 88, 87);"><a>墨<span class="btn" data-clipboard-text="#595857">#595857 </span></a></li>
                <li class="white" style="background: rgb(89, 84, 85);"><a>丼鼠<span class="btn" data-clipboard-text="#595455">#595455 </span></a></li>
                <li class="white" style="background: rgb(82, 78, 77);"><a>消炭色<span class="btn" data-clipboard-text="#524e4d">#524e4d </span></a></li>
                <li class="white" style="background: rgb(71, 74, 77);"><a>藍墨茶 <span class="btn" data-clipboard-text="#474a4d">#474a4d </span></a></li>
                <li class="white" style="background: rgb(56, 60, 60);"><a>羊羹色<span class="btn" data-clipboard-text="#383c3c">#383c3c </span></a></li>
                <li class="white" style="background: rgb(43, 43, 43);"><a>蝋色<span class="btn" data-clipboard-text="#2b2b2b">#2b2b2b </span></a></li>
                <li class="white" style="background: rgb(43, 43, 43);"><a>黒<span class="btn" data-clipboard-text="#2b2b2b">#2b2b2b </span></a></li>
                <li class="white" style="background: rgb(24, 6, 20);"><a>烏羽色<span class="btn" data-clipboard-text="#180614">#180614 </span></a></li>
                <li class="white" style="background: rgb(40, 26, 20);"><a>鉄黒<span class="btn" data-clipboard-text="#281a14">#281a14 </span></a></li>
                <li class="white" style="background: rgb(0, 11, 0);"><a>濡羽色<span class="btn" data-clipboard-text="#000b00">#000b00 </span></a></li>
                <li class="white" style="background: rgb(37, 13, 0);"><a>黒壇<span class="btn" data-clipboard-text="#250d00">#250d00 </span></a></li>
                <li class="white" style="background: rgb(36, 26, 8);"><a>憲法黒茶 <span class="btn" data-clipboard-text="#241a08">#241a08 </span></a></li>
                <li class="white" style="background: rgb(22, 22, 14);"><a>暗黒色<span class="btn" data-clipboard-text="#16160e">#16160e </span></a></li>
            </ul>
            <ul @click="handleClick">
                <li class="white" style="background: rgb(0, 110, 84);"><a>萌葱色 <span class="btn" data-clipboard-text="#006e54">#006e54 </span></a></li>
                <li class="white" style="background: rgb(0, 163, 129);"><a>花緑青 <span class="btn" data-clipboard-text="#00a381">#00a381 </span></a></li>
                <li class="white" style="background: rgb(56, 180, 139);"><a>翡翠色 <span class="btn" data-clipboard-text="#38b48b">#38b48b </span></a></li>
                <li class="white" style="background: rgb(0, 164, 151);"><a>青緑<span class="btn" data-clipboard-text="#00a497">#00a497 </span></a></li>
                <li class="white" style="background: rgb(128, 171, 169);"><a>水浅葱 <span class="btn" data-clipboard-text="#80aba9">#80aba9 </span></a></li>
                <li class="white" style="background: rgb(92, 146, 145);"><a>錆浅葱 <span class="btn" data-clipboard-text="#5c9291">#5c9291 </span></a></li>
                <li class="white" style="background: rgb(71, 131, 132);"><a>青碧<span class="btn" data-clipboard-text="#478384">#478384 </span></a></li>
                <li class="white" style="background: rgb(67, 103, 107);"><a>御召茶<span class="btn" data-clipboard-text="#43676b">#43676b </span></a></li>
                <li class="white" style="background: rgb(128, 152, 155);"><a>湊鼠<span class="btn" data-clipboard-text="#80989b">#80989b </span></a></li>
                <li class="white" style="background: rgb(44, 79, 84);"><a>高麗納戸 <span class="btn" data-clipboard-text="#2c4f54">#2c4f54 </span></a></li>
                <li class="white" style="background: rgb(31, 49, 52);"><a>百入茶<span class="btn" data-clipboard-text="#1f3134">#1f3134 </span></a></li>
                <li class="white" style="background: rgb(71, 88, 92);"><a>錆鼠<span class="btn" data-clipboard-text="#47585c">#47585c </span></a></li>
                <li class="white" style="background: rgb(72, 88, 89);"><a>錆鉄御納戸<span class="btn" data-clipboard-text="#485859">#485859</span></a></li>
                <li class="white" style="background: rgb(108, 132, 141);"><a>藍鼠<span class="btn" data-clipboard-text="#6c848d">#6c848d</span></a></li>
                <li class="white" style="background: rgb(83, 114, 125);"><a>錆御納戸<span class="btn" data-clipboard-text="#53727d">#53727d </span></a></li>
                <li class="white" style="background: rgb(91, 126, 145);"><a>舛花色 <span class="btn" data-clipboard-text="#5b7e91">#5b7e91 </span></a></li>
                <li class="white" style="background: rgb(66, 101, 121);"><a>熨斗目花色 <span class="btn" data-clipboard-text="#426579">#426579 </span></a></li>
                <li class="white" style="background: rgb(76, 100, 115);"><a>御召御納戸 <span class="btn" data-clipboard-text="#4c6473">#4c6473 </span></a></li>
                <li class="white" style="background: rgb(69, 87, 101);"><a>鉄御納戸 <span class="btn" data-clipboard-text="#455765">#455765 </span></a></li>
                <li class="white" style="background: rgb(68, 97, 123);"><a>紺鼠 <span class="btn" data-clipboard-text="#44617b">#44617b</span></a></li>
                <li class="white" style="background: rgb(57, 63, 76);"><a>藍鉄<span class="btn" data-clipboard-text="#393f4c">#393f4c </span></a></li>
                <li class="white" style="background: rgb(57, 62, 79);"><a>青褐<span class="btn" data-clipboard-text="#393e4f">#393e4f </span></a></li>
                <li class="white" style="background: rgb(32, 55, 68);"><a>褐返<span class="btn" data-clipboard-text="#203744">#203744 </span></a></li>
                <li class="white" style="background: rgb(77, 76, 97);"><a>褐色<span class="btn" data-clipboard-text="#4d4c61">#4d4c61 </span></a></li>
                <li style="background: rgb(234, 244, 252);"><a>月白<span class="btn" data-clipboard-text="#eaf4fc">#eaf4fc </span></a></li>
                <li style="background: rgb(234, 237, 247);"><a>白菫色 <span class="btn" data-clipboard-text="#eaedf7">#eaedf7 </span></a></li>
                <li style="background: rgb(232, 236, 239);"><a>白花色<span class="btn" data-clipboard-text="#e8ecef">#e8ecef </span></a></li>
                <li style="background: rgb(235, 246, 247);"><a>藍白<span class="btn" data-clipboard-text="#ebf6f7">#ebf6f7 </span></a></li>
                <li style="background: rgb(193, 228, 233);"><a>白藍<span class="btn" data-clipboard-text="#c1e4e9">#c1e4e9 </span></a></li>
                <li style="background: rgb(188, 226, 232);"><a>水色<span class="btn" data-clipboard-text="#bce2e8">#bce2e8 </span></a></li>
                <li style="background: rgb(162, 215, 221);"><a>瓶覗<span class="btn" data-clipboard-text="#a2d7dd">#a2d7dd </span></a></li>
                <li style="background: rgb(171, 206, 216);"><a>秘色色 <span class="btn" data-clipboard-text="#abced8">#abced8 </span></a></li>
                <li style="background: rgb(160, 216, 239);"><a>空色<span class="btn" data-clipboard-text="#a0d8ef">#a0d8ef </span></a></li>
                <li style="background: rgb(137, 195, 235);"><a>勿忘草色 <span class="btn" data-clipboard-text="#89c3eb">#89c3eb </span></a></li>
                <li style="background: rgb(132, 162, 212);"><a>青藤色 <span class="btn" data-clipboard-text="#84a2d4">#84a2d4 </span></a></li>
                <li style="background: rgb(131, 204, 210);"><a>白群<span class="btn" data-clipboard-text="#83ccd2">#83ccd2 </span></a></li>
                <li class="white" style="background: rgb(132, 185, 203);"><a>浅縹<span class="btn" data-clipboard-text="#84b9cb">#84b9cb </span></a></li>
                <li class="white" style="background: rgb(105, 138, 171);"><a>薄花色<span class="btn" data-clipboard-text="#698aab">#698aab </span></a></li>
                <li class="white" style="background: rgb(0, 136, 153);"><a>納戸色<span class="btn" data-clipboard-text="#008899">#008899 </span></a></li>
                <li class="white" style="background: rgb(0, 163, 175);"><a>浅葱色<span class="btn" data-clipboard-text="#00a3af">#00a3af </span></a></li>
                <li class="white" style="background: rgb(42, 131, 162);"><a>花浅葱 <span class="btn" data-clipboard-text="#2a83a2">#2a83a2 </span></a></li>
                <li class="white" style="background: rgb(89, 185, 198);"><a>新橋色<span class="btn" data-clipboard-text="#59b9c6">#59b9c6 </span></a></li>
                <li style="background: rgb(44, 169, 225);"><a>天色<span class="btn" data-clipboard-text="#2ca9e1">#2ca9e1 </span></a></li>
                <li style="background: rgb(56, 161, 219);"><a>露草色 <span class="btn" data-clipboard-text="#38a1db">#38a1db </span></a></li>
                <li style="background: rgb(0, 149, 217);"><a>青<span class="btn" data-clipboard-text="#0095d9">#0095d9 </span></a></li>
                <li class="white" style="background: rgb(0, 148, 200);"><a>薄藍<span class="btn" data-clipboard-text="#0094c8">#0094c8 </span></a></li>
                <li class="white" style="background: rgb(39, 146, 195);"><a>縹色<span class="btn" data-clipboard-text="#2792c3">#2792c3 </span></a></li>
                <li class="white" style="background: rgb(0, 123, 187);"><a>紺碧<span class="btn" data-clipboard-text="#007bbb">#007bbb </span></a></li>
                <li class="white" style="background: rgb(83, 131, 195);"><a>薄群青<span class="btn" data-clipboard-text="#5383c3">#5383c3 </span></a></li>
                <li class="white" style="background: rgb(90, 121, 186);"><a>薄花桜<span class="btn" data-clipboard-text="#5a79ba">#5a79ba </span></a></li>
                <li class="white" style="background: rgb(76, 108, 179);"><a>群青色<span class="btn" data-clipboard-text="#4c6cb3">#4c6cb3 </span></a></li>
                <li class="white" style="background: rgb(62, 98, 173);"><a>杜若色<span class="btn" data-clipboard-text="#3e62ad">#3e62ad </span></a></li>
                <li class="white" style="background: rgb(30, 80, 162);"><a>瑠璃色<span class="btn" data-clipboard-text="#1e50a2">#1e50a2 </span></a></li>
                <li class="white" style="background: rgb(80, 126, 164);"><a>薄縹<span class="btn" data-clipboard-text="#507ea4">#507ea4 </span></a></li>
                <li class="white" style="background: rgb(25, 68, 142);"><a>瑠璃紺<span class="btn" data-clipboard-text="#19448e">#19448e </span></a></li>
                <li class="white" style="background: rgb(22, 74, 132);"><a>紺瑠璃 <span class="btn" data-clipboard-text="#164a84">#164a84</span></a></li>
                <li class="white" style="background: rgb(22, 94, 131);"><a>藍色<span class="btn" data-clipboard-text="#165e83">#165e83</span></a></li>
                <li class="white" style="background: rgb(39, 74, 120);"><a>青藍<span class="btn" data-clipboard-text="#274a78">#274a78 </span></a></li>
                <li class="white" style="background: rgb(42, 64, 115);"><a>深縹<span class="btn" data-clipboard-text="#2a4073">#2a4073 </span></a></li>
                <li class="white" style="background: rgb(34, 58, 112);"><a>紺色<span class="btn" data-clipboard-text="#223a70">#223a70 </span></a></li>
                <li class="white" style="background: rgb(25, 47, 96);"><a>紺青<span class="btn" data-clipboard-text="#192f60">#192f60 </span></a></li>
                <li class="white" style="background: rgb(28, 48, 92);"><a>留紺<span class="btn" data-clipboard-text="#1c305c">#1c305c </span></a></li>
                <li class="white" style="background: rgb(15, 35, 80);"><a>濃藍<span class="btn" data-clipboard-text="#0f2350">#0f2350 </span></a></li>
                <li class="white" style="background: rgb(23, 24, 75);"><a>鉄紺<span class="btn" data-clipboard-text="#17184b">#17184b </span></a></li>
                <li class="white" style="background: rgb(13, 0, 21);"><a>漆黒<span class="btn" data-clipboard-text="#0d0015">#0d0015 </span></a></li>
                <li style="background: rgb(187, 200, 230);"><a>淡藤色 <span class="btn" data-clipboard-text="#bbc8e6">#bbc8e6 </span></a></li>
                <li style="background: rgb(187, 188, 222);"><a>藤色<span class="btn" data-clipboard-text="#bbbcde">#bbbcde </span></a></li>
                <li class="white" style="background: rgb(132, 145, 195);"><a>紅掛空色<span class="btn" data-clipboard-text="#8491c3">#8491c3 </span></a></li>
                <li class="white" style="background: rgb(132, 145, 195);"><a>紅碧<span class="btn" data-clipboard-text="#8491c3">#8491c3 </span></a></li>
                <li class="white" style="background: rgb(77, 90, 175);"><a>紺桔梗 <span class="btn" data-clipboard-text="#4d5aaf">#4d5aaf </span></a></li>
                <li class="white" style="background: rgb(77, 90, 175);"><a>花色<span class="btn" data-clipboard-text="#4d5aaf">#4d5aaf </span></a></li>
                <li class="white" style="background: rgb(74, 72, 142);"><a>紺藍<span class="btn" data-clipboard-text="#4a488e">#4a488e </span></a></li>
                <li class="white" style="background: rgb(77, 67, 152);"><a>紅桔梗 <span class="btn" data-clipboard-text="#4d4398">#4d4398 </span></a></li>
                <li class="white" style="background: rgb(86, 84, 162);"><a>桔梗色<span class="btn" data-clipboard-text="#5654a2">#5654a2 </span></a></li>
                <li class="white" style="background: rgb(112, 108, 170);"><a>藤納戸<span class="btn" data-clipboard-text="#706caa">#706caa </span></a></li>
                <li class="white" style="background: rgb(104, 105, 155);"><a>紅掛花色 <span class="btn" data-clipboard-text="#68699b">#68699b </span></a></li>
                <li class="white" style="background: rgb(134, 123, 169);"><a>紫苑色 <span class="btn" data-clipboard-text="#867ba9">#867ba9 </span></a></li>
                <li style="background: rgb(219, 208, 230);"><a>白藤色 <span class="btn" data-clipboard-text="#dbd0e6">#dbd0e6 </span></a></li>
                <li class="white" style="background: rgb(165, 154, 202);"><a>藤紫<span class="btn" data-clipboard-text="#a59aca">#a59aca </span></a></li>
                <li class="white" style="background: rgb(112, 88, 163);"><a>菫色<span class="btn" data-clipboard-text="#7058a3">#7058a3 </span></a></li>
                <li class="white" style="background: rgb(103, 69, 152);"><a>青紫<span class="btn" data-clipboard-text="#674598">#674598 </span></a></li>
                <li class="white" style="background: rgb(103, 65, 150);"><a>菖蒲色<span class="btn" data-clipboard-text="#674196">#674196 </span></a></li>
                <li class="white" style="background: rgb(144, 121, 173);"><a>竜胆色<span class="btn" data-clipboard-text="#9079ad">#9079ad </span></a></li>
                <li class="white" style="background: rgb(116, 83, 153);"><a>江戸紫 <span class="btn" data-clipboard-text="#745399">#745399 </span></a></li>
                <li class="white" style="background: rgb(101, 49, 142);"><a>本紫<span class="btn" data-clipboard-text="#65318e">#65318e </span></a></li>
                <li class="white" style="background: rgb(82, 47, 96);"><a>葡萄色<span class="btn" data-clipboard-text="#522f60">#522f60 </span></a></li>
                <li class="white" style="background: rgb(73, 55, 89);"><a>深紫<span class="btn" data-clipboard-text="#493759">#493759 </span></a></li>
                <li class="white" style="background: rgb(46, 41, 48);"><a>紫黒<span class="btn" data-clipboard-text="#2e2930">#2e2930 </span></a></li>
                <li class="white" style="background: rgb(136, 72, 152);"><a>紫<span class="btn" data-clipboard-text="#884898">#884898 </span></a></li>
                <li class="white" style="background: rgb(192, 162, 199);"><a>薄葡萄<span class="btn" data-clipboard-text="#c0a2c7">#c0a2c7 </span></a></li>
                <li class="white" style="background: rgb(70, 14, 68);"><a>紫紺<span class="btn" data-clipboard-text="#460e44">#460e44 </span></a></li>
                <li class="white" style="background: rgb(116, 50, 92);"><a>暗紅色 <span class="btn" data-clipboard-text="#74325c">#74325c </span></a></li>
                <li class="white" style="background: rgb(85, 41, 91);"><a>桑の実色 <span class="btn" data-clipboard-text="#55295b">#55295b </span></a></li>
            </ul>
            <ul @click="handleClick">
                <li style="background: rgb(230, 180, 34);"><a>黄金<span class="btn" data-clipboard-text="#e6b422">#e6b422</span></a></li>
                <li style="background: rgb(217, 166, 46);"><a>櫨染<span class="btn" data-clipboard-text="#d9a62e">#d9a62e</span></a></li>
                <li style="background: rgb(211, 162, 67);"><a>黄朽葉色 <span class="btn" data-clipboard-text="#d3a243">#d3a243</span></a></li>
                <li class="white" style="background: rgb(200, 153, 50);"><a>山吹茶 <span class="btn" data-clipboard-text="#c89932">#c89932 </span></a></li>
                <li style="background: rgb(208, 175, 76);"><a>芥子色 <span class="btn" data-clipboard-text="#d0af4c">#d0af4c </span></a></li>
                <li class="white" style="background: rgb(139, 150, 141);"><a>豆がら茶 <span class="btn" data-clipboard-text="#8b968d">#8b968d </span></a></li>
                <li class="white" style="background: rgb(110, 121, 85);"><a>麹塵 <span class="btn" data-clipboard-text="#6e7955">#6e7955 </span></a></li>
                <li class="white" style="background: rgb(118, 124, 107);"><a>山鳩色<span class="btn" data-clipboard-text="#767c6b">#767c6b </span></a></li>
                <li class="white" style="background: rgb(136, 142, 126);"><a>利休鼠 <span class="btn" data-clipboard-text="#888e7e">#888e7e </span></a></li>
                <li class="white" style="background: rgb(90, 84, 75);"><a>海松茶 <span class="btn" data-clipboard-text="#5a544b">#5a544b </span></a></li>
                <li class="white" style="background: rgb(86, 86, 75);"><a>藍海松茶 <span class="btn" data-clipboard-text="#56564b">#56564b </span></a></li>
                <li class="white" style="background: rgb(86, 86, 75);"><a>藍媚茶 <span class="btn" data-clipboard-text="#56564b">#56564b </span></a></li>
                <li class="white" style="background: rgb(73, 74, 65);"><a>千歳茶<span class="btn" data-clipboard-text="#494a41">#494a41 </span></a></li>
                <li class="white" style="background: rgb(107, 111, 89);"><a>岩井茶<span class="btn" data-clipboard-text="#6b6f59">#6b6f59 </span></a></li>
                <li class="white" style="background: rgb(71, 75, 66);"><a>仙斎茶 <span class="btn" data-clipboard-text="#474b42">#474b42 </span></a></li>
                <li class="white" style="background: rgb(51, 54, 49);"><a>黒緑<span class="btn" data-clipboard-text="#333631">#333631 </span></a></li>
                <li class="white" style="background: rgb(91, 99, 86);"><a>柳煤竹 <span class="btn" data-clipboard-text="#5b6356">#5b6356 </span></a></li>
                <li class="white" style="background: rgb(114, 98, 80);"><a>樺茶色 <span class="btn" data-clipboard-text="#726250">#726250 </span></a></li>
                <li class="white" style="background: rgb(157, 137, 108);"><a>空五倍子色 <span class="btn" data-clipboard-text="#9d896c">#9d896c </span></a></li>
                <li class="white" style="background: rgb(148, 132, 106);"><a>生壁色 <span class="btn" data-clipboard-text="#94846a">#94846a </span></a></li>
                <li class="white" style="background: rgb(137, 120, 88);"><a>肥後煤竹 <span class="btn" data-clipboard-text="#897858">#897858 </span></a></li>
                <li class="white" style="background: rgb(113, 98, 70);"><a>媚茶 <span class="btn" data-clipboard-text="#716246">#716246 </span></a></li>
                <li class="white" style="background: rgb(203, 185, 148);"><a>白橡<span class="btn" data-clipboard-text="#cbb994">#cbb994 </span></a></li>
                <li style="background: rgb(214, 198, 175);"><a>亜麻色<span class="btn" data-clipboard-text="#d6c6af">#d6c6af </span></a></li>
                <li class="white" style="background: rgb(191, 164, 111);"><a>榛色<span class="btn" data-clipboard-text="#bfa46f">#bfa46f </span></a></li>
                <li class="white" style="background: rgb(158, 148, 120);"><a>灰汁色 <span class="btn" data-clipboard-text="#9e9478">#9e9478 </span></a></li>
                <li class="white" style="background: rgb(165, 149, 100);"><a>利休茶 <span class="btn" data-clipboard-text="#a59564">#a59564 </span></a></li>
                <li class="white" style="background: rgb(113, 92, 31);"><a>鶯茶<span class="btn" data-clipboard-text="#715c1f">#715c1f </span></a></li>
                <li class="white" style="background: rgb(199, 179, 112);"><a>木蘭色<span class="btn" data-clipboard-text="#c7b370">#c7b370 </span></a></li>
                <li class="white" style="background: rgb(220, 211, 178);"><a>砂色<span class="btn" data-clipboard-text="#dcd3b2">#dcd3b2 </span></a></li>
                <li class="white" style="background: rgb(161, 147, 97);"><a>油色<span class="btn" data-clipboard-text="#a19361">#a19361 </span></a></li>
                <li class="white" style="background: rgb(143, 134, 103);"><a>利休色<span class="btn" data-clipboard-text="#8f8667">#8f8667 </span></a></li>
                <li class="white" style="background: rgb(136, 121, 56);"><a>梅幸茶 <span class="btn" data-clipboard-text="#887938">#887938 </span></a></li>
                <li class="white" style="background: rgb(106, 93, 33);"><a>璃寛茶 <span class="btn" data-clipboard-text="#6a5d21">#6a5d21 </span></a></li>
                <li class="white" style="background: rgb(145, 135, 84);"><a>黄海松茶 <span class="btn" data-clipboard-text="#918754">#918754 </span></a></li>
                <li class="white" style="background: rgb(166, 148, 37);"><a>菜種油色<span class="btn" data-clipboard-text="#a69425">#a69425 </span></a></li>
                <li class="white" style="background: rgb(173, 162, 80);"><a>青朽葉 <span class="btn" data-clipboard-text="#ada250">#ada250 </span></a></li>
                <li class="white" style="background: rgb(147, 139, 75);"><a>根岸色 <span class="btn" data-clipboard-text="#938b4b">#938b4b </span></a></li>
                <li class="white" style="background: rgb(140, 136, 97);"><a>鶸茶<span class="btn" data-clipboard-text="#8c8861">#8c8861 </span></a></li>
                <li class="white" style="background: rgb(161, 164, 109);"><a>柳茶<span class="btn" data-clipboard-text="#a1a46d">#a1a46d </span></a></li>
                <li class="white" style="background: rgb(114, 109, 64);"><a>海松色 <span class="btn" data-clipboard-text="#726d40">#726d40 </span></a></li>
                <li class="white" style="background: rgb(146, 140, 54);"><a>鶯色 <span class="btn" data-clipboard-text="#928c36">#928c36 </span></a></li>
                <li style="background: rgb(220, 203, 24);"><a>緑黄色 <span class="btn" data-clipboard-text="#dccb18">#dccb18 </span></a></li>
                <li style="background: rgb(215, 207, 58);"><a>鶸色 <span class="btn" data-clipboard-text="#d7cf3a">#d7cf3a </span></a></li>
                <li class="white" style="background: rgb(197, 197, 106);"><a>抹茶色<span class="btn" data-clipboard-text="#c5c56a">#c5c56a </span></a></li>
                <li style="background: rgb(195, 216, 37);"><a>若草色 <span class="btn" data-clipboard-text="#c3d825">#c3d825 </span></a></li>
                <li style="background: rgb(184, 210, 0);"><a>黄緑<span class="btn" data-clipboard-text="#b8d200">#b8d200 </span></a></li>
                <li style="background: rgb(224, 235, 175);"><a>若芽色<span class="btn" data-clipboard-text="#e0ebaf">#e0ebaf</span></a></li>
                <li style="background: rgb(216, 230, 152);"><a>若菜色<span class="btn" data-clipboard-text="#d8e698">#d8e698</span></a></li>
                <li style="background: rgb(199, 220, 104);"><a>若苗色 <span class="btn" data-clipboard-text="#c7dc68">#c7dc68</span></a></li>
                <li class="white" style="background: rgb(153, 171, 78);"><a>青丹<span class="btn" data-clipboard-text="#99ab4e">#99ab4e </span></a></li>
                <li class="white" style="background: rgb(123, 141, 66);"><a>草色<span class="btn" data-clipboard-text="#7b8d42">#7b8d42 </span></a></li>
                <li class="white" style="background: rgb(105, 130, 27);"><a>苔色<span class="btn" data-clipboard-text="#69821b">#69821b </span></a></li>
                <li style="background: rgb(170, 207, 83);"><a>萌黄<span class="btn" data-clipboard-text="#aacf53">#aacf53</span></a></li>
                <li class="white" style="background: rgb(176, 202, 113);"><a>苗色<span class="btn" data-clipboard-text="#b0ca71">#b0ca71</span></a></li>
                <li style="background: rgb(185, 208, 139);"><a>若葉色<span class="btn" data-clipboard-text="#b9d08b">#b9d08b</span></a></li>
                <li class="white" style="background: rgb(131, 155, 92);"><a>松葉色<span class="btn" data-clipboard-text="#839b5c">#839b5c </span></a></li>
                <li style="background: rgb(206, 228, 174);"><a>夏虫色 <span class="btn" data-clipboard-text="#cee4ae">#cee4ae </span></a></li>
                <li class="white" style="background: rgb(130, 174, 70);"><a>鶸萌黄 <span class="btn" data-clipboard-text="#82ae46">#82ae46 </span></a></li>
                <li class="white" style="background: rgb(168, 201, 127);"><a>柳色<span class="btn" data-clipboard-text="#a8c97f">#a8c97f </span></a></li>
                <li class="white" style="background: rgb(155, 168, 141);"><a>青白橡 <span class="btn" data-clipboard-text="#9ba88d">#9ba88d </span></a></li>
                <li style="background: rgb(200, 213, 187);"><a>柳鼠<span class="btn" data-clipboard-text="#c8d5bb">#c8d5bb </span></a></li>
                <li style="background: rgb(193, 216, 172);"><a>裏葉柳 <span class="btn" data-clipboard-text="#c1d8ac">#c1d8ac </span></a></li>
                <li class="white" style="background: rgb(168, 191, 147);"><a>山葵色<span class="btn" data-clipboard-text="#a8bf93">#a8bf93 </span></a></li>
                <li class="white" style="background: rgb(118, 145, 100);"><a>老竹色<span class="btn" data-clipboard-text="#769164">#769164</span></a></li>
                <li style="background: rgb(214, 233, 202);"><a>白緑 <span class="btn" data-clipboard-text="#d6e9ca">#d6e9ca</span></a></li>
                <li class="white" style="background: rgb(147, 202, 118);"><a>淡萌黄 <span class="btn" data-clipboard-text="#93ca76">#93ca76</span></a></li>
                <li class="white" style="background: rgb(147, 184, 129);"><a>柳染<span class="btn" data-clipboard-text="#93b881">#93b881 </span></a></li>
                <li style="background: rgb(186, 220, 173);"><a>薄萌葱<span class="btn" data-clipboard-text="#badcad">#badcad </span></a></li>
                <li class="white" style="background: rgb(151, 167, 145);"><a>深川鼠<span class="btn" data-clipboard-text="#97a791">#97a791 </span></a></li>
                <li style="background: rgb(152, 217, 142);"><a>若緑<span class="btn" data-clipboard-text="#98d98e">#98d98e </span></a></li>
                <li class="white" style="background: rgb(136, 203, 127);"><a>浅緑<span class="btn" data-clipboard-text="#88cb7f">#88cb7f </span></a></li>
                <li class="white" style="background: rgb(105, 176, 118);"><a>薄緑<span class="btn" data-clipboard-text="#69b076">#69b076</span></a></li>
                <li class="white" style="background: rgb(107, 123, 110);"><a>青鈍<span class="btn" data-clipboard-text="#6b7b6e">#6b7b6e</span></a></li>
                <li style="background: rgb(190, 210, 195);"><a>青磁鼠<span class="btn" data-clipboard-text="#bed2c3">#bed2c3</span></a></li>
                <li class="white" style="background: rgb(147, 182, 156);"><a>薄青<span class="btn" data-clipboard-text="#93b69c">#93b69c</span></a></li>
                <li class="white" style="background: rgb(166, 200, 178);"><a>錆青磁 <span class="btn" data-clipboard-text="#a6c8b2">#a6c8b2 </span></a></li>
                <li class="white" style="background: rgb(71, 136, 94);"><a>緑青色<span class="btn" data-clipboard-text="#47885e">#47885e </span></a></li>
                <li class="white" style="background: rgb(49, 103, 69);"><a>千歳緑<span class="btn" data-clipboard-text="#316745">#316745 </span></a></li>
                <li class="white" style="background: rgb(104, 190, 141);"><a>若竹色<span class="btn" data-clipboard-text="#68be8d">#68be8d </span></a></li>
                <li class="white" style="background: rgb(62, 179, 112);"><a>緑<span class="btn" data-clipboard-text="#3eb370">#3eb370 </span></a></li>
                <li class="white" style="background: rgb(0, 123, 67);"><a>常磐色<span class="btn" data-clipboard-text="#007b43">#007b43 </span></a></li>
                <li style="background: rgb(190, 211, 202);"><a>千草鼠<span class="btn" data-clipboard-text="#bed3ca">#bed3ca</span></a></li>
                <li class="white" style="background: rgb(146, 181, 169);"><a>千草色<span class="btn" data-clipboard-text="#92b5a9">#92b5a9 </span></a></li>
                <li class="white" style="background: rgb(126, 190, 165);"><a>青磁色<span class="btn" data-clipboard-text="#7ebea5">#7ebea5 </span></a></li>
                <li class="white" style="background: rgb(126, 190, 171);"><a>青竹色<span class="btn" data-clipboard-text="#7ebeab">#7ebeab </span></a></li>
                <li class="white" style="background: rgb(2, 135, 96);"><a>常磐緑<span class="btn" data-clipboard-text="#028760">#028760 </span></a></li>
                <li class="white" style="background: rgb(59, 121, 96);"><a>木賊色<span class="btn" data-clipboard-text="#3b7960">#3b7960 </span></a></li>
                <li class="white" style="background: rgb(47, 93, 80);"><a>天鵞絨 <span class="btn" data-clipboard-text="#2f5d50">#2f5d50</span></a></li>
                <li class="white" style="background: rgb(58, 91, 82);"><a>虫襖<span class="btn" data-clipboard-text="#3a5b52">#3a5b52 </span></a></li>
                <li class="white" style="background: rgb(71, 89, 80);"><a>革色<span class="btn" data-clipboard-text="#475950">#475950 </span></a></li>
                <li class="white" style="background: rgb(0, 85, 46);"><a>深緑<span class="btn" data-clipboard-text="#00552e">#00552e </span></a></li>
                <li class="white" style="background: rgb(0, 82, 67);"><a>鉄色<span class="btn" data-clipboard-text="#005243">#005243 </span></a></li>
            </ul>
            <ul @click="handleClick">
                <li class="white" style="background: rgb(150, 81, 77);"><a>小豆色<span class="btn" data-clipboard-text="#bce672">">#96514d</span></a></li>
                <li class="white" style="background: rgb(141, 100, 73);"><a>枯茶<span class="btn" data-clipboard-text="#8d6449">#8d6449</span></a></li>
                <li style="background: rgb(222, 176, 104);"><a>饴色<span class="btn" data-clipboard-text="#deb068">#deb068</span></a></li>
                <li class="white" style="background: rgb(191, 121, 78);"><a>骆驼色<span class="btn" data-clipboard-text="#bf794e">#bf794e</span></a></li>
                <li class="white" style="background: rgb(188, 118, 60);"><a>土色<span class="btn" data-clipboard-text="#bc763c">#bc763c</span></a></li>
                <li class="white" style="background: rgb(185, 140, 70);"><a>黄唐色<span class="btn" data-clipboard-text="#b98c46">#b98c46</span></a></li>
                <li class="white" style="background: rgb(183, 155, 91);"><a>桑染<span class="btn" data-clipboard-text="#b79b5b">#b79b5b</span></a></li>
                <li class="white" style="background: rgb(183, 123, 87);"><a>栌色<span class="btn" data-clipboard-text="#b77b57">#b77b57</span></a></li>
                <li class="white" style="background: rgb(182, 141, 76);"><a>黄橡<span class="btn" data-clipboard-text="#b68d4c">#b68d4c</span></a></li>
                <li class="white" style="background: rgb(173, 125, 76);"><a>丁字染<span class="btn" data-clipboard-text="#ad7d4c">#ad7d4c</span></a></li>
                <li class="white" style="background: rgb(173, 125, 76);"><a>香染<span class="btn" data-clipboard-text="#ad7d4c">#ad7d4c</span></a></li>
                <li class="white" style="background: rgb(174, 124, 79);"><a>枇杷茶<span class="btn" data-clipboard-text="#ae7c4f">#ae7c4f</span></a></li>
                <li class="white" style="background: rgb(173, 126, 78);"><a>芝翫茶<span class="btn" data-clipboard-text="#ad7e4e">#ad7e4e</span></a></li>
                <li class="white" style="background: rgb(174, 124, 88);"><a>焦香<span class="btn" data-clipboard-text="#ae7c58">#ae7c58</span></a></li>
                <li class="white" style="background: rgb(168, 111, 76);"><a>胡桃色<span class="btn" data-clipboard-text="#a86f4c">#a86f4c</span></a></li>
                <li class="white" style="background: rgb(148, 98, 67);"><a>渋纸色<span class="btn" data-clipboard-text="#946243">#946243</span></a></li>
                <li class="white" style="background: rgb(145, 115, 71);"><a>朽葉色<span class="btn" data-clipboard-text="#917347">#917347</span></a></li>
                <li class="white" style="background: rgb(149, 111, 41);"><a>桑茶<span class="btn" data-clipboard-text="#956f29">#956f29</span></a></li>
                <li class="white" style="background: rgb(140, 112, 66);"><a>路考茶<span class="btn" data-clipboard-text="#8c7042">#8c7042</span></a></li>
                <li class="white" style="background: rgb(123, 108, 62);"><a>国防色<span class="btn" data-clipboard-text="#7b6c3e">#7b6c3e</span></a></li>
                <li style="background: rgb(216, 163, 115);"><a>伽羅色<span class="btn" data-clipboard-text="#d8a373">#d8a373</span></a></li>
                <li class="white" style="background: rgb(205, 140, 92);"><a>江戸茶<span class="btn" data-clipboard-text="#cd8c5c">#cd8c5c</span></a></li>
                <li class="white" style="background: rgb(205, 94, 60);"><a>樺色<span class="btn" data-clipboard-text="#cd5e3c">#cd5e3c</span></a></li>
                <li class="white" style="background: rgb(203, 131, 71);"><a>紅鬱金<span class="btn" data-clipboard-text="#cb8347">#cb8347</span></a></li>
                <li class="white" style="background: rgb(195, 120, 84);"><a>土器色<span class="btn" data-clipboard-text="#c37854">#c37854</span></a></li>
                <li class="white" style="background: rgb(195, 135, 67);"><a>狐色<span class="btn" data-clipboard-text="#c38743">#c38743</span></a></li>
                <li class="white" style="background: rgb(195, 145, 67);"><a>黄土色<span class="btn" data-clipboard-text="#c39143">#c39143</span></a></li>
                <li class="white" style="background: rgb(191, 120, 58);"><a>琥珀色<span class="btn" data-clipboard-text="#bf783a">#bf783a</span></a></li>
                <li class="white" style="background: rgb(187, 85, 53);"><a>赤茶<span class="btn" data-clipboard-text="#bb5535">#bb5535</span></a></li>
                <li class="white" style="background: rgb(187, 85, 32);"><a>代赭<span class="btn" data-clipboard-text="#bb5520">#bb5520</span></a></li>
                <li class="white" style="background: rgb(181, 82, 51);"><a>煉瓦色<span class="btn" data-clipboard-text="#b55233">#b55233</span></a></li>
                <li class="white" style="background: rgb(170, 79, 55);"><a>雀茶<span class="btn" data-clipboard-text="#aa4f37">#aa4f37</span></a></li>
                <li class="white" style="background: rgb(159, 86, 58);"><a>団十郎茶<span class="btn" data-clipboard-text="#9f563a">#9f563a</span></a></li>
                <li class="white" style="background: rgb(159, 86, 58);"><a>柿渋色<span class="btn" data-clipboard-text="#9f563a">#9f563a</span></a></li>
                <li class="white" style="background: rgb(154, 73, 63);"><a>紅鳶<span class="btn" data-clipboard-text="#9a493f">#9a493f</span></a></li>
                <li class="white" style="background: rgb(152, 98, 60);"><a>灰茶<span class="btn" data-clipboard-text="#98623c">#98623c</span></a></li>
                <li class="white" style="background: rgb(150, 80, 66);"><a>茶色<span class="btn" data-clipboard-text="#965042">#965042</span></a></li>
                <li class="white" style="background: rgb(150, 80, 54);"><a>檜皮色<span class="btn" data-clipboard-text="#965036">#965036</span></a></li>
                <li class="white" style="background: rgb(149, 72, 63);"><a>鳶色<span class="btn" data-clipboard-text="#95483f">#95483f</span></a></li>
                <li class="white" style="background: rgb(149, 78, 42);"><a>柿茶<span class="btn" data-clipboard-text="#954e2a">#954e2a</span></a></li>
                <li class="white" style="background: rgb(143, 46, 20);"><a>弁柄色<span class="btn" data-clipboard-text="#8f2e14">#8f2e14</span></a></li>
                <li class="white" style="background: rgb(138, 51, 25);"><a>赤錆色<span class="btn" data-clipboard-text="#8a3319">#8a3319</span></a></li>
                <li class="white" style="background: rgb(138, 59, 0);"><a>褐色<span class="btn" data-clipboard-text="#8a3b00">#8a3b00</span></a></li>
                <li class="white" style="background: rgb(133, 46, 25);"><a>栗梅<span class="btn" data-clipboard-text="#852e19">#852e19</span></a></li>
                <li class="white" style="background: rgb(123, 71, 65);"><a>紅檜皮<span class="btn" data-clipboard-text="#7b4741">#7b4741</span></a></li>
                <li class="white" style="background: rgb(119, 60, 48);"><a>海老茶<span class="btn" data-clipboard-text="#773c30">#773c30</span></a></li>
                <li class="white" style="background: rgb(120, 60, 29);"><a>唐茶<span class="btn" data-clipboard-text="#783c1d">#783c1d</span></a></li>
                <li class="white" style="background: rgb(118, 47, 7);"><a>栗色<span class="btn" data-clipboard-text="#762f07">#762f07</span></a></li>
                <li class="white" style="background: rgb(117, 33, 0);"><a>赤銅色<span class="btn" data-clipboard-text="#752100">#752100</span></a></li>
                <li class="white" style="background: rgb(108, 53, 36);"><a>錆色<span class="btn" data-clipboard-text="#6c3524">#6c3524</span></a></li>
                <li class="white" style="background: rgb(104, 63, 54);"><a>赤褐色<span class="btn" data-clipboard-text="#683f36">#683f36</span></a></li>
                <li class="white" style="background: rgb(102, 64, 50);"><a>茶褐色<span class="btn" data-clipboard-text="#664032">#664032</span></a></li>
                <li class="white" style="background: rgb(109, 60, 50);"><a>栗皮茶<span class="btn" data-clipboard-text="#6d3c32">#6d3c32</span></a></li>
                <li class="white" style="background: rgb(88, 56, 34);"><a>黒茶<span class="btn" data-clipboard-text="#583822">#583822</span></a></li>
                <li class="white" style="background: rgb(108, 44, 47);"><a>葡萄茶<span class="btn" data-clipboard-text="#6c2c2f">#6c2c2f</span></a></li>
                <li class="white" style="background: rgb(100, 1, 37);"><a>葡萄色<span class="btn" data-clipboard-text="#640125">#640125</span></a></li>
                <li style="background: rgb(248, 184, 98);"><a>萱草色<span class="btn" data-clipboard-text="#f8b862">#f8b862</span></a></li>
                <li style="background: rgb(246, 173, 73);"><a>柑子色<span class="btn" data-clipboard-text="#f6ad49">#f6ad49</span></a></li>
                <li style="background: rgb(243, 152, 0);"><a>金茶<span class="btn" data-clipboard-text="#f39800">#f39800</span></a></li>
                <li style="background: rgb(240, 131, 0);"><a>蜜柑色<span class="btn" data-clipboard-text="#f08300">#f08300</span></a></li>
                <li style="background: rgb(236, 109, 81);"><a>鉛丹色<span class="btn" data-clipboard-text="#ec6d51">#ec6d51</span></a></li>
                <li style="background: rgb(238, 121, 72);"><a>黄丹<span class="btn" data-clipboard-text="#ee7948">#ee7948</span></a></li>
                <li style="background: rgb(237, 109, 61);"><a>柿色<span class="btn" data-clipboard-text="#ed6d3d">#ed6d3d</span></a></li>
                <li style="background: rgb(236, 104, 0);"><a>黄赤<span class="btn" data-clipboard-text="#ec6800">#ec6800</span></a></li>
                <li style="background: rgb(236, 104, 0);"><a>人参色<span class="btn" data-clipboard-text="#ec6800">#ec6800</span></a></li>
                <li style="background: rgb(238, 120, 0);"><a>橙色<span class="btn" data-clipboard-text="#ee7800">#ee7800</span></a></li>
                <li style="background: rgb(235, 98, 56);"><a>照柿<span class="btn" data-clipboard-text="#eb6238">#eb6238</span></a></li>
                <li style="background: rgb(234, 85, 6);"><a>赤橙<span class="btn" data-clipboard-text="#ea5506">#ea5506</span></a></li>
                <li style="background: rgb(234, 85, 6);"><a>金赤<span class="btn" data-clipboard-text="#ea5506">#ea5506</span></a></li>
                <li style="background: rgb(235, 97, 1);"><a>朱色<span class="btn" data-clipboard-text="#eb6101">#eb6101</span></a></li>
                <li style="background: rgb(228, 158, 97);"><a>小麦色<span class="btn" data-clipboard-text="#e49e61">#e49e61</span></a></li>
                <li style="background: rgb(228, 94, 50);"><a>丹色<span class="btn" data-clipboard-text="#e45e32">#e45e32</span></a></li>
                <li style="background: rgb(225, 123, 52);"><a>黄茶<span class="btn" data-clipboard-text="#e17b34">#e17b34</span></a></li>
                <li style="background: rgb(221, 122, 86);"><a>肉桂色<span class="btn" data-clipboard-text="#dd7a56">#dd7a56</span></a></li>
                <li style="background: rgb(219, 132, 73);"><a>赤朽葉色<span class="btn" data-clipboard-text="#db8449">#db8449</span></a></li>
                <li style="background: rgb(214, 106, 53);"><a>黄櫨染<span class="btn" data-clipboard-text="#d66a35">#d66a35</span></a></li>
                <li style="background: rgb(255, 217, 0);"><a>蒲公英色<span class="btn" data-clipboard-text="#ffd900">#ffd900</span></a></li>
                <li style="background: rgb(255, 217, 0);"><a>黄色<span class="btn" data-clipboard-text="#ffd900">#ffd900</span></a></li>
                <li style="background: rgb(255, 234, 0);"><a>中黄<span class="btn" data-clipboard-text="#ffea00">#ffea00</span></a></li>
                <li style="background: rgb(255, 236, 71);"><a>菜の花色<span class="btn" data-clipboard-text="#ffec47">#ffec47</span></a></li>
                <li style="background: rgb(254, 242, 99);"><a>黄檗色<span class="btn" data-clipboard-text="#fef263">#fef263</span></a></li>
                <li style="background: rgb(252, 213, 117);"><a>卵色<span class="btn" data-clipboard-text="#fcd575">#fcd575</span></a></li>
                <li style="background: rgb(251, 210, 107);"><a>花葉色<span class="btn" data-clipboard-text="#fbd26b">#fbd26b</span></a></li>
                <li style="background: rgb(245, 229, 107);"><a>刈安色<span class="btn" data-clipboard-text="#f5e56b">#f5e56b</span></a></li>
                <li style="background: rgb(238, 195, 98);"><a>玉蜀黍色<span class="btn" data-clipboard-text="#eec362">#eec362</span></a></li>
                <li style="background: rgb(235, 216, 66);"><a>金糸雀色<span class="btn" data-clipboard-text="#ebd842">#ebd842</span></a></li>
                <li style="background: rgb(255, 219, 79);"><a>黄支子色<span class="btn" data-clipboard-text="#ffdb4f">#ffdb4f</span></a></li>
                <li style="background: rgb(251, 202, 77);"><a>支子色<span class="btn" data-clipboard-text="#fbca4d">#fbca4d</span></a></li>
                <li style="background: rgb(252, 200, 0);"><a>向日葵色<span class="btn" data-clipboard-text="#fcc800">#fcc800</span></a></li>
                <li style="background: rgb(248, 181, 0);"><a>山吹色<span class="btn" data-clipboard-text="#f8b500">#f8b500</span></a></li>
                <li style="background: rgb(250, 191, 20);"><a>鬱金色<span class="btn" data-clipboard-text="#fabf14">#fabf14</span></a></li>
                <li style="background: rgb(247, 193, 20);"><a>藤黄<span class="btn" data-clipboard-text="#f7c114">#f7c114</span></a></li>
                <li style="background: rgb(230, 180, 34);"><a>金色<span class="btn" data-clipboard-text="#e6b422">#e6b422</span></a></li>
            </ul>
            <ul @click="handleClick">
                <li style="background: rgb(191, 36, 42);"><a>桜色<span class="btn" data-clipboard-text="#bf242a">#bf242a</span></a></li>
                <li style="background: rgb(253, 239, 242);"><a>薄桜<span class="btn" data-clipboard-text="#fdeff2">#fdeff2</span></a></li>
                <li style="background: rgb(233, 223, 229);"><a>桜鼠<span class="btn" data-clipboard-text="#e9dfe5">#e9dfe5</span></a></li>
                <li style="background: rgb(228, 210, 216);"><a>鸨鼠<span class="btn" data-clipboard-text="#e4d2d8">#e4d2d8</span></a></li>
                <li style="background: rgb(246, 191, 188);"><a>虹色<span class="btn" data-clipboard-text="#f6bfbc">#f6bfbc</span></a></li>
                <li style="background: rgb(245, 177, 170);"><a>珊瑚色<span class="btn" data-clipboard-text="#f5b1aa">#f5b1aa</span></a></li>
                <li style="background: rgb(245, 177, 153);"><a>一斤染<span class="">#f5b199</span></a></li>
                <li style="background: rgb(239, 171, 147);"><a>宍色<span class="btn" data-clipboard-text="#efab93">#efab93</span></a></li>
                <li style="background: rgb(242, 160, 161);"><a>红梅色<span class="btn" data-clipboard-text="#f2a0a1">#f2a0a1</span></a></li>
                <li style="background: rgb(240, 144, 141);"><a>薄红<span class="btn" data-clipboard-text="#f0908d">#f0908d</span></a></li>
                <li style="background: rgb(238, 130, 124);"><a>甚三红<span class="btn" data-clipboard-text="#ee827c">#ee827c</span></a></li>
                <li style="background: rgb(240, 145, 153);"><a>桃色<span class="btn" data-clipboard-text="#f09199">#f09199</span></a></li>
                <li style="background: rgb(244, 179, 194);"><a>鸨色<span class="btn" data-clipboard-text="#f4b3c2">#f4b3c2</span></a></li>
                <li style="background: rgb(238, 187, 203);"><a>撫子色<span class="btn" data-clipboard-text="#eebbcb">#eebbcb</span></a></li>
                <li style="background: rgb(232, 211, 199);"><a>灰梅<span class="btn" data-clipboard-text="#e8d3c7">#e8d3c7</span></a></li>
                <li style="background: rgb(232, 211, 209);"><a>灰桜<span class="btn" data-clipboard-text="#e8d3d1">#e8d3d1</span></a></li>
                <li style="background: rgb(230, 205, 227);"><a>淡红藤<span class="btn" data-clipboard-text="#e6cde3">#e6cde3</span></a></li>
                <li style="background: rgb(229, 171, 190);"><a>石竹色<span class="btn" data-clipboard-text="#e5abbe">#e5abbe</span></a></li>
                <li style="background: rgb(229, 151, 178);"><a>薄红梅<span class="btn" data-clipboard-text="#e597b2">#e597b2</span></a></li>
                <li style="background: rgb(225, 152, 180);"><a>桃花色<span class="btn" data-clipboard-text="#e198b4">#e198b4</span></a></li>
                <li style="background: rgb(228, 171, 155);"><a>水柿<span class="btn" data-clipboard-text="#e4ab9b">#e4ab9b</span></a></li>
                <li style="background: rgb(224, 158, 135);"><a>ときがら茶<span class="btn" data-clipboard-text="#e09e87">#e09e87</span></a></li>
                <li style="background: rgb(214, 144, 144);"><a>退红<span class="btn" data-clipboard-text="#d69090">#d69090</span></a></li>
                <li style="background: rgb(212, 172, 173);"><a>薄柿<span class="btn" data-clipboard-text="#d4acad">#d4acad</span></a></li>
                <li class="white" style="background: rgb(201, 117, 134);"><a>长春色<span class="btn" data-clipboard-text="#c97586">#c97586</span></a></li>
                <li class="white" style="background: rgb(192, 153, 160);"><a>梅鼠<span class="btn" data-clipboard-text="#c099a0">#c099a0</span></a></li>
                <li class="white" style="background: rgb(184, 136, 132);"><a>鸨浅葱<span class="btn" data-clipboard-text="#b88884">#b88884</span></a></li>
                <li class="white" style="background: rgb(180, 138, 118);"><a>梅染<span class="btn" data-clipboard-text="#b48a76">#b48a76</span></a></li>
                <li class="white" style="background: rgb(168, 105, 101);"><a>苏芳香<span class="btn" data-clipboard-text="#a86965">#a86965</span></a></li>
                <li class="white" style="background: rgb(162, 87, 104);"><a>浅苏芳<span class="btn" data-clipboard-text="#a25768">#a25768</span></a></li>
                <li style="background: rgb(236, 109, 113);"><a>真朱<span class="btn" data-clipboard-text="#ec6d71">#ec6d71</span></a></li>
                <li style="background: rgb(235, 110, 165);"><a>赤紫<span class="btn" data-clipboard-text="#eb6ea5">#eb6ea5</span></a></li>
                <li style="background: rgb(233, 82, 149);"><a>躑躅色<span class="btn" data-clipboard-text="#e95295">#e95295</span></a></li>
                <li style="background: rgb(231, 96, 158);"><a>牡丹色<span class="btn" data-clipboard-text="#e7609e">#e7609e</span></a></li>
                <li style="background: rgb(208, 87, 107);"><a>今样色<span class="btn" data-clipboard-text="#d0576b">#d0576b</span></a></li>
                <li class="white" style="background: rgb(200, 81, 121);"><a>中红<span class="btn" data-clipboard-text="#c85179">#c85179</span></a></li>
                <li style="background: rgb(233, 84, 107);"><a>蔷薇色<span class="btn" data-clipboard-text="#e9546b">#e9546b</span></a></li>
                <li style="background: rgb(233, 84, 100);"><a>韩红<span class="btn" data-clipboard-text="#e95464">#e95464</span></a></li>
                <li class="white" style="background: rgb(200, 85, 84);"><a>银朱<span class="btn" data-clipboard-text="#c85554">#c85554</span></a></li>
                <li class="white" style="background: rgb(197, 61, 67);"><a>赤红<span class="btn" data-clipboard-text="#c53d43">#c53d43</span></a></li>
                <li style="background: rgb(232, 57, 41);"><a>红緋<span class="btn" data-clipboard-text="#e83929">#e83929</span></a></li>
                <li style="background: rgb(230, 0, 51);"><a>赤<span class="btn" data-clipboard-text="#e60033">#e60033</span></a></li>
                <li style="background: rgb(226, 4, 27);"><a>猩緋<span class="btn" data-clipboard-text="#e2041b">#e2041b</span></a></li>
                <li style="background: rgb(215, 0, 58);"><a>红<span class="btn" data-clipboard-text="#d7003a">#d7003a</span></a></li>
                <li style="background: rgb(201, 23, 30);"><a>深緋<span class="btn" data-clipboard-text="#c9171e">#c9171e</span></a></li>
                <li style="background: rgb(211, 56, 28);"><a>绯色<span class="btn" data-clipboard-text="#d3381c">#d3381c</span></a></li>
                <li style="background: rgb(206, 82, 66);"><a>赤丹<span class="btn" data-clipboard-text="#ce5242">#ce5242</span></a></li>
                <li style="background: rgb(217, 51, 63);"><a>红赤<span class="btn" data-clipboard-text="#d9333f">#d9333f</span></a></li>
                <li class="white" style="background: rgb(185, 64, 71);"><a>胭脂<span class="btn" data-clipboard-text="#b94047">#b94047</span></a></li>
                <li class="white" style="background: rgb(186, 38, 54);"><a>朱緋<span class="btn" data-clipboard-text="#ba2636">#ba2636</span></a></li>
                <li class="white" style="background: rgb(183, 40, 46);"><a>茜色<span class="btn" data-clipboard-text="#b7282e">#b7282e</span></a></li>
                <li class="white" style="background: rgb(167, 56, 54);"><a>深海老茶<span class="btn" data-clipboard-text="#a73836">#a73836</span></a></li>
                <li class="white" style="background: rgb(158, 61, 63);"><a>苏芳<span class="btn" data-clipboard-text="#9e3d3f">#9e3d3f</span></a></li>
                <li class="white" style="background: rgb(162, 32, 65);"><a>真红<span class="btn" data-clipboard-text="#a22041">#a22041</span></a></li>
                <li class="white" style="background: rgb(162, 32, 65);"><a>浓红<span class="btn" data-clipboard-text="#a22041">#a22041</span></a></li>
                <li style="background: rgb(248, 244, 230);"><a>象牙色<span class="btn" data-clipboard-text="#f8f4e6">#f8f4e6</span></a></li>
                <li style="background: rgb(237, 228, 205);"><a>练色<span class="btn" data-clipboard-text="#ede4cd">#ede4cd</span></a></li>
                <li style="background: rgb(233, 228, 212);"><a>灰白色<span class="btn" data-clipboard-text="#e9e4d4">#e9e4d4</span></a></li>
                <li style="background: rgb(237, 225, 169);"><a>蒸栗色<span class="btn" data-clipboard-text="#ede1a9">#ede1a9</span></a></li>
                <li style="background: rgb(242, 242, 176);"><a>女郎花<span class="btn" data-clipboard-text="#f2f2b0">#f2f2b0</span></a></li>
                <li style="background: rgb(228, 220, 138);"><a>枯草色<span class="btn" data-clipboard-text="#e4dc8a">#e4dc8a</span></a></li>
                <li style="background: rgb(248, 229, 140);"><a>淡黄<span class="btn" data-clipboard-text="#f8e58c">#f8e58c</span></a></li>
                <li style="background: rgb(221, 187, 153);"><a>白茶<span class="btn" data-clipboard-text="#ddbb99">#ddbb99</span></a></li>
                <li style="background: rgb(215, 169, 140);"><a>赤白橡<span class="btn" data-clipboard-text="#d7a98c">#d7a98c</span></a></li>
                <li style="background: rgb(242, 201, 172);"><a>洗柿<span class="btn" data-clipboard-text="#f2c9ac">#f2c9ac</span></a></li>
                <li style="background: rgb(255, 241, 207);"><a>鸟の子色<span class="btn" data-clipboard-text="#fff1cf">#fff1cf</span></a></li>
                <li style="background: rgb(253, 222, 165);"><a>蜂蜜色<span class="btn" data-clipboard-text="#fddea5">#fddea5</span></a></li>
                <li style="background: rgb(252, 226, 196);"><a>肌色<span class="btn" data-clipboard-text="#fce2c4">#fce2c4</span></a></li>
                <li style="background: rgb(253, 232, 208);"><a>薄卵色<span class="btn" data-clipboard-text="#fde8d0">#fde8d0</span></a></li>
                <li style="background: rgb(249, 200, 155);"><a>雄黄<span class="btn" data-clipboard-text="#f9c89b">#f9c89b</span></a></li>
                <li style="background: rgb(247, 189, 143);"><a>洒落柿<span class="btn" data-clipboard-text="#f7bd8f">#f7bd8f</span></a></li>
                <li style="background: rgb(246, 184, 148);"><a>赤香<span class="btn" data-clipboard-text="#f6b894">#f6b894</span></a></li>
                <li style="background: rgb(244, 221, 165);"><a>砥粉色<span class="btn" data-clipboard-text="#f4dda5">#f4dda5</span></a></li>
                <li style="background: rgb(241, 191, 153);"><a>肉色<span class="btn" data-clipboard-text="#f1bf99">#f1bf99</span></a></li>
                <li style="background: rgb(241, 191, 153);"><a>人色<span class="btn" data-clipboard-text="#f1bf99">#f1bf99</span></a></li>
                <li style="background: rgb(239, 205, 154);"><a>丁子色<span class="btn" data-clipboard-text="#efcd9a">#efcd9a</span></a></li>
                <li style="background: rgb(239, 205, 154);"><a>香色<span class="btn" data-clipboard-text="#efcd9a">#efcd9a</span></a></li>
                <li style="background: rgb(240, 207, 160);"><a>薄香<span class="btn" data-clipboard-text="#f0cfa0">#f0cfa0</span></a></li>
                <li style="background: rgb(237, 211, 161);"><a>浅黄<span class="btn" data-clipboard-text="#edd3a1">#edd3a1</span></a></li>
                <li style="background: rgb(224, 195, 140);"><a>枯色<span class="btn" data-clipboard-text="#e0c38c">#e0c38c</span></a></li>
                <li style="background: rgb(243, 191, 136);"><a>淡香<span class="btn" data-clipboard-text="#f3bf88">#f3bf88</span></a></li>
                <li style="background: rgb(247, 185, 119);"><a>杏色<span class="btn" data-clipboard-text="#f7b977">#f7b977</span></a></li>
                <li style="background: rgb(241, 144, 114);"><a>东云色<span class="btn" data-clipboard-text="#f19072">#f19072</span></a></li>
                <li style="background: rgb(241, 144, 114);"><a>曙色<span class="btn" data-clipboard-text="#f19072">#f19072</span></a></li>
                <li style="background: rgb(238, 131, 111);"><a>珊瑚朱色<span class="btn" data-clipboard-text="#ee836f">#ee836f</span></a></li>
                <li style="background: rgb(235, 155, 111);"><a>深支子<span class="btn" data-clipboard-text="#eb9b6f">#eb9b6f</span></a></li>
                <li style="background: rgb(224, 129, 94);"><a>纁<span class="btn" data-clipboard-text="#e0815e">#e0815e</span></a></li>
                <li style="background: rgb(223, 113, 99);"><a>浅绯<span class="btn" data-clipboard-text="#df7163">#df7163</span></a></li>
                <li style="background: rgb(213, 124, 107);"><a>真赭<span class="btn" data-clipboard-text="#d57c6b">#d57c6b</span></a></li>
                <li style="background: rgb(208, 130, 108);"><a>洗朱<span class="btn" data-clipboard-text="#d0826c">#d0826c</span></a></li>
                <li class="white" style="background: rgb(202, 130, 105);"><a>遠州茶<span class="btn" data-clipboard-text="#ca8269">#ca8269</span></a></li>
                <li class="white" style="background: rgb(187, 85, 72);"><a>红桦色<span class="btn" data-clipboard-text="#bb5548">#bb5548</span></a></li>
                <li class="white" style="background: rgb(171, 105, 83);"><a>赭<span class="btn" data-clipboard-text="#ab6953">#ab6953</span></a></li>
            </ul>
        </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import { ElTabs, ElTabPane } from 'element-plus';
import VueClipboard from 'vue-clipboard3'

export default {
  name: 'colorToolPage',
  components: { ElTabs, ElTabPane },
  data() {
    return {
      activeName: 'first'
    }
  },
  mounted() {
  },
  methods: {
    handleClick(event) {
      const target = event.target;
      if (target.classList.contains('btn')) {
        // 处理点击事件的逻辑
        VueClipboard().toClipboard(target.dataset.clipboardText)
        this.$message(`复制成功! ${target.dataset.clipboardText}`)
      }
    }
  }
}
</script>

<style scoped>
.color-tool .conents li a span {
    display: block;
    font-size: 14px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font: 12px/1.33 Verdana, sans-serif;
}
.color-tool .conents ul {
    width: calc(20% - 50px);
    float: left;
    text-align: center;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.color-tool .conents ul li {
    display: block;
    padding: 20px 6px;
    margin: 8px 5px;
    border-radius: 3px;
    text-align: -webkit-match-parent;
    color: white;
    font-size: 16px;
    text-shadow: 0 0 5px #000;
    -webkit-text-fill-color: white;
}
.mobile .color-tool .conents ul {
    width: calc(35% - 25px);
    margin-block-start: 12px;
    margin-block-end: 12px;
    padding-inline-start: 12px;
}
</style>
<style>
.color-tool .tabs > .el-tabs__content {
  padding: 0;
  width: 100%;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>