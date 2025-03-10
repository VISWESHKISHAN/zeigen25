import React from "react";
import "../styles/Navbar.css"; // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home-section">Home</a>
      <a href="#about-section">About</a>
      <a href="#events-section">Events</a>
      <a href="#event-lineup-section">Event Lineup</a>
      <a href="#contact-section">Contact</a>
    </nav>
  );
};

export default Navbar;
