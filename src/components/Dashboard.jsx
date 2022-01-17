import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobsError, jobsGetError, jobsGetLoading, jobsGetSuccess, jobsLoading, jobsSuccess } from "../features/jobs/actions";
import { AdminNavbar } from "./AdminNavbar";
import "./Dashboard.css";

export const Dashboard = () => {
    const [form, setForm] = useState({});

    const dispatch = useDispatch();

    const { loading, jobs, error } = useSelector((state) => ({
        loading: state.jobsState.loading,
        jobs: state.jobsState.jobs,
        error: state.jobsState.error,
    }));

    useEffect(() => {
        getJobs();
    }, []);

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    async function getJobs() {
        fetch("http://localhost:3001/posts")
        .then((d) => d.json())
        .then((res) => {
            dispatch(jobsGetSuccess(res));
        })
        .catch((err) => {
            dispatch(jobsGetError());
        })
    }

    const handleSubmit = () => {
        dispatch(jobsLoading());
        fetch("http://localhost:3001/posts", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((d) => d.json())
        .then((res) => {
            dispatch(jobsSuccess(res));
            getJobs();
        })
        .catch((err) => {
            dispatch(jobsError());
        })
    };

    return (
        <div>
            <AdminNavbar />
            <div className="inputBox"> 
                <input onChange={handleChange} name="company_name" type="text" placeholder="Enter Company name" />
                <input onChange={handleChange} name="job_title" type="text" placeholder="Enter Job Title" />
                <input onChange={handleChange} name="salary" type="text" placeholder="Enter Salary" />
                <input onChange={handleChange} name="description" type="text" placeholder="Enter description" />
                <input onChange={handleChange} name="location" type="text" placeholder="Enter location" />
                <input onChange={handleChange} name="job_type" type="text" placeholder="Enter Job type" />
                <button onClick={handleSubmit}>Post Job</button>
            </div>
    
            {jobs.map((e) => (
                <div className="jobListingBox">
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
};