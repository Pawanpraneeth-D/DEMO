import React from 'react';
import './Cart.css';
import about from '../images/taxi1.jpg';

function Cart() {
  return (
    <div className='cart-container'>
      <div className='about-section'>
        <div className='about-row'>
          <div className='about-column'>
            <img className='about-image' src={about} alt="Taxi" />
          </div>
          <div className='about-column'>
            <h1 className='about-heading'>About Us</h1>
            <p className='about-text'>
              Rapido is a popular bike taxi service in India designed to offer a fast and cost-effective commuting option in congested urban areas. Through the Rapido app, users can easily book a ride on a motorcycle, which is promptly assigned to a nearby driver. The service stands out for its ability to navigate traffic more efficiently than cars, often making it a quicker alternative. Safety is a key priority for Rapido, with measures including rider verification, mandatory helmet use for both riders and passengers, and real-time GPS tracking. However, users should be aware of the inherent risks associated with two-wheeler transport, such as higher accident rates and weather-related challenges. Despite these concerns, Rapido remains a favored choice for many city dwellers due to its affordability and convenience, offering a practical solution for short-distance travel in bustling city environments.
            </p>
          </div>
        </div>
      </div>
      <div className='services-section'>
        <div className='services-intro'>
          <h3>ShareRide Services in India</h3>
          <p>ShareRide is a full-service transportation company in India. ShareRide's licensed drivers provide reliable transportation services for both commercial and residential needs. Our on-call drivers are ready to handle any situation, offering the most current and efficient ride solutions for even the latest high-tech transportation requirements. ShareRide is a certified and bonded transportation provider in India. We not only bring a professional driver to your home or office but also a fully equipped vehicle, ensuring a smooth and timely ride. With ShareRide’s well-maintained fleet, we guarantee punctual and dependable transportation services throughout India.</p>
        </div>
        <div className='services-list'>
          <div className='service-item'>
            <div className='service-title'>Customer Guarantee</div>
            <div className='service-description'>Reliable transportation is what every passenger receives when they choose ShareRide for their travel needs.</div>
          </div>
          <div className='service-item'>
            <div className='service-title'>24/7 Service</div>
            <div className='service-description'>Need a ride? Count on ShareRide for reliable and timely transportation services. Our drivers are punctual and committed to providing guaranteed, top-quality rides.</div>
          </div>
          <div className='service-item'>
            <div className='service-title'>Insured, Bonded, Licensed</div>
            <div className='service-description'>Licensed drivers in fully-equipped vehicles to meet your residential, commercial, and industrial transportation needs.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
