<template>
  <div class="B">
    这里是B组建
    <p>这个是我从pros 获取到的
      <span class="color">{{bb}}</span>
      
      </p>
    <br/>
    ——————————————————————————————————————————————
    <C v-bind="$attrs" v-on="$listeners"></C>
  </div>
</template>
<script>
import C from './C.vue';
export default {
  name:'B',
  inheritAttrs: true, // 此处设置禁用继承特性
  props:{
    bb:{
      type:String,
      default:''
    },
  },
  data(){
    return{
      bcom:'B组建data 中内容',
      ww:'B'
    }
  },
  mounted(){
    // console.log(this.$attrs, 'b')
  },
  components:{
    C
  }
}
</script>
<style>
 .B{
   width: 70%;
   margin: 0 auto;
   height: 600px;
   border: 4px solid sandybrown;
 }
 .color{color: sandybrown;}
</style>