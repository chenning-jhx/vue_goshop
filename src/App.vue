<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>


<style lang="less">
@import url("./assets/css/base.css");
</style>
