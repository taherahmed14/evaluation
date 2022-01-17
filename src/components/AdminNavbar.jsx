import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adminLoginSuccess } from "../features/AdminLogin/actions";

export const AdminNavbar = () => {

    const { loading, adminLogin, error } = useSelector((state) => ({
        loading: state.adminLoginState.loading,
        adminLogin: state.adminLoginState.adminLogin,
        error: state.adminLoginState.error,
    }));

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(adminLoginSuccess(false));
    }

    return (
        <div className="navbar">
            <Link className="buttons" to={"/admin"}>All Jobs</Link>
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
        </div>
    )
}