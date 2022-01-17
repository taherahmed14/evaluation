import { USER_LOGIN_ERROR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } from "./actionTypes"

const init = { loading: false, userLogin: false, error: false }
export const reducer = (state = init, {type, payload}) => {
    switch(type){
        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userLogin: payload
            }

        case USER_LOGIN_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state;
    }
}