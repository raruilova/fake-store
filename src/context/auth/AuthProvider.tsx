import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axiosClient";
import { UserLogin } from "../../interfaces/login";
import { UserToken } from "../../interfaces/token";
import { User } from "../../interfaces/user";
import { AuthContext } from "./authContext";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Prop) => {
  const [token, setToken] = useState<UserToken>({
    token: "",
  });
  const [userData, setUserData] = useState<User>({} as User);
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

  const getUser = async () => {
    try {
      const { data } = await axiosClient.get<User>("/users/1");
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, message, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
