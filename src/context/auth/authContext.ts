import { createContext } from "react";
import { User } from "../../interfaces/user";

interface AuthContextProps {
    login: (username:string, password:string) => void,
    message: string,
    userData: User,
    registerUser: ({name, email, password, avatar}:User) => Promise<void>
    tokenApi: string | undefined
    logout: () => void
}


export const AuthContext = createContext({} as AuthContextProps);
