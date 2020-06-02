<template>
  <div>
    <input :type="type" :value="value" @input="Oninput">
  </div>
</template>
<script>
export default {
  name:'vinput',
  props:{
    type:{
      type:String,
      default:'text'
    },
    value:{
      type:String,
      default:''
    }
  },
  methods:{
    Oninput:function (e) { 
      this.$emit('input',e.target.value)
      this.$parent.$emit('validator')
     }
  }
}
</script>
<style>

</style>