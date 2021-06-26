<template>
  <div class="cartList">
    <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index" @click.native="itemclick"></cart-list-item>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";
export default {
  components: { CartListItem },
  name: "CartList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    // 监听每个item的点击
    itemclick() {
      // 存储被选中的个数
      let checkedcount = 0;
      for (let item of this.cartList) {
        if (item.checked) {
          checkedcount++;
        }
      }
      // 发送事件总线
      this.$bus.$emit(
        "ifallchecked",
        checkedcount == this.cartList.length ? true : false
      );
    },
  },
};
</script>
<style  scoped>
</style>