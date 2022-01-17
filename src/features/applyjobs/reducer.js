import { APPLY_JOBS_ERROR, APPLY_JOBS_LOADING, APPLY_JOBS_SUCCESS, GET_APPLY_JOBS_ERROR, GET_APPLY_JOBS_LOADING, GET_APPLY_JOBS_SUCCESS } from "./actionTypes";

const init = { loading: false, jobs: [], error: false };
export const reducer = (state = init, {type, payload}) => {
    switch(type) {
        case APPLY_JOBS_LOADING:
            return {
                ...state,
                loading: true,
            }
        
        case APPLY_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, payload],
            }
        
        case APPLY_JOBS_ERROR:
            return {
                ...state,
                error: true,
            }

        case GET_APPLY_JOBS_LOADING:
            return {
                ...state,
                loading: true,
            }
        
        case GET_APPLY_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: payload,
            }
        
        case GET_APPLY_JOBS_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state;
    }
}