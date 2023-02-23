<!--
 * @Description: 单个文件按钮权限
 * @Author: 石亮亮
 * @Date: 2023-02-22 09:38:00
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 17:10:20
 * @FilePath: /study/Users/shiliangliang/6cloud/CDOS_saber/src/views/dome/jurisdiction.vue
-->
<template>
  <basic-container>
    <el-row class="jurisdiction">
      <h2>单个文件按钮权限</h2>
      <!--  vaildData 是平台内置方法，如果有jurisdiction_primary_btn就会返回它的值，没有返回false -->
      <el-button
        type="primary"
        v-show="vaildData(permission.jurisdiction_primary_btn, false)"
        >主要按钮</el-button
      >
      <el-button
        type="success"
        v-show="vaildData(permission.jurisdiction_success_btn, false)"
        >成功按钮</el-button
      >
      <el-button
        type="danger"
        v-show="vaildData(permission.jurisdiction_danger_btn, false)"
        >危险按钮</el-button
      >
    </el-row>
  </basic-container>
</template>
<script>
// 如果有 jurisdiction_primary_btn,返回 jurisdiction_primary_btn 的值，没有返回false
// this.vaildData(this.permission.notice_add, false)
import { mapGetters } from "vuex";
export default {
  name: "jurisdiction",
  computed: {
    ...mapGetters(["permission"]),
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
