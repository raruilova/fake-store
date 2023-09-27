import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axiosClient";
import { UserToken } from "../../interfaces/token";
import { User } from "../../interfaces/user";
import { AuthContext } from "./authContext";
import Cookie from "js-cookie";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

const token = Cookie.get("token");

export const AuthProvider = ({ children }: Prop) => {
  const [userData, setUserData] = useState<User>({} as User);
  const [tokenApi, setTokenApi] = useState<string | undefined>(
    token ? token : ""
  );
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axiosClient.post<UserToken>("/auth/login", {
        email,
        password,
      });
      if (data.access_token) {
        Cookie.set("token", data.access_token, { expires: 5 });
      }
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.message);
      }
      setMessage("");
    } finally {
      const token = Cookie.get("token");
      if (token) {
        setTokenApi(token);
      }
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axiosClient.get<User>("/auth/profile", {
        headers: { Authorization: `Bearer ${tokenApi}` },
      });
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async ({
    name,
    email,
    password,
    avatar,
  }: User): Promise<void> => {
    try {
      const { data } = await axiosClient.post("/users", {
        name,
        email,
        password,
        avatar,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookie.remove("token");
    window.location.reload();
    window.location.href = "/";
  };

  useEffect(() => {
    if (tokenApi) {
      getUser();
    }
  }, [tokenApi]);

  return (
    <AuthContext.Provider
      value={{ login, message, registerUser, userData, tokenApi, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
