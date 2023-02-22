<template>
  <div class="btnBox">
    <h2>测试组件内btn按钮权限</h2>
    <el-row class="jurisdiction">
      <el-button
        type="primary"
        v-if="vaildData(permission[componentName + '_primary_btn'], false)"
        >主要按钮</el-button
      >
      <el-button
        type="success"
        v-if="vaildData(permission[componentName + '_success_btn'], false)"
        >成功按钮</el-button
      >
      <el-button
        type="danger"
        v-if="vaildData(permission[componentName + '_danger_btn'], false)"
        >危险按钮</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    componentName: {
      type: String,
      default: "jurisdiction", //默认权限1
    },
  },
  //  监听属性 类似于data概念
  computed: {
    ...mapGetters(["permission"]),
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
