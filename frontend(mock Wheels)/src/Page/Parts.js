// src/Page/Parts.js

import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Parts.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Card = ({ image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image.src} alt={image.title} />
      <div className="card-title">{image.title}</div>
    </div>
  );
};

export const partImages = [
  { id: '10', src: 'assets/chrome Silencer GT.jpg', title: 'Exhaust', description: "High-quality exhaust for optimal performance", price: "4500", discountprice: "4000", discount: "10", emi: "EMI starts at ₹200" },
  { id: '11', src: 'assets/Mirror bar.jpg', title: 'Mirror Bar', description: "Stylish and durable mirror bar for better visibility", price: "1500", discountprice: "1200", discount: "20", emi: "EMI starts at ₹60" },
  { id: '12', src: 'assets/Petroltank.jpeg', title: 'Petrol Tank', description: "Sturdy petrol tank with high capacity", price: "6000", discountprice: "5500", discount: "8", emi: "EMI starts at ₹275" },
  { id: '13', src: 'assets/Chain lube.jpg', title: 'Chain Lube', description: "High-quality chain lube for smooth riding", price: "500", discountprice: "450", discount: "10", emi: "EMI starts at ₹20" },
  { id: '14', src: 'assets/Chain sproket.jpg', title: 'Chain Sprocket', description: "Durable chain sprocket for longer life", price: "3000", discountprice: "2500", discount: "17", emi: "EMI starts at ₹125" },
  { id: '15', src: 'assets/Head light.jpg', title: 'Head Light', description: "Bright headlight for better night vision", price: "2500", discountprice: "2200", discount: "12", emi: "EMI starts at ₹110" },
  { id: '16', src: 'assets/Engine.jpg', title: 'Engine Spares', description: "Reliable engine spares for optimal performance", price: "8000", discountprice: "7000", discount: "13", emi: "EMI starts at ₹350" },
  { id: '17', src: 'assets/Brake.jpg', title: 'Brake', description: "High-performance brake for safety", price: "2000", discountprice: "1800", discount: "10", emi: "EMI starts at ₹90" },
  { id: '18', src: 'assets/seat.jpg', title: 'Seat', description: "Comfortable seat for long rides", price: "3500", discountprice: "3200", discount: "8", emi: "EMI starts at ₹160" },
];

const Parts = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="app-container-part">
      {/* Top Navbar */}
      <Navbar expand="lg" className="top-navbar">
        <Navbar.Brand href="#home">Mock Wheels</Navbar.Brand>
        <Nav className="ml-auto dealer">
          {user ? (
            <p className="user-account">{user.username}</p>
          ) : (
            <button className="custom-button" onClick={() => navigate("/signin")}>Sign In</button>
          )}
          <button className="custom-button" onClick={() => navigate("/cart")}>Cart</button>
        </Nav>
      </Navbar>

      {/* Card Grid */}
      <div className="card-grid">
        {partImages.map((image) => (
          <Card
            key={image.id}
            image={image}
            onClick={() => handleCardClick(image.id)}
          />
        ))}
      </div>

      {/* Footer Navbar */}
      <footer className="bottom-navbar">
        <nav className="footer-nav">
          <button className="footer-button" onClick={() => navigate("/bike")}>Bikes</button>
          <button className="footer-button" onClick={() => navigate("/parts")}>Parts</button>
          <button className="footer-button" onClick={() => navigate("/accessories")}>Accessories</button>
          <button className="footer-button" onClick={() => navigate("/contactus")}>Contact Us</button>
        </nav>
      </footer>
    </div>
  );
};

export default Parts;
