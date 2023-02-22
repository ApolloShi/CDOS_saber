<!--
 * @Description: 描述
 * @Author: 石亮亮
 * @Date: 2023-02-22 09:38:00
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 10:45:11
 * @FilePath: /study/Users/shiliangliang/6cloud/saber/src/views/dome/jurisdiction3.vue
-->
<template>
  <div>
    权限3页面
    <authorizationBtn :componentName="componentName" />
  </div>
</template>
<script>
import authorizationBtn from "./components/authorizationBtn.vue";
export default {
  name: "jurisdiction3",
  components: { authorizationBtn },
  data() {
    return {
      componentName: "jurisdiction3",
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
