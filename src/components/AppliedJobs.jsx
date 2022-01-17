import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getapplyJobsError, getapplyJobsLoading, getapplyJobsSuccess } from "../features/applyjobs/actions";
import "./Dashboard.css";
import { UserNavbar } from "./UserNavbar";

export const AppliedJobs = () => {

    const dispatch = useDispatch();

    const { loading, jobs, error } = useSelector((state) => ({
        loading: state.applyJobsState.loading,
        jobs: state.applyJobsState.jobs,
        error: state.applyJobsState.error,
    }));

    useEffect(() => {
        getJobs();
    }, []);

    function getJobs() {
        dispatch(getapplyJobsLoading())
        fetch("http://localhost:3001/apply")
        .then((d) => d.json())
        .then((res) => {
            dispatch(getapplyJobsSuccess(res));
        })
        .catch((err) => {
            dispatch(getapplyJobsError());
        })
    }

    return (
        <div>
            <UserNavbar />
            <h2>Applied Jobs</h2>
            {jobs.map((e) => (
                <div className="jobApplyBox">
                    <div>Company: {e.company_name}</div>
                    <div>Title: {e.job_title}</div>
                    <div>Salary: {e.salary}</div>
                    <div>Description: {e.description}</div>
                    <div>Location: {e.location}</div>
                    <div>Type: {e.job_type}</div>
                </div>
            ))}
        </div>
    )
}