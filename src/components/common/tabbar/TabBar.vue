<template>
  
    <!-- 最底下的大盒子 -->
    <div id="tab-bar">
      <slot></slot>
    </div>
  
</template>
<script>


export default {
  name: "TabBar",
  data () {
   return {}
  },
   methods:{}
}
</script>
<style  scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 2px rgb(222, 222, 222,.1);
  }

  
</style>