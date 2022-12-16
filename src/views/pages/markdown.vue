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
            const href = location.origin + location.pathname.replace('/index.html', '/') + "markdown/mdeditor.html"
            console.log(href);
            return {
                text: "{}",
                url: href,
            }
        },
        mounted() {
            console.log("debug: " + this.isDebug)
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
.mobile .container {
    padding: 2px 1px 2px 1px!important;
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