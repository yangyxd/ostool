<template>
  <div class="container">
    <iframe :src="url" scrolling="no" frameborder="0" class="iframeContain" name="jsonToolFrame"></iframe>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component'
import BaseVue from '../../base/BaseVue'

@Options({
  name: 'JsonViewPage',
  components: {}
})
/** 主页 */
export default class JsonViewPage extends BaseVue {
  url = location.origin + location.pathname.replace('/index.html', '/') + 'json/json.html'
  created() {
    console.log(this.url)
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
.iframeContain {
  width: 100%;
  height: 100%;
}
</style>
