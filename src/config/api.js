const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_CONFIG = {
    // login
    loginApi: `${BASE_URL}/login`,
    logoutApi: `${BASE_URL}/logout`,

    // user
    getUserListApi: `${BASE_URL}/user/list`,
    deleteUserApi: `${BASE_URL}/user/delete`,
    addUserApi: `${BASE_URL}/user/add`,
    updateUserApi: `${BASE_URL}/user/update`,
<<<<<<< HEAD
    
=======
>>>>>>> main
}

export const CONFIG = {
    TOKEN_NAME: 'Authorization',
}