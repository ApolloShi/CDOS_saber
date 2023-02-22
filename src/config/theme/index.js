/*
 * @Author: 周楠楠
 * @Date: 2022-06-23 15:04:49
 * @LastEditors: 周楠楠
 * @LastEditTime: 2022-06-23 18:49:37
 * @Description: 主题配置 - 在需要且切换的地方使用initTheme方法进行主题的切换
 */
import {
  getStore
} from '@/util/store'
import { setTheme } from '@/util/util'
import { theme } from './cssVars.js'
import cssVars from 'css-vars-ponyfill'
export function initTheme (name) {
  name = name || 'base'
  document.documentElement.setAttribute('data-theme', name)
  setTheme(`theme-${name} ${getStore({ name: 'tableThemeName' }) || 'theme-table-striped'}`)
  cssVars({
    watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    variables: theme[name + 'Theme'], // variables 自定义属性名/值对的集合
    onlyLegacy: false // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  })
}