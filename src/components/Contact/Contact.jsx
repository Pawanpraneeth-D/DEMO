import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import contactbg from '../images/job.jpg';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className='contact-banner'>
        <div className="banner-content">
          <img 
            className="banner-image" 
            src={contactbg}
            alt="Contact Banner" 
          />
          
          <div className="overlay">
          <div className="banner-text">
            <h1><b>"Get in Touch with Us Today for a Better Tomorrow"</b></h1>
            {/* <p>The PatchWork Service team will be glad to help you.</p>
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              <span className="phone-number">+91 72000 47856</span>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="contact-details-container">
        <div className="details-section">
          <h2>Contact Details</h2>
          <p><p>ShareRide is a service platform that covers all your transportation needs at an affordable price. We are here to help you out. Reach out to us for further queries.</p>
          </p>
          <p><strong>Head Office:</strong> ShareRide Tech Pvt Ltd<br />#14/6 Road, Ulsoor, Bangalore-560008</p>
          <p><strong>Phone:</strong> <i className="fas fa-phone"></i> +91 7200047856</p>
          <p><strong>Mail:</strong> <i className="fas fa-envelope"></i> info@shareride.com</p>
          <p><strong>Help & Support:</strong> <a href="#"><i className="fas fa-life-ring"></i> Click Here for Help & Support</a></p>
          <div className="social-media">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/?lang=en"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        
        <div className="form-section">
          <h2>We're here</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name *" required />
            <input type="email" name="email" placeholder="Email Address *" required />
            <input type="tel" name="phone" placeholder="Mobile Number *" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
