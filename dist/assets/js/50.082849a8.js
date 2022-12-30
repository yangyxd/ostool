"use strict";(self["webpackChunkos_tools"]=self["webpackChunkos_tools"]||[]).push([[50],{5050:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(3396);const d=e=>((0,l.dD)("data-v-0c149a4d"),e=e(),(0,l.Cn)(),e),o={class:"container url"},s={style:{"text-align":"right",float:"right"}},c={class:"mt8"},n={class:"rightpl"},i={class:"title"},u={style:{width:"24px",height:"24px",margin:"4px 0 0 0"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-029747aa":""},r=d((()=>(0,l._)("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1))),h=[r],p=(0,l.uE)("<div data-v-0c149a4d><h2 data-v-0c149a4d>JavaScript的四个URL编码/解码方法</h2><p data-v-0c149a4d></p><h4 data-v-0c149a4d>encodeURI</h4><p data-v-0c149a4d>将元字符和语义字符之外的字符都进行转义，一般用于知道该URL只用于完整的URL时使用。</p><h4 data-v-0c149a4d>encodeURIComponent</h4><p data-v-0c149a4d>将除了语义字符之外的字符进行转义，包括元字符，因此，它的参数通常是URL的路径或参数值，而不是整个URL。 比如说，要在谷歌中搜索www.baidu.com/q=5&amp;name时，若使用encodeURI，&amp;字符并不会被转义，从而改变其真正的URL。</p><h4 data-v-0c149a4d>decodeURI</h4><p data-v-0c149a4d>还原转义后的URL，是encodeURI方法的逆运算。</p><h4 data-v-0c149a4d>decodeURIComponent（此方法可以还原被转义的 url）</h4><p data-v-0c149a4d>还原转义后的URL片段。是encodeURIComponent方法的逆运算。</p><p data-v-0c149a4d></p><h2 data-v-0c149a4d>URL的合法字符</h2><p data-v-0c149a4d></p><p data-v-0c149a4d>URL的合法字符表示再浏览器的地址栏中不会被转义的字符，有两种：</p><p data-v-0c149a4d><ul data-v-0c149a4d><li data-v-0c149a4d><b data-v-0c149a4d>URL元字符：</b>分号（;），逗号（’,’），斜杠（/），问号（?），冒号（:），at（@），&amp;，等号（=），加号（+），美元符号（$），井号（#）</li><li data-v-0c149a4d><b data-v-0c149a4d>语义字符：</b>a-z，A-Z，0-9，连词号（-），下划线（_），点（.），感叹号（!），波浪线（~），星号（*），单引号（），圆括号（()`）</li></ul></p><p data-v-0c149a4d>当输入的字符不符合以上的字符时，浏览器就会把该字符转义，规则：根据操作系统的默认编码，将每个字节转为百分号（%）加上两个大写的十六进制字母。</p></div>",1);function m(e,t,a,d,r,m){const v=(0,l.up)("el-input"),U=(0,l.up)("el-button"),w=(0,l.up)("el-option"),g=(0,l.up)("el-select"),f=(0,l.up)("el-row"),x=(0,l.up)("el-col");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(v,{type:"textarea",autosize:{minRows:9,maxRows:20},clearable:"",placeholder:"在此输入源文本",modelValue:r.srcText,"onUpdate:modelValue":t[0]||(t[0]=e=>r.srcText=e)},null,8,["modelValue"])]),(0,l.Wm)(f,{class:"mt8",style:{"line-height":"36px",display:"inline-block",width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{type:"primary",onClick:t[1]||(t[1]=e=>m._encode())},{default:(0,l.w5)((()=>[(0,l.Uk)("↓ 编码")])),_:1}),(0,l.Wm)(U,{type:"success",onClick:t[2]||(t[2]=e=>m._decode())},{default:(0,l.w5)((()=>[(0,l.Uk)("↑ 解码")])),_:1}),(0,l.Wm)(g,{modelValue:r.mode,"onUpdate:modelValue":t[3]||(t[3]=e=>r.mode=e),placeholder:"请选择",style:{width:"110px","margin-left":"12px","margin-top":"-2px"}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.options,(e=>((0,l.wg)(),(0,l.j4)(w,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,l.Wm)(g,{modelValue:r.modeFunc,"onUpdate:modelValue":t[4]||(t[4]=e=>r.modeFunc=e),placeholder:"请选择",style:{width:"200px","margin-left":"12px","margin-top":"-2px"}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.optionsFunc,(e=>((0,l.wg)(),(0,l.j4)(w,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,l._)("div",s,[(0,l.Wm)(U,{onClick:t[5]||(t[5]=e=>{r.srcText="",r.result=""})},{default:(0,l.w5)((()=>[(0,l.Uk)("清空")])),_:1})])])),_:1}),(0,l._)("div",c,[(0,l.Wm)(v,{type:"textarea",autosize:{minRows:9,maxRows:25},placeholder:"在此输入编码后的文本",modelValue:r.result,"onUpdate:modelValue":t[6]||(t[6]=e=>r.result=e)},null,8,["modelValue"])])])),_:1})])),_:1}),(0,l._)("div",n,[(0,l._)("div",i,[((0,l.wg)(),(0,l.iD)("svg",u,h)),(0,l.Uk)(" 小知识")]),p])])}const v=a(4693);var U={name:"urlPage",components:{},data(){return{srcText:"https://www.baidu.com/s?ie=utf-8&f=8&wd=url编码解码",result:void 0,hex:!1,options:["UTF-8","GBK","GB2312"],mode:"UTF-8",optionsFunc:["encodeURI","encodeURIComponent"],modeFunc:"encodeURIComponent"}},mounted(){},methods:{change(){let e=this.srcText;this.srcText=this.result,this.result=e},_encode(){if(this.srcText)try{this._encodeUrl()}catch(e){this.$message("编码失败："+e)}else this.$message("请输入待编码内容")},_decode(){if(this.result)try{this._decodeUrl()}catch(e){this.$message("解码失败："+e)}else this.$message("请输入待解码内容")},_encodeUrl(){let e="encodeURI"===this.modeFunc?encodeURI:encodeURIComponent;if("UTF-8"==this.mode)this.result=e(this.srcText).toLowerCase();else if("GBK"==this.mode)this.result=e(this.utf16StrToGbkStr(this.srcText)).toLowerCase();else{let t=this.srcText,a="",l=0;for(let d=0;d<t.length;d++){let o=t.charCodeAt(d),s=this.indexOfGb2312(o);s>-1&&(d>l&&(a+=e(t.substr(l,d-l))),v.encode(t.substr(d,1),"gb2312").forEach((e=>a=a+"%"+e.toString(16))),l=d+1)}t.length>l&&(a+=e(t.substr(l,t.length-l))),this.result=a.toLowerCase()}},_decodeUrl(){let e="encodeURI"===this.modeFunc?decodeURI:decodeURIComponent;if("UTF-8"==this.mode)this.srcText=e(this.result);else if("GBK"==this.mode)this.srcText=this.gbkStrToUtf16Str(e(this.result));else{let e=this.gb2312ToUtf8(this.result);console.log(e),e=v.decode(e,"gb2312"),this.srcText=e}},gb2312ToUtf8(e){var t=e.split("%"),a="";""!=t[0]&&(a=t[0]);for(var l=1;l<t.length;l++)"u"==t[l].substring(0,1)?a+=this.Hex2Utf8(this.Str2Hex(t[l].substring(1,5))):a+=unescape("%"+t[l]);return a}}},w=a(89);const g=(0,w.Z)(U,[["render",m],["__scopeId","data-v-0c149a4d"]]);var f=g}}]);