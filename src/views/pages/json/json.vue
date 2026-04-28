<template>
  <div class="container json_tool">
     <div ref="placeholder" class="iframe-placeholder"></div>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component'
import { computed, ComputedRef, ref, WatchOptions, WatchStopHandle } from 'vue'
import BaseVue from '../../base/BaseVue'
import { iframeManager } from '@/utils/IframeManager'

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
  iframeKey = 'json-tool'
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

  activated() {
    let isDark = this.themeValue === 'var-drak'
    iframeManager.activate(this.iframeKey, this.url, { theme: isDark ? 'dark' : 'light' });
  }

  deactivated() {
    iframeManager.deactivate(this.iframeKey);
  }

  beforeUnmount() {
    iframeManager.destroy(this.iframeKey);
  }

  doUpdateTheme() {
    this.$nextTick(() => setTimeout(() => {
      let isDark = this.themeValue === 'var-drak'
      iframeManager.applyTheme(this.iframeKey, isDark ? 'dark' : 'light')
    }, 50))
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
