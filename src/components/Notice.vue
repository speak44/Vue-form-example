<template>
  <div  class="box" v-if="isshow">
    <h3>{{title}}</h3>
    <p class="box-content">{{massage}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow:false
    }
  },
  props:{
    title:{
      type:String,
      default:''
    },
    massage:{
      type:String,
      default:''
    },
    duration:{
      type:Number,
      default:1000
    }
  },
  mounted(){
    console.log(this.duration)
  },
  methods:{
    show(){
      this.isshow=true
      // console.log(this.isshow, 'this.isshow')
      setTimeout(this.hide, this.duration)
    },
    hide(){
      this.isshow=false
      this.remove()
    }
  }
}
</script>
<style>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;  
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>


