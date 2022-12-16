<template>
  <div>

  </div>
</template>

<script lang="ts">

import dayjs from 'dayjs'
import { random } from 'lodash-es'
import { ref, computed } from 'vue';
import { Options } from 'vue-class-component'
import BaseVue from './base/BaseVue';

@Options({
  name: 'HomePage',
  components: { },
})
/** 主页 */
export default class HomePage extends BaseVue {
  // 当前时间
  currentTime = ref(dayjs().format('YYYY-MM-DD'))
  created() {
    // console.log('home created...')
  }

}
</script>

<style scoped>

</style>
