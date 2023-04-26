import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

import LoginPage from "./pages/LoginPage";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import Footer from "./pages/Footer";
import { useAuthCtx } from "./auth/AuthProvider";
import NotFoundPage from "./pages/NotFoundPage";
// import SignUp from './pages/SignUp';

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className="">
      <Header />
      {/* <Main /> */}
      {/* <Toaster /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={"/shop"} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? <Navigate to={"/shop"} /> : <RegisterPage />
          }
        />

        <Route
          path="/shop"
          element={isLoggedIn ?  <ShopsPage />:<Navigate to={"/"} /> }
        />
        <Route
          path="/add"
          element={isLoggedIn ?  <AddShopPage />:<Navigate to={"/"} /> }
        />

        {/* <Route
          path="/logout"
          element={<Navigate to={"/"} /> }
        /> */}
        <Route path="/*" element={<NotFoundPage />} />

        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/register" element={<SignUp />} /> */}

        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/add" element={<AddShopPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
