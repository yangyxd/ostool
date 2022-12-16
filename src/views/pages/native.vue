<template>
    <div class="container native">
        <el-row>
            <el-col>
                <div>
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 15, maxRows: 25}"
                    clearable
                    ref="srctext"
                    placeholder="在此输入源文本"
                    v-model="srcText">
                    </el-input>
                </div>
                <el-row class="mt8" style="line-height: 2.5">
                    <el-button type="primary" @click="_encode()" size="medium">↓ 编码</el-button>
                    <el-button type="success" @click="_decode()" size="medium">↑ 解码</el-button>
                    <el-select v-model="mode" placeholder="请选择" size="medium" style="width: 160px; margin-left: 12px; margin-top: -2px;" :change="onModeChange()">
                        <el-option
                        v-for="item in options"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                    <el-checkbox v-if="mode===options[2]" v-model="ignoreLetter" style="margin-left: 12px;">不转换字母和数字</el-checkbox>
                    <span style="margin-left: 12px;" class="desc">{{hint}}</span>
                    <div style="text-align: right; float: right">
                        <el-button @click="srcText='';result=''">清空</el-button>
                    </div>
                </el-row>
                <div class="mt8">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 15, maxRows: 25}"
                    ref="desttext"
                    placeholder="显示加密或解密结果"
                    v-model="result">
                    </el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    const iconv = require('iconv-lite');
    export default {
        name: 'nativePage',
        components: { },
        data() {
            return {
                srcText: "这是一个例子, this is a example",
                result: undefined,
                hex: false,
                options: ["Native / Unicode", "Native / UTF-8", "Native / ASCII"],
                mode: "Native / UTF-8",
                srcHint: "提示：转换结果同样可以直接放在HTML中显示.",
                hint: "",
                ignoreLetter: true
            }
        },
        mounted() {
            this.hint = this.srcHint
        },
        methods: {
            change() {
                let tmp = this.srcText;
                this.srcText = this.result;
                this.result = tmp;
            },
            onModeChange() {
                if (this.mode === 'Native / UTF-8') {
                    this.hint = this.srcHint
                } else if (this.mode === 'Native / Unicode') {
                    this.hint = this.srcHint
                } else {
                    this.hint = "提示：Java 中的 properties 配置文件可以使用这种格式."
                }
            },
            _encode() {
                if (!this.srcText) {
                    this.$message("请输入Native字符串");
                    this.$refs["srctext"].focus()
                    return;
                }
                try {
                    console.log('encode native.')
                    if (this.mode === 'Native / UTF-8') {
                        this.result = this.srcText.replace(/[^\u0000-\u00FF]/g, function ($0) { return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;") })
                    } else if (this.mode === 'Native / Unicode') {
                        let a_s = this.srcText
                        let str = ''
                        for (var i=0; i<a_s.length; i++) {
		                    str = str + '&#' + a_s.charCodeAt(i) + ';'
                        }
                        this.result = str
                    } else {
                        let character = this.srcText.split("")
                        let ascii = ''
                        for(var i=0;i<character.length;i++){
                            var code=Number(character[i].charCodeAt(0));
                            if(!this.ignoreLetter || code > 127){
                                var charAscii=code.toString(16);
                                charAscii=new String("0000").substring(charAscii.length,4)+charAscii;
                                ascii+="\\u"+charAscii;
                            } else{
                                ascii+=character[i];
                            }
                        }
                        this.result = ascii
                    }
                } catch (e) {
                    this.$message("编码失败：" + e);
                }
            },
            _decode() {
                try {
                    console.log('decode native.')
                    if (this.mode === 'Native / UTF-8') {
                        this.srcText = unescape(this.result.replace(/&#x/g, '%u').replace(/;/g, ''))
                    } else if (this.mode === 'Native / Unicode') {
                        let code = this.result.match(/&#(\d+);/g)
                        if (code === null || code === undefined) {
                            this.$message("请输入正确的Unicode代码！")
                            this.$refs["desttext"].focus()
                            return
                        }
                        let str = ''
                        for (var i=0; i<code.length; i++) {
		                    str = str + String.fromCharCode(code[i].replace(/[&#;]/g, ''))
                        }
                        this.srcText = str
                    } else {
                        let character = this.result.split("\\u")
                        let native1 = ''
                        if (character.length > 0) {
                            native1 = character[0]
                            for(var i=1;i<character.length;i++){
                                var code=character[i];
                                native1+=String.fromCharCode(parseInt("0x"+code.substring(0,4)));
                                if(code.length>4){
                                    native1+=code.substring(4,code.length);
                                }
                            }
                        }
                        this.srcText = native1
                    }
                } catch (e) {
                    this.$message("解码失败：" + e);
                }
            },
            gb2312ToUtf8(s) {
                var sa = s.split("%");
                var retV = "";
                if (sa[0] != "") {
                    retV = sa[0];
                }
                for (var i = 1; i < sa.length; i++) {
                    if (sa[i].substring(0, 1) == "u") {
                        retV += this.Hex2Utf8(this.Str2Hex(sa[i].substring(1, 5)));
                    } else {
                        retV += unescape("%" + sa[i]);
                    }
                }
                return retV;
            }
        },
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
h4 {
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
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
.mb16 {
    margin-bottom: 16px;
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
    color: #666;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
.native .el-textarea__inner {
    color: #010203;
    font-size: 14px;
}
</style>