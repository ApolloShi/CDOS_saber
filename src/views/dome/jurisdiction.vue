<!--
 * @Description: 描述
 * @Author: 石亮亮
 * @Date: 2023-02-22 09:38:00
 * @LastEditors: 石亮亮
 * @LastEditTime: 2023-02-22 10:11:24
 * @FilePath: /study/Users/shiliangliang/6cloud/saber/src/views/dome/jurisdiction.vue
-->
<template>
  <el-row class="jurisdiction">
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
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  //  监听属性 类似于data概念
  computed: {
    ...mapGetters(["permission"]),
  },
  //  监控data中的数据变化
  watch: {},
  //  生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.init();
  },
  methods: {
    init() {
      // 如果有notice_add，返回notice_add的值，没有返回false
      // this.vaildData(this.permission.notice_add, false)

      console.log("notice_add", this.permission.notice_add);
      console.log(
        "notice_add2",
        this.vaildData(this.permission.notice_add2, false)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
