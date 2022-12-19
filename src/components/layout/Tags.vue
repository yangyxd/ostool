<template>
  <!-- <div class="tags" v-if="showTags"> -->
  <div class="tags">
    <el-tabs
      v-model="$route.fullPath"
      type="border-card"
      class="tabs"
      @tab-click="tabClick"
      @tab-remove="closeTagsWithPath"
    >
      <el-tab-pane
        v-for="(item, index) in tagsList"
        :key="index"
        :closable="!item.fixed"
        :name="item.path"
      >
        <template #label>
          <i v-if="item.icon" :class="item.icon" class="iconfont"></i>{{ item.title }}
        </template>
      </el-tab-pane>
    </el-tabs>
    <!-- <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :class="{ active: isActive(item.path) }" :key="index">
        <router-link :to="item.path" class="tags-li-title">
          <i v-if="item.icon" :class="item.icon" class="iconfont"></i>
          {{ item.title }}
        </router-link>
        <div v-if="!item.fixed" @click="closeTags(index)">
          <el-icon class="close-icon" title="关闭"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg></el-icon>
        </div>
      </li>
    </ul> -->

    <div class="tags-close-box shadow br" style="right: 42px" @click="$store.commit('layout/reloadPage')">
      <el-icon class="icon" title="刷新当前页面"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"></path></svg></el-icon>
    </div>
    <div class="tags-close-box close">
      <el-dropdown @command="handleTags">
        <el-icon class="icon"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
            <el-dropdown-item
              :command="index"
              :divided="index == 0"
              :disabled="item.path == $route.fullPath"
              v-for="(item, index) in tagsList"
              :key="'_i_' + index"
              >{{ item.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { ElIcon, ElTabs, ElTabPane } from 'element-plus'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Tags',
  components: {
    ElIcon,
    ElTabs, ElTabPane,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue)
    },
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const tagsList = computed<any[]>(() => store.state.layout.tagsList)
    const updateTagsNameList = () => {
      store.commit('layout/updateTagsNameList')
    }
    const setTagsList = (tags) => {
      store.state.layout.tagsList = tags
      updateTagsNameList()
    }

    const tabClick = (v) => {
      const item = tagsList.value[v.index]
      router.push(item.path)
    }

    const isActive = (path: string) => {
      return path === router.currentRoute.value.fullPath
    }

    const closeTags = (index: number) => {
      const delItem = tagsList.value.splice(index, 1)[0]
      const count = tagsList.value.length
      if (count === 0) {
        router.push('/')
      } else {
        const fullPath = router.currentRoute.value.fullPath
        if (delItem.path === fullPath) {
          if (index >= count) {
            index = count - 1
          }
          activeTag(index)
        }
      }
      updateTagsNameList()
    }

    const closeTagsWithPath = (v: string) => {
      const index = tagsList.value.findIndex((e) => e.path === v)
      if (index >= 0) {
        closeTags(index)
      }
    }

    const closeOther = () => {
      const fullPath = router.currentRoute.value.fullPath
      const curItem = tagsList.value.filter((item) => {
        return item.path === fullPath || item.fixed === true
      })
      setTagsList(curItem)
    }

    const closeAll = () => {
      setTagsList(
        tagsList.value.filter((item) => {
          return item.fixed === true
        })
      )
      router.push('/')
    }

    const activeTag = (index: number) => {
      const item = tagsList.value[index]
      router.push({ path: item.path, params: item.params })
    }

    const handleTags = (command: string) => {
      // console.log('handleTags: ' + command)
      command === 'other' ? closeOther() : isNaN(Number(command)) ? closeAll() : activeTag(Number(command))
    }

    // 设置标签
    const setTags = (route) => {
      if (route.matched.length < 2) {
        return
      }
      const isExist = tagsList.value.some((item) => {
        return item.path === route.fullPath
      })
      if (!isExist) {
        if (tagsList.value.length >= 8) {
          tagsList.value.shift()
        }
        const route = router.currentRoute.value
        // console.log(route)
        const path = route.fullPath
        tagsList.value.push({
          title: route.params.title ?? route.meta.title ?? route.name,
          fixed: route.meta.fixed,
          icon: route.meta.icon,
          path: path,
          params: route.params,
          name: route.matched[1].components.default.name ?? '404',
        })
      }
      updateTagsNameList()
    }

    const userInfo = computed(() => store.state['user'].userInfo)

    setTags(router.currentRoute.value)

    return {
      showTags: computed(() => store.state.layout.tagsList.length > 0),
      userInfo,
      tagsList,
      isActive,
      closeTags,
      closeTagsWithPath,
      handleTags,
      setTags,
      tabClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';
.tags {
  position: relative;
  height: 42px;
  overflow: hidden;
  background: #fefefe;
  padding-right: 85px;
  box-shadow: 0 2px 10px #eee;
  margin-bottom: 1px;
}

.tags .iconfont {
  margin-right: 5px;
  line-height: 42px;
  font-size: 14px;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 42px;
  height: 42px;
  background: #fefefe;
  z-index: 10;

  .ex {
    width: 100% !important;
    height: 100%;
  }

  .icon {
    line-height: 40px;
    width: 40px;
    height: 40px;
    color: $header;
    font-size: 16px;
  }
}
.tags-close-box.shadow {
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
}
.tags-close-box.br {
  border-right: 1px solid #f0f1f2;
}
</style>

<style lang="scss">
.tags {
  .el-tabs__item {
    height: auto;
  }

  .el-tabs__content {
    display: none;
  }

  .el-tabs__item .is-icon-close {
    line-height: 42px;
  }

  .el-tabs--border-card {
    background-color: #fefefe;
    border: none;
    box-shadow: none;
  }

  .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    border: 1px solid transparent;
    border-right-color: #e9eaec;
  }

  .el-tabs--border-card > .el-tabs__header {
    border: none;
    background-color: #fefefe;

    .el-tabs__item {
      margin: 0;
    }
  }

  .el-tabs__nav-wrap is-top {
    margin: 0;
  }
}
</style>
