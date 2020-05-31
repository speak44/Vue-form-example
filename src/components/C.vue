<template>
  <div class="C">
    我是最后一个C组建
    <h1>{{cdome}}</h1>
    <div>
      这个是从A组建获取的到的：
      <span class="cclor">
        {{this.$attrs.cc}}
      </span>
      <p @click="reduce">{{this.$attrs.nn}}</p>
    </div>
    <D v-bind="$attrs"/>
  </div>
</template>
<script>
import D from './D.vue';
export default {
  name:'C',
  data(){
    return{
      cdome:'c组建数据信息',
      ww:'C'
    }
  },
  mounted(){
    console.log(this.$attrs)
  },
  components:{
    D
  },
  methods:{
    reduce:function() {
        this.$emit('jian')
    }
  }
  
}
</script>
<style>
 .C{
   margin: 0 auto;
   width: 50%;
   height: 400px;
   border: 3px solid sienna; 
 }
 .cclor{
   color: sienna;
 }

</style>