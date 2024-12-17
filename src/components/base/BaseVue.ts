import { Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { formatDate, goPage } from '@/utils/utils'
import { ElLoading, ElMessage } from 'element-plus'
import { computed, ComputedRef, Ref } from 'vue';
import { ICache } from '@/plugins/cache';
import $cache from '@/plugins/cache'
import { checkPower as apiCheckPower } from '@/api/index'

/** 页面基础 */
export default class BaseVue extends Vue {
  formatDate = formatDate

  protected store = useStore()
  protected goPage = goPage

  /** 缓存 */
  cache: {
    /**
     * 会话级缓存
     */
    session: ICache,
    /**
     * 本地缓存
     */
    local: ICache
  } = $cache

  /** 手机模式 */
  isMobile: ComputedRef<boolean> = computed(() => this.store.state.layout.isMobile)

  /** 获取body最大高度的css字符串 */
  bodyMaxHeight(top: number, bottom: number): string {
    return `calc(100vh - ${(this.store.state.layout.singleHeader ? 56 : 102) + (top ?? 0)+(bottom ?? 0)}px)`
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
