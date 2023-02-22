<template>
  <div>
    <el-dialog
      title="设置全局主题"
      append-to-body
      :visible.sync="box"
      width="50%"
    >
      <el-row :span="24">
        <el-col class="lfy-pb-5">
          <el-divider content-position="left">主题</el-divider>
        </el-col>
        <el-radio-group class="list" v-model="textTheme">
          <el-col
            v-for="(item, index) in list"
            :key="index"
            :md="4"
            :xs="12"
            :sm="4"
          >
            <el-radio :label="item.value">{{ item.name }}</el-radio>
          </el-col>
        </el-radio-group>
      </el-row>
      <el-row :span="24">
        <el-col class="lfy-pb-5 lfy-pt-5">
          <el-divider content-position="left">表格组件</el-divider>
        </el-col>
        <el-radio-group class="list" v-model="tableTheme">
          <el-col
            v-for="(item, index) in tableList"
            :key="index"
            :md="4"
            :xs="12"
            :sm="4"
          >
            <el-radio :label="item.value">{{ item.name }}</el-radio>
          </el-col>
        </el-radio-group>
      </el-row>
      <!-- <el-row :span="24">
        <el-col class="lfy-text-right">
          <el-button type="primary" plain @click="submit" size="small"
            >确定</el-button
          >
        </el-col>
      </el-row> -->
    </el-dialog>
    <span>
      <i class="icon-zhuti" @click="open"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { initTheme } from "@/config/theme/index";

export default {
  data() {
    return {
      box: false,
      textTheme: "default",
      tableTheme: "theme-table-striped",
      list: [
        {
          name: "默认主题",
          value: "default",
        },
        {
          name: "神探主题",
          value: "fireWall",
        },
        {
          name: "白色主题",
          value: "white",
        },
        {
          name: "黑色主题",
          value: "dark",
        },
        {
          name: "炫彩主题",
          value: "star",
        },
        {
          name: "智能主题",
          value: "bule",
        },
        {
          name: "iview主题",
          value: "iview",
        },
        {
          name: "vip主题",
          value: "vip",
        },
        {
          name: "cool主题",
          value: "cool",
        },
        {
          name: "d2主题",
          value: "d2",
        },
        {
          name: "hey主题",
          value: "hey",
        },
        {
          name: "lte主题",
          value: "lte",
        },
      ],
      tableList: [
        {
          name: "基础表格",
          value: "theme-table-basis",
        },
        {
          name: "带边框表格",
          value: "theme-table-border",
        },
        {
          name: "带斑马纹表格",
          value: "theme-table-striped",
        },
        {
          name: "带斑马纹边框表格",
          value: "theme-table-border-striped",
        },
      ],
    };
  },
  watch: {
    textTheme: function (val) {
      this.$store.commit("SET_THEME_NAME", val);
      this.submit();
    },
    tableTheme: function (val) {
      this.$store.commit("SET_TABLE_THEME_NAME", val);
      this.submit();
    },
  },
  computed: {
    ...mapGetters(["themeName", "tableThemeName"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    open() {
      this.box = true;
    },
    init() {
      this.textTheme = this.themeName;
      this.tableTheme = this.tableThemeName;
      this.submit();
    },
    submit() {
      initTheme(this.textTheme, this.tableTheme);
      // this.$store.commit("SET_THEME_NAME", this.textTheme);
      // this.$store.commit("SET_TABLE_THEME_NAME", this.tableTheme);
      // this.box = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
}
</style>
