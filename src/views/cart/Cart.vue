<template>
  <div class="cart">
    <nav-bar class="cartNavBar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>

    <scroll class="cart-content" :pullUpLoad="true" :probeType="3" ref="scroll">
      <cart-list class="cartlist"></cart-list>
    </scroll>

    <cart-bottom-bar @allclick="allclick"></cart-bottom-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

export default {
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  name: "Cart",
  data() {
    return {
      isckecked: true,
    };
  },
  computed: {
    ...mapGetters(["cartListLength"]),
  },
  methods: {
    // 监听全选按钮的点击, 并将全选按钮的状态赋值给所有的商品
    allclick(pos) {
      //console.log(pos);
      for (let item of this.$store.state.cartList) {
        item.checked = pos;
      }
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style  scoped>
.cartNavBar {
  background-color: rgba(255, 142, 150);
  color: white;
}

.cart-content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}

.cartlist {
  height: 100%;
}
</style>