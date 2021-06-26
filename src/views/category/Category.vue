<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">分类</div>
    </nav-bar>

    <silde-bar :sildebardata="sildebardata" ref="sildebar"></silde-bar>

    <scroll @scroll="categoryscroll" ref="scroll" class="subcontent" :probeType="3" :pullUpLoad="true">
      <sub-cate-gory :subdata="subdata"></sub-cate-gory>
      <tab-control :tab="goodstitle" @itemclick='tabcontrolclick'></tab-control>
      <goods-list :goods="goods"></goods-list>
    </scroll>

  </div>
</template>
<script>
import {
  getCateGroyData,
  getSubCateGory,
  getSubCategoryDetail,
} from "network/category";
import { imgListener } from "common/mixin.js";
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/good/GoodsList.vue";
import TabControl from "components/common/tabcontrol/TabControl.vue";

import SildeBar from "./childComps/SildeBar.vue";
import SubCateGory from "./childComps/SubCateGory.vue";

export default {
  components: {
    NavBar,
    SildeBar,
    SubCateGory,
    Scroll,
    GoodsList,
    TabControl,
  },
  name: "Category",
  data() {
    return {
      sildebardata: null,
      subdata: [],
      goodstitle: ["流行", "新款", "精选"],
      goods: [],
      currentType: "pop",
      currentIndex: 0,
      top: 0,
    };
  },
  methods: {
    // 监听导航栏的点击，切换
    tabcontrolclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.goods = this.getgoods(
        this.sildebardata[index].miniWallkey,
        this.currentType
      );

      this.$refs.scroll.backtop(0, this.top, 1000);
    },

    // 获取数据
    getCateGory() {
      // 获取左侧分类数据
      getCateGroyData().then((res) => {
        this.sildebardata = res.data.data.category.list;
        //console.log(this.sildebardata);
        this.getgoods(this.sildebardata[0].miniWallkey, "pop");
        // 因为axios是异步操作，所以必须在上一步获取的数据中获取类外的数据
        for (let item of this.sildebardata) {
          getSubCateGory(item.maitKey).then((res) => {
            this.subdata.push(res.data.data.list);
          });
        }
      });
    },
    // 获取推荐的数据
    getgoods(miniWallkey, currentType) {
      getSubCategoryDetail(miniWallkey, currentType).then((res) => {
        //console.log(res.data);
        this.goods = res.data;
      });
    },

    //监听goodslist的滚动
    categoryscroll(position) {
      this.top = position;
    },
  },

  mounted() {
    // 监听事件总线 获取当前侧边栏点击的index
    this.$bus.$on("sildebarclick", (index) => {
      this.currentIndex = index;
      this.getgoods(this.sildebardata[index].miniWallkey, "pop");
    });

    //监听goodlistitem的图片加载完成
    // this.$bus.$on("itemImgLoad", () => {
    //   this.$refs.scroll.refresh();
    // });
    // 这里直接引入混入
  },

  mixins: [imgListener],

  created() {
    this.getCateGory();
  },
};
</script>
<style  scoped>
.category {
  position: relative;
}

.navbar {
  background-color: rgba(255, 142, 150);
  color: white;
}

.subcontent {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 20%;
  overflow: hidden;
}
</style>