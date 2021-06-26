<template>
  <div class="money">
    <div class="balance">
      <span class="red">0.00元</span>
      <span>我的余额</span>
    </div>
    <div class="coupon">
      <span class="red">0个</span>
      <span>我的余额</span>
    </div>
    <div class="integral">
      <span class="red">0分</span>
      <span>我的余额</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Money",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.money {
  display: flex;
  height: 80px;
  width: 100%;
  border-bottom: 6px solid rgba(0, 0, 0, 0.1);
}

.integral,
.coupon,
.balance {
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.red {
  color: red;
  font-size: 16px;
  font-weight: 800;
}
</style>