(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["xpath"],{"0189":function(t,e,i){},"184b":function(t,e,i){"use strict";var s=i("e196"),n=i.n(s);n.a},2010:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container xpath"},[i("el-row",[i("el-col",[i("div",{staticClass:"e src"},[i("codemirror",{staticClass:"el-textarea__inner",attrs:{options:t.cmOptions},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),i("el-row",{staticClass:"mt8"},[i("div",{style:{width:"calc(100% - "+(t.mobile?2:388)+"px)",float:"left",marginBottom:t.mobile?"4px":"0",lineHeight:"34px"}},[i("el-input",{attrs:{placeholder:"输入XPath或CSS选择器表达式",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.execAutoMatch(e)}},model:{value:t.regKey,callback:function(e){t.regKey=e},expression:"regKey"}},[i("template",{slot:"append"},[i("el-checkbox",{model:{value:t.jsonStr,callback:function(e){t.jsonStr=e},expression:"jsonStr"}},[t._v("JSON")])],1)],2)],1),i("div",{style:{textAlign:"right",float:t.mobile?"left":"right",marginBottom:t.mobile?"0":"8px",lineHeight:"36px",textAlign:"center"}},[i("el-button",{attrs:{type:"info",title:"CSS表达式测试匹配"},on:{click:function(e){return t.execCssMatch()}}},[i("b",[t._v("CSS")]),t._v(" 匹配")]),i("el-button",{attrs:{type:"primary",title:"XPath表达式测试匹配"},on:{click:function(e){return t.execMatch()}}},[i("b",[t._v("XPath")]),t._v(" 匹配")]),i("el-button",{attrs:{type:"success",title:"自动匹配"},on:{click:function(e){return t.execAutoMatch()}}},[t._v("自动")]),i("el-button",{on:{click:function(e){t.textarea=t.demo,t.regKey=t.demoKey}}},[t._v("XPath用例")]),i("el-button",{attrs:{icon:"el-icon-delete",circle:"",title:"清空"},on:{click:function(e){t.textarea="",t.regKey=""}}})],1)]),i("div",{staticClass:"desc mt8"},[i("b",[t._v("匹配结果：")]),t._v("("+t._s(t.matchNum)+"个) "),i("span",{staticClass:"ml16"},[t._v("参考：")]),i("a",{attrs:{href:"https://www.w3school.com.cn/cssref/css_selectors.asp",target:"_blank"}},[t._v("CSS 选择器参考手册")])]),i("div",{staticClass:"mt8 e ret"},[i("codemirror",{staticClass:"el-textarea__inner",attrs:{options:t.cmResultOptions,placeholder:"显示正则匹配结果"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1)],1)],1)},n=[],a=(i("ac6a"),i("f559"),i("8f94")),r=(i("a7be"),i("b866"),i("f9d4"),i("d5e0"),{name:"xpathPage",components:{codemirror:a["codemirror"]},data:function(){return{cmOptions:{tabSize:4,mode:"text/html",theme:"idea",lineNumbers:!0,line:!0},mobile:this.isMobile(),cmResultOptions:{tabSize:4,mode:"text/html",theme:"idea",lineNumbers:!0,line:!0,readOnly:!0},regKey:"",textarea:"",result:"",matchNum:0,jsonStr:!1,demo:'<webinfo>\n\t<site dig="1">\n\t\t<domain><![CDATA[http://fly.layui.com/]]></domain>\n\t\t<title class="s-title">LayUI前端社区</title>\n\t</site>\n\t<site >\n\t\t<domain><![CDATA[http://www.bejson.com/]]></domain>\n\t\t<title class="s-title">JSON在线解析工具</title>\n\t</site>\n</webinfo>\n',demoKey:"/webinfo//site[@dig=1]"}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},mounted:function(){},methods:{execAutoMatch:function(){this.regKey.trim().startsWith("/")?this.execMatch():this.execCssMatch()},execMatch:function(){try{if(!this.isValidFields())return!1;this.result=void 0,this.matchNum=0;var t=void 0,e=new DOMParser;t=e.parseFromString(this.textarea,"text/xml");var i=t.evaluate(this.regKey,t.documentElement,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);if(null!=i){var s=i.iterateNext(),n=[];while(s)this.matchNum++,n.push(s.innerHTML),s=i.iterateNext();this.result=this.jsonStr?JSON.stringify(n):n.join("\n")}else this.result="(没有匹配)";return!0}catch(a){return this.$message(a.message),this.result="错误：\r\n"+a.message,!1}},execCssMatch:function(){try{if(!this.isValidFields())return!1;this.result=void 0,this.matchNum=0;var t=new DOMParser,e=t.parseFromString(this.textarea,"text/xml"),i=e.querySelectorAll(this.regKey);if(this.matchNum=i.length,null!=i&&i.length>0){var s=[];i.forEach((function(t){s.push(t.innerHTML)})),this.result=this.jsonStr?JSON.stringify(s):s.join("\n")}else this.result="(没有匹配)";return!0}catch(n){return this.$message(n.message),this.result="错误：\r\n"+n.message,!1}},isValidFields:function(){return!this.textarea||this.textarea.length<1?(this.$message("请输入待匹配文本"),!1):!(!this.regKey||this.regKey.length<1)||(this.$message("请输入XPath表达式或CSS选择器表达式"),!1)},onSwiper:function(t){console.log(t)},onSlideChange:function(){console.log("slide change")}}}),l=r,o=(i("7389"),i("184b"),i("f05e"),i("2877")),c=Object(o["a"])(l,s,n,!1,null,"7209761f",null);e["default"]=c.exports},7214:function(t,e,i){},7389:function(t,e,i){"use strict";var s=i("7214"),n=i.n(s);n.a},e196:function(t,e,i){},f05e:function(t,e,i){"use strict";var s=i("0189"),n=i.n(s);n.a}}]);