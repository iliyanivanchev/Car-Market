import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateGuard() {
    const { isAuthenticated } = useContext(AuthContext);
    
    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}