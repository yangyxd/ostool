<template>
    <div class="container xpath">
        <el-row>
            <el-col>
                <el-row class="mt8">
                    <el-button type="danger" @click="runScript()">▶ 运行代码</el-button>
                    <div :style="{textAlign: 'right', float: 'right', marginBottom: (mobile ? '0' : '8px'), lineHeight: '36px', textAlign: 'center'}">
                        <el-button @click="textarea=demo1;">Demo 1</el-button>
                        <el-button @click="textarea=demo2;">Demo 2</el-button>
                        <el-button @click="textarea='';" icon="el-icon-delete" circle title="清空"></el-button>
                    </div>
                </el-row>
                <div class="e src">
                    <codemirror v-model="textarea" :options="cmOptions"  class="el-textarea__inner" />
                </div>
                <div class="desc mt8"><b>控制台：</b>
                    <el-button circle @click="clearConsole()" icon="el-icon-delete" style="float: right; margin-top: -6px" title="清空控制台" ></el-button>
                </div>
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
    import 'codemirror/addon/hint/javascript-hint.js'
    import 'codemirror/mode/xml/xml.js'

    export default {
        name: 'jsRunPage',
        components: { codemirror },
        data() {
            return {
                cmOptions: {
                    tabSize: 4,
                    mode: { name: 'javascript', globalVars: true },
                    theme: 'idea',
                    lineNumbers: true,
                    lineWiseCopyCut: true,
                    matchBrackets: true,
                    extraKeys: { Ctrl: 'autocomplete' },
                    line: true,
                    json: true,
                },
                mobile: this.isMobile(),
                cmResultOptions: {
                    tabSize: 4,
                    mode: 'javascript',
                    theme: 'idea',
                    lineNumbers: true,
                    line: true,
                    json: true,
                    readOnly: true,
                },
                textarea: "",
                result: "",
                demo1: `// 检测是否是合法的 URL
function isUrl(url) {
    const regex = /\\b(https?):\\/\\/[\\-A-Za-z0-9+\&@#\\/%?=~_|!:,.;]*[\\-A-Za-z0-9+&@#\\/%=~_|]/i;
    return regex.test(url);
}
// 测试代码
let url = "https://www.dute.orgsss";
let r = isUrl(url);

// 输出结果
console.log(url);
console.log(r);
`,
                demo2: `// 测试 ES5 Array.map 方法
/**
 * 对数据中的每一项乘以2
 */
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(function(num) {
    return num * 2;
});
console.log(numbers);
`,
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
            clearConsole() {
                this.result = ''
            },
            async runScript() {
                await this.exec()
            },
            async exec() {
                try {
                    this.clearConsole();
                    const _this = this;
                    let code = this.textarea;
                    let result
                    console.oldLog = console.log;
                    console.oldErrLog = console.error;
                    console.oldInfoLog = console.info;
                    console.oldWarnLog = console.warn;
                    console.__print = print
                    console.log = function (args) { console.oldLog(args); _this.log(args, false) }
                    console.error = function (args) { console.oldErrLog(args); _this.error(args, false) }
                    console.info = function (args) { console.oldInfoLog(args); _this.info(args, false) }
                    console.warn = function (args) { console.oldWarnLog(args); _this.warn(args, false) }
                    print = function (args) {}
                    try {
                        const AsyncFunction = Object.getPrototypeOf(async function f(){}).constructor;
                        const data = new AsyncFunction('$', `return (async () => {${code ? code : 'undefined;'}})().catch((e)=>$.error(e))`);
                        const fun = await data(_this)
                        result = fun;
                    } finally {
                        console.log = console.oldLog
                        console.error = console.oldErrLog
                        console.info = console.oldInfoLog
                        console.warn = console.oldWarnLog
                        print = console.__print
                        delete console.oldLog
                        delete console.oldErrLog
                        delete console.oldInfoLog
                        delete console.oldWarnLog
                        delete console.__print
                    }
                    if (result !== undefined) {
                        this.log(result, true)
                    }
                } catch (e) {
                    this.error(e, true)
                }
            },
            log(msg, flag) {
                this.result += "> " + this.toString(msg) + "\n"
                if (flag === true && ! console.oldLog) {
                    console.log(msg)
                }
            },
            info(msg, flag) {
                this.result += "> " + this.toString(msg) + "\n"
                if (flag === true && ! console.oldLog) {
                    console.info(msg)
                }
            },
            warn(msg, flag) {
                this.result += "> " + this.toString(msg) + "\n"
                if (flag === true && ! console.oldLog) {
                    console.warn(msg)
                }
            },
            error(msg, flag) {
                this.result += "> " + this.toString(msg) + "\n"
                if (flag === true && ! console.oldLog) {
                    console.error(msg)
                }
            },
            toString(msg) {
                if (msg === undefined || msg === null) {
                    return msg
                } if (msg instanceof Error) {
                    return msg.toString()
                } else if (typeof msg === 'object' || Array.isArray(msg)) {
                    return msg + "\n" + JSON.stringify(msg)
                } else {
                    return msg
                }
            }
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
.ml16 { margin-left: 16px; }
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
.el-button+.el-button {
    margin-left: 5px;
}
</style>

<style>
.CodeMirror {
    min-height: calc(50vh - 75px);
    font-size: 13px;
}
.CodeMirror-scroll {
    min-height: calc(50vh - 75px);
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