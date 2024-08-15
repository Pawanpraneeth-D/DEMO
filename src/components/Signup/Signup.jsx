import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import user_icon from '../images/person.png';
import email_icon from '../images/Email.png';
import password_icon from '../images/password.png';
import '../Login/Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.confirmPassword.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Make POST request to the backend
      const response = await axios.post('http://localhost:8080/api/register/save', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      console.log('Form submitted:', response.data);
      alert('Rgistration Successfull');

      // Clear the form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-back">
      <div className="container">
        <div className="header">
          <div className="texty">SignUp</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="user" height="30" width="30" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <img src={email_icon} alt="email" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">Signup</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <footer>
          <Link to="/terms">Terms of Use</Link> | <Link to="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
