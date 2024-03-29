import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { User } from "../interfaces/user";
import { useAuth } from "../hooks/useAuth";

export const SignIn = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password:"",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
  } as User);
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { registerUser } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      swal("Error!", "All the inputs are required!", "warning");
      return;
    }
    registerUser(user);    
    swal("God Job!", "You have been registered!", "success");
    setUser({} as User);
    navigate("/home");
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
                name="name"
                value={user.name}
                onChange={handleChange}
                required
                placeholder="Joel Salvatierra"
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md-6 ">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputEmail"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
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
                value={user.password}
                id="floatingPassword"
                onChange={handleChange}
                required
                placeholder="******"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary mt-2 w-100">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
};
