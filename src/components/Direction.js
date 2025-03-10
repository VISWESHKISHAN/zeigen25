import React from "react";
import "../styles/Direction.css";
import mapImage from "../images/map.png";

const Direction = () => {
    const googleMapsUrl = "https://www.google.com/maps?q=9.836167,78.163222";// KLNCE Location

  return (
    <div className="direction-container">
      {/* Left Side: Text */}
      <div className="direction-text">
        <h2 className="direction-title">Get Direction To</h2>
        <h1 className="direction-location">KLNCE</h1>
      </div>

      {/* Right Side: Map */}
      <img src={mapImage} alt="Map" className="direction-map" />

      {/* Clickable Rectangle for Google Maps */}
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="direction-rectangle">
        <span className="rectangle-text">GET DIRECTION</span>
        <span className="rectangle-arrow">→</span>
      </a>
    </div>
  );
};

export default Direction;
