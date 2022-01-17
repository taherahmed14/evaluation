import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouteUser = ({ children }) => {
    const { loading, userLogin, error } = useSelector((state) => ({
        loading: state.userLoginState.loading,
        userLogin: state.userLoginState.userLogin,
        error: state.userLoginState.error,
    }));

    if(!userLogin){
        return <Navigate to={"/userLogin"} />
    }

    return children;

};