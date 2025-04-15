<template>
    <el-aside width="240px" style="border-right: 1px solid #cccccc;">
        <!-- logo -->
        <div class="aside-logo">
            <router-link to="/">
                <el-button text style="font-size: 24px;">
                    <el-icon size="24px" style="margin-right: 10px;"><MostlyCloudy /></el-icon>
                    default
                </el-button>
            </router-link>
        </div>
        <!-- menu -->
         <div id="menu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <template #title>Navigator Two</template>
                    </el-menu-item>
                </el-sub-menu>
                
                <el-menu-item index="3">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
            </el-menu>
         </div>
    </el-aside>
</template>

<script setup>
  import { MostlyCloudy } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.aside-logo {
    height: 50px;
    button {
        width: 100%;
        height: 100%;
    }
}
</style>