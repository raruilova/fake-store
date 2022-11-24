import { createContext } from "react";
import { UserToken } from "../../interfaces/token";
import { User } from "../../interfaces/user";

interface AuthContextProps {
    token: UserToken,
    login: (username:string, password:string) => void,
    message: string,
    userData: User
}


export const AuthContext = createContext({} as AuthContextProps);
