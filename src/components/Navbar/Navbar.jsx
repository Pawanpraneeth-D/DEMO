import React, { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../images/scooty.png';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const navRef = useRef();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Mock function to handle login (replace with real logic)
    const handleLogin = () => {
        setLoggedIn(true);
        setDropdownOpen(false); // Close dropdown on login
        navigate('/login'); // Navigate to the login page
    };

    // Mock function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
        setDropdownOpen(false); // Close dropdown after logout
        // Perform any other logout-related actions here, like clearing tokens
    };

    return (
        <header>
            <img src={logo} className='logo' alt="Logo" />
            <nav ref={navRef}>
                <NavLink to='/' activeClassName="active">Home</NavLink>
                <NavLink to='/cart' activeClassName="active">About us</NavLink>
                <NavLink to='/safety' activeClassName="active">Safety</NavLink>
                <NavLink to='/bookride' activeClassName="active">Availability</NavLink>
                <NavLink to='/booking' activeClassName="active">Booking</NavLink>
                <NavLink to='/selection' activeClassName="active">Select Registration</NavLink>
                
            </nav>
            
            <div className="Rina_7 profile-menu">
                <FontAwesomeIcon 
                    icon={faUserCircle} 
                    size="2x" 
                    className="Rina_5 profile-icon" 
                    onClick={toggleDropdown} 
                    aria-label="User Menu"
                />
                {dropdownOpen && (
                    <div className="Rina_8 dropdown-menu">
                        {loggedIn ? (
                            <NavLink 
                                to="/" 
                                className="Rina_5 dropdown-item" 
                                activeClassName="active" 
                                onClick={handleLogout}>
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink 
                                to="/login" 
                                className="Rina_5 dropdown-item" 
                                activeClassName="active" 
                                onClick={handleLogin}>
                                Login / Signup
                            </NavLink>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;