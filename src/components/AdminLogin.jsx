import { useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { adminLoginSuccess } from "../features/AdminLogin/actions";
import { Navbar } from "./Navbar";

export const AdminLogin = () => {

    const [form, setForm] = useState({});

    const { loading, adminLogin, error } = useSelector((state) => ({
        loading: state.adminLoginState.loading,
        adminLogin: state.adminLoginState.adminLogin,
        error: state.adminLoginState.error,
    }));

    const dispatch = useDispatch();

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if(form.email.length > 0 && form.password.length > 0){
            dispatch(adminLoginSuccess(true));
        }
        else{
            alert("Enter valid credentials");
        }
    }

    if(adminLogin) {
        return <Navigate to={"/admin"} />
    }

    return (
        <div>
            <Navbar />
            <h2>Admin Login</h2>
            <input onChange={handleChange} name="email" type="text" placeholder="Enter Email" />
            <input onChange={handleChange} name="password" type="text" placeholder="Enter Password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}