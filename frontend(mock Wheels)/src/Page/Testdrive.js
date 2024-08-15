import React, { useState } from 'react';
import './Testdrive.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TestDriveForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:8080/api/testdrive', {
        fullName,
        email,
        phoneNumber,
        date,
        comments,
      });

      if (response.status === 200) {
        // Navigate to a confirmation or home page
        navigate('/');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="test-drive-wrapper">
      <form className="test-drive-form" onSubmit={handleSubmit}>
        <h1>Request a Test Drive</h1>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          className="input-field" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          className="input-field" 
          placeholder="Phone Number" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          className="input-field" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <textarea 
          className="message-box" 
          placeholder="Additional Comments" 
          rows="4" 
          value={comments} 
          onChange={(e) => setComments(e.target.value)} 
        />
        <br />
        <input type="submit" value="Submit" className="submit-btn" />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default TestDriveForm;
