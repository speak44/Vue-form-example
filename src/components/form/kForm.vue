<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 全局表单内容验证 当submit提交的时候 验证调用
export default {
  name:'KForm',
  provide(){
    return{
      form: this
    }
  },
  props:{
    rules: Object,
    model:{
      type:Object,
      required: true
    }
  },
  methods:{
    validate(cb){
      // 全局验证
      // console.log('全局验证')
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validator());
      // console.log(tasks, 'tasks')
      Promise.all(tasks)
        .then(()=>{cb(true)})
        .catch(()=>{cb(false)})

    }
  }
}
</script>
<style>

</style>