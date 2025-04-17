<template>
    <el-header class="el-header">
        <el-button @click="collapseChange">
            <el-icon size="20px" v-if="!isCollapse">
                <Fold />
            </el-icon>
            <el-icon size="20px" v-else>
                <Expand />
            </el-icon>
        </el-button>
        <el-button @click="confirmLogout">
            <el-icon size="20px"><SwitchButton /></el-icon>
        </el-button>
    </el-header>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import { SwitchButton, Fold, Expand } from '@element-plus/icons-vue'
import { logoutApi } from '../../../api/login.js'
import { CONFIG } from '../../../config/api.js'
import { useRouter } from 'vue-router'
import { useIsCollapse } from '../../../store/index.js'
import { storeToRefs } from 'pinia'
const { isCollapse } = storeToRefs(useIsCollapse())
const router = useRouter()

const confirmLogout = ()=>{
    ElMessageBox.confirm(
    '是否退出登陆？',
    {
      confirmButtonText: '是',
      cancelButtonText: '否',
      type: 'warning',
      draggable: true,
    }
  )
    .then(async () =>  {
       await logoutApi()
        window.localStorage.removeItem(CONFIG.TOKEN_NAME)
        router.replace('/login')
    })
}

const collapseChange = ()=>{
    const isCollapse  = useIsCollapse()
    isCollapse.changeIsCollapse()
}
</script>

<style lang="less" scoped>
.el-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    button {
        border: 0;
    }
}
</style>