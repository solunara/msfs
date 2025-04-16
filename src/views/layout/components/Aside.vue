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
                router
            >
                <el-sub-menu v-for="menu in MENU_CONFIG" :key="menu.index" :index="menu.index">
                    <template #title>
                        <el-icon><span :class="menu.icon"></span></el-icon>
                        <span>{{ menu.title }}</span>
                    </template>
                    <template v-if="menu.items">
                        <el-menu-item v-for="item in menu.items" :key="item.index" :index="item.index">
                            <template #title>
                                <el-icon><span :class="item.icon"></span></el-icon>
                                <span>{{ item.title }}</span>
                            </template>
                        </el-menu-item>
                    </template>
                    <template v-else>
                        <el-sub-menu v-for="submenu in menu.subMenu" :key="submenu.index" :index="submenu.index">
                            <template #title>
                                <el-icon><span :class="submenu.icon"></span></el-icon>
                                <span>{{ submenu.title }}</span>
                            </template>
                            <template v-if="submenu.items">
                                <el-menu-item v-for="submenuitem in submenu.items" :key="submenuitem.index" :index="submenuitem.index">
                                    <template #title>
                                        <el-icon><span :class="submenuitem.icon"></span></el-icon>
                                        <span>{{ submenuitem.title }}</span>
                                    </template>
                                </el-menu-item>
                            </template>
                        </el-sub-menu>
                    </template>
                </el-sub-menu>
            </el-menu>
         </div>
    </el-aside>
</template>

<script setup>
import { MostlyCloudy } from '@element-plus/icons-vue'
import { MENU_CONFIG } from '../../../config/menu.js'
import '../../../assets/iconfont/iconfont.css'
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