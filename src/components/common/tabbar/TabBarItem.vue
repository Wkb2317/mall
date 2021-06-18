<template>
    <div class="tab-bar-item" @click="itemclick">
      <!-- 具名插槽用来动态的放图片和文字 -->
      <!-- 防止插槽的属性被替换 -->
      <div v-if="!isActive">
        <slot name="item-icon" ></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active" ></slot>
      </div>
      <div :style="getcolor">
        <slot name="item-text"></slot>  
      </div>
    </div>
</template>
<script>
export default {
  name: "TarBarItem",
  data () {
   return {
    //  isActive : true,
   }
  },
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'deeppink',
    }
  },
  computed:{
    isActive(){
      // 取当前活跃路由的path 和 父组件传来的path做比较
      return this.$route.path.indexOf(this.path)!=-1
    },
    getcolor(){
      return this.isActive ? {color: this.activecolor} : {}
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path);
    },
    
  }
}
</script>
<style  scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
    /* 消除图片下面的空白 */
    vertical-align: middle;
    margin: 3px ;
  }
</style>