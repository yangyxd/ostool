<template>
  <div class="container md5">
    <el-row>
      <el-col style="width: calc(100% - 460px); min-width: 500px;">
        <div>
          <el-input type="textarea" :autosize="{ minRows: mobile ? 16 : 30, maxRows: 40 }" clearable placeholder="在此输入待加密内容" v-model="srcText">
          </el-input>
        </div>
        <el-row class="mt8">
          <el-button type="primary" @click="encode()">加密</el-button>
          <el-button @click="clear()">清空</el-button>
        </el-row>
      </el-col>
      <el-col class="mt8" style="width: 450px">
        <div class="subtitle">加密结果：</div>
        <el-input v-model="ret32u" readonly class="mt8">
          <template #prepend><span class="subtitle">32位大写</span></template>
        </el-input>
        <el-input v-model="ret32l" readonly class="mt8">
          <template #prepend><span class="subtitle">32位小写</span></template>
        </el-input>
        <el-input v-model="ret16u" readonly class="mt8">
          <template #prepend><span class="subtitle">16位大写</span></template>
        </el-input>
        <el-input v-model="ret16l" readonly class="mt8">
          <template #prepend><span class="subtitle">16位小写</span></template>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'md5Page',
  components: {},
  data() {
    return {
      srcText: undefined,
      ret32u: undefined,
      ret32l: undefined,
      ret16u: undefined,
      ret16l: undefined,
      mobile: this.isMobile()
    }
  },
  mounted() {},
  methods: {
    encode() {
      if (!this.srcText) {
        this.$message('请输入待加密内容')
        return
      }
      let txt = this.$md5(this.srcText)
      this.ret32u = txt.toUpperCase()
      this.ret32l = txt.toLowerCase()
      this.ret16u = this.ret32u.substr(8, 16)
      this.ret16l = this.ret32l.substr(8, 16)
    },
    clear() {
      this.srcText = undefined
      this.ret32u = ''
      this.ret32l = ''
      this.ret16u = ''
      this.ret16l = ''
    }
  }
}
</script>

<style scoped>
.subtitle {
  font-weight: bold;
  font-size: 14px;
  color: #111;
}
.container {
  min-height: calc(100vh - 70px);
  padding: 2px !important;
  overflow: hidden;
}
.mobile .container {
  padding: 0px !important;
}
.mt8 {
  margin-top: 8px;
}
</style>

<style>
.md5 .el-input__inner {
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
  color: #010203;
}
.md5 .el-textarea__inner {
  color: #010203;
}
</style>
