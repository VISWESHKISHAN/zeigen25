import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Global styles
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventLineup from "./components/EventLineup";
import Direction from "./components/Direction";
import Aurora from './components/Aurora';

function App() {
  return (
    <div className="App">
      <Aurora />
      <Navbar />
      <Home />
      <About />
      <Events />
      <EventLineup />
      <Direction />
    </div>
  );
}

export default App;
