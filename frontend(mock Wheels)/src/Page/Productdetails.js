// src/Page/Productdetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { images as accessoryImages } from './AccesoriesHomepage';
import { partImages } from './Parts';
import './Productdetails.css';

export default function Productdetails() {
  const { id } = useParams();

  // Find the product in accessories or parts
  const product =
    accessoryImages.find((pd) => pd.id === id) ||
    partImages.find((pd) => pd.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleCart = () => {
    alert("Added to cart successfully");
    // Here, you might want to call a function to add the product to the cart
  };

  return (
    <div className="product-detail">
      <div className="image-gallery">
        <img src={product.src} alt={product.title} className="main-image" />
      </div>
      
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>
          ₹ {product.discountprice} <span className="original-price">₹ {product.price}</span>
        </h2>
        <p className="discount">-{product.discount}%</p>
        <p>Inclusive of all taxes</p>
        <p>{product.emi}</p>
        <button className="buy-now" onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
    
  );
}
