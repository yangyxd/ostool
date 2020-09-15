<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-home"></i> 我的工具</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="12">
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(o, index) in items" :key="index" :offset="0">
                    <el-card shadow="hover">
                        <div @click="gotoTool(o)" style="cursor: pointer">
                            <div class="icon"><span :style="'color:' + o.txt + '; background-color: ' + o.bg">{{o.icon}}</span></div>
                            <div class="title">{{o.name}}</div>
                            <div class="desc">{{o.desc}}</div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainPage',
        components: { },
        data() {
            return {
                items: [
                    {"name": "JSON 格式化校验", "icon": "Json", "txt": "#fff", "bg": "#3280fc", "desc": "JSON 格式化校验工具", "path": "/jsonformat"},
                    {"name": "JSON 在线解析", "icon": "Json", "txt": "#ff0", "bg": "#009688", "desc": "JSON 在线解析工具", "path": "/json"},
                    {"name": "正则表达式测试", "icon": "RegExp", "txt": "#fff", "bg": "#ff6000", "desc": "在线正则表达式测试工具", "path": "/regexp"},
                    {"name": "Base64 编码转换", "icon": "Base64", "txt": "#fff", "bg": "#08998c", "desc": "Base64编码将任意字节数据编码成ASCII字符串", "path": "/base64"},
                ]
            }
        },
        mounted() {
        },
        methods: {
            gotoTool(o) {
                this.$router.push({path: o.path, query: o});
            }
        }
    };
</script>

<style scoped>
.w1 {
    width: 180px;
}
.w2 {
    width: 85px !important;
}
.w3 {
    width: 120px;
}
.wp {
    margin-right: 8px;
    display: inline-block;
}
.icon span {
    padding: 12px;
    width: auto;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #999;
    font-size: 36px;
    font-weight: bold;
}
.icon {
    padding: 16px;
    margin-bottom: 16px;
    color: #fff;
}
.title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
}
.desc {
    font-size: 14px;
    margin-bottom: 16px;
}
h3 {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
}
.handle-box {
    margin-bottom: 16px;
}
.handle-select {
    width: 130px;
}

.handle-input {
    width: 200px;
    display: inline-block;
}

.el-col {
    border-radius: 4px;
    margin-bottom: 12px;
}
.container {
    min-height: calc(100vh - 118px);
}
</style>

<style>
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 8px;
}
.item span {
    margin-left: 4px;
    color: #999;
}
.box-card {
    margin-right: 8px;
    margin-bottom: 26px!important;
    padding-top: 16px;
}
.el-card__body {
    text-align: center;
    margin-top: 8px;
}
.el-card__header {
    background: #fafbfc;
    padding: 0px 9px 0px 20px!important;
    line-height: 40px;
}

</style>