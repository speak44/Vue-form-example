<template>
  <div>
    <Vfrom :model="model" :rules="rules" ref="from">
      <Vfromitem label="用户名" prop="username">
        <Vinpnt v-model="model.username"></Vinpnt>
      </Vfromitem>
      <Vfromitem  label="密码" prop="password">
        <Vinpnt v-model="model.password"></Vinpnt>
      </Vfromitem>
      <Vfromitem>
      <button @click="login">
        提交
      </button>
      </Vfromitem>
    </Vfrom>
    {{model}}
  </div>
</template>
<script>
import Vfrom from './vfrom';
import Vfromitem from './vfromitem';
import Vinpnt from './vinput';
export default {
  components:{
    Vfrom,
    Vfromitem,
    Vinpnt
  },
  data() {
    return {
      model:{
        username: 'sss',
        password:''
      },
      rules:{
        username:[
         {required:true, message:'请输入姓名'},
        ],
        password:[
         {required:true, message:'请输入密码'},
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.from.validator((isvalid)=>{
        // console.log(isvalid, 'isvalid')
        // if(isvalid) {
        //   console.log('验证通过')
        // } else {
        //   console.log('验证失败')
        // }
        // this.$notice({
        //   title:'校验结果',
        //   message:isvalid?'验证通过':'验证失败',
        //   duration:2000
        // }).show()
        // console.log(isvalid,'isvalid')
          this.$notice({
            title: '校验结果',
            message: isvalid ? '请求登录' : '校验失败',
            duration: 2000
          }).show()
      })
    }
  }
}
</script>
<style>

</style>
