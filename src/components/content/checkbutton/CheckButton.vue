<template>
  <div class="checkbutton" :class="{active:isckecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isckecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>
<style  scoped>
.checkbutton {
  height: 20px;
  width: 20px;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid rgb(0, 0, 0, 0.2);
}

.active {
  background-color: red;
}
</style>