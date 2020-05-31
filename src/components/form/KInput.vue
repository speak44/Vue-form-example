<template>
  <div>
    <input :type="type" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name:'KInput',
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  methods:{
    onInput:function (e) {
      this.$emit('input', e.target.value)

      this.$parent.$emit('validator')
     }
  }
}
</script>
<style>

</style>