import './BookRide.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookRide() {
  const [passengers, setPassengers] = useState(1);
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [date, setDate] = useState('');
  const [rides, setRides] = useState([]);
  const [error, setError] = useState(''); // New state to handle errors

  const navigate = useNavigate();

  const increasePassengers = () => {
    if (passengers < 3) {
      setPassengers(passengers + 1);
    }
  };

  const decreasePassengers = () => {
    if (passengers > 1) {
      setPassengers(passengers - 1);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/shareavail/search?leavingFrom=${leavingFrom}&goingTo=${goingTo}&date=${date}&passengers=${passengers}`
      );

      if (response.ok) {
        const rides = await response.json();
        setRides(rides); // Set the rides data to the state
        navigate('/resultpage', { state: { rides } }); // Navigate to Booking page with the rides data
      } else {
        setError("Failed to fetch rides. Please try again."); // Set an error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching rides. Please check your connection and try again.");
    }
  };

  return (
    <div className="ribo_1">
      <div className="ribo_2">
        <h1>"Speed is not just about getting there faster; it’s about getting there smarter."</h1>
      </div>
      <div className="ribo_3">
        <div className="ribo_4">
          <input
            type="text"
            placeholder="Leaving from"
            value={leavingFrom}
            onChange={(e) => setLeavingFrom(e.target.value)}
            className="ribo_5"
          />
          <input
            type="text"
            placeholder="Going to"
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
            className="ribo_5"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ribo_5"
          />
          <div className="ribo_6">
            <label className="ribo_7">Passengers</label>
            <div className="ribo_8">
              <button onClick={decreasePassengers} className="ribo_9">-</button>
              <span className="ribo_10">{passengers}</span>
              <button onClick={increasePassengers} className="ribo_9">+</button>
            </div>
          </div>
          <button onClick={handleSearch} className="ribo_11">Search</button>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
      </div>
    </div>
  );
}

export default BookRide;
