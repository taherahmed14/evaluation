import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobsGetError, jobsGetSuccess } from "../features/jobs/actions";
import "./Dashboard.css";
import { UserNavbar } from "./UserNavbar";

export const UserDashboard = () => {

    const dispatch = useDispatch();

    const { loading, jobs, error } = useSelector((state) => ({
        loading: state.jobsState.loading,
        jobs: state.jobsState.jobs,
        error: state.jobsState.error,
    }));

    useEffect(() => {
        getJobs();
    }, []);

    function getJobs() {
        fetch("http://localhost:3001/posts")
        .then((d) => d.json())
        .then((res) => {
            dispatch(jobsGetSuccess(res));
        })
        .catch((err) => {
            dispatch(jobsGetError());
        })
    }

    const handleSubmit = (id) => {
        fetch(`http://localhost:3001/posts?id=${id}`)
        .then((d) => d.json())
        .then((res) => {
            postAppliedData(res);
        })
    }

    function postAppliedData(form) {
        fetch("http://localhost:3001/apply", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((d) => d.json())
        .then((res) => {
            //dispatch(jobsSuccess(res));
            //getJobs();
        })
        .catch((err) => {
            //dispatch(jobsError());
        })
    };

    return (
        <div>
            <UserNavbar />
            <h2>Welcome User</h2>
            {jobs.map((e) => (
                <div className="jobApplyBox">
                    <div>Company: {e.company_name}</div>
                    <div>Title: {e.job_title}</div>
                    <div>Salary: {e.salary}</div>
                    <div>Description: {e.description}</div>
                    <div>Location: {e.location}</div>
                    <div>Type: {e.job_type}</div>
                    <button onClick={() => {handleSubmit(e.id)}}>Apply</button>
                </div>
            ))}
        </div>
    )
};