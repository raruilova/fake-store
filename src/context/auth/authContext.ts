import { createContext } from "react";
import { UserToken } from "../../interfaces/token";

interface AuthContextProps {
    token: UserToken,
    login: (username:string, password:string) => void,
    message: string
}


export const AuthContext = createContext({} as AuthContextProps);
