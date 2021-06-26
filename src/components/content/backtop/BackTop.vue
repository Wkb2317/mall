<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.backtop {
  position: fixed;
  right: 3px;
  bottom: 50px;
  z-index: 99;
}

.backtop img {
  height: 43px;
  width: 43px;
}
</style>