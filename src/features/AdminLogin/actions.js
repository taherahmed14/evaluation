import { ADMIN_LOGIN_LOADING, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_ERROR } from "./actionTypes";

export const adminLoginLoading = () => {
    return {
        type:ADMIN_LOGIN_LOADING
    } 
}

export const adminLoginSuccess = (data) => {
    return {
        type:ADMIN_LOGIN_SUCCESS,
        payload: data
    } 
}

export const adminLoginError = () => {
    return {
        type:ADMIN_LOGIN_ERROR
    } 
}