import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BikeBooking.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    bikeType: '',
  });
  const [error, setError] = useState('');
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

    // Simple validation
    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.date || !formData.time || !formData.bikeType) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/bookings', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Booking successful:', response.data);
      alert('Booking successful');
      navigate('/payment'); // Navigate to the payment page on success
    } catch (error) {
      console.error('Booking failed:', error.response?.data || error.message);
      setError('Booking failed. Please try again.');
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-container">
        <h1>Book a Vehicle</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location:</label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dropoffLocation">Drop-off Location:</label>
            <input
              type="text"
              id="dropoffLocation"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bikeType">Vehicle Type:</label>
            <select
              id="bikeType"
              name="bikeType"
              value={formData.bikeType}
              onChange={handleChange}
              required
            >
              <option value="">Select a Vehicle type</option>
              <option value="scooter">Bike</option>
              <option value="motorbike">Auto</option>
              <option value="electric">Car</option>
            </select>
          </div>
          {error && <div className="error">{error}</div>}
          <div className="form-group-book">
            <button type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
