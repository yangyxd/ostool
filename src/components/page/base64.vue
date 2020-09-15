<template>
    <div class="container base64">
        <el-row>
            <el-col>
                <div>
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 10, maxRows: 20}"
                    clearable
                    placeholder="在此输入源文本"
                    v-model="srcText">
                    </el-input>
                </div>
                <el-row class="mt8">
                    <el-button @click="srcText='';result=''">清空</el-button>
                    <el-checkbox v-model="hex" style="margin-left: 16px">解密结果以16进制显示</el-checkbox>
                    <div style="text-align: right; float: right">
                        <el-button type="primary" @click="encode()" size="medium">加密</el-button>
                        <el-button type="success" @click="decode()" size="medium">解密</el-button>
                    </div>
                </el-row>
                <div class="mt8">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 15, maxRows: 30}"
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
<p>Base64编码是使用64个可打印ASCII字符（A-Z、a-z、0-9、+、/）将任意字节序列数据编码成ASCII字符串，另有“=”符号用作后缀用途。</p>
<p>Base64将输入字符串按字节切分，取得每个字节对应的二进制值（若不足8比特则高位补0），然后将这些二进制数值串联起来，再按照6比特一组进行切分（因为2^6=64），最后一组若不足6比特则末尾补0。将每组二进制值转换成十进制，然后在上述表格中找到对应的符号并串联起来就是Base64编码结果。</p>
<p>由于二进制数据是按照8比特一组进行传输，因此Base64按照6比特一组切分的二进制数据必须是24比特的倍数（6和8的最小公倍数）。24比特就是3个字节，若原字节序列数据长度不是3的倍数时且剩下1个输入数据，则在编码结果后加2个=；若剩下2个输入数据，则在编码结果后加1个=。</p>
<p>完整的Base64定义可见RFC1421和RFC2045。因为Base64算法是将3个字节原数据编码为4个字节新数据，所以Base64编码后的数据比原始数据略长，为原来的4/3。在电子邮件中，根据RFC822规定，每76个字符，还需要加上一个回车换行。可以估算编码后数据长度大约为原长的135.1%。</p>
<p>Base64可用于任意数据的底层二进制数据编码，以应用于只能传输ASCII字符的场合。不过最常用于文本数据的处理传输，例如在MIME格式的电子邮件中，Base64可以用来编码邮件内容，方便在不同语言计算机间传输而不乱码，注意是传输而不是显示，例如在西欧地区计算机上使用utf-8编码即可正常显示中文（安装有对应字库），但是它未必能正常传输中文，这时转换为Base64便无此顾虑。</p>
<p>Base64编码若无特别说明，通常约定非ASCII字符按照UTF-8字符集进行编码处理。</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'base64Page',
        components: { },
        data() {
            return {
                srcText: undefined,
                result: undefined,
                hex: false,
                base64EncodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                base64DecodeChars: [
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
                    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
                    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
                    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
                    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
                ]
            }
        },
        mounted() {
        },
        methods: {
            encode() {
                if (!this.srcText) {
                    this.$message("请输入待加密内容");
                    return;
                }
                this.encodeBase64();
            },
            decode() {
                if (!this.srcText) {
                    this.$message("请输入待解密内容");
                    return;
                }
                this.decodeBase64();
            },
            encodeBase64() {
                this.result = this.base64encode(this.utf16to8(this.srcText));
            },
            decodeBase64() {
                if (this.hex)
                    this.result = this.CharToHex(this.base64decode(this.srcText));
                else
                    this.result = this.utf8to16(this.base64decode(this.srcText));
            },
            base64encode(str) {
                let out, i, len;
                let c1, c2, c3;

                len = str.length;
                i = 0;
                out = "";
                while (i < len) {
                    c1 = str.charCodeAt(i++) & 0xff;
                    if (i == len) {
                        out += this.base64EncodeChars.charAt(c1 >> 2);
                        out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                        out += "==";
                        break;
                    }
                    c2 = str.charCodeAt(i++);
                    if (i == len) {
                        out += this.base64EncodeChars.charAt(c1 >> 2);
                        out += this.base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                        out += this.base64EncodeChars.charAt((c2 & 0xF) << 2);
                        out += "=";
                        break;
                    }
                    c3 = str.charCodeAt(i++);
                    out += this.base64EncodeChars.charAt(c1 >> 2);
                    out += this.base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                    out += this.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
                    out += this.base64EncodeChars.charAt(c3 & 0x3F);
                }
                return out;
            },
            base64decode(str) {
                let c1, c2, c3, c4;
                let i, len, out;

                len = str.length;
                i = 0;
                out = "";
                while(i < len) {
                /* c1 */
                do {
                    c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while(i < len && c1 == -1);
                if(c1 == -1)
                    break;

                /* c2 */
                do {
                    c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while(i < len && c2 == -1);
                if(c2 == -1)
                    break;

                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                /* c3 */
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if(c3 == 61)
                    return out;
                    c3 = this.base64DecodeChars[c3];
                } while(i < len && c3 == -1);
                if(c3 == -1)
                    break;

                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                /* c4 */
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if(c4 == 61)
                    return out;
                    c4 = this.base64DecodeChars[c4];
                } while(i < len && c4 == -1);
                if(c4 == -1)
                    break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
                }
                return out;
            },
            utf16to8(str) {
                let out, i, len, c;

                out = "";
                len = str.length;
                for(i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                }
                }
                return out;
            },
            utf8to16(str) {
                let out, i, len, c;
                let char2, char3;

                out = "";
                len = str.length;
                i = 0;
                while(i < len) {
                c = str.charCodeAt(i++);
                switch(c >> 4)
                {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += str.charAt(i-1);
                    break;
                case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                                ((char2 & 0x3F) << 6) |
                                ((char3 & 0x3F) << 0));
                    break;
                }
                }

                return out;
            },
            CharToHex(str) {
                let out, i, len, c, h;

                out = "";
                len = str.length;
                i = 0;
                while(i < len)
                {
                    c = str.charCodeAt(i++);
                    h = c.toString(16);
                    if(h.length < 2)
                        h = "0" + h;

                    out += "\\x" + h + " ";
                    if(i > 0 && i % 8 == 0)
                        out += "\r\n";
                }

                return out;
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
.base64 .el-input__inner {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #010203;
}
</style>