import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axiosClient";
import { UserToken } from "../../interfaces/token";
import { AuthContext } from "./authContext";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Prop) => {
  const [token, setToken] = useState<UserToken>({
    token: "",
  });
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    try {
      const { data } = await axiosClient.post<UserToken>("/auth/login", {
        username,
        password,
      });
      setToken({
        token: data.token,
      });
      navigate("/home");

    } catch (error) {
      if(axios.isAxiosError(error)) {
        setMessage(error.response?.data);
        alert(error.response?.data);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, message }}>
      {children}
    </AuthContext.Provider>
  );
};
