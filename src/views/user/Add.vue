<template>
    <el-form ref="userFromRef" :model="userFrom"  v-loading="loading">
        <el-form-item prop="username" label="姓名" label-width="64px">
            <el-input v-model="userFrom.username" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="address" label="地址" label-width="64px">
            <el-input v-model="userFrom.address" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号" label-width="64px">
            <el-input v-model="userFrom.phone" autocomplete="off" />
        </el-form-item>
        <div class="userFrom-button">
            <el-button @click="clearFormValue">清空</el-button>
            <el-button type="primary" @click="addUser">
            提交
            </el-button>
        </div>
    </el-form>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
import { ElMessage } from 'element-plus'
import { addUserHandler } from '../../api/user.js'
const loading = ref(false)
const userFromRef = ref()
const data = reactive({
    userFrom:{
        username: '',
        address: '',
        phone: '',
    }
})
const {userFrom}=toRefs(data)

const clearFormValue = () => {
    userFromRef.value.resetFields()
}

const emit = defineEmits(['isRefreshUserList'])

const addUser = ()=>{
    loading.value=true
    addUserHandler(data.userFrom)
    .then((response)=>{
        if(response.data.code===200){
            emit('isRefreshUserList', true)
            ElMessage({
                type: 'success',
                message: response.data.msg,
            })
        }else{
            ElMessage.error('Oops, '+response.data.msg)
        }
        loading.value=false
    })
    .catch((error)=>{
        ElMessage.error('Oops, '+error)
        loading.value=false
    })
}
</script>

<style lang="scss" scoped>

</style>