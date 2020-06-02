<template>
  <div>
    <label :for="prop">{{label}}</label>
    <slot></slot>
    <span v-if="error">{{error}}</span>
  </div>
</template>
<script>
import Schema from 'async-validator';
export default {
  name: 'vfromitem',
  inject:['from'],
  props:{
    // label="用户名" prop="username"
    label:{
      default:'',
      type:String
    },
    prop:{
      default:'',
      type:String
    }
  },
  data() {
    return {
      error:''
    }
  },
  mounted(){
    this.$on('validator', ()=>{
      this.validator()
    })
  },
  methods:{
    validator:function(){
      // console.log('进来了吗')
      // 获取校验规则
       const rules =this.from.rules[this.prop]
      // 获取当前的值
      const value =this.from.model[this.prop]
      // 创造校验器
      const schema= new Schema({
        [this.prop]:rules
      })
      // console.log({[this.prop]:rules}, '[this.prop]:rules')
      return schema.validate({
        [this.prop]:value
      },errors=>{
        // console.log(errors,'sdsds')
          if(errors){
            this.error=errors[0].message
          }else{
            this.error=''
          }
      })
    }
  }
}
</script>
<style>
 span{
   color:red;
   font-size: 10px;
 }
</style>