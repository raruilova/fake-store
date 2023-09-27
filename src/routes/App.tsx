import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { AuthProvider } from "../context/auth/AuthProvider";
import { StoreProvider } from "../context/store/StoreProvider";
import { Home } from "../pages/Home";
import { Index } from "../pages/Index";
import { LoginPage } from "../pages/LoginPage";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { AuthRoute } from "./AuthRoute";
import { UserCartPage } from "../pages/UserCarPage";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StoreProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sigin" element={<SignIn />} />
            </Routes>
            <Routes>
              <Route
                path="/home"
                element={
                  <AuthRoute>
                    <Home />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <Profile />
                  </AuthRoute>
                }
              />
              <Route
                path="/car-user"
                element={
                  <AuthRoute>
                    <UserCartPage />
                  </AuthRoute>
                }
              />
            </Routes>
          </Layout>
        </StoreProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
