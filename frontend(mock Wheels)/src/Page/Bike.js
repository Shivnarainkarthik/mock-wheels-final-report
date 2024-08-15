import React, { useEffect, useState, useContext } from 'react';
import style from "./Bike.module.css";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/UserContext';

function Bike() {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleSubmitTest = () => {
    navigate("/testdrive");
  };

  const images = [
    'assets/Red.jpg',
    'assets/Blue.jpg',
    'assets/Green.jpg',
  ];

  const handleButtonClick = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    console.log(style);
  }, []);

  return (
    <div className={style.container_bike}>
      {/* Top Navbar */}
      <Navbar expand="lg" className={style.top_navbar}>
        <Navbar.Brand href="/" className={style.navbar_brand}>Mock Wheels</Navbar.Brand>
        <Nav className={style.dealer}>
          {user ? (
            <p className={style.user_account}>{user.username}</p>
          ) : (
            <button className={style.custom_button} onClick={() => navigate("/signin")}>Sign In</button>
          )}
          <button className={style.custom_button} onClick={() => navigate("/cart")}>Cart</button>
        </Nav>
      </Navbar>

      <p className={style.RoyalEnfield_bike}>The Royal Enfield</p>
      <p className={style.Meteor_bike}>Meteor 350</p>
      <p className={style.p_bike}>
        The Royal Enfield Meteor is an Indian cruiser-style motorcycle manufactured by Royal Enfield in India. The model was developed by engineers based at Royal Enfield's two state-of-the-art technical centres, in Chennai. The Meteor is a direct replacement to Thunderbird 350.
      </p>

      <div className={style.image_container_bike}>
        <img
          src={images[imageIndex]}
          alt="Transition"
          className={style.image_transition_bike}
        />
      </div>

      <p className={style.color_bike}>Choose your color</p>

      <div className={style.button_container_bike}>
        <button
          className={style.button_red}
          onClick={() => handleButtonClick(0)}
        />
        <button
          className={style.button_blue}
          onClick={() => handleButtonClick(1)}
        />
        <button
          className={style.button_green}
          onClick={() => handleButtonClick(2)}
        />
      </div>

      <div>
        <button className={style.testdrive_bike} onClick={handleSubmitTest}>Test Drive</button>
      </div>

      {/* Bottom Navbar */}
      <footer className={style.bottom_navbar}>
        <nav className={style.footer_nav}>
          <button className={style.footer_button} onClick={() => navigate("/bike")}>Bikes</button>
          <button className={style.footer_button} onClick={() => navigate("/parts")}>Parts</button>
          <button className={style.footer_button} onClick={() => navigate("/accessories")}>Accessories</button>
          <button className={style.footer_button} onClick={() => navigate("/contactus")}>Contact Us</button>
        </nav>
      </footer>
    </div>
  );
}

export default Bike;
