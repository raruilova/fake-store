import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserLogin } from "../interfaces/login";

export const LoginPage = () => {
  const [user, setUser] = useState<UserLogin>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    login(user.username, user.password);
    //navigate("/home");
  };
  return (
    <div className="container">
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md-6 ">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="username"
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md-6 ">
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                onChange={handleChange}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary mt-2 w-100">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};
