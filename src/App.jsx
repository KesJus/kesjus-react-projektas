import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import Header from './components/layout/Header';
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      {/* <Toaster /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/add" element={<AddShopPage />} />
        <Route path="/shop" element={<ShopPage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
