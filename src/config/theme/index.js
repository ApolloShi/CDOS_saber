/*
 * @Description: 描述
 * @Author: 石亮亮
 * @Date: 2023-02-02 10:45:45
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 15:50:43
 * @FilePath: /study/Users/shiliangliang/6cloud/CDOS_saber/src/config/theme/index.js
 */

import { setTheme } from "@/util/util";
import { theme } from "./cssVars.js";
import cssVars from "css-vars-ponyfill";
export function initTheme(
  themeName = "default",
  tableThemeName = "theme-table-striped"
) {
  setTheme(`theme-${themeName} ${tableThemeName}`);
  cssVars({
    watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    variables: theme[themeName + "Theme"], // variables 自定义属性名/值对的集合
    onlyLegacy: false, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
}
