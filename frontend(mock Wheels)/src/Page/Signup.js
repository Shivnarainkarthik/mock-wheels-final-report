import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const navigate = useNavigate();
  
  // State to manage form inputs and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send data to the backend
        const response = await axios.post('http://localhost:8080/api/signup', {
          username,
          email,
          password,
        });

        // If signup is successful, navigate to signin page
        if (response.status === 200) {
          navigate('/signin');
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          setServerError(error.response.data || 'Signup failed. Please try again.');
        } else if (error.request) {
          // Request was made but no response received
          setServerError('No response from the server. Please try again later.');
        } else {
          // Something else happened
          setServerError('An error occurred. Please try again.');
        }
      }
    } else {
      setErrors(validationErrors); // Set the validation errors to state
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          {errors.username && <span className="error">{errors.username}</span>}
          
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {errors.password && <span className="error">{errors.password}</span>}
          
          <button type="submit">Sign Up</button>
        </form>
        {serverError && <p className="error">{serverError}</p>}
      </div>
    </div>
  );
}

export default SignupPage;