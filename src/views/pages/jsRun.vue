<template>
  <div class="container jsrun full">
    <el-row class="p8" style="width: 100%; display: inline-block; line-height: 42px;">
        <el-button type="danger" @click="runScript()">▶ 运行代码</el-button>
        <div :style="{ textAlign: 'right', float: 'right', marginBottom: mobile ? '0' : '0', textAlign: 'center' }">
        <el-button type="info" @click="textarea = demo1">Demo 1</el-button>
        <el-button type="info" @click="textarea = demo2">Demo 2</el-button>
        <el-button @click="textarea = ''" circle title="清空" style="; background-color: #111; border: none"><el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg></el-icon></el-button>
        </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="e src">
          <codemirror v-model="textarea" placeholder="输入 JavaScript 代码" :style="{ padding: '0px !important', height: 'calc(60vh - 55px)' }" :indent-with-tab="true" :tab-size="4" :extensions="cmExt" />
        </div>
        <div class="desc mt8" style="padding: 0 8px 0 8px; color: #999">
          <b>控制台：</b>
          <el-button
            circle
            @click="clearConsole()"
            style="float: right; margin-top: -6px; background-color: #111; border: none"
            title="清空控制台"
          ><el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg></el-icon></el-button>
        </div>
        <div class="mt8 e ret">
          <codemirror v-model="result" :style="{ padding: '0px !important',
            height: 'calc(40vh - 76px)' }" :indent-with-tab="true" :tab-size="4" :extensions="cmExtResult" disabled />
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

export default {
  name: 'jsRunPage',
  components: { Codemirror },
  data() {
    return {
      cmExt: [javascript({ jsx: true }), oneDark],
      cmExtResult: [javascript({ jsx: true }), oneDark],
      mobile: this.isMobile(),
      textarea: '',
      result: '',
      demo1: `// 检测是否是合法的 URL
function isUrl(url) {
    const regex = /\\b(https?):\\/\\/[\\-A-Za-z0-9+&@#\\/%?=~_|!:,.;]*[\\-A-Za-z0-9+&@#\\/%=~_|]/i;
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
`
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {},
  methods: {
    clearConsole() {
      this.result = ''
    },
    async runScript() {
      await this.exec()
    },
    async exec() {
      try {
        this.clearConsole()
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _this = this
        let code = this.textarea
        let result
        console.oldLog = console.log
        console.oldErrLog = console.error
        console.oldInfoLog = console.info
        console.oldWarnLog = console.warn
        console.__print = window.print
        console.log = function (args) {
          console.oldLog(args)
          _this.log(args, false)
        }
        console.error = function (args) {
          console.oldErrLog(args)
          _this.error(args, false)
        }
        console.info = function (args) {
          console.oldInfoLog(args)
          _this.info(args, false)
        }
        console.warn = function (args) {
          console.oldWarnLog(args)
          _this.warn(args, false)
        }
        let print = function (args) {}
        try {
          const AsyncFunction = Object.getPrototypeOf(async function f() {}).constructor
          const data = new AsyncFunction('$', `return (async () => {${code ? code : 'undefined;'}})().catch((e)=>$.error(e))`)
          const fun = await data(_this)
          result = fun
        } finally {
          console.log = console.oldLog
          console.error = console.oldErrLog
          console.info = console.oldInfoLog
          console.warn = console.oldWarnLog
          window.print = console.__print
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
      this.result += '> ' + this.toString(msg) + '\n'
      if (flag === true && !console.oldLog) {
        console.log(msg)
      }
    },
    info(msg, flag) {
      this.result += '> ' + this.toString(msg) + '\n'
      if (flag === true && !console.oldLog) {
        console.info(msg)
      }
    },
    warn(msg, flag) {
      this.result += '> ' + this.toString(msg) + '\n'
      if (flag === true && !console.oldLog) {
        console.warn(msg)
      }
    },
    error(msg, flag) {
      this.result += '> ' + this.toString(msg) + '\n'
      if (flag === true && !console.oldLog) {
        console.error(msg)
      }
    },
    toString(msg) {
      if (msg === undefined || msg === null) {
        return msg
      }
      if (msg instanceof Error) {
        return msg.toString()
      } else if (typeof msg === 'object' || Array.isArray(msg)) {
        return msg + '\n' + JSON.stringify(msg)
      } else {
        return msg
      }
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
.p8 {
    padding: 4px 12px 4px 8px;
}
.full {
   margin: -9px -10px -5px -10px;
   background-color: #131313;
}
</style>
