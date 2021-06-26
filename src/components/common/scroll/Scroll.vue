<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      bs: null,
      topY: 0,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 返回顶部函数
    backtop(x, y, time = 800) {
      this.bs.scrollTo(x, y, time);
    },
    // 结束上拉加载函数
    finishPullUp() {
      this.bs.finishPullUp();
    },
    // 图片加载完成后，调用refresh
    refresh() {
      //console.log("refresh");
      this.bs.refresh();
    },
  },
  mounted() {
    this.bs = new BetterScroll(this.$refs.wrapper, {
      // 别写死,根据外面绑定的需求决定
      probeType: this.probeType,
      observeDOM: true,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动事件
    this.bs.on("scroll", (postion) => {
      this.topY = postion.y;
      // 发射事件
      this.$emit("scroll", this.topY);
    });
    // 监听上拉加载更多
    this.bs.on("pullingUp", () => {
      // 发出事件
      this.$emit("pullingUp");
    });
  },
};
</script>
<style  scoped>
</style>