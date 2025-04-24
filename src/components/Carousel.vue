<template>
    <div class="banner">
        <img v-for="(v,i) in imgData" :src="`/src/assets/img/${v}`" v-show="n==i" :key="i"/>
        <div class="banner-circle">
            <ul>
                <li :class="{'selected':n==i}" v-for="(v,i) in imgData" :key="i"></li>  
            </ul> 
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted,onUnmounted,defineProps } from "vue";
let n = ref(0); 
const imgData = ref(['1.jpg','2.jpg','3.jpg']); //组件中的定义
//数据从父传入
// const {imgData} = defineProps({
//     imgData:{
//         type:Array, //类型
//         default:()=>['3.jpg']  //默认值
//     }
// })
let timer = null;

const autoPlay=()=>{
    n.value+=1;
    if(n.value>=imgData.value.length){
        n.value = 0;
    }
}
const play = ()=>{
    timer = setInterval(autoPlay,2000);
}
//挂载完成
onMounted(()=>{
    play();
})
//销毁
onUnmounted(()=>{
    clearInterval(timer);
})
</script>

<style>
ul {
    list-style: none;
    margin:0;
    padding:0;
}
.banner {
    position: relative;
    width:800px;
}
.banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:6px;
    margin:4px;
}
.banner .banner-circle ul {
    text-align: center;
}
.banner .banner-circle .selected {
    background: #ff304e;
}
.banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
  
  
  