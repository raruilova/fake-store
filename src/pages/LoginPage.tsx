import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserLogin } from "../interfaces/login";

export const LoginPage = () => {
  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const { login, message } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([user.email, user.password].includes("")) {
      alert("Write your username or your password");
      return;
    }

    login(user.email, user.password);
    if (message === "Unauthorized") {
      alert("Incorrect Password");
    }
  };
  return (
    <div className="container">
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md-6 ">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
                defaultValue={user.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
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
                defaultValue={user.password}
                id="floatingPassword"
                onChange={handleChange}
                placeholder="Password"
                required
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
