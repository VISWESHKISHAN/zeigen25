import React, { useState } from "react";
import "../styles/Events.css";

// Import images correctly
import pblitz from "../images/pblitz.png";
import ww from "../images/ww.png";
import cr from "../images/cr.png";
import cm from "../images/cm.png";
import fw from "../images/fw.png";
import st from "../images/st.png";
import ts from "../images/ts.png";

const technicalEvents = [
  { name: "Presentation Blitz", image: pblitz },
  { name: "WebWhiz", image: ww },
  { name: "Code Rescue", image: cr },
];

const nonTechnicalEvents = [
  { name: "Cinematica", image: cm },
  { name: "Funfinity Wars", image: fw },
  { name: "Shark Tank", image: st },
];

const Events = () => {
  const [category, setCategory] = useState("Technical");

  return (
    <div className="events-container">
      <h2 className="events-title">Zeigen' 25</h2>
      <h1 className="events-heading">EVENTS</h1>

      <div className="category-switch">
        <button
          className={`category-button ${category === "Technical" ? "active" : ""}`}
          onClick={() => setCategory("Technical")}
        >
          Technical
        </button>
        <button
          className={`category-button ${category === "NonTechnical" ? "active" : ""}`}
          onClick={() => setCategory("NonTechnical")}
        >
          NonTechnical
        </button>
      </div>

      <div className="events-grid">
        {(category === "Technical" ? technicalEvents : nonTechnicalEvents).map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <p className="event-name">{event.name}</p>
          </div>
        ))}
      </div>

      <div className="highlighted-event">
        <img src={ts} alt="Innovatex" className="highlighted-image" />
        <p className="highlighted-text">
          <span className="highlighted-title">INNOVATEX</span>
          <br />
          Technical Seminar
        </p>
      </div>
    </div>
  );
};

export default Events;
