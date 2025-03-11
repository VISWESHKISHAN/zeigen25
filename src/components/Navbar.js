import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* <div className="logo">Zeigen' 25</div> */}

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home-section">Home</a>
          <a href="#about-section">About</a>
          <a href="#events-section">Events</a>
          <a href="#event-lineup-section">Event lineup</a>
          <a href="#contact-section">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
