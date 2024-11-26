import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Handle quantity updates
  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle item removal
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price and discounted price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = (totalPrice * 0.9).toFixed(2); // Apply a 10% discount

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-cover"
                />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-gray-500">
                    ${item.price} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="px-4 bg-slate-400">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
                
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Subtotal: ${totalPrice.toFixed(2)}
            </p>
            <p className="text-lg font-bold">
              Total (10% Discount): ${discountedPrice}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
