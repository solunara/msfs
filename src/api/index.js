import axios from 'axios'

// axios 全局配置
axios.defaults.baseURL='/api'

const request = (url='', data={}, method='get', timeout='5000')=>{
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

// axios 请求拦截器
axios.interceptors.request.use(
    (config)=>{
        // 请求之前的处理
        //config.headers.Authorization = '<your token>'
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
        return config
    },
    (error)=>{
        // 请求后出现错误时的处理
        return Promise.reject(error)
    },
)

// axios 响应拦截器
axios.interceptors.response.use(
    (response)=>{
        // 2xx 范围内的响应会触发该函数
        if(response.data.code === 200){
            console.log('code is 200');
            return Promise.resolve(response)
        }else if(response.data.code === 401){
            console.log('token is expired');
            // todo: 跳转到登录页
        }
        return response
    },
    (error)=>{
        // 不是 2xx 的响应码会触发该函数
        return Promise.reject(error)
    },
)

export default request