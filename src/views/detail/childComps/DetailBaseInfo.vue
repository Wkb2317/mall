<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !== 0">
    <!-- 标题 -->
    <div class="infotitle">
      <span>{{goods.title}}</span>
    </div>
    <!-- 价格 -->
    <div class="infoprice">
      <span class="now-price">￥{{goods.nowPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" :style="{background:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <!-- columns -->
    <div class="columns">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
    <!-- 服务 -->
    <div class="service">
      <span :key="index" class="info-service-item" v-for="index in goods.services.length - 1" v-if="goods.services[index - 1].icon">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.infotitle {
  font-size: 15px;
  font-weight: bold;
}

.infoprice {
  margin-top: 10px;
}

.now-price {
  font-size: 20px;
  color: rgba(255, 142, 150);
}

.old-price {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}

.discount {
  display: inline-block;
  margin-left: 20px;
  height: 20px;
  width: 40px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 13px;
  color: white;
}

.columns {
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.service {
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.info-service-item img {
  margin-right: 3px;
  height: 12px;
  width: 12px;
}
</style>