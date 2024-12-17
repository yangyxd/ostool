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
    <div class="btn-themes" @click="handleTheme">
      <el-tooltip effect="dark" content="主题设置" placement="bottom">
        <el-icon><svg t="1734427130670" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2518" width="128" height="128">
          <path d="M759.695266 951.642024H263.192794c-41.142784 0-74.614619-33.472859-74.614619-74.614619V448.264162l-33.911082 21.694083c-7.176412 4.957653-17.120387 7.970947-27.227158 7.970947-24.241509 0-43.634921-16.10674-47.168349-39.197402l-3.479163-21.803638c-5.724543-35.417217-13.585934-83.92788-13.668869-113.949222-0.081911-29.74694 25.446622-58.426992 41.553362-69.519765L299.048235 100.55373c7.64228-5.094853 14.408114-5.094853 21.556881-5.094853l44.264611 0.246756 16.571584-0.05529c7.807126-1.041291 14.654871 2.876094 19.913545 8.108148a28.085174 28.085174 0 0 1 8.32726 19.85928c0.163822 55.523253 44.292255 99.020974 100.472843 99.020973 56.180588 0 100.335642-43.49772 100.472843-99.020973a28.175276 28.175276 0 0 1 8.299614-19.85928c5.28632-5.258675 12.134065-9.450462 19.941191-8.108148l16.626874 0.05529 44.401811-0.246756c7.313613 0 14.216648 0 21.666437 5.149119l198.864127 132.712944c26.159246 18.763722 37.253044 40.211048 36.787176 70.122834-0.657334 6.793479-11.559665 102.061913-17.229942 135.589038-3.670629 21.803638-24.679732 38.239045-48.866975 38.239046-9.586638 0-18.571232-2.684627-26.022046-7.807126l-30.788231-19.666789v427.229462c0.003072 41.14176-33.469787 74.614619-74.612572 74.614619z m-543.068776-582.704401c4.628986 0 9.257971 1.150847 13.449757 3.451517 9.012239 4.903387 14.599581 14.352824 14.599581 24.597821v480.040444c0 10.217352 8.299614 18.516966 18.516966 18.516966h496.502472c10.217352 0 18.516966-8.299614 18.516966-18.516966V398.630297a28.062649 28.062649 0 0 1 14.571936-24.597821c9.03886-4.875742 19.913546-4.547075 28.569472 0.958357l65.329004 41.717184c5.752188-39.581359 14.51767-116.031804 14.627225-116.880606-0.027645-7.148767-1.123202-11.997888-12.792423-20.379413L696.886045 151.584175l-9.121795 0.054265c-6.464812 0.054266-14.46238 0.137201-23.666085 0.163822-13.531668 72.094837-77.464092 126.933111-153.941159 126.933112-76.450446 0-140.382869-54.838274-153.941158-126.933112-9.148415-0.027645-17.065097-0.109556-23.502264-0.163822l-8.902683-0.054265-187.387396 128.111603c-7.066857 4.875742-16.901275 18.106388-17.202298 23.173597 0.081911 25.529557 7.532724 71.519414 12.956245 105.101828l1.424225 8.902683 67.904074-43.49772a27.937735 27.937735 0 0 1 15.120739-4.438543z" fill="currentColor" p-id="2519"></path></svg></el-icon>
      </el-tooltip>
    </div>
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
import { ElIcon, ElAvatar, ElMessageBox, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { menusMap } from '@/router/menus'
import { exitLogin } from '@/utils/auth'

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

    // 退出
    const handlelogout = () => {
      ElMessageBox.confirm('确认退出当前账户吗？', '退出登录', {customStyle: { 'max-width': '420px', 'width': '85%' }}).then(() => {
        exitLogin()
      })
    }

    // 主题设置
    const handleTheme = () => {
      store.dispatch('settings/changeSetting', {
        key: 'showSettings',
        value: true
      })
    }

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
      // userInfo: computed(() => store.state.user.userInfo),
      handleCollapseClick,
      handleFullScreen,
      updatePaths,
      handlelogout,
      handleTheme,
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
    color: var(--ts-header-txt);

    .el-icon svg {
      font-size: 18px;
    }
  }
}

.header-right {
  height: var(--ts-topHeaderH);
  display: flex;
  justify-content: flex-end;
  line-height: var(--ts-topHeaderH);

  .company-name {
    margin-left: 24px;
    margin-right: 24px;
    font-size: 13px;
    color: var(--ts-success);
    white-space: nowrap;
    // overflow: hidden;
  }

  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 10px;
    margin-left: 10px;
    font-size: 22px;
    color: var(--ts-header-txt);
    line-height: calc(var(--ts-topHeaderH) + 6px);
  }

  .btn-themes {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 20px;
    color: var(--ts-header-txt);
    line-height: calc(var(--ts-topHeaderH) + 6px);
  }
}

.mobile .btn-fullscreen {
  display: none;
}


.mobile .el-dropdown-link {
  padding: 0 8px 0 0;
}

.mobile .el-dropdown-link .name {
  display: none;
}

:deep(.el-dropdown) {
  color: #fff;
  cursor: pointer;

  .el-dropdown-link {
    height: var(--ts-topHeaderH);
    line-height: var(--ts-topHeaderH);
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
    height: var(--ts-topHeaderH);
    line-height: var(--ts-topHeaderH);
    margin-left: 10px;
  }

  :deep(.el-dropdown-menu__item) {
    font-weight: 400;
  }
}

.path :deep(.el-dropdown) .name {
  color: var(--ts-header-txt);
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