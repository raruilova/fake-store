import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
