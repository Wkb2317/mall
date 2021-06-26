<template>
  <div class="goodlist">
    <good-list-item v-for="(item,inex) in goods" :gooditem="item">
    </good-list-item>
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem";

export default {
  name: "GoodList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: [],
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
  methods: {},
};
</script>
<style  scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>