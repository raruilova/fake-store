import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
