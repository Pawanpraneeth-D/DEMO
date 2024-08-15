import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultPage.css'; // Ensure the CSS file is created and linked

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rides } = location.state || { rides: [] };
  const [selectedRide, setSelectedRide] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookClick = (ride) => {
    setSelectedRide(ride);
    setBookingConfirmed(true);
  };

  const handlePaymentClick = () => {

    navigate('/payment', { state: { ride: selectedRide } });
  };

  return (
    <div className="repa_1">
      <h2 className="repa_2">Available Rides</h2>
      {rides.length > 0 ? (
        <table className="repa_3">
          <thead>
            <tr className="repa_4">
              <th className="repa_5">Leaving From</th>
              <th className="repa_6">Going To</th>
              <th className="repa_7">Date</th>
              <th className="repa_8">Time</th>
              <th className="repa_9">Availability</th>
              <th className="repa_10">Vehicle Type</th>
              <th className="repa_11">Minimum Amount</th>
              <th className="repa_12">Action</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride, index) => (
              <tr key={index} className="repa_13">
                <td className="repa_14">{ride.leavingFrom}</td>
                <td className="repa_15">{ride.goingTo}</td>
                <td className="repa_16">{ride.travelDate}</td>
                <td className="repa_17">
                  {ride.startHour}:{ride.startMinute} {ride.startMeridiem}
                </td>
                <td className="repa_18">{ride.availability}</td>
                <td className="repa_19">{ride.vehicleType}</td>
                <td className="repa_20">{ride.minimumAmount}</td>
                <td className="repa_21">
                  <button className="repa_22" onClick={() => handleBookClick(ride)}>
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="repa_23">No rides available</p>
      )}

      {bookingConfirmed && (
        <div className="repa_24">
          <p className="repa_25">Your booking has been confirmed!</p>
          <button className="repa_26" onClick={handlePaymentClick}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default ResultsPage;