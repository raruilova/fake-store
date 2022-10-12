import { Link } from "react-router-dom";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Prop) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand text-white">
              Fake Store
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="me-2 btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
