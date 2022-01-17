import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { loading, adminLogin, error } = useSelector((state) => ({
        loading: state.adminLoginState.loading,
        adminLogin: state.adminLoginState.adminLogin,
        error: state.adminLoginState.error,
    }));

    if(!adminLogin){
        return <Navigate to={"/adminLogin"} />
    }

    return children;

};