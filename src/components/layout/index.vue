<template>
  <el-container :class="(isMobile ? 'mobile' : '')">
    <!-- 移动版菜单背景 model -->
    <div v-if="isMobile && !isCollapse" class="menu-bg" @click="() => handleCollapseClick()" @touchstart="(e)=>e.preventDefault()" @touchend="(e) => handleCollapseClick()"></div>
    <!-- 头部 -->
    <el-header v-if="!showPath">
      <Header :is-collapse="isCollapse" />
    </el-header>

    <!-- 侧边菜单栏 -->
    <div :class="['aside', isCollapse ? 'isCollapse' : '']">
      <Menu />
    </div>

    <!-- 主体内容 -->
    <el-main id="nucarf-main" :class="[isCollapse ? 'isCollapse' : '', showPath ? 'path' : '']">
      <!-- 头部 -->
      <el-header v-if="showPath" :class="[showPath ? 'path' : '']">
        <Header :is-collapse="isCollapse">
          <tags v-if="singleHeader"></tags>
        </Header>
      </el-header>
      <!-- PageTab -->
      <tags v-if="!singleHeader"></tags>
      <!-- 主体部分 -->
      <el-scrollbar :max-height="'calc(100vh - '+ (singleHeader ? '45px' : '88px') + ')'" view-class="ui-body">
        <router-view v-slot="{ Component, route }">
          <keep-alive :include="tagsName">
            <component :is="Component" :key="route.fullPath" v-if="isRefresh===false" />
          </keep-alive>
        </router-view>
      </el-scrollbar>
    </el-main>

    <!-- 右边栏 -->
    <right-panel>
      <settings />
    </right-panel>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { ElContainer, ElMain, ElScrollbar, ElHeader } from 'element-plus'
import Header from './Header.vue'
import Menu from './Menu/Menu.vue'
import Tags from './Tags.vue'
import Settings from './Settings/index.vue'
import RightPanel from './Settings/RightPanel/index.vue'

export default defineComponent({
  components: {
    ElContainer,
    ElMain,
    ElScrollbar,
    ElHeader,
    Header,
    Menu,
    Tags,
    RightPanel,
    Settings,
  },
  setup() {
    const store = useStore()
    const handleCollapseClick = () => {
      store.commit('layout/updateCollapse', true)
    }
    const userInfo = computed(() => store.state['user'].userInfo)
    // store.dispatch('user/getUserInfo')

    const log = (e) => console.log(e)
    return {
      userInfo,
      showPath: computed(() => store.state.layout.showPath),
      singleHeader: computed(() => store.state.layout.singleHeader),
      isMobile: computed(() => store.state.layout.isMobile),
      isCollapse: computed(() => store.state.layout.isCollapse),
      isRefresh: computed(() => store.state.layout.isRefresh),
      tagsName: computed(() => store.state.layout.tagsName),
      handleCollapseClick,
      log
    }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/var.scss';

.el-container {
  height: 100%;
}

.el-header {
  position: fixed;
  width: 100%;
  z-index: 1501;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: var(--ts-header);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: var(--ts-topHeaderH);
  padding: 0 0 0 20px;

  p {
    margin: 0;
    line-height: 60px;
  }


  &.path {
    position: relative;
    background-color: var(--ts-nav);
    box-shadow: 0px 0 3px 0px rgba(0, 0, 0, 0.1);
  }
}

.mobile .menu-bg {
  position:absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  animation: fadebackground 0.3s ease-in-out;
}
@keyframes fadebackground
{
  from
  {
    background-color: rgba(0, 0, 0, 0.0);
  }
  to
  {
    background-color: rgba(0, 0, 0, 0.35);
  }
}

.aside {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-sizing: border-box;
  width: 0;
  background-color: var(--ts-primary);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.el-menu:not(.el-menu--collapse) {
  width: var(--ts-menuExW);
}

.el-main {
  height: 100%;
  margin-top: var(--ts-topHeaderH);
  margin-left: var(--ts-menuExW);
  padding: 0;
  overflow: hidden;
  position: relative;
  // perspective: none;
  backface-visibility: hidden;
  transition: 0.3s margin-left ease-in-out;
  // width: calc(100vw - 220px);

  &.isCollapse {
    margin-left: 64px;
    // width: calc(100vw - 65px);
  }

  &.path {
    margin-top: 0px;
  }

  :deep(.el-scrollbar__view:not(.full)) {
    padding: 10px 10px 5px 10px;
    .el-table__inner-wrapper .el-scrollbar__view {
      padding: 0;
    }
  }
}

.mobile .el-main {
  margin-left: 0px;

  :deep(.el-scrollbar__view:not(.full)) {
    padding: 8px 3px 8px 3px;

    .el-table__inner-wrapper .el-scrollbar__view {
      padding: 0;
    }
  }
}

.mobile .isCollapse {
  margin-left: 0px;
  width: 0px;
}
</style>
