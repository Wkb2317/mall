<template>
  <div id="detailnavbar">

    <nav-bar>
      <div slot="left" class="backimg" @click="backclick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <span v-for="(item,index) in title" @click="titleclick(index)" :class="{ active :index == currentindex }" class="titleitem">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "DetailNavBar",
  props: {
    title: Array,
    iid: String,
    top: {
      type: Number,
      default: 0,
    },
    topY: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  computed: {},

  methods: {
    titleclick(index) {
      this.currentindex = index;
      console.log("click index : " + index);
      //发出点击事件
      this.$emit("titleClick", index);
    },
    backclick() {
      this.$router.back();
    },
  },
  created() {},
};
</script>
<style  scoped>
.title {
  display: flex;
  font-size: 13px;
}

.titleitem {
  flex: 1;
}

.backimg img {
  height: 13px;
  width: 13px;
}

.active {
  color: rgba(255, 142, 150);
}
</style>