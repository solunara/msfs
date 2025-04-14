<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>hello vue</h1>
  <p><router-link to="/index">去首页</router-link></p>
  <router-view></router-view>
</template>

<style scoped>

</style>
