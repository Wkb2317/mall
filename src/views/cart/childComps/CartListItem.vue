<template>
  <div class="item">

    <div class="left">
      <div class="selector">
        <check-button @click.native="checkclick" :isckecked="product.checked"></check-button>
      </div>
      <img :src="product.image" alt="">
    </div>

    <div class="right">
      <p class="title">{{product.title}}</p>
      <span class="price">￥{{product.price}}</span>
      <span class="number">✘{{product.count}}</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";
export default {
  components: { CheckButton },
  name: "CartListItem",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      defaule() {
        return {};
      },
    },
    isckecked: {
      type: Boolean,
      defaule: true,
    },
  },
  methods: {
    checkclick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>
<style  scoped>
.item {
  height: 100px;
  width: 100%;
  background-color: white;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
}

.selector {
  height: 20px;
  width: 20px;
  /* margin: 40px 5px; */
  margin-top: 40px;
}

.left {
  width: 100px;
  float: left;
  display: flex;
  justify-content: space-around;
}

img {
  margin: 20px 0;

  height: 60px;
  width: 40px;
  border-radius: 3px;
  overflow: hidden;
}

.right {
  float: right;
  height: 100px;
  width: 200px;
}

.title {
  margin: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.price {
  margin: 15px;
  color: red;
  font-size: 16px;
}

.number {
  margin: 10px;
  margin-top: 0;
  float: right;
}
</style>