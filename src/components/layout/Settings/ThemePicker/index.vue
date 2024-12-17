<template>
    <div class="theme-picker">
      <el-color-picker v-model="colorValue"
        :predefine="['#409EFF', '#1890ff', '#304156', '#212121', '#11a983', '#13c2c2', '#6959CD', '#f5222d',]"
        popper-class="theme-picker-dropdown" @change="doChange" />
    </div>
  </template>
  
  <script lang="ts">
  import BaseVue from '../../../base/BaseVue'
  import { computed, ComputedRef, nextTick } from 'vue'
  import { Options } from 'vue-class-component'
  import { ElColorPicker } from 'element-plus'
  
  @Options({
    components: {
      ElColorPicker
    },
    props: {
      color: {
        type: String,
        default: '',
      },
    },
    watch: {
      themeColor(val, oldVal) {
        this.themeColorValue = val
        this.doUpdateTheme()
      },
      themeMenuColor(val, oldVal) {
        this.themeMenuColorValue = val
        this.doUpdateTheme()
      },
      theme(val, oldVal) {
        this.colorValue = ''
        this.themeValue = val
        this.themeColorValue = ''
        this.themeMenuColorValue = ''
        this.doUpdateTheme()
      }
    }
  })
  export default class ThemePicker extends BaseVue {
    color?: string
    colorValue = ''
  
    theme: ComputedRef<string> = computed(() => this.store.state.settings.theme || '')
    themeColor: ComputedRef<string> = computed(() => this.store.state.settings.themeColor || '')
    themeMenuColor: ComputedRef<string> = computed(() => this.store.state.settings.themeMenuColor || '')
  
    themeValue = this.store.state.settings.theme || ''
    themeColorValue = this.store.state.settings.themeColor || ''
    themeMenuColorValue = this.store.state.settings.themeMenuColor || ''
  
    doChange(v) {
      this.$emit('change', v || '')
      this.doUpdateTheme()
    }
  
    doUpdateTheme() {
      this.setTheme(this.themeValue, this.themeColorValue, this.themeMenuColorValue)
    }
  
    async setTheme(theme: string, themeColor: string, themeMenuColor: string) {
      if (typeof themeColor != 'string') return
      const themeCluster = this.getThemeCluster(themeColor.replace('#', '').trim())
      const themeMenuCluster = this.getThemeCluster(themeMenuColor.replace('#', '').trim())
  
      const getHandler = (variable, id) => {
        return () => {
          const [isDark, newStyle] = this.updateStyle(this[variable], themeCluster, themeMenuCluster)
          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          // console.log(newStyle)
          styleTag.innerHTML = newStyle ?? ''
          // 更改 drak 模式
          const htmlClassList = document.getElementsByTagName('html')[0].classList
          const curIsDark = htmlClassList.contains('dark')
          if (curIsDark !== isDark) {
            isDark ? htmlClassList.add('dark') : htmlClassList.remove('dark')
          }
        }
      }
  
      if (theme) {
        await this.getCSSString(theme)
      }
  
      const chalkHandler = getHandler(theme, 'chalk-style')
      chalkHandler()
    }
  
    updateStyle(style: string, newCluster: any[], newMenuCluster: any[]): [boolean, string] {
      let newStyle = `:root {\n`
      let isDrak = false
      if (style) {
        style = style.replace(':root {', '').trim()
        newStyle += style.substring(0, style.length - 1)
        const drakCfg = newStyle.match(/--ts-drak:\s{0,10}([01]);/)
        isDrak = drakCfg && drakCfg.length === 2 ? drakCfg[1] === '1' : false;
      }
      if (newCluster && newCluster[0] && newCluster[0] !== 'null') {
        newStyle = this.getPrimaryColorStyle(newStyle, newCluster)
      } else if (style) {
        const primary = style.match(/--ts-primary:(.*);/)
        if (primary && primary.length === 2) {
          const pc = this.getThemeCluster(primary[1].replace('#', '').trim())
          newStyle = this.getPrimaryColorStyle(newStyle, pc)
        }
      }
      if (newMenuCluster && newMenuCluster[0] && newMenuCluster[0] !== 'null') {
        newStyle = newStyle.replace('--ts-menu-txt-active:', '--ts-menu-txt-active-old:')
        newStyle += `--ts-menu-txt-active: #${newMenuCluster[0]};\n`
      }
      newStyle += '}'
      return [isDrak, newStyle]
    }
  
    getPrimaryColorStyle(style: string, colors: any[]): string {
      const o = 0
      // console.log('colors', colors)
      style = style.replace('--ts-primary:', '--ts-primary-old:')
      style += `--el-color-primary: #${colors[0]};\n`
      style += `--el-color-primary-light-3: ${colors[3+o]};\n`
      style += `--el-color-primary-light-5: ${colors[5+o]};\n`
      style += `--el-color-primary-light-7: ${colors[7+o]};\n`
      style += `--el-color-primary-light-8: ${colors[8+o]};\n`
      style += `--el-color-primary-light-9: ${colors[9+o]};\n`
      style += `--el-color-primary-dark-2: ${colors[11]};\n`
      style += `--ts-primary: #${colors[0]};\n`
      return style
    }
  
    async getCSSString(variable) {
      return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const url = `./theme/${variable}.css`
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve(undefined)
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    }
  
    getThemeCluster(theme) {
      if (!theme) return theme
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
  
        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))
  
          const r = red.toString(16).padStart(2, '0')
          const g = green.toString(16).padStart(2, '0')
          const b = blue.toString(16).padStart(2, '0')
  
          return `#${r}${g}${b}`
        }
      }
  
      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
  
        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)
  
        const r = red.toString(16).padStart(2, '0')
        const g = green.toString(16).padStart(2, '0')
        const b = blue.toString(16).padStart(2, '0')
  
        return `#${r}${g}${b}`
      }
  
      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }
  
    created() {
      if (this.themeValue || this.themeColorValue !== '' || this.themeMenuColorValue !== '') {
        this.setTheme(this.themeValue, this.themeColorValue, this.themeMenuColorValue)
      }
    }
  
    mounted() {
      this.colorValue = this.color || ''
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .theme-picker .theme-message,
  .theme-picker-dropdown {
    z-index: 99999 !important;
  }
  
  .theme-picker .el-color-picker {
    float: right;
  }
  
  .theme-picker .theme-picker-dropdown .el-color-dropdown__link-btn {
    display: none;
  }
  </style>
  