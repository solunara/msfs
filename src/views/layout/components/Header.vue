<template>
    <el-header class="el-header">
        <!-- 折叠/打开菜单 -->
        <el-button @click="collapseChange" class="fole_expand">
            <el-icon size="20px" v-if="!isCollapse">
                <Fold />
            </el-icon>
            <el-icon size="20px" v-else>
                <Expand />
            </el-icon>
        </el-button>
        <!-- 语言切换 -->
        <el-dropdown split-button type="primary">
            <el-button type="primary" class="langBtn" >
                {{ $t(`messages.switchLanguage`) }}
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item @click="changeLanguage('zh')">简体中文</el-dropdown-item>
                <el-dropdown-item @click="changeLanguage('en')">English</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- 退出登录 -->
        <el-button @click="confirmLogout" type="danger">
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

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

const changeLanguage = (langType)=>{
    locale.value = langType;
    localStorage.setItem('lang', type); // 缓存到本地
}
</script>

<style lang="less" scoped>
.el-header {
    display: flex;
    height: 50px;
    align-items: center;
    .fole_expand {
        margin-right: auto;
    }
    button {
        border: 0;
    }
}
.langBtn {
    height: 32px;
    width: 78px;
}
</style>