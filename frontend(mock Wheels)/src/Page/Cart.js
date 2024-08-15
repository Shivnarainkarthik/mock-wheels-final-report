import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "AGV Helmet",
      price:  80000,
      image: "C:\projectReview2\Karthi-2\public\assets\agv.jpeg",
    },
    {
      id: 2,
      title: "Riding Jacket",
      price: 2999,
      image: "C:\projectReview2\Karthi-2\public\assets\Jackets.jpeg",
    },
    {
      id: 3,
      title: "Riding Boot",
      price: 2999,
      image: "C:\projectReview2\Karthi-2\public\assets\Boot.jpeg",
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} items</p>
      </div>

      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p>Total: ₹{totalPrice.toFixed(2)}</p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;