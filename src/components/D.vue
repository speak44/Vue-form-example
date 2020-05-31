<template>
  <div>
   ______________________d组建————————————
   <br/>
    {{this.$attrs.nn}}
    <h1>
      {{messige}}
    </h1>
  </div>
</template>
<script>
export default {
  name:'D',
  inject:['messige'],
  mounted(){
    console.log(this.$attrs, 'this.$attrs')
  },
  data(){
    return {
      ww:'D'
    }
  }
}
</script>
