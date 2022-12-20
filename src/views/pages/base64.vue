<template>
  <div class="base64 container">
    <el-row>
      <el-col>
        <div>
          <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20 }" clearable placeholder="在此输入源文本" v-model="srcText">
          </el-input>
        </div>
        <el-row v-if="mobile" class="mt8">
          <el-select v-model="mode" placeholder="请选择" size="default" style="width: 120px; margin-top: -2px">
            <el-option v-for="item in options" :key="item" :label="item" :value="item"> </el-option>
          </el-select>
          <el-checkbox v-model="hex" style="margin-left: 16px">解密结果以16进制显示</el-checkbox>
          <div style="text-align: right; float: right">
            <el-button @click="(srcText = ''), (result = '')">清空</el-button>
          </div>
        </el-row>
        <el-row v-if="mobile" class="mt8">
          <el-button type="primary" @click="_encode()" size="default">加密</el-button>
          <el-button type="success" @click="_decode()" size="default">解密</el-button>
          <el-button @click="change()" size="medium">交换内容</el-button>
        </el-row>
        <el-row v-if="!mobile" class="mt8">
          <el-button type="primary" @click="_encode()" size="default">加密</el-button>
          <el-button type="success" @click="_decode()" size="default">解密</el-button>
          <el-button @click="change()" size="default">交换内容</el-button>
          <el-select v-model="mode" placeholder="请选择" size="default" style="width: 120px; margin-left: 12px; margin-top: -2px">
            <el-option v-for="item in options" :key="item" :label="item" :value="item"> </el-option>
          </el-select>
          <el-checkbox v-model="hex" style="margin-left: 16px">解密结果以16进制显示</el-checkbox>
          <div style="text-align: right; float: right; margin-left: 6px;">
            <el-button @click="(srcText = ''), (result = '')">清空</el-button>
          </div>
        </el-row>
        <div class="mt8">
          <el-input type="textarea" :autosize="{ minRows: 15, maxRows: 30 }" readonly placeholder="显示加密或解密结果" v-model="result">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <div class="rightpl">
      <div class="title"><i class="el-icon-lx-emojifill"></i> 小知识</div>
      <div>
        <p>Base64编码是使用64个可打印ASCII字符（A-Z、a-z、0-9、+、/）将任意字节序列数据编码成ASCII字符串，另有“=”符号用作后缀用途。</p>
        <p>
          Base64将输入字符串按字节切分，取得每个字节对应的二进制值（若不足8比特则高位补0），然后将这些二进制数值串联起来，再按照6比特一组进行切分（因为2^6=64），最后一组若不足6比特则末尾补0。将每组二进制值转换成十进制，然后在上述表格中找到对应的符号并串联起来就是Base64编码结果。
        </p>
        <p>
          由于二进制数据是按照8比特一组进行传输，因此Base64按照6比特一组切分的二进制数据必须是24比特的倍数（6和8的最小公倍数）。24比特就是3个字节，若原字节序列数据长度不是3的倍数时且剩下1个输入数据，则在编码结果后加2个=；若剩下2个输入数据，则在编码结果后加1个=。
        </p>
        <p>
          完整的Base64定义可见RFC1421和RFC2045。因为Base64算法是将3个字节原数据编码为4个字节新数据，所以Base64编码后的数据比原始数据略长，为原来的4/3。在电子邮件中，根据RFC822规定，每76个字符，还需要加上一个回车换行。可以估算编码后数据长度大约为原长的135.1%。
        </p>
        <p>
          Base64可用于任意数据的底层二进制数据编码，以应用于只能传输ASCII字符的场合。不过最常用于文本数据的处理传输，例如在MIME格式的电子邮件中，Base64可以用来编码邮件内容，方便在不同语言计算机间传输而不乱码，注意是传输而不是显示，例如在西欧地区计算机上使用utf-8编码即可正常显示中文（安装有对应字库），但是它未必能正常传输中文，这时转换为Base64便无此顾虑。
        </p>
        <p>Base64编码若无特别说明，通常约定非ASCII字符按照UTF-8字符集进行编码处理。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base64Page',
  components: {},
  data() {
    return {
      srcText: undefined,
      result: undefined,
      hex: false,
      options: ['UTF-8', 'GB2312', 'UTF-8-URI'],
      mode: 'UTF-8',
      mobile: this.isMobile()
    }
  },
  methods: {
    change() {
      let tmp = this.srcText
      this.srcText = this.result
      this.result = tmp
    },
    _encode() {
      if (!this.srcText) {
        this.$message('请输入待加密内容')
        return
      }
      try {
        this._encodeBase64()
      } catch (e) {
        this.$message('加密失败：' + e)
      }
    },
    _decode() {
      if (!this.srcText) {
        this.$message('请输入待解密内容')
        return
      }
      try {
        this._decodeBase64()
      } catch (e) {
        this.$message('解密失败：' + e)
      }
    },
    _encodeBase64() {
      if (this.mode == 'UTF-8') {
        this.result = this.encodeBase64(this.srcText, 'utf8')
      } else if (this.mode == 'UTF-8-URI') {
        this.result = this.encodeBase64(this.srcText, 'utf8', true)
      } else {
        this.result = this.encodeBase64(this.srcText, 'gbk')
      }
    },
    _decodeBase64() {
      if (this.hex) {
        if (this.mode == 'UTF-8' || this.mode == 'UTF-8-URI') {
          this.result = this.CharToHex(this.decodeBase64(this.srcText, 'utf8', this.mode == 'UTF-8-URI'))
        } else this.result = this.CharToHex(this.decodeBase64(this.srcText, 'gbk'))
      } else {
        if (this.mode == 'UTF-8' || this.mode == 'UTF-8-URI') {
          this.result = this.decodeBase64(this.srcText, 'utf8', this.mode == 'UTF-8-URI')
        } else this.result = this.decodeBase64(this.srcText, 'gbk')
      }
    },
    CharToHex(str) {
      let out, i, len, c, h

      out = ''
      len = str.length
      i = 0
      while (i < len) {
        c = str.charCodeAt(i++)
        h = c.toString(16)
        if (h.length < 2) h = '0' + h

        out += '\\x' + h + ' '
        if (i > 0 && i % 8 == 0) out += '\r\n'
      }

      return out
    }
  }
}
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
  color: #111;
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
  padding: 2px !important;
  overflow: hidden;
}
.mobile .container {
  padding: 0px !important;
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
.titem span:hover {
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
  text-indent: 30px;
  color: #666;
}
</style>

<style>
/** iframe样式 */
.iframeContain {
  width: 100%;
  height: 100%;
}
.base64 .el-textarea__inner {
  color: #010203;
}
</style>
