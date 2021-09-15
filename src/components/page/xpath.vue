<template>
    <div class="container xpath">
        <el-row>
            <el-col>
                <div class="e src">
                    <codemirror v-model="textarea" :options="cmOptions"  class="el-textarea__inner" />
                </div>
                <el-row class="mt8">
                    <div :style="{width: ('calc(100% - ' + (mobile ? 2 : 255) + 'px)'), float: 'left', marginBottom: (mobile ? '4px' : '0')}">
                        <el-input placeholder="在此输入XPath表达式" clearable v-model="regKey">
                            <template slot="prepend" v-if=!mobile><span class="subtitle">XPath表达式</span></template>
                        </el-input>
                    </div>
                    <div :style="{textAlign: 'right', float: mobile ? 'left' : 'right', marginBottom: (mobile ? '0' : '8px')}">
                        <el-button type="primary" @click="execMatch()">测试匹配</el-button>
                        <el-button @click="textarea=demo; regKey=demoKey;">测试用例</el-button>
                        <el-button @click="textarea=''; regKey='';" icon="el-icon-delete" circle title="清空"></el-button>
                    </div>
                </el-row>
                <div class="desc mt8">匹配结果：</div>
                <div class="mt8 e ret">
                    <codemirror v-model="result" :options="cmResultOptions"  class="el-textarea__inner" placeholder="显示正则匹配结果"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/idea.css'

    import 'codemirror/mode/javascript/javascript.js'
    import 'codemirror/mode/xml/xml.js'

    export default {
        name: 'xpathPage',
        components: { codemirror },
        data() {
            return {
                cmOptions: {
                    tabSize: 4,
                    mode: 'text/html',
                    theme: 'idea',
                    lineNumbers: true,
                    line: true,
                },
                mobile: this.isMobile(),
                cmResultOptions: {
                    tabSize: 4,
                    mode: 'text/html',
                    theme: 'idea',
                    lineNumbers: true,
                    line: true,
                    readOnly: true,
                },
                regKey: "",
                textarea: "",
                result: "",
                demo: `<webinfo>
	<site dig="1">
		<domain><![CDATA[http://fly.layui.com/]]></domain>
		<title>LayUI前端社区</title>
	</site>
	<site >
		<domain><![CDATA[http://www.bejson.com/]]></domain>
		<title>JSON在线解析工具</title>
	</site>
</webinfo>
`,
                demoKey: `/webinfo//site[@dig=1]`
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },
        mounted() {
        },
        methods: {
            execMatch() {
                try {
                    if (!this.isValidFields())
                        return false;
                    this.result = undefined;
                    let xmldom = undefined;
                    let parser = new DOMParser();
                    xmldom = parser.parseFromString(this.textarea, "text/xml");
                    let result = xmldom.evaluate(this.regKey, xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                    if (result != null) {
                        let node = result.iterateNext();
                        let str = "";
                        while (node) {
                            str = str + node.innerHTML + "\n";
                            node = result.iterateNext();
                        }
                        this.result = str;
                    } else {
                        this.result = "(没有匹配)"
                    }
                    return true;
                } catch (e) {
                    this.$message(e.message);
                    this.result = "错误：\r\n" + e.message;
                    return false;
                }
            },
            isValidFields() {
                if (!this.textarea || this.textarea.length < 1) {
                    this.$message("请输入待匹配文本");
                    return false;
                }
                if (!this.regKey || this.regKey.length < 1) {
                    this.$message("请输入XPath表达式");
                    return false;
                }
                return true;
            },
            onSwiper(swiper) {
                console.log(swiper)
            },
            onSlideChange() {
                console.log('slide change')
            },
        }
    };
</script>

<style scoped>
.icon span {
    padding: 12px;
    width: auto;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #999;
    font-size: 36px;
    font-weight: bold;
}
.icon {
    padding: 16px;
    margin-bottom: 16px;
    color: #fff;
}
.title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 16px;
}
.subtitle {
    font-weight: bold;
    font-size: 14px;
    color: #111
}
.desc {
    font-size: 15px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: #888;
}
h3 {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
}
.container {
    min-height: calc(100vh - 70px);
    padding: 10px!important;
    overflow: hidden;
}
.mobile .container {
    padding: 2px!important;
}
.pb8 {
    padding-bottom: 20px;
}
.mt8 {
    margin-top: 8px;
}
.mt16 {
    margin-top: 16px;
}
.titem {
    cursor: pointer;
    color: #0058a8;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 16px;
}
.titem span:hover{
    color: #409eff;
}
.rightpl {
    margin-top: 16px;
    padding: 16px;
    background: #f1f2f3;
}
.rightpl p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 15px;
    text-indent:30px;
    color: #111;
}
</style>

<style>
.CodeMirror {
    min-height: calc(50vh - 100px);
    font-size: 13px;
}
.CodeMirror-scroll {
    min-height: calc(50vh - 100px);
}
.e .el-textarea__inner {
    padding: 0px!important;
}
</style>

<style>
.xpath .el-input__inner {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #010203;
}
.xpath .el-textarea__inner {
    color: #010203;
}
</style>