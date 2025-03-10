import React from "react";
import "../styles/Home.css"; // Import CSS
import zeigen from "../images/zeigen.png"

const Home = () => {
  return (
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
  );
};

export default Home;
