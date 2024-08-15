import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sharer.css'; // Ensure this is the correct path for your CSS
import Register from '../images/Register.png'; // Ensure this is the correct path for your image
import axios from 'axios';

const Sharer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    identityProof: '',
    bankDetails: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.identityProof) errors.identityProof = 'Identity Proof is required';
    if (!formData.bankDetails) errors.bankDetails = 'Bank Account Details are required';
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register/sharer', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Registration successful:', response.data);
      
      // Show success message
      alert('Registration successful! Redirecting to home page.');
      
      // Navigate to the home page upon successful registration
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
      
      // Show error message
      alert('There was an error during registration. Please try again.');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Register as a ShareRide Sharer</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone:
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              City:
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                className={errors.city ? 'input-error' : ''}
              />
              {errors.city && <p className="error-text">{errors.city}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Identity Proof (Aadhaar Card):
              <input 
                type="text" 
                name="identityProof" 
                value={formData.identityProof} 
                onChange={handleChange} 
                className={errors.identityProof ? 'input-error' : ''}
              />
              {errors.identityProof && <p className="error-text">{errors.identityProof}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Bank Account Details:
              <input 
                type="text" 
                name="bankDetails" 
                value={formData.bankDetails} 
                onChange={handleChange} 
                className={errors.bankDetails ? 'input-error' : ''}
              />
              {errors.bankDetails && <p className="error-text">{errors.bankDetails}</p>}
            </label>
          </div>
          <div className="sharer-form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={Register} alt="Sharer" />
      </div>
    </div>
  );
};

export default Sharer;
