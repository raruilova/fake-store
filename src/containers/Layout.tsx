import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useStore } from "../hooks/useStore";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Prop) => {
  
  const {
    cartUser,
    products,
    categories,
    userProducts,
    userCartProducts,
    getProductCategory,
  } = useStore();

  const res = cartUser.flatMap((e) => e.products);
  const result = res.map((e) => {
    return products.filter((data) => data.id === e.productId);
  });
  const data = result.flat();

  const handleClickCategory = (category: string) => {
    getProductCategory(category);
  };

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
                <Link
                  to="/"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleClickCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="me-2 btn btn-primary">
                Login
              </Link>
              <Link to="/login" className="me-2 btn btn-primary">
                Sign In
              </Link>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => userCartProducts(data)}
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <div
        className="offcanvas offcanvas-end bg-red"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div className="container">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Products
            </h5>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {userProducts.map((product, index) => (
              <div key={product.id + `${index}fr`}>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={product.id}
                >
                  {product.title}
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
