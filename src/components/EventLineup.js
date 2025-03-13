import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EventLineup.css"; // Import CSS file
import pblitz1 from "../images/pblitz1.png"; // Import image
import ww from "../images/ww.png";
import cr from "../images/cr.png";
import cm from "../images/cm.png";
import fw from "../images/fw.png";
import st from "../images/st.png";
import ts1 from "../images/ts1.png";

const EventLineup = () => {
  const navigate = useNavigate();
  return (
    <div id="event-lineup-section" >
    <div className="event-lineup-container">
      <div className="agenda-text">Agenda Zeigen’25</div>
      <div className="event-text">EVENT LINEUPS</div>
      <div className="date-text">April 02, 2025</div>

      {/* Event Box */}
      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${ts1})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Technical Seminar</div>

        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">MORNING</span>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${pblitz1})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Presentation Blitz</div>

        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">MORNING</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/Presentation-BlitZ")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${cr})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Code Rescue</div>
        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">MORNING</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/CodeRescue")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${ww})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">WebWhiz</div>

        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">MORNING</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/WebWhiz")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${fw})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Funfinity Wars</div>
        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">AFTERNOON</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/FunFinity-Wars")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${st})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Shark Tank</div>
        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">AFTERNOON</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/SharK-Tank")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>

      <div className="event-box">
        {/* Left side: Image placeholder */}
        <div
          className="event-icon"
          style={{ backgroundImage: `url(${cm})` }}
        ></div>
        {/* Event Name (centered height-wise) */}
        <div className="event-name">Cinimatica</div>

        {/* Middle: Small icon + "MORNING" text */}
        <div className="event-time">
          <div className="event-time-icon"></div>
          <span className="morning-text">AFTERNOON</span>
        </div>
        {/* Right Side: "VIEW MORE" button */}
        <div className="view-more" onClick={() => navigate("events/Cinematica")}>
          VIEW MORE
          <div className="view-more-icon"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventLineup;
