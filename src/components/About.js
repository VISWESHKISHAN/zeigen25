import React, { useState, useEffect } from "react";
import "../styles/About.css";

const About = () => {
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
    <div className="about-container">
      <h2 className="about-title">About Zeigen' 25</h2>
      <h1 className="symposium-title">SYMPOSIUM</h1>
      <p className="about-description">
        <span className="highlight">ZEIGEN</span> is a technical symposium aimed at fostering innovation, 
        collaboration, and technical excellence. It features a range of events, including technical competitions, 
        workshops, paper presentations, and interactive sessions with industry experts. The 
        <span className="highlight"> zeigen</span> provides a platform for students to showcase their skills, 
        network with professionals, and gain hands-on experience in emerging technologies. ZEIGEN is a 
        celebration of knowledge, creativity, and teamwork, bridging the gap between academia and industry.
      </p>

      <button className="brochure-button">VIEW BROCHURE</button>

      <div className="event-info">
        <div className="info-box">PARTICIPANT CERTIFICATION WILL BE PROVIDED</div>
        <div className="info-box">LUNCH AND REFRESHMENT WILL BE PROVIDED</div>
      </div>

      <div className="countdown-container">
        <p className="event-date">Event Date <span className="event-day">April 02</span></p>
        <div className="countdown">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <p>DAYS</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <p>HOURS</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <p>MINUTES</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
