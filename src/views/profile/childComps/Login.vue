<template>
  <div class="login">
    <div class="pict">
      <img src="~assets/img/profile/user.png" alt="">
    </div>
    <div class="right">
      <div class="title">
        <span>登录/注册</span>
        <div>
          <img src="~assets/img/profile/phone.png" alt="">
          <span>暂未绑定手机号</span>
        </div>
      </div>
      <span class="arrowright">
        <img src="~assets/img/profile/arrow_right.png" alt="">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.login {
  height: 80px;
  width: 100%;
  background: rgba(255, 142, 150);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.pict {
  height: 70px;
  width: 70px;
  border-radius: 100%;
  overflow: hidden;
  background-color: white;
}

.pict img {
  height: 70px;
  width: 70px;
}

.right {
  width: 220px;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 13px;
  color: white;
}
</style>