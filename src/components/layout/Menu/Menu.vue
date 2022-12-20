<template>
  <div>
    <div v-if="showPath" class="logo">
      <img src="/favicon.ico" /><span :class="[!isCollapse ? 'active' : '']" style="margin-left: 6px">{{siteTitle}}</span>
    </div>
    <el-scrollbar class="menu-container" :class="[showPath ? 'path' : '']">
      <el-menu :collapse="isCollapse" :default-active="activeMenu" unique-opened>
        <MenuItem :menu-list="menuList" :default-menus="defaultMenus" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ElScrollbar, ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import menus from '@/router/menus'
import { CustomMenuItem, getMenus } from '@/api/index'

export default defineComponent({
  components: {
    ElScrollbar,
    ElMenu,
    MenuItem,
  },
  watch: {
    $route(newValue, oldValue) {
      const meta = newValue.meta
      // 对应菜单激活 menu
      this.activeMenu = meta.activePath && meta.activePath as string ? meta.activePath : newValue.path
    },
  },
  mounted() {
    this.getMenuList()
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const activeMenu = ref(route.meta?.activePath ?? '')
    const menuList = ref<any>([])

    const getMenuItem = (key: string, item): CustomMenuItem => {
      let children: CustomMenuItem[] = []
      if (item.children) getMenuData(item.children, children)
      return { id: key, name: item.name, children, power: item.power }
    }

    const getMenuData = (menus, customMenus: Array<CustomMenuItem>) => {
      Object.keys(menus).forEach((v) => {
        const item = getMenuItem(v, menus[v])
        customMenus.push(item)
      })
    }

    // 获取菜单
    const getMenuList = () => {
      const customMenus = new Array<CustomMenuItem>()
      getMenuData(menus, customMenus)
      console.log(customMenus)
      getMenus(customMenus).then((v: CustomMenuItem[]) => {
        if (v.length === 0) {
          // 为空时，将主页加入菜单中
          v.push(getMenuItem('home', menus.home))
        }
        menuList.value = v
      })
    }

    return {
      menuList,
      activeMenu,
      defaultMenus: menus,
      getMenuList,
      isCollapse: computed(() => store.state.layout.isCollapse),
      showPath: computed(() => store.state.layout.showPath),
      siteTitle: computed(() => store.state.siteName),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

.mobile .logo {
  display: none;
}

.logo {
  display: flex;
  background-color: $header;
  height: $topHeaderH - 1px;
  line-height: $topHeaderH;
  border-bottom: 1px solid $menu-sub;
  text-align: start;

  &:not(.el-menu--collapse) {
    width: 220px;
  }

  img {
    height: 60%;
    vertical-align: middle;
    margin-left: 10px;
    padding: 8px;
  }

  span {
    font-size: 16px;
    color: #eee;
    opacity: 0;
    transition: opacity 1s;
  }

  span.active {
    opacity: 1;
  }
}

.menu-container {
  position: fixed;
  left: 0;
  top: $topHeaderH;
  bottom: 0;
  z-index: 1500;
  box-sizing: border-box;
  background-color: $header;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

  &.path {
    top: $topHeaderH;
  }
}

.el-menu {
  border-right: 0;
  padding-bottom: 50px;

  &:not(.el-menu--collapse) {
    width: 220px;
  }

  .iconfont {
    margin-right: 18px;
    text-align: center;
    vertical-align: middle;
  }
}

.rightMenuBox {
  padding: 0 10px;
  text-align: center;

  .rightMenu {
    cursor: pointer;
  }
}
</style>

<style>
.el-menu .iconfont {
  width: 18px !important;
}
.mobile .el-menu--collapse {
  width: 0px;
}
</style>