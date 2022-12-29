<template>
  <div class="markdown container full" >
    <iframe :src="url" scrolling="yes" frameborder="0" class="iframeContain" name="mdToolFrame" ref="mdToolFrame"></iframe>
  </div>
</template>

<script>
export default {
  name: 'MarkdownPage',
  components: {},
  data() {
    const href = location.origin + location.pathname.replace('/index.html', '/') + 'markdown/mdeditor.html'
    console.log(href)
    return {
      text: '{}',
      url: href
    }
  },
  mounted() {
    console.log('debug: ' + this.isDebug)
  },
  methods: {}
}
</script>

<style scoped>
.container {
  height: calc(100vh - 46px) !important;
  padding: 0px !important;
}
.mobile .container {
  padding: 0px !important;
}

.full {
   margin: -9px -10px -5px -10px;
}
</style>

<style>
/** iframe样式 */
.iframeContain {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
