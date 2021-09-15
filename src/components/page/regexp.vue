<template>
    <div class="container regexp">
        <div><a href="https://mp.weixin.qq.com/s/wkCHL_QzAJwWEg9JZaZnCQ" target="_blank">掌握开发利器：正则表达式</a></div>
        <el-row class="mt8">
            <el-col :style="{width: 'calc(100% - 450px)', minWidth: (isMobile() ? '100%' : '520px')}">
                <div>
                    <el-input
                    type="textarea"
                    :rows="10"
                    clearable
                    placeholder="在此输入待匹配文本"
                    v-model="textarea">
                    </el-input>
                </div>
                <el-row v-if=!isMobile() class="mt16">
                    <div style="width: calc(100% - 105px); float: left">
                        <el-input placeholder="在此输入正则表达式" clearable v-model="regKey">
                            <template slot="prepend"><span class="subtitle">正则表达式</span></template>
                            <div slot="append">
                                <el-checkbox v-model="matchAll" title="/g">全局搜索</el-checkbox>
                                <el-checkbox v-model="ingoreCase" title="/i">忽略大小写</el-checkbox>
                            </div>
                        </el-input>
                    </div>
                    <div style="text-align: right; width: 100px; float: right">
                        <el-button type="primary" @click="execMatch()">测试匹配</el-button>
                    </div>
                </el-row>
                <div v-if=isMobile()>
                    <el-row class="mt8"><el-input placeholder="在此输入正则表达式" clearable v-model="regKey">
                        <div slot="append">
                            <el-button type="primary" @click="execMatch()">测试匹配</el-button>
                        </div>
                    </el-input></el-row>
                    <el-row class="mt8">
                        <el-checkbox v-model="matchAll" title="/g" style="margin-left: 8px;">全局搜索</el-checkbox>
                        <el-checkbox v-model="ingoreCase" title="/i">忽略大小写</el-checkbox>
                    </el-row>
                </div>
                <div class="desc mt16">匹配结果：</div>
                <div>
                    <el-input
                    type="textarea"
                    :rows="12"
                    readonly
                    placeholder="显示正则匹配结果"
                    v-model="result">
                    </el-input>
                </div>
                <el-row class="mt16">
                    <div style="width: calc(100% - 85px); float: left">
                        <el-input placeholder="在此输入替换文本" clearable v-model="regReplace">
                            <template v-if=!isMobile() slot="prepend"><span class="subtitle">替换文本</span></template>
                        </el-input>
                    </div>
                    <div style="text-align: right; width: 80px; float: right">
                        <el-button type="primary" @click="execMatchReplace()">替换</el-button>
                    </div>
                </el-row>
                <div class="desc mt16">替换结果：</div>
                <div class="pb8">
                    <el-input
                    type="textarea"
                    :rows="15"
                    readonly
                    placeholder="显示替换结果"
                    v-model="resultReplace">
                    </el-input>
                </div>
            </el-col>
            <el-col style="width: 450px">
                <div class="rightpl">
                    <div class="title"><i class="el-icon-lx-emojifill"></i> 常用正则表达式</div>
                    <div v-for="(item, index) in templates" :key="index" :title="item[1]" class="titem" @click="regKey=item[1]"><span>{{item[0]}}</span></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'regexpPage',
        components: { },
        data() {
            return {
                regKey: "",
                regReplace: "",
                textarea: "",
                result: "",
                resultReplace: "",
                matchAll: true,
                ingoreCase: false,
                templates: [
                    ["匹配中文字符", "[\\u4e00-\\u9fa5]"],
                    ["匹配双字节字符(包括汉字在内)", "[^\\x00-\\xff]"],
                    ["匹配空白行", "\\n\\s*\\r"],
                    ["匹配首尾空格", "(^\\s*)|(\\s*$)"],
                    ["匹配HTML标签", "<(.*)>(.*)<\\/(.*)>|<(.*)\\/>"],
                    ["匹配Email地址", "[\\w!#$%&'*+\/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?"],
                    ["匹配网址URL", "[a-zA-z]+:\/\/[^\\s]*"],
                    ["匹配国内电话号码", "\\d{3}-\\d{8}|\\d{4}-\\{7,8}"],
                    ["匹配腾讯QQ号", "[1-9][0-9]{4,}"],
                    ["匹配中国邮政编码", "[1-9]\\d{5}(?!\\d)"],
                    ["匹配18位身份证号", "^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$"],
                    ["匹配(年-月-日)格式日期", "([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))"],
                    ["匹配正整数", "^[1-9]\\d*$"],
                    ["匹配负整数", "^-[1-9]\\d*$"],
                    ["匹配整数", "-?[1-9]\\d*$"],
                    ["匹配非负整数（正整数 + 0）", "^[1-9]\\d*|0$"],
                    ["匹配非正整数（负整数 + 0）", "^-[1-9]\\d*|0$"],
                    ["匹配正浮点数", "^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$"],
                    ["匹配负浮点数", "^-[1-9]\\d*\\.\\d*|-0\\.\\d*[1-9]\\d*$"],
                    ["匹配英文字母", "^[A-Za-z]+$"],
                    ["匹配数字和英文字母", "^[A-Za-z0-9]+$"],
                    ["匹配数字、英文字母和下划线", "^\w+$"],
                    ["匹配以a开头以d结尾中间任意数量的字母或数字", "^a[a-z0-9]*d$"],
                    ["匹配以open开头以over结尾字符串", "\open.*?\over"],
                    ["截取字符串CN_和.mtl之间的内容", "(?<=CN_).*?(?=.mtl)"],
                ]
            }
        },
        mounted() {
        },
        methods: {
            execMatch() {
                try {
                    if (!this.isValidFields())
                        return false;
                    this.result = undefined;
                    let regex = this.buildRegex();
                    let result = this.textarea.match(regex);
                    if (result == null || result == undefined || result.length == 0) {
                        this.result = "(没有匹配)";
                        return false;
                    }
                    if (this.matchAll) {
                        let strResult = "共找到 " + result.length + " 处匹配: \r\n";
                        for (let i=0; i<result.length; i++)
                            strResult += result[i] + "\r\n";
                        this.result = strResult;
                    } else {
                        this.result = "匹配位置: " + regex.lastIndex + "\r\n匹配结果: " + result[0];
                    }
                    return true;
                } catch (e) {
                    this.$message(e.message);
                    this.result = "错误：\r\n" + e.message;
                    return false;
                }
            },
            execMatchReplace() {
                try {
                    let regex = this.buildRegex();
                    this.resultReplace = this.textarea.replace(regex, this.regReplace);
                } catch (e) {
                    this.$message(e.message);
                    this.resultReplace = "错误：\r\n" + e.message;
                }
            },
            isValidFields() {
                if (!this.textarea || this.textarea.length < 1) {
                    this.$message("请输入待匹配文本");
                    return false;
                }
                if (!this.regKey || this.regKey.length < 1) {
                    this.$message("请输入正则表达式");
                    return false;
                }
                return true;
            },
            buildRegex() {
                let op = "";
                if (this.matchAll) op = "g";
                if (this.ingoreCase) op = op + "i";
                return new RegExp(this.regKey, op);
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
    margin-left: 12px;
    padding: 16px;
    background: #f1f2f3;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
.regexp .el-input__inner {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #010203;
}
.xpath .el-textarea__inner {
    color: #010203;
}
</style>