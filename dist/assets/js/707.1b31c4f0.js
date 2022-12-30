"use strict";(self["webpackChunkos_tools"]=self["webpackChunkos_tools"]||[]).push([[707],{4707:function(o,e,n){n.r(e),n.d(e,{default:function(){return _}});var t=n(3396),l=n(7139);const r=o=>((0,t.dD)("data-v-790fa7e5"),o=o(),(0,t.Cn)(),o),s={class:"container jsrun full"},a=r((()=>(0,t._)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-029747aa":""},[(0,t._)("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"})],-1))),i={class:"e src"},c={class:"desc mt8",style:{padding:"0 8px 0 8px",color:"#999"}},d=r((()=>(0,t._)("b",null,"控制台：",-1))),u=r((()=>(0,t._)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-029747aa":""},[(0,t._)("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"})],-1))),g={class:"mt8 e ret"};function m(o,e,n,r,m,h){const p=(0,t.up)("el-button"),f=(0,t.up)("el-icon"),w=(0,t.up)("el-row"),v=(0,t.up)("codemirror"),x=(0,t.up)("el-col");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(w,{class:"p8",style:{width:"100%",display:"inline-block","line-height":"42px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{type:"danger",onClick:e[0]||(e[0]=o=>h.runScript())},{default:(0,t.w5)((()=>[(0,t.Uk)("▶ 运行代码")])),_:1}),(0,t._)("div",{style:(0,l.j5)({textAlign:"right",float:"right",marginBottom:(m.mobile,"0"),textAlign:"center"})},[(0,t.Wm)(p,{type:"info",onClick:e[1]||(e[1]=o=>m.textarea=m.demo1)},{default:(0,t.w5)((()=>[(0,t.Uk)("Demo 1")])),_:1}),(0,t.Wm)(p,{type:"info",onClick:e[2]||(e[2]=o=>m.textarea=m.demo2)},{default:(0,t.w5)((()=>[(0,t.Uk)("Demo 2")])),_:1}),(0,t.Wm)(p,{onClick:e[3]||(e[3]=o=>m.textarea=""),circle:"",title:"清空",style:{"background-color":"#111",border:"none"}},{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[a])),_:1})])),_:1})],4)])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(x,{span:24},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(v,{modelValue:m.textarea,"onUpdate:modelValue":e[4]||(e[4]=o=>m.textarea=o),placeholder:"输入 JavaScript 代码",style:(0,l.j5)({padding:"0px !important",height:"calc(60vh - 55px)"}),"indent-with-tab":!0,"tab-size":4,extensions:m.cmExt},null,8,["modelValue","style","extensions"])]),(0,t._)("div",c,[d,(0,t.Wm)(p,{circle:"",onClick:e[5]||(e[5]=o=>h.clearConsole()),style:{float:"right","margin-top":"-6px","background-color":"#111",border:"none"},title:"清空控制台"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[u])),_:1})])),_:1})]),(0,t._)("div",g,[(0,t.Wm)(v,{modelValue:m.result,"onUpdate:modelValue":e[6]||(e[6]=o=>m.result=o),style:(0,l.j5)({padding:"0px !important",height:"calc(40vh - 76px)"}),"indent-with-tab":!0,"tab-size":4,extensions:m.cmExtResult,disabled:""},null,8,["modelValue","style","extensions"])])])),_:1})])),_:1})])}var h=n(6159),p=n(4937),f=n(5406),w={name:"jsRunPage",components:{Codemirror:h.Z1},data(){return{cmExt:[(0,p.eJ)({jsx:!0}),f.vk],cmExtResult:[(0,p.eJ)({jsx:!0}),f.vk],mobile:this.isMobile(),textarea:"",result:"",demo1:'// 检测是否是合法的 URL\nfunction isUrl(url) {\n    const regex = /\\b(https?):\\/\\/[\\-A-Za-z0-9+&@#\\/%?=~_|!:,.;]*[\\-A-Za-z0-9+&@#\\/%=~_|]/i;\n    return regex.test(url);\n}\n// 测试代码\nlet url = "https://www.dute.orgsss";\nlet r = isUrl(url);\n\n// 输出结果\nconsole.log(url);\nconsole.log(r);\n',demo2:"// 测试 ES5 Array.map 方法\n/**\n * 对数据中的每一项乘以2\n */\nlet numbers = [1, 2, 3, 4, 5];\nnumbers = numbers.map(function(num) {\n    return num * 2;\n});\nconsole.log(numbers);\n"}},computed:{editor(){return this.$refs.myQuillEditor.quill}},mounted(){},methods:{clearConsole(){this.result=""},async runScript(){await this.exec()},async exec(){try{this.clearConsole();const o=this;let e,n=this.textarea;console.oldLog=console.log,console.oldErrLog=console.error,console.oldInfoLog=console.info,console.oldWarnLog=console.warn,console.__print=window.print,console.log=function(e){console.oldLog(e),o.log(e,!1)},console.error=function(e){console.oldErrLog(e),o.error(e,!1)},console.info=function(e){console.oldInfoLog(e),o.info(e,!1)},console.warn=function(e){console.oldWarnLog(e),o.warn(e,!1)};try{const t=Object.getPrototypeOf((async function(){})).constructor,l=new t("$",`return (async () => {${n||"undefined;"}})().catch((e)=>$.error(e))`),r=await l(o);e=r}finally{console.log=console.oldLog,console.error=console.oldErrLog,console.info=console.oldInfoLog,console.warn=console.oldWarnLog,window.print=console.__print,delete console.oldLog,delete console.oldErrLog,delete console.oldInfoLog,delete console.oldWarnLog,delete console.__print}void 0!==e&&this.log(e,!0)}catch(o){this.error(o,!0)}},log(o,e){this.result+="> "+this.toString(o)+"\n",!0!==e||console.oldLog||console.log(o)},info(o,e){this.result+="> "+this.toString(o)+"\n",!0!==e||console.oldLog||console.info(o)},warn(o,e){this.result+="> "+this.toString(o)+"\n",!0!==e||console.oldLog||console.warn(o)},error(o,e){this.result+="> "+this.toString(o)+"\n",!0!==e||console.oldLog||console.error(o)},toString(o){return void 0===o||null===o?o:o instanceof Error?o.toString():"object"===typeof o||Array.isArray(o)?o+"\n"+JSON.stringify(o):o}}},v=n(89);const x=(0,v.Z)(w,[["render",m],["__scopeId","data-v-790fa7e5"]]);var _=x}}]);