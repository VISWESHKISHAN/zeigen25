import React from "react";
import Navbar from "./components/Navbar";
import "./Main.css"; // Global styles
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventLineup from "./components/EventLineup";
import Direction from "./components/Direction";
import Aurora from './components/Aurora';
import Footer from './components/Footer';
function Main() {
  return (
      <div className="App">
        <Aurora />
        <Navbar />
        <Home />
        <About />
        <Events />
        <EventLineup />
        <Direction />
        <Footer />
      </div>
  );
}

export default Main;
