<template>
  <div class="gooditem">
    <img v-lazy="showImage" alt="" @load="imgLoad" @click="itemclick">
    <div>
      <p class="title">{{gooditem.title}}</p>
      <span class="price">￥{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodListItem",
  data() {
    return {};
  },
  props: {
    gooditem: {},
  },
  computed: {
    showImage() {
      return this.gooditem.img || this.gooditem.image || this.gooditem.show.img;
    },
  },
  methods: {
    // 监听图片加载完成
    imgLoad() {
      // 发送到事件总线中
      this.$bus.$emit("itemImgLoad");
    },

    // 监听item的点击，携带id
    itemclick() {
      this.$router.push("/detail/" + this.gooditem.iid);
    },
  },
};
</script>
<style  scoped>
.gooditem {
  width: 48%;
  border-radius: 5px;
  overflow: hidden;
}
.gooditem img {
  border-radius: 5px;
  width: 100%;
}

.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  margin-left: 20px;
  color: red;
}

.collect {
  margin-left: 30px;
  position: relative;
}

.collect::before {
  position: absolute;
  content: "";
  left: -15px;
  top: 1px;
  height: 14px;
  width: 14px;
  /* background: pink; */
  background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
}
</style>