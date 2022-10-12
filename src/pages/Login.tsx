import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <div className="container">
      <form className="my-5"  onSubmit={handleSubmit}>
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md-6 ">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
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
                className="form-control"
                id="floatingPassword"
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
