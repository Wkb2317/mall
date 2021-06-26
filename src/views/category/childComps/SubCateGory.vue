<template>
  <div class="subgategory">
    <div class="subitem" v-for="item in subdata[currentindex]">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubGateGory",
  data() {
    return {
      currentindex: 0,
    };
  },
  props: {
    subdata: {
      type: Array,
      default: [],
    },
  },
  methods: {},
  mounted() {
    this.$bus.$on("sildebarclick", (index) => {
      this.currentindex = index;
    });
  },
};
</script>
<style  scoped>
.subgategory {
  width: 100%;
  /* background-color: pink; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.subitem {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.subitem img {
  height: 80px;
  width: 80px;
}
</style>