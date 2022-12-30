(self["webpackChunkos_tools"]=self["webpackChunkos_tools"]||[]).push([[959],{8134:function(t){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return S}});var i=n(279),r=n.n(i),o=n(370),a=n.n(o),s=n(817),u=n.n(s);function c(t){try{return document.execCommand(t)}catch(e){return!1}}var l=function(t){var e=u()(t);return c("cut"),e},h=l;function f(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(i,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t,e){var n=f(t);e.container.appendChild(n);var i=u()(n);return c("copy"),n.remove(),i},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=p(t.value,e):(n=u()(t),c("copy")),n},d=_;function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,i=t.container,r=t.target,o=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==g(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?d(o,{container:i}):r?"cut"===n?h(r):d(r,{container:i}):void 0},T=y;function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function b(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function O(t){var e=A();return function(){var n,i=C(t);if(e){var r=C(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return K(this,n)}}function K(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function N(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var R=function(t){x(n,t);var e=O(n);function n(t,i){var r;return m(this,n),r=e.call(this),r.resolveOptions(i),r.listenClick(t),r}return b(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",i=T({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(i?"success":"error",{action:n,text:i,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return N("action",t)}},{key:"defaultTarget",value:function(t){var e=N("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return N("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return h(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(r()),S=R},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function i(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=i},438:function(t,e,n){var i=n(828);function r(t,e,n,i,r){var o=a.apply(this,arguments);return t.addEventListener(n,o,r),{destroy:function(){t.removeEventListener(n,o,r)}}}function o(t,e,n,i,o){return"function"===typeof t.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,i,o)})))}function a(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=o},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var i=n(879),r=n(438);function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return a(t,e,n);if(i.nodeList(t))return s(t,e,n);if(i.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function s(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function u(t,e,n){return r(document.body,t,e,n)}t.exports=o},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t),i.removeAllRanges(),i.addRange(r),e=i.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;for(i;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var o=0,a=i.length;o<a;o++)i[o].fn!==e&&i[o].fn._!==e&&r.push(i[o]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},959:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var i=n(3396),r=n(7139);const o=t=>((0,i.dD)("data-v-5d826687"),t=t(),(0,i.Cn)(),t),a={class:"container xpath full"},s={class:"e src"},u=o((()=>(0,i._)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-029747aa":""},[(0,i._)("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"})],-1))),c=o((()=>(0,i._)("span",{style:{"padding-left":"2px"}},"清空",-1)));function l(t,e,n,o,l,h){const f=(0,i.up)("codemirror"),p=(0,i.up)("el-button"),_=(0,i.up)("el-option"),d=(0,i.up)("el-select"),g=(0,i.up)("el-icon"),y=(0,i.up)("el-row"),T=(0,i.up)("el-col");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,null,{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(f,{modelValue:l.textarea,"onUpdate:modelValue":e[0]||(e[0]=t=>l.textarea=t),placeholder:"请输入要格式化 或者 需要压缩的Js/Html字符串",style:(0,r.j5)({padding:"0px !important",height:l.mobile?"calc(100vh - 136px)":"calc(100vh - 95px)"}),"indent-with-tab":!0,"tab-size":4,extensions:l.cmExt},null,8,["modelValue","style","extensions"])]),(0,i.Wm)(y,{style:{"text-align":"center",padding:"5px 12px 4px 12px",width:"100%",display:"inline-block","line-height":"40px","background-color":"#303030"}},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"text",onClick:e[1]||(e[1]=t=>h._escape())},{default:(0,i.w5)((()=>[(0,i.Uk)("转义")])),_:1}),(0,i.Wm)(p,{type:"text",onClick:e[2]||(e[2]=t=>h._unescape())},{default:(0,i.w5)((()=>[(0,i.Uk)("反转义")])),_:1}),(0,i.Wm)(p,{type:"info",onClick:e[3]||(e[3]=t=>l.textarea=l.demo)},{default:(0,i.w5)((()=>[(0,i.Uk)("测试用例")])),_:1}),(0,i.Wm)(p,{type:"warning",onClick:e[4]||(e[4]=t=>h.format())},{default:(0,i.w5)((()=>[(0,i.Uk)("格式化")])),_:1}),(0,i.Wm)(p,{type:"success",onClick:e[5]||(e[5]=t=>h.compress())},{default:(0,i.w5)((()=>[(0,i.Uk)("普通压缩")])),_:1}),(0,i.Wm)(p,{type:"success",onClick:e[6]||(e[6]=t=>h.compressEx())},{default:(0,i.w5)((()=>[(0,i.Uk)("加密压缩")])),_:1}),(0,i.Wm)(d,{modelValue:l.optionValue,"onUpdate:modelValue":e[7]||(e[7]=t=>l.optionValue=t),placeholder:"请选择",style:{"margin-left":"8px","margin-right":"8px",width:"150px"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.options,(t=>((0,i.wg)(),(0,i.j4)(_,{key:t[1],label:t[0],value:t[1]},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,i.Wm)(p,{type:"danger",onClick:e[8]||(e[8]=t=>l.textarea="")},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[u])),_:1}),c])),_:1}),(0,i.Wm)(p,{type:"success",onClick:e[9]||(e[9]=t=>h.onCopyOK(l.textarea))},{default:(0,i.w5)((()=>[(0,i.Uk)("复制代码")])),_:1})])),_:1})])),_:1})])),_:1})])}var h=n(6159),f=n(4937),p=n(5406),_=n(8134),d=t=>{const e=void 0===(null===t||void 0===t?void 0:t.appendToBody)||t.appendToBody;return{toClipboard(t,n){return new Promise(((i,r)=>{const o=document.createElement("button"),a=new _(o,{text:()=>t,action:()=>"copy",container:void 0!==n?n:document.body});a.on("success",(t=>{a.destroy(),i(t)})),a.on("error",(t=>{a.destroy(),r(t)})),e&&document.body.appendChild(o),o.click(),e&&document.body.removeChild(o)}))}}},g={name:"jsPage",components:{Codemirror:h.Z1},data(){return{cmExt:[(0,f.eJ)({jsx:!0}),p.vk],textarea:"",mobile:this.isMobile(),options:[["制表符缩进",0],["2个空格缩进",2],["4个空格缩进",4],["8个空格缩进",8]],optionValue:4,demo:"\n/*   以下是演示代码\t\t*/\n\nvar getPositionLite = function(el) {        var x = 0,        y = 0;        while (el) {            x += el.offsetLeft || 0;            y += el.offsetTop || 0;            el = el.offsetParent        }        return {            x: x,            y: y        }    };\n"}},computed:{editor(){return this.$refs.myQuillEditor.quill}},mounted(){},methods:{onCopyOK(t){d().toClipboard(t),this.$message("复制成功")},_escape(){let t={"&":"&amp;","<":"&lt;",">":"&gt;"},e=[];for(var n in t){t[n];e.push(n)}let i=new RegExp(e.join("|"),"g");this.textarea=this.textarea.replace(i,(function(e){return t[e]||e}))},_unescape(){let t={"&":"&amp;","<":"&lt;",">":"&gt;"},e=[],n={};for(var i in t){const r=t[i];n[r]=i,e.push(r)}let r=new RegExp(e.join("|"),"g");this.textarea=this.textarea.replace(r,(function(t){return n[t]||t}))},format(){try{let t=" ";0==this.optionValue&&(t="\t");let e=this.textarea.replace(/^\s+/,"");e&&"<"===e.charAt(0)?this.textarea=this.formatHtml(e,this.optionValue,t,80):this.textarea=this.formatJs(e,this.optionValue,t)}catch(t){this.$message(t.message),this.result="错误：\r\n"+t.message}},compressEx(){var t=new Packer;this.textarea=t.pack(this.textarea,1,0)},compress(){var t=new Packer;this.textarea=t.pack(this.textarea,0,0)},formatHtml(t,e,n,i){return this.style_html(t,e,n,i)},formatJs(t,e,n){return this.js_beautify(t,e,n)},js_beautify(t,e,n,i){var r,o,a,s,u,c,l,h,f,p,_,d,g,y,T,v,m,E,b,x;function w(){while(o.length&&(" "===o[o.length-1]||o[o.length-1]===f))o.pop()}function O(t){if(t="undefined"===typeof t||t,w(),o.length){"\n"===o[o.length-1]&&t||o.push("\n");for(var e=0;e<i;e++)o.push(f)}}function K(){var t=o.length?o[o.length-1]:" ";" "!==t&&"\n"!==t&&t!==f&&o.push(" ")}function k(){o.push(a)}function A(){i++}function C(){i&&i--}function N(){o.length&&o[o.length-1]===f&&o.pop()}function R(t){h.push(l),l=t}function S(){E="DO_BLOCK"===l,l=h.pop()}function L(t,e){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function P(){var t=0,e="";do{if(g>=r.length)return["","TK_EOF"];e=r.charAt(g),g+=1,"\n"===e&&(t+=1)}while(L(e,p));if(t>1)for(var n=0;n<2;n++)O(0===n);var i=1===t;if(L(e,_)){if(g<r.length)while(L(r.charAt(g),_))if(e+=r.charAt(g),g+=1,g===r.length)break;if(g!==r.length&&e.match(/^[0-9]+[Ee]$/)&&"-"===r.charAt(g)){g+=1;var o=P(g);return e+="-"+o[0],[e,"TK_WORD"]}return"in"===e?[e,"TK_OPERATOR"]:[e,"TK_WORD"]}if("("===e||"["===e)return[e,"TK_START_EXPR"];if(")"===e||"]"===e)return[e,"TK_END_EXPR"];if("{"===e)return[e,"TK_START_BLOCK"];if("}"===e)return[e,"TK_END_BLOCK"];if(";"===e)return[e,"TK_END_COMMAND"];if("/"===e){var a="";if("*"===r.charAt(g)){if(g+=1,g<r.length)while(("*"!==r.charAt(g)||!r.charAt(g+1)||"/"!==r.charAt(g+1))&&g<r.length)if(a+=r.charAt(g),g+=1,g>=r.length)break;return g+=2,["/*"+a+"*/","TK_BLOCK_COMMENT"]}if("/"===r.charAt(g)){a=e;while("\r"!==r.charAt(g)&&"\n"!==r.charAt(g))if(a+=r.charAt(g),g+=1,g>=r.length)break;return g+=1,i&&O(),[a,"TK_COMMENT"]}}if("'"===e||'"'===e||"/"===e&&("TK_WORD"===s&&"return"===u||"TK_START_EXPR"===s||"TK_END_BLOCK"===s||"TK_OPERATOR"===s||"TK_EOF"===s||"TK_END_COMMAND"===s)){var c=e,l=!1;if(e="",g<r.length)while(l||r.charAt(g)!==c)if(e+=r.charAt(g),l=!l&&"\\"===r.charAt(g),g+=1,g>=r.length)break;return g+=1,"TK_END_COMMAND"===s&&O(),[c+e+c,"TK_STRING"]}if(L(e,d)){while(g<r.length&&L(e+r.charAt(g),d))if(e+=r.charAt(g),g+=1,g>=r.length)break;return[e,"TK_OPERATOR"]}return[e,"TK_UNKNOWN"]}n=n||" ",e=e||4,f="";while(e--)f+=n;r=t,c="",s="TK_START_EXPR",u="",o=[],E=!1,b=!1,x=!1,p="\n\r\t ".split(""),_="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split(""),d="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |=".split(" "),y="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(","),l="BLOCK",h=[l],i=i||0,g=0,T=!1;while(1){var D=P(g);if(a=D[0],m=D[1],"TK_EOF"===m)break;switch(m){case"TK_START_EXPR":b=!1,R("EXPRESSION"),"TK_END_EXPR"===s||"TK_START_EXPR"===s||("TK_WORD"!==s&&"TK_OPERATOR"!==s||L(c,y)&&"function"!==c)&&K(),k();break;case"TK_END_EXPR":k(),S();break;case"TK_START_BLOCK":R("do"===c?"DO_BLOCK":"BLOCK"),"TK_OPERATOR"!==s&&"TK_START_EXPR"!==s&&("TK_START_BLOCK"===s?O():K()),k(),A();break;case"TK_END_BLOCK":"TK_START_BLOCK"===s?(w(),C()):(C(),O()),k(),S();break;case"TK_WORD":if(E){K(),k(),K();break}if("case"===a||"default"===a){":"===u?N():(C(),O(),A()),k(),T=!0;break}v="NONE","TK_END_BLOCK"===s?L(a.toLowerCase(),["else","catch","finally"])?(v="SPACE",K()):v="NEWLINE":"TK_END_COMMAND"!==s||"BLOCK"!==l&&"DO_BLOCK"!==l?"TK_END_COMMAND"===s&&"EXPRESSION"===l||"TK_WORD"===s?v="SPACE":"TK_START_BLOCK"===s?v="NEWLINE":"TK_END_EXPR"===s&&(K(),v="NEWLINE"):v="NEWLINE","TK_END_BLOCK"!==s&&L(a.toLowerCase(),["else","catch","finally"])?O():L(a,y)||"NEWLINE"===v?"else"===u?K():("TK_START_EXPR"!==s&&"="!==u||"function"!==a)&&("TK_WORD"!==s||"return"!==u&&"throw"!==u?"TK_END_EXPR"!==s?"TK_START_EXPR"===s&&"var"===a||":"===u||("if"===a&&"TK_WORD"===s&&"else"===c?K():O()):L(a,y)&&")"!==u&&O():K()):"SPACE"===v&&K(),k(),c=a,"var"===a&&(b=!0,x=!1);break;case"TK_END_COMMAND":k(),b=!1;break;case"TK_STRING":"TK_START_BLOCK"===s||"TK_END_BLOCK"===s?O():"TK_WORD"===s&&K(),k();break;case"TK_OPERATOR":var j=!0,M=!0;if(b&&","!==a&&(x=!0,":"===a&&(b=!1)),":"===a&&T){k(),O();break}if(T=!1,","===a){b?x?(k(),O(),x=!1):(k(),K()):"TK_END_BLOCK"===s||"BLOCK"===l?(k(),O()):(k(),K());break}"--"===a||"++"===a?";"===u?(j=!0,M=!1):(j=!1,M=!1):"!"===a&&"TK_START_EXPR"===s||"TK_OPERATOR"===s?(j=!1,M=!1):"TK_END_EXPR"===s?(j=!0,M=!0):"."===a?(j=!1,M=!1):":"===a&&(j=!!u.match(/^\d+$/)),j&&K(),k(),M&&K();break;case"TK_BLOCK_COMMENT":O(),k(),O();break;case"TK_COMMENT":K(),k(),O();break;case"TK_UNKNOWN":k();break}s=m,u=a}return o.join("")},style_html(t,e,n,i){var r,o;let a=this;function r(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed".split(","),extra_liners:"head,body,/html".split(","),in_array:function(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}},this.get_content=function(){var t="",e=[],n=!1;while("<"!==this.input.charAt(this.pos)){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];if(t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace))e.length&&(n=!0),this.line_char_count--;else{if(n){if(this.line_char_count>=this.max_char){e.push("\n");for(var i=0;i<this.indent_level;i++)e.push(this.indent_string);this.line_char_count=0}else e.push(" "),this.line_char_count++;n=!1}e.push(t)}}return e.length?e.join(""):""},this.get_script=function(){var t="",e=[],n=new RegExp("<\/script>","igm");n.lastIndex=this.pos;var i=n.exec(this.input),r=i?i.index:this.input.length;while(this.pos<r){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];t=this.input.charAt(this.pos),this.pos++,e.push(t)}return e.length?e.join(""):""},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){var e=this.tags.parent;while(e){if(t+this.tags[t+"count"]===e)break;e=this.tags[e+"parent"]}e&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[e+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1==this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.get_tag=function(){var t="",e=[],n=!1;do{if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace)?(n=!0,this.line_char_count--):("'"!==t&&'"'!==t||e[1]&&"!"===e[1]||(t+=this.get_unformatted(t),n=!0),"="===t&&(n=!1),e.length&&"="!==e[e.length-1]&&">"!==t&&n&&(this.line_char_count>=this.max_char?(this.print_newline(!1,e),this.line_char_count=0):(e.push(" "),this.line_char_count++),n=!1),e.push(t))}while(">"!==t);var i,r=e.join("");i=-1!=r.indexOf(" ")?r.indexOf(" "):r.indexOf(">");var o=r.substring(1,i).toLowerCase();if("/"===r.charAt(r.length-2)||this.Utils.in_array(o,this.Utils.single_token))this.tag_type="SINGLE";else if("script"===o)this.record_tag(o),this.tag_type="SCRIPT";else if("style"===o)this.record_tag(o),this.tag_type="STYLE";else if("!"===o.charAt(0))if(-1!=o.indexOf("[if")){if(-1!=r.indexOf("!IE")){let t=this.get_unformatted("--\x3e",r);e.push(t)}this.tag_type="START"}else if(-1!=o.indexOf("[endif"))this.tag_type="END",this.unindent();else if(-1!=o.indexOf("[cdata[")){let t=this.get_unformatted("]]>",r);e.push(t),this.tag_type="SINGLE"}else{let t=this.get_unformatted("--\x3e",r);e.push(t),this.tag_type="SINGLE"}else"/"===o.charAt(0)?(this.retrieve_tag(o.substring(1)),this.tag_type="END"):(this.record_tag(o),this.tag_type="START"),this.Utils.in_array(o,this.Utils.extra_liners)&&this.print_newline(!0,this.output);return e.join("")},this.get_unformatted=function(t,e){if(e&&-1!=e.indexOf(t))return"";var n="",i="",r=!0;do{if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!r){this.line_char_count--;continue}if("\n"===n||"\r"===n){i+="\n";for(var o=0;o<this.indent_level;o++)i+=this.indent_string;r=!1,this.line_char_count=0;continue}}i+=n,this.line_char_count++,r=!0}while(-1==i.indexOf(t));return i},this.get_token=function(){var t;if("TK_TAG_SCRIPT"===this.last_token){var e=this.get_script();return"string"!==typeof e?e:(t=a.js_beautify(e,this.indent_size,this.indent_character,this.indent_level),[t,"TK_CONTENT"])}if("CONTENT"===this.current_mode)return t=this.get_content(),"string"!==typeof t?t:[t,"TK_CONTENT"];if("TAG"===this.current_mode){if(t=this.get_tag(),"string"!==typeof t)return t;var n="TK_TAG_"+this.tag_type;return[t,n]}},this.printer=function(t,e,n,i){this.input=t||"",this.output=[],this.indent_character=e||" ",this.indent_string="",this.indent_size=n||2,this.indent_level=0,this.max_char=i||70,this.line_char_count=0;for(var r=0;r<this.indent_size;r++)this.indent_string+=this.indent_character;this.print_newline=function(t,e){if(this.line_char_count=0,e&&e.length){if(!t)while(this.Utils.in_array(e[e.length-1],this.Utils.whitespace))e.pop();e.push("\n");for(var n=0;n<this.indent_level;n++)e.push(this.indent_string)}},this.print_token=function(t){this.output.push(t)},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}o=new r,o.printer(t,n,e);while(1){var s=o.get_token();if(o.token_text=s[0],o.token_type=s[1],"TK_EOF"===o.token_type)break;switch(o.token_type){case"TK_TAG_START":case"TK_TAG_SCRIPT":case"TK_TAG_STYLE":o.print_newline(!1,o.output),o.print_token(o.token_text),o.indent(),o.current_mode="CONTENT";break;case"TK_TAG_END":o.print_newline(!0,o.output),o.print_token(o.token_text),o.current_mode="CONTENT";break;case"TK_TAG_SINGLE":o.print_newline(!1,o.output),o.print_token(o.token_text),o.current_mode="CONTENT";break;case"TK_CONTENT":""!==o.token_text&&(o.print_newline(!1,o.output),o.print_token(o.token_text)),o.current_mode="TAG";break}o.last_token=o.token_type,o.last_text=o.token_text}return o.output.join("")},onSwiper(t){},onSlideChange(){}}},y=n(89);const T=(0,y.Z)(g,[["render",l],["__scopeId","data-v-5d826687"]]);var v=T}}]);