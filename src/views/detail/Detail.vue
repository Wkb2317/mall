<template>
  <div id="detail">
    <detail-nav-bar :title="title" :iid="iid" class="detail-nav-bar" @titleClick="titleClick" :top="top" :topY="topY" ref="detailNavBar"></detail-nav-bar>

    <scroll class="detailContent" :probeType="3" :pullUpLoad="true" ref="scroll" @scroll="detailScroll">
      <detail-swiper :detailswiper="detailswiper" @detailSwiperImgLoad="detailSwiperImgLoad"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-images-info :images-info="detailsInfo" @imgLoad="imgLoad" ref="imgTop"></detail-images-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="commentTop"></detail-comment-info>
      <goods-list :goods="recommends" ref="goodsTop"></goods-list>
    </scroll>

    <detail-buttom-bar @addcart="addcart">
    </detail-buttom-bar>
    <back-top @click.native="backtopClick" v-if="isShowBackTop"></back-top>
  </div>
</template>
<script>
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "network/detail.js";
import { imgListener, backTop } from "common/mixin.js";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailImagesInfo from "./childComps/DetailImagesInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailButtomBar from "./childComps/DetailButtomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/good/GoodsList.vue";

export default {
  name: "Detail",

  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      detailswiper: [],
      goods: {},
      shop: {},
      detailsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: {},

      topY: [0],
      top: 0,
      activeIndex: 0,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailCommentInfo,
    DetailParamInfo,
    Scroll,
    GoodsList,
    DetailButtomBar,
  },

  methods: {
    //当detailimg的图片加载完成后刷新页面
    imgLoad() {
      console.log("detailImageRefresh");
      this.$refs.scroll.refresh();
      // 获评论的高度
      this.topY[this.topY.length] = -this.$refs.commentTop.$el.offsetTop;
      // 获取推荐的高度
      this.topY[this.topY.length] = -this.$refs.goodsTop.$el.offsetTop;

      this.topY[this.topY.length] = -Number.MAX_VALUE;
      //console.log(this.topY);
    },

    //  监听轮播图图片加载完成
    detailSwiperImgLoad() {
      // 这里获取的只有imgtop是准确的
      // 后面的获取的commenttop要等detailimg的图片加载完完成后再获取
      // 同理goodstop
      this.topY[this.topY.length] = -this.$refs.imgTop.$el.offsetTop;
    },

    // 导航栏点击滚动切换
    titleClick(index) {
      // console.log(index);
      // 点击后进行滚动
      this.$refs.scroll.backtop(0, this.topY[index]);
    },

    // 监听滚动
    detailScroll(topY) {
      this.top = topY;
      // 监听滚动的位置，给navbar的index赋值，实现滚动的时候navbar添加相应的class
      if (this.top > -800) {
        this.isShowBackTop = false;
      } else {
        this.isShowBackTop = true;
      }
      for (let i in this.topY) {
        i = parseInt(i);
        if (
          this.activeIndex != i &&
          this.top <= this.topY[i] &&
          this.top > this.topY[i + 1]
        ) {
          this.activeIndex = i;
          this.$refs.detailNavBar.currentindex = i;
        }
      }
      /*
      if (
        (this.top <= this.topY[0] && this.top > this.topY[1]) ||
        this.top > 0
      ) {
        this.activeIndex = 0;
      } else if (this.top <= this.topY[1] && this.top > this.topY[2]) {
        this.activeIndex = 1;
      } else if (this.top <= this.topY[2] && this.top > this.topY[3]) {
        this.activeIndex = 2;
      } else {
        this.activeIndex = 3;
      }
      */
      // console.log(this.top);
      //console.log(this.$refs.detailNavBar.topY);
      // console.log(this.$refs.detailNavBar.top);
    },

    //监听点击事件 获取购物车数据
    addcart() {
      const product = {};
      product.image = this.detailswiper[0];
      product.title = this.goods.title;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      product.count = 1;
      product.checked = true;
      //console.log(product);
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 1000);
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;

    // 请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      //console.log(data);
      this.detailswiper = data.itemInfo.topImages;
      //console.log(data);

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 获取商品详细信息
      this.detailsInfo = data.detailInfo;

      // 获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule || {}
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
    });

    //请求推荐数据
    getRecommend().then((res) => {
      //console.log("推荐数据");
      this.recommends = res.data.data.list;
      //console.log(this.recommends);
    });
  },

  // 混入
  mixins: [imgListener, backTop],
  mounted() {},
};
</script>
<style  scoped>
#detail {
  width: 100%;
  height: 100%;
  background: white;
}

.detail-nav-bar {
  position: relative;
  z-index: 99;
  background: #fff;
}

.detailContent {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}
</style>