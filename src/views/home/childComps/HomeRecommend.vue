<template>
  <div class="recommend">
    <div v-for="item in recommends" class="items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
    },
  },
  methods: {},
};
</script>
<style  scoped>
.recommend {
  margin-top: 10px;
  height: 120px;
  width: 100%;
  display: flex;
  border-bottom: 10px solid #eee;
}

.items {
  flex: 1;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 70px;
  height: 70px;
}

.title {
  margin-top: 5px;
}
</style>