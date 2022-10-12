export const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 align-self-center">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        
      </div>
    </div>
  );
};
