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