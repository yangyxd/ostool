<template>
  <div class="header-left" :class="[showPath ? 'path' : '']">
    <el-icon :size="25" @click="handleCollapseClick">
      <svg v-if="isCollapse" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
        <path
          fill="currentColor"
          d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
        ></path>
      </svg>
      <svg v-else viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
        <path
          fill="currentColor"
          d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
        ></path>
      </svg>
    </el-icon>
    <span class="title" v-if="!showPath && !singleHeader">{{ siteTitle }}</span>
    <el-breadcrumb v-if="showPath && !singleHeader" style="margin-left: 16px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in paths"
        :key="index"
        :to="item.path ? { path: item.path } : undefined"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
    <slot></slot>
  </div>
  <div class="header-right" :class="[showPath ? 'path' : '']">
    <div class="btn-fullscreen" @click="handleFullScreen">
      <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
        <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
            <path
              fill="currentColor"
              d="m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z">
            </path></svg></el-icon>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { ElIcon, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { menusMap } from '@/router/menus'

interface PathItem {
  name: string
  path: string | undefined
}

export default defineComponent({
  name: 'GHeader',
  components: {
    ElIcon,
    ElBreadcrumb,
    ElBreadcrumbItem,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    $route(newValue, oldValue) {
      const meta = newValue.meta
      this.updatePaths(meta.activePath ?? newValue.path)
    },
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()

    const avatar = null // avatarImg
    const siteTitle = document.title
    const fullscreen = ref(false)
    const paths = ref([] as PathItem[])

    // 点击菜单缩起展开
    const handleCollapseClick = () => {
      store.commit('layout/updateCollapse', !props.isCollapse)
    }

    // 全屏事件
    const handleFullScreen = () => {
      let _document = document as any
      let element = document.documentElement as any
      if (fullscreen.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (_document.webkitCancelFullScreen) {
          _document.webkitCancelFullScreen()
        } else if (_document.mozCancelFullScreen) {
          _document.mozCancelFullScreen()
        } else if (_document.msExitFullscreen) {
          _document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      fullscreen.value = !fullscreen.value
    }

    // 更新 Paths
    const updatePaths = (path: string) => {
      let items = path.replaceAll('-', '_').split('/')
      let key = ''
      const arr: PathItem[] = []
      items.forEach((v) => {
        if (!v || v === 'home') return
        key += key ? '/' + v : v
        const menu = menusMap[key]
        if (menu) {
          arr.push({ name: menu.name, path: menu.path })
        }
      })
      paths.value = arr
    }

    updatePaths((router.currentRoute.value.meta?.activePath as string) ?? '')

    return {
      avatar,
      siteTitle,
      fullscreen,
      paths,
      showPath: computed(() => store.state.layout.showPath),
      singleHeader: computed(() => store.state.layout.singleHeader),
      handleCollapseClick,
      handleFullScreen,
      updatePaths,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

.header-left {
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;

  .el-icon {
    cursor: pointer;
  }

  .title {
    margin-left: 10px;
    font-size: 17px;
  }

  .name {
    font-size: 15px;
  }

  &.path {
    color: $header;

    .el-icon svg {
      font-size: 18px;
    }
  }
}

.header-right {
  height: $topHeaderH;
  display: flex;
  justify-content: flex-end;
  line-height: $topHeaderH;

  .company-name {
    margin-left: 24px;
    margin-right: 24px;
    font-size: 13px;
    color: $success;
    white-space: nowrap;
    // overflow: hidden;
  }

  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 10px;
    margin-left: 10px;
    font-size: 22px;
    color: #666;
    line-height: $topHeaderH + 6px;
  }
}

.mobile .btn-fullscreen {
  display: none;
}

:deep(.el-dropdown) {
  color: #fff;
  cursor: pointer;

  .el-dropdown-link {
    height: $topHeaderH;
    line-height: $topHeaderH;
    vertical-align: middle;
    white-space: nowrap;

    .el-avatar {
      margin: 0;
      vertical-align: middle;
    }
  }

  .name {
    font-size: 13px;
    // float: right;
    height: $topHeaderH;
    line-height: $topHeaderH;
    margin-left: 10px;
  }

  :deep(.el-dropdown-menu__item) {
    font-weight: 400;
  }
}

.path :deep(.el-dropdown) .name {
  color: $header;
}

.el-avatar {
  width: 28px;
  height: 28px;
  margin: 12px 0;
}

.collapse-icon {
  cursor: pointer;
  vertical-align: initial;
  margin-right: 20px;
  transition: 0.2s;
  border-radius: 50%;

  &:hover {
    opacity: 0.5;
  }
}
</style>

<style>
.header-left .tags {
  width: calc(100% - 42px) !important;
  box-shadow: none !important;
  margin-left: 8px;
}
.header-left .tags-close-box.close {
  border-right: 1px solid #f0f1f2 !important;
}
.header-left .tags .el-tabs__header.is-top {
  display: inline-grid !important;
}

</style>