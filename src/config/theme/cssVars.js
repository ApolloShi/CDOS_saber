/*
 * @Author: 周楠楠
 * @Date: 2022-06-23 15:10:23
 * @LastEditors: 周楠楠
 * @LastEditTime: 2022-06-23 19:18:23
 * @Description: 用来存储不同主题下的css变量
 */

const baseVars = {
  '--primary': '#eb5855',
  '--primary-btn-bg': '#36b0571a',
  '--primary-btn-border': '#fbc4c4',
  // 背景色
  '--color-main-bg': '#f0f2f5',
  '--initial': '#409eff',
  '--link': '#409eff',

  // 左边菜单
  '--sidebar-item': '#fff',
  '--sidebar-active': 'rgba(96,96,96,0.1)',
  '--sidebar-active-text': '#eb5855',
  '--sidebar-open': '#eb5855',
  '--sidebar-open-text': '#fff',
  // 上侧菜单
  '--topbar-bg': '#20222a',

  // element颜色修改
  '--color-primary': '#eb5855',
  '--color-primary-hover': '#66b1ff',
  '--color-primary-active': '#3a8ee6',
  '--color-primary-disabled': '#a0cfff',
  '--color-primary-plain-border': '#b3d8ff',
  '--color-primary-plain-disabled': '#8cc5ff',
  '--color-primary-plain-disabled-border': '#d9ecff',
  '--color-primary-plain-bg': '#ecf5ff',
  
}
export const theme = {
  baseTheme: {
    ...baseVars
  }
}