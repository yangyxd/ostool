<template>
  <div class="container xpath">
    <el-row>
      <el-col>
        <div class="e src">
          <codemirror v-model="textarea" placeholder="请输入代码" :style="{ padding: '0px !important', height: 'calc(50vh - 42px)' }" :indent-with-tab="true" :tab-size="4" :extensions="cmExt" />
        </div>
        <el-row class="mt8">
          <div
            :style="{
              width: 'calc(100% - ' + (mobile ? 2 : 410) + 'px)',
              minWidth: '320px',
              float: 'left',
              marginBottom: mobile ? '4px' : '0',
              marginRight: mobile ? '0' : '8px',
              lineHeight: '34px'
            }"
          >
            <el-input placeholder="输入XPath或CSS选择器表达式" clearable v-model="regKey" @keyup.enter="execAutoMatch">
              <template #append><el-checkbox v-model="jsonStr">JSON</el-checkbox></template>
            </el-input>
          </div>
          <div
            :style="{
              textAlign: 'right',
              float: mobile ? 'left' : 'right',
              margin: 0,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }"
          >
            <el-button type="info" @click="execCssMatch()" title="CSS表达式测试匹配"><b>CSS</b> 匹配</el-button>
            <el-button type="primary" @click="execMatch()" title="XPath表达式测试匹配"><b>XPath</b> 匹配</el-button>
            <el-button type="success" @click="execAutoMatch()" title="自动匹配">自动</el-button>
            <el-button @click=";(textarea = demo), (regKey = demoKey)">XPath用例</el-button>
            <el-button @click=";(textarea = ''), (regKey = '')" circle title="清空">
                <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg></el-icon>
            </el-button>
          </div>
        </el-row>
        <div class="desc mt8">
          <b>匹配结果：</b>({{ matchNum }}个) <span class="ml16">参考：</span
          ><a href="https://www.w3school.com.cn/cssref/css_selectors.asp" target="_blank">CSS 选择器参考手册</a>
        </div>
        <div class="mt8 e ret">
          <codemirror v-model="result" placeholder="显示正则匹配结果" :style="{ padding: '0px !important', height: 'calc(50vh - 100px)' }" :indent-with-tab="true" :tab-size="4" :extensions="cmResultExt" disabled />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Codemirror } from 'vue-codemirror'
import { xml } from '@codemirror/lang-xml'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

// doc: https://www.npmjs.com/package/vue-codemirror

export default {
  name: 'XpathPage',
  components: { Codemirror },
  data() {
    return {
      cmExt: [javascript( {jsx: true} ), oneDark],
      cmResultExt: [xml(), oneDark],
      mobile: this.isMobile(),
      regKey: '',
      textarea: '',
      result: '',
      matchNum: 0,
      jsonStr: false,
      demo: `<webinfo>
	<site dig="1">
		<domain><![CDATA[http://fly.layui.com/]]></domain>
		<title class="s-title">LayUI前端社区</title>
	</site>
	<site >
		<domain><![CDATA[http://www.bejson.com/]]></domain>
		<title class="s-title">JSON在线解析工具</title>
	</site>
</webinfo>
`,
      demoKey: `/webinfo//site[@dig=1]`
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {},
  methods: {
    execAutoMatch() {
      if (this.regKey.trim().startsWith('/')) {
        this.execMatch()
      } else {
        this.execCssMatch()
      }
    },
    execMatch() {
      try {
        if (!this.isValidFields()) return false
        this.result = undefined
        this.matchNum = 0
        let xmldom = undefined
        let parser = new DOMParser()
        xmldom = parser.parseFromString(this.textarea, 'text/xml')
        let result = xmldom.evaluate(this.regKey, xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
        if (result != null) {
          let node = result.iterateNext()
          let str = []
          while (node) {
            this.matchNum++
            str.push(node.innerHTML)
            node = result.iterateNext()
          }
          this.result = this.jsonStr ? JSON.stringify(str) : str.join('\n')
        } else {
          this.result = '(没有匹配)'
        }
        return true
      } catch (e) {
        this.$message(e.message)
        this.result = '错误：\r\n' + e.message
        return false
      }
    },
    execCssMatch() {
      try {
        if (!this.isValidFields()) return false
        this.result = undefined
        this.matchNum = 0
        let parser = new DOMParser()
        let dom = parser.parseFromString(this.textarea, 'text/xml')
        let result = dom.querySelectorAll(this.regKey)
        this.matchNum = result.length
        if (result != null && result.length > 0) {
          let str = []
          result.forEach((node) => {
            str.push(node.innerHTML)
          })
          this.result = this.jsonStr ? JSON.stringify(str) : str.join('\n')
        } else {
          this.result = '(没有匹配)'
        }
        return true
      } catch (e) {
        this.$message(e.message)
        this.result = '错误：\r\n' + e.message
        return false
      }
    },
    isValidFields() {
      if (!this.textarea || this.textarea.length < 1) {
        this.$message('请输入待匹配文本')
        return false
      }
      if (!this.regKey || this.regKey.length < 1) {
        this.$message('请输入XPath表达式或CSS选择器表达式')
        return false
      }
      return true
    },
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: calc(100vh - 70px);
  padding: 0px !important;
  overflow: hidden;
}
.mobile .container {
  padding: 0px !important;
}
.mt8 {
  margin-top: 8px;
}
.ml16 {
  margin-left: 16px;
}
.el-button + .el-button {
  margin-left: 3px;
}
</style>
