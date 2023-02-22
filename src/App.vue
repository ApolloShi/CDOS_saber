<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {initTheme} from '@/config/theme/index'
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {},
  created() {
    this.$nextTick(() => {
      initTheme('base')
    })
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
