<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <p class="mesclo" v-if="error">{{error}}</p>
  </div>
</template>

<script>
// 验证是否符合规则
import Schema from 'async-validator';
// console.log(Schema, 'Schema')
export default {
  name:'KFormItem',
  inject:['form'],
  data(){
    return{
      error:''
    }
  },
  props:{
    prop:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:''
    }
  },
  mounted(){
    this.$on('validator',()=>{
      this.validator()
    })
  },
  methods:{
    validator:function () { 
        // 执行校验
        // 获取校验规则
          const rules = this.form.rules[this.prop]
        // 获取当前的值
          const value = this.form.model[this.prop]
        // 创建校验器
        const schema = new Schema({
          [this.prop]: rules
        })
        return schema.validate({
          [this.prop]: value
        }, errors => {
          // console.log(errors,'required')
            if(errors){
                this.error =errors[0].message
            }else{
              this.error =''
            }
        })
     }
  }
}
</script>
<style>
 .mesclo{
   font-size: 10px;
   color: red;
 }
</style>