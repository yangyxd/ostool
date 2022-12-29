<template>
  <el-container :class="(isMobile ? 'mobile' : '')">
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
      <el-scrollbar :max-height="'calc(100vh - '+ (singleHeader ? '45px' : '82px') + ')'" view-class="ui-body">
        <router-view v-slot="{ Component, route }">
          <keep-alive :include="tagsName">
            <component :is="Component" :key="route.fullPath" v-if="isRefresh===false" />
          </keep-alive>
        </router-view>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { ElContainer, ElMain, ElScrollbar, ElHeader } from 'element-plus'
import Header from './Header.vue'
import Menu from './Menu/Menu.vue'
import Tags from './Tags.vue'

export default defineComponent({
  components: {
    ElContainer,
    ElMain,
    ElScrollbar,
    ElHeader,
    Header,
    Menu,
    Tags,
  },
  setup() {
    const store = useStore()
    return {
      showPath: computed(() => store.state.layout.showPath),
      singleHeader: computed(() => store.state.layout.singleHeader),
      isMobile: computed(() => store.state.layout.isMobile),
      isCollapse: computed(() => store.state.layout.isCollapse),
      isRefresh: computed(() => store.state.layout.isRefresh),
      tagsName: computed(() => store.state.layout.tagsName),
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
  background-color: $header;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: $topHeaderH;
  padding: 0 0 0 20px;

  p {
    margin: 0;
    line-height: 60px;
  }


  &.path {
    position: relative;
    background-color: $nav;
    box-shadow: 0px 0 3px 0px rgba(0, 0, 0, 0.1);
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
  background-color: $primary;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.el-menu:not(.el-menu--collapse) {
  width: 220px;
}

.el-main {
  height: 100%;
  margin-top: $topHeaderH;
  margin-left: 220px;
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
  }
}

.mobile .el-main {
  margin-left: 0px;
}

.mobile .isCollapse {
  margin-left: 0px;
  width: 0px;
}
</style>
