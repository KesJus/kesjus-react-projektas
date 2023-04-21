import React from 'react';
import App from './App';
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
);
