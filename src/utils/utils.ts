import { cloneDeep, assign } from 'lodash-es'
import router from '@/router'
import dayjs from 'dayjs'
import md5 from 'js-md5'


/**
 * @Description: 根据地址下载文件
 * @param : href  下载链接
 * @param : title  文件名称
 */
export function download(href: string, title: string) {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.setAttribute('href', href)
  a.setAttribute('download', title ? title : '')
  // 随机字符串id
  const randomId: string = Math.random().toString(36).substring(2)
  a.id = randomId
  document.body.appendChild(a)
  a.click()
  a.remove()
}

// 在url上设置参数，如点击分页时记录分页信息
export function updateUrlParams(params: Record<string, unknown>) {
  const route = router().currentRoute.value
  const query = cloneDeep(route.query)
  router().replace({
    query: assign(query, params)
  })
}
/**
 * @Description: 新建、编辑等跳转
 * @param : { path } 路由
 * @param : { query } 参数对象  如{id: 1}
 */
export function goPage(path = '/', query?: any) {
  router().push({
    path: path,
    query: query
  })
}

/** 格式化时间 YYYY-MM-DD HH:mm:ss  */
export function formatDate(time?: Date | number | string, s?: string, defaultValue = ''): string {
  return (time === null || time === undefined || time === '') ? defaultValue : dayjs(time).format(s || 'YYYY-MM-DD HH:mm:ss')
}

/** 获取url参数 */
export function getUrlParam(url: string, paramName: string): string | null {
  if (!url || !paramName) return null
  const i = url.indexOf('?')
  if (i < 0) return null
  const searchParams = new URLSearchParams(url.substring(i));
  return searchParams.get(paramName)
}

export class Utils {
  /** 部门列表 */
  public static deptList: any[] = []

  public static currentTimeMillis(): number {
    return Date.now()
  }

  public static calcPageSign(url: string, query: Record<string, any>, ) {
    query['t'] = Math.round(new Date().getTime() / 1000)
    const qt = Object.keys(query).sort().filter(e => !!e).map(e => e + '=' + query[e]).join('&')
    const sign = md5(query['t'] + qt + query['t'])
    return url + (url.endsWith('?') ? '' : '?') + qt + '&sign=' + sign
  }

  public static checkPageSign(sign: string, t: string, query: Record<string, any>): boolean {
    const qt = Object.keys(query).sort().filter(e => !!e && e !== 'sign').map(e => e + '=' + query[e]).join('&')
    return md5(t + qt + t) === sign
  }

  public static empty(v?: number | string | Array<any> | Record<any, any>): boolean {
    if (v === null || v === undefined || Number.isNaN(v)) return true
    if (typeof v === 'string' && v === '') return true
    else if (typeof v === 'object') {
      for (const k in v) {
        return false
      }
      return true
    } else if (Array.isArray(v) && v.length === 0) return true
    return false
  }

  /** 延迟多少毫秒继续执行 */
  public static async sleep<T>(ms: number, data?: T | undefined): Promise<T | undefined> {
    return new Promise(((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, ms)
    }))
  }

  public static bytesToSize(bytes: number): string {
    if (bytes <= 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
  }
}