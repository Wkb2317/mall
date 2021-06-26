<template>
  <div class="big">
    <div class="tab">
      <div v-for="(item,index) in tab" class="item" :class="{ active:index == currentindex}" @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    tab: {
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
  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$emit("itemclick", index);
    },
  },
};
</script>
<style  scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: white;
}

.item {
  flex: 1;
}

.item span {
  font-size: 14px;
  padding: 5px;
}

.active {
  color: rgba(255, 142, 150);
}

.active span {
  border-bottom: 2px solid rgba(255, 142, 150);
}
</style>