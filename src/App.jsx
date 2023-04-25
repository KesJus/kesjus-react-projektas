import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

import LoginPage from "./pages/LoginPage";
import Header from "./pages/Header";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/add" element={<AddShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
