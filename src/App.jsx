import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Header from './pages/Header';
import Main from './pages/Main';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import ShopPage from './pages/ShopPage';
import AddShopPage from './pages/AddShopPage';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="">
      <Header />
      {/* <Main /> */}
      {/* <Toaster /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/add" element={<AddShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
