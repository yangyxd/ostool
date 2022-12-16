/* eslint-disable */
declare module 'vue-worker'
declare module 'element-ui'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/** 支持识别图像文件 */
declare module '*.png'
declare module '*.jpg'
declare module '*.ico'

// declare module 'axios' {
//   interface AxiosInstance {
//     // eslint-disable-next-line no-undef
//     (config: AxiosRequestConfig): Promise<any>
//   }
// }

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $validate: (data: object, rule: object) => boolean
//   }
// }

