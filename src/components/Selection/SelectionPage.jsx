import React from 'react';
import './SelectionPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SelectionPage = () => {
  const handleButtonClick = async (type) => {
    try {
      if (type === 'rider') {
        console.log('Rider button clicked');
        // Send request to backend for Rider
        const response = await axios.post('http://localhost:8080/api/register/rider', {});
        console.log('Rider registration:', response.data);
      } else if (type === 'sharer') {
        console.log('Sharer button clicked');
        // Send request to backend for Sharer
        const response = await axios.post('http://localhost:8080/api/register/sharer', {});
        console.log('Sharer registration:', response.data);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="selection-wrapper">
      <div className="selection-container">
        <h1>Hey Fella's !</h1>
        <p>"The Future of Transportation is Here – Register and Ride with ShareRide!"</p>
        <div className="button-group">
          <Link to='/Registration'>
            <button
              className="selection-button"
              onClick={() => handleButtonClick('rider')}
            >
              Rider
            </button>
          </Link>
          <Link to='/Sharer'>
            <button
              className="selection-button"
              onClick={() => handleButtonClick('sharer')}
            >
              Sharer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
