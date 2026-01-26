import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/Signup/Signup';
import Login from './landing_page/Login/Login';
import AboutPage from './landing_page/About/AboutPage';
import Product from './landing_page/Product/Universe';
import PricinPage from './landing_page/Pricing/PricinPage';
import SupportPage from './landing_page/Support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import { AuthProvider } from './Pages/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<PricinPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);
