<template>
  <div class="container json_tool">
    <iframe :src="url" scrolling="no" ref="jsonToolFrame" frameborder="0" :class="'iframeContain ' + theme" name="jsonToolFrame" @load="addIframeClass"></iframe>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component'
import { computed, ComputedRef, ref, WatchOptions, WatchStopHandle } from 'vue'
import BaseVue from '../../base/BaseVue'

@Options({
  name: 'JsonViewPage',
  components: {},
  watch: {
    theme(val, oldVal) {
        this.themeValue = val
        this.doUpdateTheme()
    }
  }
})
/** 主页 */
export default class JsonViewPage extends BaseVue {  
  url = location.origin + location.pathname.replace('/index.html', '/') + 'json/json.html'
  theme: ComputedRef<string> = computed(() => this.store.state.settings.theme || '')
  themeValue = this.store.state.settings.theme || ''
  created() {
    console.log(this.url)    
  }

  mounted() {
    setTimeout(() => {
      let jsonTool = this.$refs.jsonToolFrame as any
      if (jsonTool !== undefined && jsonTool !== null) {
        jsonTool.style.opacity = 1
      }      
    }, 300)
  }

  addIframeClass() {
    const htmlClassList = document.getElementsByTagName('html')[0].classList
    const isDark = htmlClassList.contains('dark')
    let jsonTool = this.$refs.jsonToolFrame as any
    const iframeDocument = jsonTool.contentDocument || jsonTool.contentWindow.document;
    const iframeRoot = iframeDocument.documentElement;
    if (isDark) {
      iframeRoot.classList.add('dark')
    } else {
      iframeRoot.classList.remove('dark')
    }
  }

  doUpdateTheme() {
    this.$nextTick(() => setTimeout(() => {
      this.addIframeClass()
    }, 300))
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 60px);
}
.mobile .container {
  padding: 2px !important;
  height: 150vh;
}
</style>

<style>
/** iframe样式 */
.json_tool  .iframeContain {
  width: 100%;
  height: 100%;
  opacity: 0.001;
  transition: opacity 1.5s;
}
</style>
