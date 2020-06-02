<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'vfrom',
  provide(){
    return{
      from: this
    }
  },
  props:{
    model:{
      type:Object,
      requiree:true
    },
    rules:Object
  },
  methods:{
    validator:function(cb){
      const tasks =this.$children
      .filter(item=> item.prop)
      .map(item=> item.validator())
      Promise.all(tasks)
      .then(()=>{cb(true)})
      .catch(()=>{cb(false)})
    }
  }
}
</script>
<style>

</style>