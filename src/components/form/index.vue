<template>
  <div>
    <k-form :model="model" :rules="rules" ref="form">
      <k-form-item
        prop="username"
        label="用户名"
      >
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item 
        prop="password"
        label="密码"
      >
        <k-input  v-model="model.password"></k-input>
      </k-form-item>
      <button @click="login">提交按钮</button>
    </k-form>
    {{model}}
  </div>
</template>

<script>
import kForm from './kForm';
import KFormItem from './KFormItem';
import KInput from './KInput';
// 数据的双向绑定
// 设置 验证规则
// 提交按钮点击触发  
export default {
  name:'index',
  data() {
    return {
      model:{
        username:'ss',
        password:''
      },
      // 验证规则 async-validator
      rules:{
        username:[
          {required: true, message: '请输入用户名'},
        ],
        password:[
          {required: true, message: '请输入密码'}
        ]
      }
    }
  },
  components:{
    kForm,
    KFormItem,
    KInput
  },
  methods:{
    login:function(){
      // console.log('434')
      this.$refs.form.validate(isVaild => {
        if(isVaild){
          console.log('登陆成功')
        }else{
          console.log('登陆失败')
        }
      })
    }
  }
}
</script>
<style>

</style>


