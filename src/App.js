import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Global styles
import Title from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventLineup from "./components/EventLineup";
import Direction from "./components/Direction";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <About />
      <Events />
      <EventLineup />
      <Direction />
    </div>
  );
}

export default App;
