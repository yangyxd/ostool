<template>
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </template>

  <script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { useEventListener } from '@vueuse/core'
  import { useStore } from 'vuex'
  import { debounce } from 'lodash-es'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  export default defineComponent({
    components: {
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
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
  </style>
