import { APPLY_JOBS_ERROR, APPLY_JOBS_LOADING, APPLY_JOBS_SUCCESS, GET_APPLY_JOBS_ERROR, GET_APPLY_JOBS_LOADING, GET_APPLY_JOBS_SUCCESS } from "./actionTypes"

export const applyJobsLoading = () => {
    return {
        type:APPLY_JOBS_LOADING
    } 
};

export const applyJobsSuccess = (data) => {
    return {
        type:APPLY_JOBS_SUCCESS,
        payload: data
    } 
};

export const applyJobsError = () => {
    return {
        type:APPLY_JOBS_ERROR
    } 
};

export const getapplyJobsLoading = () => {
    return {
        type:GET_APPLY_JOBS_LOADING
    } 
};

export const getapplyJobsSuccess = (data) => {
    return {
        type:GET_APPLY_JOBS_SUCCESS,
        payload: data
    } 
};

export const getapplyJobsError = () => {
    return {
        type:GET_APPLY_JOBS_ERROR
    } 
};
