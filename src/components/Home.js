import React from "react";
import "../styles/Home.css"; // Import CSS
import zeigen from "../images/zeigen.png";
import klnce from "../images/klnce.png"; // Add your department image

const Home = () => {
  return (
    <div className="home-container">
      {/* Title Section */}
      <div className="title-container">
        <img src={zeigen} alt="Logo" className="title-image" />
        <div className="title-text">
          <div className="title-upper">KLNCE</div>
          <div className="title-lower">
            <span className="zeigen-text">ZEIGEN`</span>
            <span className="year-text">25</span>
          </div>
        </div>
      </div>

      {/* Department Name */}
      <div className="department-text">
        DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
      </div>

      {/* Dim Image Below */}
      <div className="department-image-container">
        <img src={klnce} alt="Department" className="department-image" />
      </div>
    </div>
  );
};

export default Home;
