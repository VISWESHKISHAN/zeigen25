import React, { useState, useEffect } from "react";
import "../styles/About.css";
import brochureImage from "../img/brochure.webp";
// import GlitchText from './GlitchText';
import Counter from "./Counter";
import SpotlightCard from './SpotlightCard';

const About = () => {
  const [showBrochure, setShowBrochure] = useState(false);

  const toggleBrochure = () => {
    setShowBrochure(!showBrochure);
  };

  const closeBrochure = () => {
    setShowBrochure(false);
  };

  const eventDate = new Date("April 2, 2025 00:00:00").getTime(); // Update as needed

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about-section" className="about-container">
      <h2 className="about-title">
        
About Zeigen' 25
      </h2>
      <h1 className="symposium-title">SYMPOSIUM</h1>
      <p className="about-description">
        <span className="highlight">ZEIGEN</span> is a technical symposium aimed at fostering innovation, 
        collaboration, and technical excellence. It features a range of events, including technical competitions, 
        workshops, paper presentations, and interactive sessions with industry experts. The 
        <span className="highlight"> ZEIGEN</span> provides a platform for students to showcase their skills, 
        network with professionals, and gain hands-on experience in emerging technologies. ZEIGEN is a 
        celebration of knowledge, creativity, and teamwork, bridging the gap between academia and industry.
      </p>
      <button className="brochure-button" onClick={toggleBrochure}>
        {showBrochure ? "CLOSE BROCHURE" : "VIEW BROCHURE"}
      </button>

      <div className={`brochure-overlay ${showBrochure ? "show" : ""}`} onClick={closeBrochure}></div>
      <div className={`brochure-container ${showBrochure ? "show" : ""}`} onClick={toggleBrochure}>
        <img src={brochureImage} alt="Brochure" className="brochure-image" />
      </div>


      <div className="event-info">
        <div className="info-box"><SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        PARTICIPANT CERTIFICATION WILL BE PROVIDED
</SpotlightCard></div>
        <div className="info-box"><SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        LUNCH AND REFRESHMENT WILL BE PROVIDED
</SpotlightCard></div>
      </div>

      <div className="countdown-container">
        <p className="event-date">Event Date <span className="event-day">April 02</span></p>
        <div className="countdown">
        <div className="countdown-item">
          <Counter value={timeLeft.days} places={[10, 1]} fontSize={80} padding={5} gap={10} textColor="white" fontWeight={900} />
            <p>DAYS</p>
          </div>
          <div className="countdown-item">
            <Counter value={timeLeft.hours} places={[10, 1]} fontSize={80} padding={5} gap={10} textColor="white" fontWeight={900} />
            <p>HOURS</p>
          </div>
          <div className="countdown-item">
            <Counter value={timeLeft.minutes} places={[10, 1]} fontSize={80} padding={5} gap={10} textColor="white" fontWeight={900} />
            <p>MINUTES</p>
          </div>
          <div className="countdown-item">
            <Counter value={timeLeft.seconds} places={[10, 1]} fontSize={80} padding={5} gap={10} textColor="white" fontWeight={900} />
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
