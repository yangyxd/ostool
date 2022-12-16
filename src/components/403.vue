<template>
  <div class="wrap">
    <h1 class="">403</h1>
    <p>报歉，您无权访问此页面。</p>
    <div>
      <el-button type="warning" @click="goHome"> 首 页 </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const goHome = () => {
      router.push('/home')
    }

    return {
      goHome
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  text-align: center;
  padding: 40px 0;
  min-height: 200vh; // 100%;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    width: inherit;
    top: 0;
    bottom: 0;
    background-color: inherit;
    border: inherit;
  }

  h1 {
    font-size: 8em;
    color: #ddd;
    margin-bottom: 0;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  p {
    color: #000;
    margin: 50px 0;
    font-size: 1.55rem;
    font-family: cursive;
    font-weight: 600;
  }
}

.el-button {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  padding: 18px 40px;
  transform: translate3d(0, 0, 0);
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    // background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    transform: translate3d(0, -1px, 0);
    // background-color: #ffa000;
    // border-color: #ffa000;
  }
}
</style>
