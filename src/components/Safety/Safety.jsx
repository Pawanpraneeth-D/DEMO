import React from 'react';
import './Safety.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import safetyfirst from '../images/safetyfirst.jpg';
import safetypage from '../images/safetypage.jpg';
import smoke from '../images/smokecar.jpg';
import speed from '../images/speedlimit.jpg';
import seat from '../images/seatbelt.jpg';
import overtaking from '../images/overtaking.jpg';
import noparking from '../images/noparking.jpg';
import mobilecar from '../images/mobilecar.avif';
import lengthlimit from '../images/lengthlimit.png';
import helmet from '../images/Helmet.jpg';
import drinkcar from '../images/drinkcar.jpg';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Safety = () => {
  return (
    <div className="safety-body-container">
      <div className="safety-home-first">
        <div className="safety-body-div">
          <img className="safety-hotel" src={safetypage} alt="Home Service Banner" />
          <div className="safety-transparent-layer"></div>
          <div className="safety-textt-overlay">
            <h1><b>We ensure your safety</b></h1>
            <p className='safety-para1'>"The best drivers are aware that they must be aware."</p>
            <p className='safety-para2'>- Team ShareRide</p>
          </div>
        </div>
      </div>

      <div className='safety-home-second'>
        <div className='safety-row'>
          <div className='safety-column'>
            <img src={safetyfirst} alt="About Us" />
          </div>
          <div className='safety-column'>
            <h1>We Build For Your Comfort</h1>
            <div className="safety-point-list">
              <div className="safety-point-item">
                <div className="safety-point-icon">✔</div>
                <div className="safety-point-text">Helmet Provision: Every ride includes a helmet for both the rider and the passenger. This is a mandatory safety measure to ensure head protection.</div>
              </div>
              <div className="safety-point-item">
                <div className="safety-point-icon">✔</div>
                <div className="safety-point-text">Insurance: Rapido offers insurance coverage for both the rider and the passenger. This insurance covers any accidents or mishaps that might occur during the ride.</div>
              </div>
              <div className="safety-point-item">
                <div className="safety-point-icon">✔</div>
                <div className="safety-point-text">Live Ride Tracking: Passengers can share their ride details and live location with friends or family, providing an extra layer of security and peace of mind.</div>
              </div>
              <div className="safety-point-item">
                <div className="safety-point-icon">✔</div>
                <div className="safety-point-text">Background Checks: Rapido conducts thorough background checks and verification processes for all its captains to ensure the safety and reliability of its services.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="safety-home-fourth">
          <center>
            <h1>We precious about</h1>
            <div className="safety-sliders-partner">
              <Slider {...sliderSettings}>
                <div className="safety-slide"><img src={smoke} alt="partner logo" /></div>
                <div className="safety-slide"><img src={speed} alt="partner logo" /></div>
                <div className="safety-slide"><img src={seat} alt="partner logo" /></div>
                <div className="safety-slide"><img src={noparking} alt="partner logo" /></div>
                <div className="safety-slide"><img src={overtaking} alt="partner logo" /></div>
                <div className="safety-slide"><img src={mobilecar} alt="partner logo" /></div>
                <div className="safety-slide"><img src={helmet} alt="partner logo" /></div>
                <div className="safety-slide"><img src={drinkcar} alt="partner logo" /></div>
                <div className="safety-slide"><img src={lengthlimit} alt="partner logo" /></div>
                <div className="safety-slide"><img src={smoke} alt="partner logo" /></div>
                <div className="safety-slide"><img src={speed} alt="partner logo" /></div>
                <div className="safety-slide"><img src={seat} alt="partner logo" /></div>
                <div className="safety-slide"><img src={noparking} alt="partner logo" /></div>
                <div className="safety-slide"><img src={overtaking} alt="partner logo" /></div>
                <div className="safety-slide"><img src={mobilecar} alt="partner logo" /></div>
                <div className="safety-slide"><img src={helmet} alt="partner logo" /></div>
                <div className="safety-slide"><img src={drinkcar} alt="partner logo" /></div>
                <div className="safety-slide"><img src={lengthlimit} alt="partner logo" /></div>
                
              </Slider>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Safety;
