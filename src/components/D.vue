<template>
  <div>
   ______________________d组建————————————
   <br/>
    {{this.$attrs.nn}}
  </div>
</template>
<script>
export default {
  name:'D',
  mounted(){
    console.log(this.$attrs, 'this.$attrs')
  }
}
</script>
