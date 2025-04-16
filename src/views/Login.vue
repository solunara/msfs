<template>
    <div id="login" style="width: 100vw;">
        <el-card style="max-width: 360px" class="box-card">
        <h2>后台管理系统</h2>
        <el-form
            ref="loginRef"
            :model="loginInfo"
            :rules="rules"
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
    </div>
</template>
  
<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive, watch } from 'vue';
import { ElMessage } from 'element-plus'
import { login } from '../api/login.js'
import { CONFIG  } from '../config/api.js'
import { useRouter } from 'vue-router'

const router = useRouter()
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

// 登陆
const submitForm = ()=>{
    login(loginInfo.username, loginInfo.password)
    .then((response)=>{
        if(response.data.code===200){
            const token = response.data.data.token
            window.localStorage.setItem(CONFIG.TOKEN_NAME, token)
            ElMessage({
                message: 'Congrats, '+response.data.msg,
                type: 'success',
            })
            router.replace('/')
        }else{
            ElMessage.error('Oops, '+response.data.msg)
        }
    })
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
        margin: 0 auto;
    }
</style>