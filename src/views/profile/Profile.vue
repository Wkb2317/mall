<template>
  <div class="profile">
    <nav-bar class="navbar">
      <div slot="center">美丽说</div>
    </nav-bar>
    <login></login>
    <money></money>
    <profile-list></profile-list>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Login from "./childComps/Login";
import Money from "./childComps/Money.vue";
import ProfileList from "./childComps/ProfileList.vue";
export default {
  components: {
    NavBar,
    Login,
    Money,
    ProfileList,
  },
  name: "Profile",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.navbar {
  background: rgba(255, 142, 150);
  color: white;
}
</style>