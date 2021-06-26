<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in detailswiper">
      <img :src="item" alt="" @load="detailSwiperImgLoad(index)">
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    detailswiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    detailSwiperImgLoad(index) {
      if (index == this.detailswiper.length - 1) {
        // 当最后一张图片加载完成后发出事件
        this.$emit("detailSwiperImgLoad");
      }
    },
  },
};
</script>
<style  scoped>
.detail-swiper {
  height: 250px;
}
</style>