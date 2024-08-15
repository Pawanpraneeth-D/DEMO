import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Ensure this is the correct path for your CSS
import Register from '../images/sharerbg.png'; // Ensure this is the correct path for your image
import axios from 'axios';

const DriverRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    license: '',
    vehicleRegistration: '',
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
    if (!formData.license) errors.license = 'Driver\'s License is required';
    if (!formData.vehicleRegistration) errors.vehicleRegistration = 'Vehicle Proof is required';
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

    // Validate form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send form data as JSON
      const response = await axios.post('http://localhost:8080/api/register/rider', formData, {
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
      console.error('Error during registration:', error.response || error);
      
      // Show error message
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Register as a ShareRide Rider</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              City:
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
              {errors.city && <p className="error-text">{errors.city}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Driver's License:
              <input type="text" name="license" value={formData.license} onChange={handleChange} />
              {errors.license && <p className="error-text">{errors.license}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Vehicle Proof:
              <input type="text" name="vehicleRegistration" value={formData.vehicleRegistration} onChange={handleChange} />
              {errors.vehicleRegistration && <p className="error-text">{errors.vehicleRegistration}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Identity Proof (Aadhaar Card):
              <input type="text" name="identityProof" value={formData.identityProof} onChange={handleChange} />
              {errors.identityProof && <p className="error-text">{errors.identityProof}</p>}
            </label>
          </div>
          <div className="form-group">
            <label>
              Bank Account Details:
              <input type="text" name="bankDetails" value={formData.bankDetails} onChange={handleChange} />
              {errors.bankDetails && <p className="error-text">{errors.bankDetails}</p>}
            </label>
          </div>
          <div className="registration-form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={Register} alt="Registration" />
      </div>
    </div>
  );
};

export default DriverRegistrationForm;
