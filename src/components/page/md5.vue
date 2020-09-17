<template>
    <div class="container md5">
        <el-row>
            <el-col style="width: calc(100% - 452px); min-width: 500px; padding-right: 16px">
                <div class="mt8">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 30, maxRows: 40}"
                    clearable
                    placeholder="在此输入待加密内容"
                    v-model="srcText">
                    </el-input>
                </div>
                <el-row class="mt8">
                    <el-button type="primary" @click="encode()" size="medium">加密</el-button>
                    <el-button @click="clear()" size="medium">清空</el-button>
                </el-row>
            </el-col>
            <el-col class="mt8" style="width: 450px;">
                <div class="subtitle">加密结果：</div>
                <el-input v-model="ret32u" readonly class="mt8">
                    <template slot="prepend"><span class="subtitle">32位大写</span></template>
                </el-input>
                <el-input v-model="ret32l" readonly class="mt8">
                    <template slot="prepend"><span class="subtitle">32位小写</span></template>
                </el-input>
                <el-input v-model="ret16u" readonly class="mt8">
                    <template slot="prepend"><span class="subtitle">16位大写</span></template>
                </el-input>
                <el-input v-model="ret16l" readonly class="mt8">
                    <template slot="prepend"><span class="subtitle">16位小写</span></template>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'md5Page',
        components: { },
        data() {
            return {
                srcText: undefined,
                ret32u: undefined,
                ret32l: undefined,
                ret16u: undefined,
                ret16l: undefined,
            }
        },
        mounted() {
        },
        methods: {
            encode() {
                if (!this.srcText) {
                    this.$message("请输入待加密内容");
                    return;
                }
                let txt = this.$md5(this.srcText);
                this.ret32u = txt.toUpperCase();
                this.ret32l = txt.toLowerCase();
                this.ret16u = this.ret32u.substr(8, 16);
                this.ret16l = this.ret32l.substr(8, 16);
            },
            clear() {
                this.srcText = undefined;
                this.ret32u = '';
                this.ret32l = '';
                this.ret16u = '';
                this.ret16l = '';
            }
        },
    };
</script>

<style scoped>
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
    font-size: 20px;
    margin-bottom: 16px;
}
.subtitle {
    font-weight: bold;
    font-size: 14px;
    color: #111
}
.desc {
    font-size: 15px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: #888;
}
h3 {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
}
.container {
    min-height: calc(100vh - 70px);
    padding: 10px!important;
    overflow: hidden;
}
.pb8 {
    padding-bottom: 20px;
}
.mt8 {
    margin-top: 8px;
}
.mt16 {
    margin-top: 16px;
}
.titem {
    cursor: pointer;
    color: #0058a8;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 16px;
}
.titem span:hover{
    color: #409eff;
}
.rightpl {
    margin-top: 16px;
    padding: 16px;
    background: #f1f2f3;
}
.rightpl p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 15px;
    text-indent:30px;
    color: #666;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
.md5 .el-input__inner {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #010203;
}
.md5 .el-textarea__inner {
    color: #010203;
}
</style>