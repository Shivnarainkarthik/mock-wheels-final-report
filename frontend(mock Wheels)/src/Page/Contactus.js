import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contactus.css';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef(); // UseRef for the form
  const navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!firstName || !lastName || !email || !mobile || !message) {
      setError('All fields are required');
      return;
    }

    // Create a JSON object from form data
    const formData = {
      firstName,
      lastName,
      email,
      mobile,
      message,
    };

    try {
      // Send data to the backend API
      const response = await axios.post('http://localhost:8080/api/contact', formData);

      if (response.status === 200) {
        // Send email using emailjs
        emailjs
          .send('service_zlf52cr', 'template_52ipt58', formData, 'p2mg8QMZsjW3KYwQq') 
          .then(
            () => {
              setSuccess('Message sent successfully');
              // Clear form fields
              setFirstName('');
              setLastName('');
              setEmail('');
              setMobile('');
              setMessage('');
              // Redirect or handle success as needed
              // navi('/success'); // Optional redirect on success
            },
            () => {
              setError('Failed to send message via email. Please try again.');
            }
          );
      }
    } catch (error) {
      setError('Failed to send message to the server. Please try again.');
    }
  };

  return (
    <div className="app-container-contact">
      {/* Navbar component */}
      <Navbar expand="lg" className="top-navbar">
        <Navbar.Brand href="#home">Mock Wheels</Navbar.Brand>
        <Nav className="ml-auto dealer">
          <button className="custom-button" onClick={() => navi("/signin")}>Sign In</button>
          <button className="custom-button" onClick={() => navi("/cart")}>Cart</button>
        </Nav>
      </Navbar>

      <div className="container">
        <form ref={form} onSubmit={handleSubmit}>
          <h1>Send Message</h1>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            id="mobile"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <textarea
            id="message"
            placeholder="Type Your Message Here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Send" id="button" />
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>

      <footer className="bottom-navbar">
        <nav className="footer-nav">
          <button className="footer-button" onClick={() => navi("/bike")}>Bikes</button>
          <button className="footer-button" onClick={() => navi("/parts")}>Parts</button>
          <button className="footer-button" onClick={() => navi("/accessories")}>Accessories</button>
          <button className="footer-button" onClick={() => navi("/contactus")}>Contact Us</button>
        </nav>
      </footer>
    </div>
  );
}

export default ContactForm;
