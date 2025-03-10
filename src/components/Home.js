import React from "react";
import "../styles/Home.css"; // Import CSS
import zeigen from "../images/zeigen.png";
import klnce from "../images/klnce.png"; // Add your department image
import TrueFocus from "./TrueFocus"; // Import TrueFocus component
import GradientText from './GradientText'; // Import GradientText component

const Home = () => {
  return (
    <div id="home-section" className="home-container">
      {/* Title Section */}
      <div className="title-container">
        <img src={zeigen} alt="Logo" className="title-image" />
        <div className="title-text">
          {/* Apply TrueFocus effect on KLNCE */}
          <TrueFocus 
            sentence="KLN CE"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
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
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
</GradientText>
      </div>

      {/* Dim Image Below */}
      <div className="department-image-container">
        <img src={klnce} alt="Department" className="department-image" />
      </div>
    </div>
  );
};

export default Home;
