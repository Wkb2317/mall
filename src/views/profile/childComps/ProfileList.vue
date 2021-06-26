<template>
  <div class="profilelist">
    <div class="mylist">
      <ul class="myli">
        <li>我的消息</li>
        <li>积分商城</li>
        <li>会员卡</li>
      </ul>
    </div>
    <div class="about">
      <ul class="myli">
        <li>我的购物车</li>
        <li>点赞APP</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileList",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.mylist {
  border-bottom: 6px solid rgba(0, 0, 0, 0.1);
}

.about {
  border-bottom: 6px solid rgba(0, 0, 0, 0.1);
}

.myli li {
  margin-left: 10%;

  height: 40px;
  width: 80%;
  line-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>