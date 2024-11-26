import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
// function to handle add to cart 
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      cart.push({ ...product, quantity: 1 });
    } else {
      alert("Item already in cart!");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
// html elements to display the fetched data from the api 
  return (
    <div className="border flex flex-col p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold text-center line-clamp-1">{product.title}</h2>
      <p className="text-gray-500 text-center">Price: {product.price} USD</p>
      <p className="text-gray-500 text-center text-xs line-clamp-3">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:shadow-sm hover:shadow-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
