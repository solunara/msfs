<template>
    <div class='shuttle'>
        <!--源数据-->
        <div class="">
            <div class="panel">
                <div class="panel-title">
                    <!-- 全选功能 -->
                    <input type="checkbox" v-model="checkAll" @change="checkAllChange"/>
                    <!-- 模糊匹配 -->
                    <input type="text" placeholder="请输入内容" v-model="searchInput"/>
                    <span class="pull-right">{{seletedNum(searchData)}}/{{ searchData.length }}</span>
                </div>
                <div class="panel-body">
                    <ul>
                        <li v-for="(v,i) in searchData" :key="i">
                            <label>
                                <input type="checkbox" v-model="v.check"  @change="checkChange">{{ v.title }}
                            </label>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <!--按钮-->
        <div class="button-btn">
            <button class="btn" @click="toLeft"> 向左 ←</button>
            <button class="btn" @click="toRight"> 向右 →</button>
        </div>
        <!--目标数据-->
        <div class="">
            <div class="panel">
                <div class="panel-title">
                    <span class="pull-right">{{seletedNum(rightData)}}/{{ rightData.length }}</span>
                </div>
                <div class="panel-body">
                    <ul>
                        <li v-for="(v,i) in rightData" :key="i">
                            <label>
                                <input type="checkbox" v-model="v.check">{{ v.title }}
                            </label>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,computed} from 'vue'
const leftData = ref([
    {title:'苹果',check:true},
    {title:'香蕉',check:false},
    {title:'火龙果',check:false},
    {title:'车厘子',check:true},
    {title:'西瓜',check:false},
    {title:'香瓜',check:false},
    {title:'香梨',check:false},
    {title:'猕猴桃',check:false},
    {title:'桃子',check:false},
]);
const rightData = ref([]);
let checkAll = ref(false);
let searchInput = ref('');

//向右
const toRight = ()=>{
    //check为true的数据
    let checkData = leftData.value.filter(v=>v.check); 
    rightData.value.push(...checkData); 
    leftData.value = leftData.value.filter(v=>!v.check);
}
//向左
const toLeft = ()=>{
    //check为true的数据
    let checkData = rightData.value.filter(v=>v.check); 
    leftData.value.push(...checkData); 
    rightData.value = rightData.value.filter(v=>!v.check);
}
//当前选中数量
const seletedNum = computed(()=>d=>d.filter(v=>v.check).length);
//全选的状态
const checkAllChange = ()=>{
    leftData.value.forEach(item=>item.check=checkAll.value);
}
//子选项的状态
const checkChange = ()=>{
    checkAll.value  = leftData.value.every(v=>v.check);
}
//模糊查询
const searchData = computed(()=>leftData.value.filter(v=>v.title.includes(searchInput.value)));
</script>

<style scoped>
ul,li {
padding:0;
margin:0;
list-style:none;
}
.shuttle {
    width: 800px;
    margin: 0 auto;
}
.panel {
    width: 300px;
    border: 1px solid #333;
    border-radius: 5px;
    height: 300px;
}
.panel-title {
    padding: 10px;
    background: #f7f7f7;
    border-bottom: 1px solid #333;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    height: 20px;
}
.panel-title input[type="text"]{
    border:none;
    background: none;
}
.panel-title .pull-right {
    float: right;
}
.shuttle {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.button-btn .btn {
    display: block;
    margin: 10px 0;
}
</style>