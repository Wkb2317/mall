import { debounce } from "./utils.js";
import BackTop from "components/content/backtop/BackTop.vue";

export const imgListener = {
  data() {
    return {
      imgRefresh: null
    };
  },
  mounted() {
    // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 监听事件总线事件的变化
    this.imgRefresh = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.imgRefresh);
  }
};

export const backTop = {
  data() {
    return {
      isShowBackTop: false
    };
  },
  components: {
    BackTop
  },
  methods: {
    // 监听backtop组件的点击事件
    backtopClick() {
      // 组件之间的通信refs
      this.$refs.scroll.backtop(0, 0);
    }
  }
};
