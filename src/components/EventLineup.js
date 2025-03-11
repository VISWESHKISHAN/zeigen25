import React from "react";
import '../styles/EventLineup.css';
import FlowingMenu from './FlowingMenu'
import tr from '../images/timer.png'
import pblitz1 from "../images/pblitz1.png"; // Import image
import ww from "../images/ww.png";
import cr from "../images/cr.png";
import cm from "../images/cm.png";
import fw from "../images/fw.png";
import st from "../images/st.png";
import ts1 from "../images/ts1.png";

const Items = [
  {  text: 'Technical Seminar',uri:tr , text1: 'MORNING', image: ts1 },
  { link: 'events/Presentation-BlitZ', text: 'Presentation Blitz',uri:tr , text1: 'MORNING', image: pblitz1 },
  { link: 'events/CodeRescue', text: 'Code Rescue', uri:tr , text1: 'MORNING', image: cr },
  { link: 'events/WebWhiz', text: 'Web Whiz',uri:tr , text1: 'MORNING', image: ww },
  { link: 'events/FunFinity-Wars', text: 'Funfinity Wars',uri:tr , text1: 'AFTERNOON', image: fw },
  { link: 'events/SharK-Tank', text: 'Shark Tank', uri:tr , text1: 'AFTERNOON', image: st },
  { link: 'events/Cinematica', text: 'Cinimatica',uri:tr , text1: 'AFTERNOON', image: cm }
];

const EventLineup = () => {
  return (
    <div id="event-lineup-section" >
      <div className="event-lineup-container">
      <div className="event-text">EVENT LINEUPS</div>
      <div className="date-text">April 02, 2025</div>
</div>

    <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={Items} />
</div>
</div>
  );
};

export default EventLineup;
