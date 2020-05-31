<template>
  <div class="A">
    <div>
      {{Aname}}
    </div>
    <button @click="add">A组建点击改变C组建内容</button>
    <p></p>
    <div>
      <br/>
      ————————————————————————————————————————————————————————————————————
      <B 
      bb='这个是A组建传递给b组建的，c组建可以不用获取，请通过pros获取到'
      cc='A组建给c组建的；b组建不用获取'
      :nn=n
      v-on:jian="jian"
      ></B>
    </div>
  </div>
</template>
<script>
import B from './B.vue';
export default {
  name:"A",
  // inheritAttrs: true,
  data(){
    return{
      Aname:'这里是爷爷组建A',
      acont:'需要传到c组建的内容',
      n:0,
    }
  },
  components:{
    B
  },
  mounted(){
    // console.log(this.$children[0], 'this.$children')
  },
  methods:{
    add:function(){
        this.n++
    },
    jian:function(){
      if(!this.n){
        return this.n
      }else{
        return this.n--
      }
    }
  },
  watch:{

  }
}
</script>
<style>
.A{
  width: 100%;
  height: 800px;
  border: 5px solid salmon;
}
</style>
