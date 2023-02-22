/* 先引入打包分析插件 */
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  /* webpack相关配置   *该对象将会被 webpack-merge 合并入最终的 webpack 配置   */
  // configureWebpack: (config) => {
  //   config.plugins.push(new BundleAnalyzerPlugin());
  // },
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
      "element-ui": "ELEMENT",
    });
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();
    entry.add("@/mock").end();
  },
  css: {
    extract: { ignoreOrder: true },
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 1888,
    open: true,
    proxy: {
      "/api": {
        //本地服务接口地址
        // target: 'http://localhost',
        //远程演示服务地址,可用于直接启动项目
        // target: "https://saber.bladex.vip/api",
        target: "http://192.168.183.104:8099",
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
// http://192.168.183.104:8099/blade-auth/oauth/captcha
// https://192.168.81.66/sherlock/api/cdos-auth/oauth/captcha