<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#333333"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            :unique-opened="false"
            router
        >
            <template v-for="item in items">
                <template v-if="!item.hide && item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="!subItem.hide && subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else-if="!subItem.hide"
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else-if="!item.hide">
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: config.sCollapse,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'root',
                    title: '主页'
                },
                {
                    icon: 'el-icon-lx-text',
                    index: '',
                    title: 'JSON 工具',
                    subs: [
                        {
                            icon: 'el-icon-lx-text',
                            index: 'jsonformat',
                            title: 'JSON 格式化'
                        },
                        {
                            icon: 'el-icon-lx-text',
                            index: 'json',
                            title: 'JSON 在线解析'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-edit',
                    index: 'regexp',
                    title: '正则表达式测试'
                },
                {
                    icon: 'el-icon-lx-comment',
                    index: 'xpath',
                    title: 'XPath测试'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'base64',
                    title: 'Base64编码转换'
                },
                {
                    icon: 'el-icon-lx-roundcheck',
                    index: 'md5',
                    title: 'MD5加密'
                },
                {
                    icon: 'el-icon-lx-emoji',
                    index: 'icon',
                    title: '自定义图标'
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
