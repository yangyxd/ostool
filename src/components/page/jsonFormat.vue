<template>
    <div class="container">
        <iframe :src="url" scrolling="no" frameborder="0" class="iframeContain" name="jsonFormatToolFrame" ref="jsonFormatToolFrame" @load="setText()"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'jsonFormatPage',
        components: { },
        data() {
            return {
                text: "{}",
                url: "http://yangyxd.gitee.io/ostool/json/jsonformat.html"
            }
        },
        beforeRouteLeave(to, form, next) {
            //this.text = window.frames['jsonFormatToolFrame'].getText();
            next();
        },
        methods: {
            setText() {
                var _f = window.frames['jsonFormatToolFrame'];
                if (_f) _f.loadText(this.text);
            }
        }
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
.container {
    height: calc(100vh - 70px);
    padding: 2px 8px 6px 8px!important;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
</style>