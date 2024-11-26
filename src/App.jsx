import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
// Home page content is created
const HomePage = () => (
  <div className=" flex flex-col justify-center items-center h-screen gap-4">
    <h1 className="text-2xl font-bold text-center">Welcome to CrystalCove</h1>
    <p className=" text-gray-600 text-center">
      Your one-stop shop for amazing products!
    </p>
  </div>
);
// React Router is used to achive navigation between home,products and cart 
const App = () => {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
