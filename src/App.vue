<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
  <theme-picker />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useStore } from 'vuex'
import { debounce } from 'lodash-es'
import { ElConfigProvider } from 'element-plus'
import ThemePicker from '@/components/layout/Settings/ThemePicker/index.vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default defineComponent({
  components: {
    ThemePicker,
    ElConfigProvider
  },
  setup() {
    const { commit } = useStore()
    const locale = zhCn

    const resizeFun = () => {
      const baseWidth = 1000
      const clientWidth = document.documentElement.clientWidth
      if (clientWidth < baseWidth) {
        commit('layout/updateCollapse', true)
      }
    }

    const debounceResize = debounce(resizeFun, 300)

    onMounted(() => {
      // 视图发生变化更新菜单折叠状态
      useEventListener(window, 'resize', debounceResize)
    })
    return {
      locale
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}
</style>
