/*
 * @Author: 周楠楠
 * @Date: 2022-06-23 15:10:23
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 15:37:45
 * @Description: 用来存储不同主题下的css变量
 */

// 字体变量
const baseSize = {
  "--primary": "#eb5855",
  "--primary-btn-bg": "#36b0571a",
  "--primary-btn-border": "#fbc4c4",
  // 背景色
  "--initial": "#409eff",
  "--link": "#409eff",

  // 左边菜单
  "--sidebar-item": "#fff",
  "--sidebar-active": "rgba(96,96,96,0.1)",
  "--sidebar-active-text": "#eb5855",
  "--sidebar-open": "#eb5855",
  "--sidebar-open-text": "#fff",
  // 上侧菜单
  "--topbar-bg": "#20222a",

  // 背景色
  "--color-main-bg": "#f0f2f5",
  // 主颜色
  "--color-primary": "#409EFF",
  "--color-primary-hover": "#66b1ff",
  "--color-primary-active": "#3a8ee6",
  "--color-primary-disabled": "#a0cfff",
  "--color-primary-plain-border": "#b3d8ff",
  "--color-primary-plain-disabled": "#8cc5ff",
  "--color-primary-plain-disabled-border": "#d9ecff",
  "--color-primary-plain-bg": "#ecf5ff",

  // Functional Color
  // color-success
  "--color-success": "#67C23A",
  "--color-success-hover": "#85ce61",
  "--color-success-active": "#5daf34",
  "--color-success-disabled": "#b3e19d",
  "--color-success-plain-border": "#c2e7b0",
  "--color-success-plain-disabled": "#a4da89",
  "--color-success-plain-disabled-border": "#e1f3d8",
  "--color-success-plain-bg": "#f0f9eb",

  // color-warning
  "--color-warning": "#E6A23C",
  "--color-warning-hover": "#ebb563",
  "--color-warning-active": "#cf9236",
  "--color-warning-disabled": "#f3d19e",
  "--color-warning-plain-border": "#f5dab1",
  "--color-warning-plain-disabled": "#f0c78a",
  "--color-warning-plain-disabled-border": "#faecd8",
  "--color-warning-plain-bg": "#fdf6ec",

  // color-danger
  "--color-danger": "#F56C6C",
  "--color-danger-hover": "#f78989",
  "--color-danger-active": "#dd6161",
  "--color-danger-disabled": "#fab6b6",
  "--color-danger-plain-border": "#fbc4c4",
  "--color-danger-plain-disabled": "#f9a7a7",
  "--color-danger-plain-disabled-border": "#fde2e2",
  "--color-danger-plain-bg": "#fef0f0",

  // color-info
  "--color-info": "#909399",
  "--color-info-hover": "#a6a9ad",
  "--color-info-active": "#82848a",
  "--color-info-disabled": "#c8c9cc",
  "--color-info-plain-border": "#d3d4d6",
  "--color-info-plain-disabled": "#bcbec2",
  "--color-info-plain-disabled-border": "#e9e9eb",
  "--color-info-plain-bg": "#f4f4f5",

  // Font Color
  // color-text-primary 主要文字颜色
  "--color-text-primary": "#303133",
  // color-text-regular 常规文字颜色
  "--color-text-regular": "#606266",
  // color-text-secondary 次要文字颜色 暂无
  "--color-text-secondary": "#909399",
  // color-text-placeholder 占位文字颜色
  "--color-text-placeholder": "#C0C4CC",

  // Border Color
  // border-text-base 一级边框颜色
  "--border-color-base": "#DCDFE6",
  // border-text-light 二级边框颜色
  "--border-color-light": "#E4E7ED",
  // border-text-lighter 三级边框颜色
  "--border-color-lighter": "#EBEEF5",
  // border-text-extra-light 四级边框颜色
  "--border-color-extra-light": "#F2F6FC",

  // Background Color
  // color-white 基础白色 暂不用
  "--color-white": "#FFFFFF",
  // color-black 基础黑色 暂不用
  "--color-black": "#000000",
  // background-color-base 基础背景色
  "--background-color-base": "#F5F7FA",

  // 表格相关颜色
  // 表头
  "--color-table-thead-th-bg": "#f3f5f7",
  // 表头
  // '--color-table-thead-th-text': 'rgba(0,0,0,.85)',
  "--color-table-thead-th-text": "#333333",
  // td hover
  "--color-table-tbody-td-hover": "#F5F7FA",
  // td 隔行变色
  "--color-table-tbody-td-striped": "#FAFAFA",

  // select select-dropdown tree cascader 选中样式
  "--color-select-item-bg-hover": "#F5F7FA",
};

export const theme = {
  // 红色
  whiteTheme: {
    ...baseSize,
    // '--color-success': 'yellow'
    // '--color-primary': '#E23938',
    // '--color-primary-hover': '#e86160',
    // '--color-primary-active': '#cb3332',
    // '--color-primary-disabled': '#f19c9c',
    // '--color-primary-plain-border': '#f3b0af',
    // '--color-primary-plain-disabled': '#e88',
    // '--color-primary-plain-disabled-border': '#f9d7d7',
    // '--color-primary-plain-bg': '#fcebeb'
  },
  // 蓝色
  defaultTheme: {
    ...baseSize,
    // 背景色
    "--color-main-bg": "#f0f2f5",
    // 主颜色
    "--color-primary": "#409EFF",
    "--color-primary-hover": "#66b1ff",
    "--color-primary-active": "#3a8ee6",
    "--color-primary-disabled": "#a0cfff",
    "--color-primary-plain-border": "#b3d8ff",
    "--color-primary-plain-disabled": "#8cc5ff",
    "--color-primary-plain-disabled-border": "#d9ecff",
    "--color-primary-plain-bg": "#ecf5ff",
  },
  fireWallTheme: {
    ...baseSize,
  },
};
