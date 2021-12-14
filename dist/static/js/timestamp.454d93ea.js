(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["timestamp"],{"3ae8":function(e,t,a){},"3cab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container timestamp"},[a("el-row",[a("el-col",[a("div",{staticClass:"desc mt8 now"},[a("span",{staticClass:"tt"},[e._v("现在：")]),a("a",{staticClass:"ml8 tw1",attrs:{title:"点击复制",href:"javascript:;"},on:{click:function(t){return e.setValue()}}},[e._v(e._s(e.now))]),a("span",[e._v("控制：")]),a("el-button",{attrs:{type:e.stopUpdateNow?"success":"danger"},on:{click:function(t){return e.switchUpdateNow()}}},[a("i",{staticClass:"el-icon-lx-time"}),e._v(" "+e._s(e.stopUpdateNow?"开始":"停止"))])],1),a("div",{staticClass:"desc mt8"},[a("span",{staticClass:"tt"},[e._v("时间戳：")]),a("el-input",{staticClass:"tw2",attrs:{placeholder:"时间戳"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("el-select",{staticClass:"ml8",staticStyle:{width:"110px"},model:{value:e.valueType,callback:function(t){e.valueType=t},expression:"valueType"}},e._l(e.valueTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticClass:"ml8",attrs:{type:"info"},on:{click:function(t){return e.convToTimeStr()}}},[e._v("转换 >>")]),a("el-input",{staticClass:"tw3 ml8",model:{value:e.valueStr,callback:function(t){e.valueStr=t},expression:"valueStr"}})],1),a("div",{staticClass:"desc mt8"},[a("span",{staticClass:"tt"},[e._v("时间：")]),a("el-date-picker",{staticClass:"tw3",attrs:{type:"datetime","prefix-icon":"-",clearable:!1,"value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.valueStr2,callback:function(t){e.valueStr2=t},expression:"valueStr2"}}),a("el-button",{staticClass:"ml8",attrs:{type:"info"},on:{click:function(t){return e.convTimeStrToTime()}}},[e._v("转换 >>")]),a("el-input",{staticClass:"tw2 ml8",attrs:{placeholder:"时间戳"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("el-select",{staticClass:"ml8",staticStyle:{width:"110px"},model:{value:e.valueType2,callback:function(t){e.valueType2=t},expression:"valueType2"}},e._l(e.valueTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"title mt16"},[e._v("获取当前时间戳")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","show-header":!1}},[a("el-table-column",{attrs:{prop:"name",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"cname"},[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"code"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{type:"textarea",value:e.row.code,maxlength:"10",autosize:""}})]}}])})],1)],1)],1)],1)},i=[],l=(a("6b54"),a("ee1d"),a("c5f6"),{name:"timestampPage",components:{},data:function(){return{now:void 0,stopUpdateNow:!1,value:void 0,valueStr:"",valueType:0,value2:void 0,valueStr2:"",valueType2:0,valueTypes:[{value:0,label:"毫秒(ms)"},{value:1,label:"秒(s)"}],tableData:[{name:"Swift",code:"NSDate().timeIntervalSince1970"},{name:"Flutter/Dart",code:"DateTime.now().millisecondsSinceEpoch"},{name:"Go",code:'import ("time")\nint32(time.Now().Unix())'},{name:"Java",code:"// pure java\n(int) (System.currentTimeMillis() / 1000)\n\n// joda\n(int) (DateTime.now().getMillis() / 1000)"},{name:"JavaScript",code:"Math.round(new Date() / 1000)\nnew Date().getTime()"},{name:"Objective-C",code:"[[NSDate date] timeIntervalSince1970]"},{name:"MySQL",code:"SELECT unix_timestamp(now())"},{name:"SQLite",code:"SELECT strftime('%s', 'now')"},{name:"Erlang",code:"calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600."},{name:"PHP",code:"// pure php\ntime()\n\n// CarbonCarbon\nCarbon::now()->timestamp"},{name:"Python",code:"import time\ntime.time()"},{name:"Ruby",code:"Time.now.to_i"},{name:"Shell",code:"date +%s"},{name:"Groovy",code:"(new Date().time / 1000).intValue()"},{name:"Lua",code:"os.time()"},{name:".NET/C#",code:"(DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000"}]}},mounted:function(){this.updatedNow(),this.value=this.now,this.valueStr2=this.formatDate(this.value)},methods:{updatedNow:function(){var e=this;this.now=(new Date).getTime(),setTimeout((function(){e.stopUpdateNow||e.updatedNow()}),500)},switchUpdateNow:function(){this.stopUpdateNow=!this.stopUpdateNow,this.stopUpdateNow||this.updatedNow()},setValue:function(e){this.value=void 0===e?this.now:e},convToTimeStr:function(){this.valueStr=this.formatDate(Number(this.value)*(0===this.valueType?1:1e3))},convTimeStrToTime:function(){var e=new Date(this.valueStr2);this.value2=0===this.valueType2?e.getTime():Math.ceil(e.getTime()/1e3)},formatDate:function(e){var t="number"===typeof e?new Date(e):e,a=t.getFullYear();if(Number.isNaN(a))return"无效时间";var n=function(e){return e<10?"0"+e.toString():e.toString()},i=n(t.getMonth()+1),l=n(t.getDate()),s=n(t.getHours()),o=n(t.getMinutes()),c=n(t.getSeconds());return a.toString()+"-"+i+"-"+l+" "+s+":"+o+":"+c}}}),s=l,o=(a("bc4d"),a("a042"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"a8fc2e24",null);t["default"]=c.exports},a042:function(e,t,a){"use strict";var n=a("3ae8"),i=a.n(n);i.a},a0ed:function(e,t,a){},bc4d:function(e,t,a){"use strict";var n=a("a0ed"),i=a.n(n);i.a}}]);