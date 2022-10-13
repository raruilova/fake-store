import { useState } from "react";
import { axiosClient } from "../../api/axiosClient";
import { UserToken } from "../../interfaces/token";
import { AuthContext } from "./authContext";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Prop) => {
  const [token, setToken] = useState<UserToken>({} as UserToken);

  const login = async (username: string, password: string) => {
    const { data } = await axiosClient.post<UserToken>("/auth/login", {
      username,
      password,
    });
    setToken(data);
    console.log(data);
  };

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
};
