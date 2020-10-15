<template>
    <div class="container base64">
        <el-row>
            <el-col>
                <div>
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 9, maxRows: 20}"
                    clearable
                    placeholder="在此输入源文本"
                    v-model="srcText">
                    </el-input>
                </div>
                <el-row class="mt8">
                    <el-button type="primary" @click="_encode()" size="medium">编码</el-button>
                    <el-button type="success" @click="_decode()" size="medium">解码</el-button>
                    <el-button @click="change()" size="medium">交换内容</el-button>
                    <el-select v-model="mode" placeholder="请选择" size="medium" style="width: 120px; margin-left: 12px; margin-top: -2px;">
                        <el-option
                        v-for="item in options"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                    <div style="text-align: right; float: right">
                        <el-button @click="srcText='';result=''">清空</el-button>
                    </div>
                </el-row>
                <div class="mt8">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 9, maxRows: 25}"
                    readonly
                    placeholder="显示加密或解密结果"
                    v-model="result">
                    </el-input>
                </div>
            </el-col>
        </el-row>
        <div class="rightpl">
            <div class="title"><i class="el-icon-lx-emojifill"></i> 小知识</div>
            <div>
<h2>JavaScript的四个URL编码/解码方法</h2>
<p></p>
<h4>encodeURI</h4>
<p>将元字符和语义字符之外的字符都进行转义，一般用于知道该URL只用于完整的URL时使用。</p>
<h4>encodeURIComponent</h4>
<p>将除了语义字符之外的字符进行转义，包括元字符，因此，它的参数通常是URL的路径或参数值，而不是整个URL。
比如说，要在谷歌中搜索www.baidu.com/q=5&name时，若使用encodeURI，&字符并不会被转义，从而改变其真正的URL。</p>
<h4>decodeURI</h4>
<p>还原转义后的URL，是encodeURI方法的逆运算。</p>
<h4>decodeURIComponent（此方法可以还原被转义的 url）</h4>
<p>还原转义后的URL片段。是encodeURIComponent方法的逆运算。</p>
<p></p>
<h2>URL的合法字符</h2>
<p></p>
<p>URL的合法字符表示再浏览器的地址栏中不会被转义的字符，有两种：</p>
<p>
<ul>
    <li><b>URL元字符：</b>分号（;），逗号（’,’），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（$），井号（#）</li>
<li><b>语义字符：</b>a-z，A-Z，0-9，连词号（-），下划线（_），点（.），感叹号（!），波浪线（~），星号（*），单引号（），圆括号（()`）</li>
</ul></p>
<p>当输入的字符不符合以上的字符时，浏览器就会把该字符转义，规则：根据操作系统的默认编码，将每个字节转为百分号（%）加上两个大写的十六进制字母。</p>
            </div>
        </div>
    </div>
</template>

<script>
    const iconv = require('iconv-lite');
    export default {
        name: 'urlPage',
        components: { },
        data() {
            return {
                srcText: "https://www.baidu.com/s?ie=utf-8&f=8&wd=url编码解码",
                result: undefined,
                hex: false,
                options: ["UTF-8", "GBK", "GB2312"],
                mode: "UTF-8"
            }
        },
        mounted() {
        },
        methods: {
            change() {
                let tmp = this.srcText;
                this.srcText = this.result;
                this.result = tmp;
            },
            _encode() {
                if (!this.srcText) {
                    this.$message("请输入待编码内容");
                    return;
                }
                try {
                    this._encodeUrl();
                } catch (e) {
                    this.$message("编码失败：" + e);
                }
            },
            _decode() {
                if (!this.srcText) {
                    this.$message("请输入待解码内容");
                    return;
                }
                try {
                    this._decodeUrl();
                } catch (e) {
                    this.$message("解码失败：" + e);
                }
            },
            _encodeUrl() {
                if (this.mode == "UTF-8") {
                    this.result = encodeURIComponent(this.srcText).toLowerCase();
                } else if (this.mode == "GBK") {
                    this.result = encodeURIComponent(this.utf16StrToGbkStr(this.srcText)).toLowerCase();
                } else {
                    let s = this.srcText;
                    let ss = '';
                    let m = 0;
                    for (let i=0; i<s.length; i++) {
                        let cc = s.charCodeAt(i);
                        let j = this.indexOfGb2312(cc);
                        if (j > -1) {
                            if (i > m) {
                                ss = ss + encodeURIComponent(s.substr(m, i - m));
                            }
                            iconv.encode(s.substr(i, 1), "gb2312").forEach(buffer => ss = ss + ('%' + buffer.toString(16))); // this.toGB2312(j);
                            m = i + 1;
                        }
                    }
                    if (s.length > m)
                        ss = ss + encodeURIComponent(s.substr(m, s.length - m));
                    this.result = ss.toLowerCase();
                }
            },
            _decodeUrl() {
                if (this.mode == "UTF-8") {
                    this.result = decodeURIComponent(this.srcText);
                } else if (this.mode == "GBK") {
                    this.result = this.gbkStrToUtf16Str(decodeURIComponent(this.srcText));
                } else {
                    let s = this.gb2312ToUtf8(this.srcText);
                    console.log(s);
                    s = iconv.decode(s, "gb2312");
                    this.result = s;
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
.base64 .el-textarea__inner {
    color: #010203;
}
</style>