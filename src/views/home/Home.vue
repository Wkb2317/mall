<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :cbanners="banners" class="home-swiper"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control :tab="['流行','精选','新品']" class="tabcontrol"></tab-control>

    <div class="stand"></div>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabcontrol/TabControl.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  methods: {},
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    FeatureView,
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      console.log(this.banners);
    });
  },
};
</script>
<style  scoped>
.home-nav {
  position: fixed;
  top: 0;
  left: 0px;
  right: 0;
  background-color: rgba(255, 142, 150);
  z-index: 9;
}

.home-swiper {
  margin-top: 44px;
}

.tabcontrol {
  position: sticky;
  top: 44px;
  left: 0;
  right: 0;
}

.stand {
  height: 800px;
  width: 100%;
  background: pink;
}
</style>