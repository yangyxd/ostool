<template>
  <div class="markdown container full">
     <div ref="placeholder" class="iframe-placeholder"></div>
  </div>
</template>

<script>
import { iframeManager } from '@/utils/IframeManager'

export default {
  name: 'MarkdownPage',
  components: {},
  data() {
    const href = location.origin + location.pathname.replace('/index.html', '/') + 'markdown/mdeditor.html'
    console.log(href)
    return {
      iframeKey: 'markdown-editor', // 定义唯一 key
      text: '{}',
      url: href
    }
  },
  mounted() {
    console.log('debug: ' + this.isDebug)
  },
  activated() {
    iframeManager.activate(this.iframeKey, this.url);
  },
  deactivated() {
    iframeManager.deactivate(this.iframeKey);
  },
  beforeUnmount() {
    iframeManager.destroy(this.iframeKey);
  },
  methods: {}
}
</script>

<style scoped>
.container {
  height: calc(100vh - 46px) !important;
  padding: 0px !important;
  position: relative;
  overflow: hidden;
}
.mobile .container {
  padding: 0px !important;
}

.full {
   margin: -9px -10px -5px -10px;
}

.iframe-placeholder {
  width: 100%;
  height: 100%;
}
</style>
<style scoped lang="scss">
@import '@/assets/styles/var.scss';

/** iframe样式 */
.iframeContain {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
