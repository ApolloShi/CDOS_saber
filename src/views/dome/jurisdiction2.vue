<!--
 * @Description: 描述
 * @Author: 石亮亮
 * @Date: 2023-02-22 09:38:00
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 16:02:04
 * @FilePath: /study/Users/shiliangliang/6cloud/CDOS_saber/src/views/dome/jurisdiction2.vue
-->
<template>
  <basic-container>
    权限2页面
    <authorizationBtn :componentName="componentName" />
  </basic-container>
</template>
<script>
import authorizationBtn from "./components/authorizationBtn.vue";
export default {
  name: "jurisdiction2",
  components: { authorizationBtn },
  data() {
    return {
      componentName: "jurisdiction2",
    };
  },
  //  生命周期 - 创建之前
  beforeCreate() {
    // const componentName = window.location.hash.split("/").at(-1);
    // console.log("componentName", componentName);
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
