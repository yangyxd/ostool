<template>
    <div class="container">
        <iframe :src="url" scrolling="yes" frameborder="0" class="iframeContain" name="mdToolFrame" ref="mdToolFrame"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'jsonPage',
        components: { },
        data() {
            return {
                text: "{}",
                // url: "http://yangyxd.gitee.io/ostool/markdown/mdeditor.html",
                url: "http://127.0.0.1:8080/markdown/mdeditor.html",
            }
        },
        mounted() {
        },
        methods: {
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
    height: calc(100vh - 70px)!important;
    padding: 6px 1px 6px 1px!important;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
</style>