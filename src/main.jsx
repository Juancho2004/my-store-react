import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/PrincipalView/Auntentication/Login/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
