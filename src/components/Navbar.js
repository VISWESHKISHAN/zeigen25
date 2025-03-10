import React from "react";
import "../styles/Navbar.css"; // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#events">Events</a>
      <a href="#event-lineup">Event Lineup</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
