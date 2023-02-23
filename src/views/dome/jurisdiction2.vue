<!--
 * @Description: 测试组件权限页面2
 * @Author: 石亮亮
 * @Date: 2023-02-22 09:38:00
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 17:39:42
 * @FilePath: /study/Users/shiliangliang/6cloud/CDOS_saber/src/views/dome/jurisdiction2.vue
-->
<template>
  <basic-container>
    <h2>测试组件权限页面2</h2>
    <authorizationBtn :pageName="pageName" />
  </basic-container>
</template>
<script>
import authorizationBtn from "./components/authorizationBtn.vue";
export default {
  name: "jurisdiction2",
  components: { authorizationBtn },
  data() {
    return {
      pageName: "jurisdiction2",
    };
  },
  //  生命周期 - 创建之前
  beforeCreate() {
    // const pageName = window.location.hash.split("/").at(-1);
    // console.log("pageName", pageName);
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
