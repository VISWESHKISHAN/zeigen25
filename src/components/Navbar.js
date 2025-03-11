import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="hamburger" onClick={toggleNav}>
                    &#9776;
                </div>
                <div className="menu-nav">
                    <a href="#home-section">Home</a>
                    <a href="#about-section">About</a>
                    <a href="#events-section">Events</a>
                    <a href="#event-lineup-section">Event Lineup</a>
                    <a href="#contact-section">Contact</a>
                </div>
            </nav>
            <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={toggleNav}>
                    &times;
                </div>
                <a href="#home-section" onClick={toggleNav}>Home</a>
                <a href="#about-section" onClick={toggleNav}>About</a>
                <a href="#events-section" onClick={toggleNav}>Events</a>
                <a href="#event-lineup-section" onClick={toggleNav}>Event Lineup</a>
                <a href="#contact-section" onClick={toggleNav}>Contact</a>
            </div>
        </>
    );
};

export default Navbar;