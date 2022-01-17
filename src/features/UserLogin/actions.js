import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./actionTypes";

export const userLoginLoading = () => {
    return {
        type:USER_LOGIN_LOADING
    } 
}

export const userLoginSuccess = (data) => {
    return {
        type:USER_LOGIN_SUCCESS,
        payload: data
    } 
}

export const userLoginError = () => {
    return {
        type:USER_LOGIN_ERROR
    } 
}