<template>
  <div class="DetailButtomBar">
    <div class="buttom-left">
      <div class="service">
        <div class="serviceicon"></div>
        <span>客服</span>
      </div>
      <div class="shop">
        <div class="shopicon"></div>
        <span>商店</span>
      </div>
      <div class="collect">
        <div class="collecticon"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="addcart" @click="addcart">加入购物车</div>
      <div class="buy" @click="buyClick">购买</div>
    </div>

  </div>
</template>
<script>
export default {
  name: "DetailButtomBar",
  data() {
    return {};
  },
  methods: {
    addcart() {
      this.$emit("addcart");
    },
    buyClick() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style  scoped>
.DetailButtomBar {
  height: 50px;
  width: 100%;
  background: white;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);
}

.buttom-left {
  flex: 1;
  display: flex;
  width: 50%;
  height: 49px;
}

.service,
.shop,
.collect {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
}

.serviceicon,
.shopicon,
.collecticon {
  height: 24px;
  width: 24px;
  background: url("~assets/img/detail/detail_bottom.png");

  background-size: 100%;
}

.serviceicon {
  background-position: 0 106px;
}

.shopicon {
  background-position: 0 221px;
}

.collecticon {
  background-position: 0 0;
}

.bottom-right {
  flex: 1;
  display: flex;
  width: 50%;
  height: 49px;
}

.addcart,
.buy {
  flex: 1;
  line-height: 49px;
  text-align: center;
}

.addcart {
  background: yellow;
}

.buy {
  background: rgba(255, 142, 150);
  color: white;
}
</style>