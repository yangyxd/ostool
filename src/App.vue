<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import bus from './components/common/bus';
export default {
    data() {
        return {
            sysConfig: undefined
        }
    },
    created() {
        let _this = this;
        _this.loadSysConfig();
        window.addEventListener('message', function(e){
            if (e.data.type == "alert")
                _this.$message(e.data.data);
        });
    },
    methods: {
        loadSysConfig() {
            config.sSiteTitle = "在线工具";
            console.log(config.sServiceHost);
            this.$const.sSiteTitle = config.sSiteTitle;
            document.title = config.sSiteTitle;
            bus.$emit('titlechange', config.sSiteTitle);
        }
    }
}
</script>
<style>
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>