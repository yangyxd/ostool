<template>
  <div class="home container">
    <el-row :gutter="12">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(o, index) in items" :key="index" :offset="0">
        <el-card shadow="hover">
          <div @click="gotoTool(o)" style="cursor: pointer">
            <div class="icon">
              <span :style="'color:' + o.txt + '; background-color: ' + o.bg">{{ o.icon }}</span>
            </div>
            <div class="title">{{ o.name }}</div>
            <div class="desc">{{ o.desc }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { ElCard } from 'element-plus'
import { ref, computed } from 'vue'
import { Options } from 'vue-class-component'
import BaseVue from './base/BaseVue'
import { menusMap } from '../router/menus'

interface FuncItem {
  name: string
  icon: string
  txt: string
  bg: string
  desc: string
  path: string
  multiple?: boolean | undefined
}

@Options({
  name: 'HomePage',
  components: { ElCard }
})
/** 主页 */
export default class HomePage extends BaseVue {
  // 当前时间
  currentTime = ref(dayjs().format('YYYY-MM-DD'))
  // 功能
  items: Array<FuncItem> = []

  gotoTool(o: FuncItem) {
    let to = {
      path: o.path,
      hash: o.multiple == undefined || o.multiple == true ? '#' + new Date().getTime().toString() : ''
    }
    this.$router.push(to)
  }

  created() {
    // console.log('home created...')
    for (const o in menusMap) {
      const v = menusMap[o]
      if (!v.data) continue
      const data = v.data as FuncItem
      this.items.push({ name: v.name, icon: data.icon, txt: data.txt, bg: data.bg, desc: data.desc, path: v.path || '', multiple: v.multiple })
    }
  }
}
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  text-indent: initial;
}

.desc {
  font-size: 14px;
  margin-bottom: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
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

<style lang="scss">
.home {
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
    margin-bottom: 26px !important;
    padding-top: 16px;
  }

  .el-card__body {
    text-align: center;
    margin-top: 8px;
    min-height: 180px;
  }

  .el-card__header {
    background: #fafbfc;
    padding: 0px 9px 0px 20px !important;
    line-height: 40px;
  }
}
</style>
