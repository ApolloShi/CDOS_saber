<!--
 * @Description: 组件内按钮权限
 * @Author: 石亮亮
 * @Date: 2023-02-22 10:12:52
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 17:39:37
 * @FilePath: /study/Users/shiliangliang/6cloud/CDOS_saber/src/views/dome/components/authorizationBtn.vue
-->
<template>
  <div class="btnBox">
    <h3>测试组件内btn按钮权限</h3>
    <el-row class="jurisdiction">
      <el-button
        type="primary"
        v-if="vaildData(permission[pageName + '_primary_btn'], false)"
        >主要按钮</el-button
      >
      <el-button
        type="success"
        v-if="vaildData(permission[pageName + '_success_btn'], false)"
        >成功按钮</el-button
      >
      <el-button
        type="danger"
        v-if="vaildData(permission[pageName + '_danger_btn'], false)"
        >危险按钮</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "authorizationBtn",
  props: {
    pageName: {
      type: String,
      default: "jurisdiction", //默认权限1
    },
  },
  computed: {
    ...mapGetters(["permission"]),
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
