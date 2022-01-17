import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoginSuccess } from "../features/UserLogin/actions";

export const UserNavbar = () => {

    const { loading, userLogin, error } = useSelector((state) => ({
        loading: state.userLoginState.loading,
        userLogin: state.userLoginState.userLogin,
        error: state.userLoginState.error,
    }));

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLoginSuccess(false));
    }

    return (
        <div className="navbar">
            <Link className="buttons" to={"/user"}>All Jobs</Link>
            <Link className="buttons" to={"/appliedJobs"}>Applied Jobs</Link>
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
        </div>
    )
}