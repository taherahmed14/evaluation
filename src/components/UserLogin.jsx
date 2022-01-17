import { Navbar } from "./Navbar"
import { useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLoginSuccess } from "../features/UserLogin/actions";

export const UserLogin = () => {

    const [form, setForm] = useState({});

    const { loading, userLogin, error } = useSelector((state) => ({
        loading: state.userLoginState.loading,
        userLogin: state.userLoginState.userLogin,
        error: state.userLoginState.error,
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
            dispatch(userLoginSuccess(true));
        }
        else{
            alert("Enter valid credentials");
        }
    }

    if(userLogin) {
        return <Navigate to={"/user"} />
    }
    return (
        <div>
            <Navbar />
            <h2>User Login</h2>
            <input onChange={handleChange} name="email" type="text" placeholder="Enter Email" />
            <input onChange={handleChange} name="password" type="text" placeholder="Enter Password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}