<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <span>用户列表</span>
                <el-button class="button" @click="addUser">添加</el-button>
            </div>
        </template>
        <el-table
            v-loading="loading"
            :data="items"
            style="width: 100%; height: 100%"
        >
            <el-table-column sortable fixed property="id" label="Id" min-width="116" />
            <el-table-column property="name" label="Name" width="180" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="phone" label="Phone" width="120" />
            <el-table-column prop="ctime" label="Ctime" width="120" />
            <el-table-column fixed="right" label="Operations" min-width="120">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="onEdit(scope.row)">
                    编辑
                </el-button>
                <el-button link type="warning" size="small" @click="confirmDelete(scope.row)">
                    删除
                </el-button>
            </template>
            </el-table-column>
        </el-table>
        <!-- <template #footer>Footer content</template> -->
    </el-card>
    <el-dialog
        v-model="addUserDialog"
        title="添加用户"
        width="20%"
    >
        <Add></Add>
    </el-dialog>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { onBeforeMount, reactive, toRefs, ref } from 'vue'
import { getUserListHandler, deleteUserHandler } from '../../api/user.js'
import Add from './Add.vue'

const loading = ref(true)
const userList=reactive({
    items: []
})
const addUserDialog = ref(false)

onBeforeMount(()=>{
    getUserList()
})

const getUserList = ()=>{
    getUserListHandler()
    .then((response)=>{
        if(response.data.code===200){
            userList.items=response.data.data
        }else{
            ElMessage.error('Oops, '+response.data.msg)
        }
    })
    setTimeout(() => {
        loading.value=false
    }, 500);
}

const {items} = toRefs(userList)


const onDel = (id)=>{
    loading.value=true
    deleteUserHandler(id)
    .then((response)=>{
        if(response.data.code===200){
            ElMessage({
                type: "success",
                message: response.data.msg,
            })
        }else{
            ElMessage.error('Oops, '+response.data.msg)
        }
    })
    setTimeout(() => {
        loading.value=false
    }, 500);
}

const confirmDelete = (user) => {
  ElMessageBox.confirm(
    '请确认删除的用户: '+user.name,
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
    }
  )
    .then(() => {
      onDel(user.id)
    })
    .catch(() => {
    })
}
const addUser = ()=>{
    addUserDialog.value = true
}

</script>

<style lang="scss" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
</style>