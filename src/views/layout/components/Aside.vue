<template>
    <el-aside :style="{width: isCollapse?'65px':'240px'}" style="border-right: 1px solid #cccccc;">
        <!-- logo -->
        <div class="aside-logo">
            <router-link to="/">
                <el-button text style="font-size: 24px;">
                    <el-icon size="24px" style="align-items: center"><House /></el-icon>
                    <span v-show="!isCollapse">{{$t('messages.home')}}</span>
                </el-button>
            </router-link>
        </div>
        <!-- menu -->
         <div id="menu">
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="$route.path"
                :collapse="isCollapse"
                :collapse-transition="false"
                router
            >
                <el-sub-menu v-for="menu in MENU_CONFIG" :key="menu.index" :index="menu.index">
                    <template #title>
                        <el-icon><span :class="menu.icon"></span></el-icon>
                        <span>{{ $t(`messages.${menu.key}`) }}</span>
                    </template>
                    <template v-if="menu.items">
                        <el-menu-item v-for="item in menu.items" :key="item.index" :index="item.index">
                            <template #title>
                                <el-icon><span :class="item.icon"></span></el-icon>
                                <span>{{ $t(`messages.${item.key}`) }}</span>
                            </template>
                        </el-menu-item>
                    </template>
                    <template v-else>
                        <el-sub-menu v-for="submenu in menu.subMenu" :key="submenu.index" :index="submenu.index">
                            <template #title>
                                <el-icon><span :class="submenu.icon"></span></el-icon>
                                <span>{{ $t(`messages.${submenu.key}`) }}</span>
                            </template>
                            <template v-if="submenu.items">
                                <el-menu-item v-for="submenuitem in submenu.items" :key="submenuitem.index" :index="submenuitem.index">
                                    <template #title>
                                        <el-icon><span :class="submenuitem.icon"></span></el-icon>
                                        <span>{{ $t(`messages.${submenuitem.key}`) }}</span>
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
import { House } from '@element-plus/icons-vue'
import { MENU_CONFIG } from '../../../config/menu.js'
import '../../../assets/iconfont/iconfont.css'
import { ref,toRefs } from 'vue'
import { useIsCollapse } from '../../../store/index.js'
import { storeToRefs } from 'pinia'
const { isCollapse } = storeToRefs(useIsCollapse())
</script>

<style lang="less" scoped>
.aside-logo {
    height: 50px;
    button {
        width: 100%;
        height: 100%;
    }
}
.el-aside {
    transition: width 0.15s;
    -webkit-transition: width 0.15s;
    -moz-transition: width 0.15s;
    -webkit-transition: width 0.15s;
    -o-transition: width 0.15s;
}
</style>