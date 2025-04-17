import axios from 'axios'
import { CONFIG } from '../config/api.js'
import router from '../router/index.js'
import { ElMessage } from 'element-plus'

// axios 全局配置
// axios.defaults.baseURL='/api/ms'

const request = (url='', data={}, method='get', timeout='3000')=>{
    return new Promise((resolve, reject)=>{
        const methodLower = method.toLowerCase()
        if(methodLower === 'get'){
            axios({
                method: methodLower,
                params: data,
                timeout: timeout,
                url: url,
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        }else if(methodLower === 'post'){
            axios({
                method: methodLower,
                data: data,
                timeout: timeout,
                url: url,
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        }
    })
}

// axios 全局请求拦截器
axios.interceptors.request.use(
    (config)=>{
        // 请求之前的处理
        // 解决get请求缓存问题，给每个请求加个时间戳
        if (config.method == 'get') {
            let timeStamp = (new Date()).getTime()
            if (config.params){
                config.params.timeStamp=timeStamp
            }else{
                config.params = {
                    timeStamp: timeStamp,
                }
            }
        }

        // 设置token
        let TokenValue = ''
        try{
            TokenValue = window.localStorage.getItem(CONFIG.TOKEN_NAME)
        }catch(error){
            TokenValue = ''
        }
        if (TokenValue == '' || TokenValue == undefined){
            config.headers[CONFIG.TOKEN_NAME]=''
        }else{
            config.headers[CONFIG.TOKEN_NAME]=TokenValue
        }

        return config
    },
    (error)=>{
        // 请求后出现错误时的处理
        return Promise.reject(error)
    },
)

// axios 全局响应拦截器
axios.interceptors.response.use(
    (response)=>{
        // 2xx 范围内的响应会触发该函数
        if(response.data.code === 200){
            return Promise.resolve(response)
        }else if(response.data.code === 401){
            console.log('token is expired');
            ElMessage({
                type: "warning",
                message: response.data.msg,
            })
            // 删除token
            window.localStorage.removeItem(CONFIG.TOKEN_NAME)
            // 如果不是登录页，则跳转到登录页
            if (router.currentRoute.path != '/login'){
                router.replace('/login')
            }
        }
        return response
    },
    (error)=>{
        // 不是 2xx 的响应码会触发该函数
        ElMessage({
            type: "error",
            message: "请求错误： "+error.message
        })
        return Promise.reject(error)
    },
)

export default request