import { API_CONFIG, CONFIG } from "../config/api.js";
import request  from "./index.js";

export const getUserListHandler = (pageIndex=0, pageSize=10)=>{
    return request(API_CONFIG.getUserListApi, {pageIndex, pageSize}, "get", "2000")
}

export const deleteUserHandler = (id)=>{
    return request(API_CONFIG.deleteUserApi, {id}, "post", "2000")
}

export const addUserHandler = (userForm)=>{
    return request(API_CONFIG.addUserApi, {'username': userForm.username, 'address': userForm.address,'phone': userForm.phone}, "post", "2000")
}

export const updateUserHandler = (userForm)=>{
    return request(API_CONFIG.updateUserApi, {'username': userForm.username, 'address': userForm.address,'phone': userForm.phone}, "post", "2000")
}