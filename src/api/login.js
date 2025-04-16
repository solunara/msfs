import { API_CONFIG, CONFIG } from "../config/api.js";
import request  from "../api/index.js";

export const login = (username, password)=>{
    return request(API_CONFIG.loginApi, {username, password}, "post", "2000")
}
