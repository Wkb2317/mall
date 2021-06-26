<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <tab-control v-show="isFixed" :tab="['流行','精选','新品']" ref="tabcontrol1" @itemclick="tabClick" class="tabcontrol"></tab-control>

    <!-- // ref绑定组件，实现父子组件之间的通信 -->
    <scroll class="home-content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadmore">
      <home-swiper :banners="banners" class="home-swiper" @swiperimgload='swiperimgload'></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control :tab="['流行','精选','新品']" ref="tabcontrol2" @itemclick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!-- // 监听组件的事件时要加native -->
    <back-top @click.native="backtopClick" v-if="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabcontrol/TabControl.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";
import GoodsList from "components/content/good/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home.js";
import { imgListener, backTop } from "common/mixin.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
      currentType: "pop",
      topY: 0,

      tapOffSetTop: 0,
      isFixed: false,
    };
  },

  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    FeatureView,
    GoodsList,
    Scroll,
  },

  methods: {
    // 得到goods信息
    getGoods(type) {
      let page = this.goods[type].page + 1;
      // 从服务器请求
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        //console.log(this.goods[type].list);
        this.goods.page += 1;
        // 每次触发pullingUP事件后，都要结束这次的上拉，然后才可以再下一次启动pullingup
        this.$refs.scroll.finishPullUp();
        //console.log(this.goods[type].list);
      });
    },

    // 首页goods切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
    },

    /**
     * 事件监听函数
     * */
    //监听滚动 显示backtop
    contentScroll(topY) {
      this.topY = topY;
      if (topY < -800) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      this.isFixed = -topY > this.tapOffSetTop;
    },

    // 监听上拉加载更多事件
    loadmore() {
      // 取当前的goodstype，获取新数据
      this.getGoods(this.currentType);
      //重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      //this.$refs.scroll.bs.refresh();
    },

    // 监听swiperimg的加载
    swiperimgload() {
      this.tapOffSetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  // keeplive下使用的生命周期函数
  activated() {
    //console.log("activated");
    this.$refs.scroll.backtop(0, this.topY, 0);
    this.$refs.scroll.refresh();
  },
  // 离开时取消itemload事件
  deactivated() {
    //console.log("deactivated");

    this.$bus.$off("itemImgLoad", this.imgRefresh);
  },

  // created 生命周期函数
  created() {
    /**
     *  数据请求相关的
     */
    // 1. 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });

    // 初始化data数据
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");

    // 当处于活跃状态时(被点击后，重新滚动)
  },

  // 混入
  mixins: [imgListener, backTop],
  // 挂载后的生命周期函数
  // 注意ref 属性是挂在后才能访问的，所以涉及ref的必须要写在mounted函数中
  mounted() {
    // 获取tabcontrol的offsettop
    // 组件没有offsettop属性
    // mounted挂载后图片还没加载，拿到的offsettop值不对
  },
};
</script>


<style  scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  background-color: rgba(255, 142, 150);
  color: white;
}

.tabcontrol {
  position: relative;
  z-index: 99;
}

.home-content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>