<template>
  <div class="common-layout">
    <el-container class="el-container">
        <Aside></Aside>
      <el-container class="el-container__el-container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<style lang="less" scoped>
.el-container {
    height: 100vh;
    width: 100vw;
    .el-container__el-container {
        display: flex;
        flex-direction: column;
    }
}

</style>