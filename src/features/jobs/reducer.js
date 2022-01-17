import { JOBS_ERROR, JOBS_GET_ERROR, JOBS_GET_LOADING, JOBS_GET_SUCCESS, JOBS_LOADING, JOBS_SUCCESS } from "./actionTypes";

const init = { loading: false, jobs: [], error: false };
export const reducer = (state = init, {type, payload}) => {
    switch(type) {
        case JOBS_LOADING:
            return {
                ...state,
                loading: true,
            }
        
        case JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, payload],
            }
        
        case JOBS_ERROR:
            return {
                ...state,
                error: true,
            }

        case JOBS_GET_LOADING:
            return {
                ...state,
                loading: true,
            }

        case JOBS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: payload,
            }

        case JOBS_GET_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state;
    }
}