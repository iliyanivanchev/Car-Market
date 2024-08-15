import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { logout } from "../api/auth-api";

export const useLogout = () => {
    const { localLogout } = useContext(AuthContext);

    const logoutHandler = async () => {

        await logout();
        localLogout();
    }
    return logoutHandler;
}