import { JOBS_ERROR, JOBS_GET_ERROR, JOBS_GET_LOADING, JOBS_GET_SUCCESS, JOBS_LOADING, JOBS_SUCCESS } from "./actionTypes"

export const jobsLoading = () => {
    return {
        type:JOBS_LOADING
    } 
};

export const jobsSuccess = (data) => {
    return {
        type:JOBS_SUCCESS,
        payload: data
    } 
};

export const jobsError = () => {
    return {
        type:JOBS_ERROR
    } 
};

export const jobsGetLoading = () => {
    return {
        type:JOBS_GET_LOADING
    } 
}

export const jobsGetSuccess = (data) => {
    return {
        type:JOBS_GET_SUCCESS,
        payload: data
    } 
}

export const jobsGetError = () => {
    return {
        type:JOBS_GET_ERROR
    } 
}