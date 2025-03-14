import React from "react";
import "../styles/Home.css"; // Import CSS
import zeigen from "../img/zeigen.webp";
import klnce from "../img/klnce.webp"; // Add your department image
import GradientText from './GradientText'; // Import GradientText component

const Home = () => {
  return (
    <div id="home-section" className="home-container">
      {/* Title Section */}
      <div className="title-container">
        <img src={zeigen} alt="Logo" className="title-image" />
        <div className="title-text">
          <div className="title-upper">KLNCE</div>
          <div className="title-lower">
            <span className="zeigen-text">
              {"ZEIGEN`".split("").map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
            <span className="year-text">25</span>
          </div>
        </div>
      </div>

      {/* Department Name */}
      <div className="department-text">
        <GradientText
          colors={["#3905C7", "#63439D", "#C266FF", "#FFFFFF", "#C266FF", "#63439D", "#3905C7"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h3>K.L.N. COLLEGE OF ENGINEERING</h3>
          <h6>An Autonomous Institution, Affiliated to Anna University, Chennai <br /> Accredited by NAAC</h6> <br/>
          <h5>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h5>
        </GradientText>
      </div>

      {/* Dim Image Below */}
      <div className="department-image-container">
        <a href="https://klnce.edu/" target="_blank" rel="noopener noreferrer">
          <img src={klnce} alt="Department" className="department-image" />
        </a>
      </div>
    </div>
  );
};

export default Home;
