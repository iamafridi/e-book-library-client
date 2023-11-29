import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
 
    console.log(user,loading);
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
    }

    if (user?.email) {

        return children;
    }


    return <Navigate to="/login" replace ></Navigate>;
};

export default PrivateRoute;