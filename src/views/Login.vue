<template>
    <el-card style="max-width: 360px" class="box-card">
      <h2>后台管理系统</h2>
      <el-form
          ref="loginRef"
          :model="loginInfo"
          :rules="rules"
          status-icon
          label-width="auto"
      >
          <el-form-item prop="username">
              <el-input 
              v-model="loginInfo.username" 
              :prefix-icon="User" 
              placeholder="请输入用户名" 
              clearable />
          </el-form-item>
  
          <el-form-item prop="password">
              <el-input 
              v-model="loginInfo.password" 
              type="password" 
              autocomplete="off" 
              placeholder="请输入密码" 
              :prefix-icon="Lock" 
              show-password />
          </el-form-item>
              
          <el-form-item>
              <el-button 
              type="primary" 
              @click="submitForm" 
              :disabled=isDisableLoginButton>
                  登陆
              </el-button>
          </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { User, Lock } from '@element-plus/icons-vue'
  import { ref, reactive, watch } from 'vue';
  
  let isDisableLoginButton = ref(true)
  
  const loginInfo = reactive({
      username: '',
      password: '',
  })
  
  const loginRef = ref()
  const rules = reactive({
      username: [
          { required: true, message: 'Please input active name', trigger: blur },
          { min: 3, max: 5, message: 'Length must be 3 to 5', trigger: blur },
      ],
      password: [
          { required: true, message: 'Please input password', trigger: blur },
          { min: 3, max: 16, message: 'Length must be 3 to 16', trigger: blur },
      ],
  })
  
  watch([()=>loginInfo.username, ()=>loginInfo.password], ()=>{
      loginRef.value.validate((valid)=>{
          if (valid) {
              isDisableLoginButton.value = false
          } else{
              isDisableLoginButton.value = true
          }
      })
  })

  const submitForm = ()=>{
    console.log(loginInfo.username);
    console.log(loginInfo.password); 
  }


  </script>
  
  <style lang="scss" scoped>
    .text {
      font-size: 14px;
    }
    .item {
      padding: 18px, 0;
    }
    .box-card {
      width: 480px;
    }
  </style>