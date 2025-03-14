import React from "react";
import "../styles/Direction.css"; // Import CSS
import mapImage from "../img/map.webp"

const Direction = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=9.836167,78.163222";
  return (
    <div className="direction-container">
      <div className="direction-content">
        <h2 className="direction-title">
          GET DIRECTION TO <span className="highlight">KLNCE</span>
        </h2>
        <p className="direction-text">
          KLN College of Engineering is one of the premier institutions in Tamil Nadu, 
          known for its excellence in technical education and innovation. Easily accessible 
          from Madurai, the campus offers state-of-the-art facilities in a serene environment.
        </p>
        <a
          href="https://www.google.com/maps/place/K.L.N.+College+of+Engineering/"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-button"
        >
          GET DIRECTION →
        </a>
      </div>

      <div className="direction-map">
        <img
          src={mapImage} 
          alt="KLNCE Location Map"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default Direction;
