import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <Link to="/">CrystalCove</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
          Home
        </Link>
        <Link
          to="/products"
          className="text-white hover:bg-blue-700 px-3 py-2 rounded"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="text-white hover:bg-blue-700 px-3 py-2 rounded"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
