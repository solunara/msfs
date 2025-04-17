import { defineStore } from "pinia";

export const useIsCollapse = defineStore('isCollapse',{
    state:()=>{
        return {
            isCollapse: false,
        }
    },
    getters: {},
    actions: {
        changeIsCollapse() {
            this.isCollapse=!this.isCollapse
        }
    },
})