import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { AuthProvider } from "../context/auth/AuthProvider";
import { Home } from "../pages/Home";
import { Index } from "../pages/Index";
import { LoginPage } from "../pages/LoginPage";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};
