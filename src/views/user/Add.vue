<template>
    <el-form ref="userFromRef" :model="userFrom">
        <el-form-item prop="username" label="姓名" label-width="64px">
            <el-input v-model="userFrom.username" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="address" label="地址" label-width="64px">
            <el-input v-model="userFrom.address" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号" label-width="64px">
            <el-input v-model="userFrom.phone" autocomplete="off" />
        </el-form-item>
        <div class="dialog-footer">
            <el-button @click="clearFormValue()">清空</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
            提交
            </el-button>
        </div>
    </el-form>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
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
</script>

<style lang="scss" scoped>

</style>