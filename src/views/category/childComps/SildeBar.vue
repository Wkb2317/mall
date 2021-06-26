<template>
  <div class="sildebar">
    <scroll class="sildecontent" :probeType="3" :pullUpLoad="true">
      <div v-for="(item,index) in sildebardata" @click="itemclick(index)" :class=" {active:currentindex==index}" class="sildeitem">{{item.title}}
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "SildeBar",
  components: {
    Scroll,
  },
  data() {
    return {
      currentindex: 0,
      subcategory: null,
    };
  },
  props: {
    sildebardata: {
      type: Array,
      default: [],
    },
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$bus.$emit("sildebarclick", index);
    },
  },
  mounted() {},
};
</script>
<style  scoped>
.sildebar {
  position: absolute;
  width: 20%;

  bottom: 49px;
  top: 49px;
  left: 0;
}

.sildeitem {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.active {
  background-color: white;
  color: rgba(255, 142, 150);
}

.sildecontent {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 20%;
  overflow: hidden;
}
</style>