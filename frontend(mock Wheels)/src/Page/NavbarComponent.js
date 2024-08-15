import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import './NavbarComponent.css'; // Custom CSS for the Navbar

function NavbarComponent() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="top-navbar">
      <Navbar.Brand href="#home">Wheel Wise</Navbar.Brand>
      <Nav className="ml-auto dealer">
        {user ? (
          <p className="Useraccount">{user.username}</p>
        ) : (
          <button className="custom-button" onClick={() => navigate("/signin")}>Sign In</button>
        )}
        <button className="custom-button" onClick={() => navigate("/cart")}>Cart</button>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
