import { Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import store from '@/store'
import { goPage } from '@/utils/utils'
import { ElLoading, ElMessage } from 'element-plus'
import { computed, ComputedRef, Ref } from 'vue';

/** 页面基础 */
export default class BaseVue extends Vue {
  protected store = useStore()
  protected goPage = goPage

  /** 获取body最大高度的css字符串 */
  bodyMaxHeight(top: number, bottom: number): string {
    return `calc(100vh - ${102+(top ?? 0)+(bottom ?? 0)}px)`
  }

  /**
   * 表格头部行样式
   * @description 用法： ` :header-cell-class-name="tableHeaderClass"`
  */
  tableHeaderClass({ row, column, rowIndex, columnIndex }) {
    return 'table-header-row'
  }

  /** 显示提示消息 */
  $message(msg: string, type: ('info' | 'success' | 'warning' | 'error' | undefined) = 'info') {
    ElMessage({
      message: msg,
      showClose: true,
      type: type,
      duration: 3000
    })
  }

  /** 显示全局loading */
  $loading(msg?: string, background?: string): { close: ()=> void} {
    const loading = ElLoading.service({
      lock: true,
      text: msg ?? 'Loading',
      background: background ?? 'rgba(255, 255, 255, 0.7)',
    })
    return loading
  }
}
