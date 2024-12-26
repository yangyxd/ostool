<template>
    <el-drawer size="280px" v-model="visible" :with-header="false" :append-to-body="true" :show-close="true" @closed="onClosed">
      <div class="drawer-container">
        <div>
          <div class="setting-drawer-content">
            <div class="setting-drawer-title">
              <h3 class="drawer-title">主题风格设置</h3>
            </div>
            <div class="setting-drawer-block-checbox" >
              <div class="setting-drawer-block-checbox-item" v-for="(item, index) in themes" :key="index" @click="handleTheme(item[1])">
                <div :class="'theme-icon ' + item[1]"><div class="left">
                  <div v-if="theme === item[1]" class="setting-drawer-block-checbox-selectIcon" style="display: block;">
                    <i aria-label="图标: check" class="anticon anticon-check">
                      <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" :fill="theme" aria-hidden="true" focusable="false" class="">
                        <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"/>
                      </svg>
                    </i>
                  </div>
                </div><div class="top"></div><div class="rt"></div>{{ item[0] }}</div>
              </div>
            </div>
  
            <el-divider/>
  
            <div class="setting-drawer-title">
              <h3 class="drawer-title">自定义颜色设置</h3>
            </div>
  
            <div class="drawer-item">
              <span>主题颜色</span>
              <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" :color="themeColor" @change="(v) => (themeColorChange(v), saveSetting())" />
            </div>
  
            <div class="drawer-item">
              <span>菜单高亮颜色</span>
              <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" :color="themeMenuColor" @change="(v) => (themeMenuColorChange(v), saveSetting())" />
            </div>
          </div>
  
          <el-divider/>
  
          <el-button type="primary" plain icon="Check" @click="saveSetting" style="width: 90px">保存配置</el-button>
          <el-button plain icon="Refresh" @click="resetSetting" style="width: 90px">重置配置</el-button>
        </div>
      </div>
    </el-drawer>
  </template>
  
  <script lang="ts">
  import BaseVue from '../../base/BaseVue'
  import { computed, ComputedRef, ref } from 'vue'
  import { Options } from 'vue-class-component'
  import ThemePicker from './ThemePicker/index.vue'
  import { ElDivider, ElDrawer } from 'element-plus'
  
  @Options({
    components: {
      ElDrawer,
      ElDivider,
      ThemePicker,
    },
  })
  export default class Settings extends BaseVue {
    visible: ComputedRef<boolean> = computed(() => this.store.state.settings.showSettings ?? false)
  
    theme = this.store.state.settings.theme || ''
    themeColor = (this.store.state.settings.themeColor || '')
    themeMenuColor = (this.store.state.settings.themeMenuColor || '')  
    themes = [['默认', ''], ['主题 RY', 'var-ry'], ['主题 Drak', 'var-drak'], ['主题 Light', 'var-light'],]
  
    handleTheme(val: string){
      this.themeColorChange('')
      this.themeMenuColorChange('')
      this.theme = val
      this.store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
      this.saveSetting()
    }
  
    themeColorChange(val) {
      this.themeColor = val
      this.store.dispatch('settings/changeSetting', {
        key: 'themeColor',
        value: val
      })
    }
  
    themeMenuColorChange(val) {
      this.themeMenuColor = val
      this.store.dispatch('settings/changeSetting', {
        key: 'themeMenuColor',
        value: val
      })
    }
  
    saveSetting = () => {
      this.cache.local.set(
        'layout-setting',
        `{
            "theme":"${this.theme}",
            "themeColor":"${this.themeColor}",
            "themeMenuColor":"${this.themeMenuColor}"
          }`
      )
    }
  
    resetSetting() {
      this.$loading('正在清除设置缓存并刷新，请稍候...');
      this.cache.local.remove('layout-setting')
      setTimeout('window.location.reload()', 1000)
    }
  
    onClosed() {
      this.store.dispatch('settings/changeSetting', {
        key: 'showSettings',
        value: false
      })
    }
  
    mounted() {}
  }
  </script>
  
  <style lang="scss" scoped>
    .setting-drawer-content {
      .setting-drawer-title {
        margin-bottom: 12px;
        // color: rgba(0, 0, 0, .85);
        color: var(--ts-primary);
        font-size: 14px;
        line-height: 22px;
        font-weight: bold;
      }
  
      .setting-drawer-block-checbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
        flex-wrap: wrap;
  
        .setting-drawer-block-checbox-item {
          position: relative;
          border-radius: 2px;
          margin: 0 16px 12px 0;
          cursor: pointer;
  
          img {
            width: 48px;
            height: 48px;
          }
  
          .theme-icon {
            width: 60px;
            height: 48px;
            // border: solid 1px #ccc;
            box-shadow: 0px 0px 8px var(--ts-theme-shadow);
            border-radius: 2px;
            text-align: left;
            font-size: 12px;
            display: flex;
            color: #111;
            flex-direction: column-reverse;
            justify-content: center;
            padding: 6px 6px 0 28px;
            background-color: #fefefe;
  
            .left {
              position: absolute;
              left: 0;
              top: 0;
              width: 24px;
              height: 54px;
              background-color: #1d1e23;
              fill: #bcbcbd;
            }
  
            .top {
              position: absolute;
              left: 26px;
              top: 0;
              height: 12px;
              width: 68px;
              background-color: #fff;
              border-bottom: solid 1px #eee;
            }
  
            .rt {
              position: absolute;
              right: 4px;
              top: 4px;
              height: 6px;
              width: 6px;
              background-color: #2d8cf0;
            }
  
            &.var-wd {
              .left {
                background-color: #214e1b;
                fill: #fff;
              }
              .rt {
                background: #214e1b;
              }
            }
  
            &.var-ry {
              .left {
                background-color: #304156;
                fill: #2d8cf0;
              }
              .rt {
                background: #2d8cf0;
              }
            }
  
            &.var-light {
              .left {
                background-color: #fefefe;
                fill: #2d8cf0;
                border-right: solid 1px #eee;
              }
              .rt {
                background: #2d8cf0;
              }
            }
  
            &.var-drak {
              color: #eee;
              background-color: #141414;
              .top {
                background-color: #141414;
                border-bottom: solid 1px #000;
              }
              .left {
                fill: #eee;
              }
              .rt {
                background: #214e1b;
              }
            }
          }
  
          .setting-drawer-block-checbox-selectIcon {
            position: absolute;
            left: 6px;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            padding-top: 22px;
            // padding-left: 24px;
            // color: #1890ff;
            font-weight: 700;
            font-size: 14px;
          }
        }
      }
    }
  
    .drawer-container {
      padding: 8px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
  
      .drawer-title {
        margin-bottom: 12px;
        // color: rgba(0, 0, 0, .85);
        font-size: 14px;
        line-height: 22px;
      }
  
      .drawer-item {
        // color: rgba(0, 0, 0, .65);
        font-size: 14px;
        padding: 12px 0;
      }
  
      .drawer-switch {
        float: right
      }
    }
  </style>
  