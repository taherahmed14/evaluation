import { ADMIN_LOGIN_ERROR, ADMIN_LOGIN_LOADING, ADMIN_LOGIN_SUCCESS } from "./actionTypes"

const init = { loading: false, adminLogin: false, error: false }
export const reducer = (state = init, {type, payload}) => {
    switch(type){
        case ADMIN_LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }

        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                adminLogin: payload
            }

        case ADMIN_LOGIN_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state;
    }
}