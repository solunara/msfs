import { defineStore } from "pinia";

export const useStoreDemo = defineStore('storeDemo',{
    state:()=>{
        return {
            msg: 'hello pinia',
        }
    },
    getters: {},
    actions: {
        changeMsgValue(newValue) {
            this.msg=newValue
        }
    },
})