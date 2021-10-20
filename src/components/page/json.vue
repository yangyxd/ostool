<template>
    <div class="container">
        <iframe :src="url" scrolling="no" frameborder="0" class="iframeContain" name="jsonToolFrame" ref="jsonToolFrame"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'jsonPage',
        components: { },
        data() {
            console.log("debug: " + this.isDebug)
            return {
                text: "{}",
                url: this.isDebug ? "/json/json.html" : "http://yangyxd.gitee.io/ostool/json/json.html",
            }
        },
        created: function () {
            window.isMobile = this.isMobile;
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
    height: calc(100vh - 70px);
    padding: 6px 1px 6px 1px!important;
}
.mobile .container {
    padding: 2px!important;
    height: 150vh;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
</style>