import { useContext } from "react"
import { AuthContext } from "../context/auth/authContext"

export const useAuth = () => {
    return useContext(AuthContext);
}