<template>
  <div class="bottombar">
    <div class="bottom">
      <check-button @click.native="bottombarclick" :isckecked="isckecked"></check-button>
      <span>全选</span>
    </div>

    <div class="total">
      <span>总计￥{{totalprice}}</span>
    </div>

    <div class="buy">
      <span @click="payclick">去结算({{number}})</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";

export default {
  components: { CheckButton },
  name: "CartBottomBar",
  data() {
    return {
      isckecked: true,
      checkedproduct: null,
    };
  },
  computed: {
    // 计算总计
    totalprice() {
      let process = this.$store.state.cartList.filter((item) => {
        return item.checked == true;
      });

      this.checkedproduct = process;
      return process
        .reduce((prev, item) => {
          return prev + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    number() {
      return this.checkedproduct.reduce((prev, item) => {
        return prev + item.count;
      }, 0);
    },
  },
  methods: {
    bottombarclick() {
      this.isckecked = !this.isckecked;
      this.$emit("allclick", this.isckecked);
    },
    payclick() {
      if (this.number == 0) {
        this.$toast.show("请选择购买商品");
      }
    },
  },
  mounted() {
    this.$bus.$on("ifallchecked", (value) => {
      this.isckecked = value;
    });
  },
};
</script>
<style  scoped>
.bottombar {
  display: flex;
  height: 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
}

.bottom {
  height: 40px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.total {
  width: 100px;
  line-height: 40px;
}

.buy {
  width: 60px;
  height: 40px;
  background: red;
  color: white;
  font-size: 700;
  line-height: 40px;
  text-align: center;
}
</style>