import { createContext } from "react";
import { User } from "../../interfaces/user";

interface AuthContextProps {
    login: (username:string, password:string) => void,
    message: string,
    userData: User
}


export const AuthContext = createContext({} as AuthContextProps);
