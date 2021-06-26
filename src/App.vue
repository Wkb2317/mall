<template>
  <div id="app">
    <main-tab-bar class="tabbar"></main-tab-bar>

    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* 导入css */
@import "assets/css/base.css";
.tabbar {
  position: fixed;
  bottom: 0;
  z-index: 99;
}
</style>
