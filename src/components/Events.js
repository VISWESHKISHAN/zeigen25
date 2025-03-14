import React, { useState } from "react";
import "../styles/Events.css";
import TiltedCard from "./TiltedCard";
import TrueFocus from "./TrueFocus";
import pblitz from "../img/pblitz1.webp"; // Import image
import ww from "../img/ww.webp";
import cr from "../img/cr.webp";
import cm from "../img/cm.webp";
import fw from "../img/fw.webp";
import st from "../img/st.webp";
import ts from "../img/ts1.webp";


const technicalEvents = [
  { name: "Presentation Blitz", image: pblitz, path: "/events/Presentation-BlitZ" },
  { name: "Web Whiz", image: ww, path: "/events/WebWhiz" },
  { name: "Code Rescue", image: cr, path: "/events/CodeRescue" },
];

const nonTechnicalEvents = [
  { name: "Cinematica", image: cm, path: "/events/Cinematica" },
  { name: "Funfinity Wars", image: fw, path: "/events/FunFinity-Wars" },
  { name: "Shark Tank", image: st, path: "/events/SharK-Tank" },
];

const Events = () => {
  const [category, setCategory] = useState("Technical");
  

  return (
    <div id="events-section" className="events-container">
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
          Non Technical
        </button>
      </div>

      <div className="events-grid">
        {(category === "Technical" ? technicalEvents : nonTechnicalEvents).map((event, index) => (
            <TiltedCard
            key={index}
            imageSrc={event.image}
            altText={event.name}
            captionText={event.name}
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-overlay-text">
                <TrueFocus 
                  sentence={event.name}
                  manualMode={false}
                  blurAmount={2}
                  borderColor="pink"
                  animationDuration={0.5}
                  pauseBetweenAnimations={0.5}
                />
              </p>
            }
            navigateTo={event.path} // ✅ Fix navigation
          />
        ))}
      </div>

      <div className="highlighted-event">
        <TiltedCard
          imageSrc={ts}
          altText="Innovatex"
          captionText=""
          containerHeight="400px"
          containerWidth="100%"
          imageHeight="400px"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className="highlighted-text">
              <span className="highlighted-title">INNOVATEX</span>
              <br />
              Technical Seminar
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Events;
