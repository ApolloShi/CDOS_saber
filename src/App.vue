<template>
  <div id="app">
    <div class="appLoader" v-show="loader">
      <div class="wrapp" v-show="loaderIndex === 0">
        <div class="load-1">
          <p class="loaderText">Loading ...</p>
          <!-- <p class="loaderText">加载中 ...</p> -->
          <div class="k-line k-line3-1"></div>
          <div class="k-line k-line3-2"></div>
          <div class="k-line k-line3-3"></div>
          <div class="k-line k-line3-4"></div>
          <div class="k-line k-line3-5"></div>
        </div>
      </div>
      <div class="loader" v-show="loaderIndex === 1">
        <div class="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      loader: false,
      loaderIndex: 0,
    };
  },
  computed: {
    ...mapGetters({
      appLoader: "appLoader",
    }),
  },
  watch: {
    // $route (to, from) {
    $route(to) {
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 650);
      // console.log('to', to)
      // console.log('to', to.path)
      // 保存当前页面的路径用于回显高亮
      this.$store.commit("IS_ACTIVE_ROUTE", to);
      // const licenseData = getStore({ name: "licenseData" });
      // const authority = licenseData.productModel.split("-")[0];
    },
    appLoader: function () {
      console.log("监听 appLoader 变化", this.appLoader);
      this.loader = this.appLoader;
    },
  },
  created() {
    console.log(
      "%c注%c意%c规%c范",
      "font-size: 20px;margin-right: 15px;color: red",
      "color: #58A7F2;margin-right: 15px",
      "font-size: 24px;background: #F4605F;color: #fff;padding: 5px;margin-right: 15px",
      "border: 1px solid #8F4CFF;padding: 10px;border-radius: 50%"
    );
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
