/** 自定义菜单项 */
export interface CustomMenuItem {
  id: string
  name: string
  power?: string | string[] | ((powers: string[]) => boolean)
  children: Array<CustomMenuItem>
}

/** 菜单
 * @description 传入菜单信息，调用 api 获取权限数据，返回有权使用的菜单项
 */
export async function getMenus(menus: CustomMenuItem[]): Promise<any> {
  return menus
}

// 权限检测
export function checkPower(powers: string[], power?: string | string[] | { options: string[] } | ((powers: string[]) => boolean)): boolean {
  if (power) {
    if (!powers) return false
    if (Array.isArray(power)) {
      // 必须具有列出的全部权限才能使用
      for (const v of power) {
        if (powers.indexOf(v) < 0) {
          return false
        }
      }
    } else if (typeof power === 'object') {
      // 具备可选权限中的一个就可以使用
      for (const v of power.options) {
        if (powers.indexOf(v) >= 0) {
          return true;
        }
      }
      return false;
    } else if (typeof power === 'string') {
      return powers.indexOf(power) >= 0
    } else {
      return power(powers)
    }
  }
  return true
}
