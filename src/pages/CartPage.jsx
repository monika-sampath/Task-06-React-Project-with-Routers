import React, { useState } from "react";
// useState is used to rerender cart everytime 
const CartPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
// function handleQuantity uses map method
  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
// fuction to add 10 % discount to the total cart value
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = (totalPrice * 0.9).toFixed(2);
// html elements with js functions to display the items in cart with quantity and remove button
  return (
    <div className="p-5" id="cart">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4" id="cart"
          >
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>
                {item.price} USD x {item.quantity}
              </p>
              <p>Total: {(item.price * item.quantity).toFixed(2)} USD</p>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:shadow-sm hover:shadow-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-lg font-bold">
          Total: {discountedPrice} USD (10% Discount Applied)
        </p>
      </div>
    </div>
  );
};

export default CartPage;
