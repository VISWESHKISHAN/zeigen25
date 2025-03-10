import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Global styles
import Title from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import EventLineup from "./components/EventLineup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <About />
      <Events />
      <EventLineup />
    </div>
  );
}

export default App;
