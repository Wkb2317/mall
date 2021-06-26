<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      time: 1000,
      isshow: false,
    };
  },
  methods: {
    show(message, time = 1000) {
      this.isshow = true;
      this.message = message;
      setTimeout(() => {
        this.isshow = false;
        this.message = "";
      }, time);
    },
  },
};
</script>
<style  scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
</style>