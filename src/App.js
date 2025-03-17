import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Cinematica from "./components/Events/Cinematica";
import FunFinity from "./components/Events/FunFinity";
import SharkTank from "./components/Events/SharkTank";
import WebWhiz from "./components/Events/WebWhiz";
import CodeRescue from "./components/Events/CodeRescue";
import PaperPresentation from "./components/Events/PaperPresntation";
import Main from "./Main";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="events/Presentation-BlitZ" element={<PaperPresentation />} />
        <Route path="events/CodeRescue" element={<CodeRescue />} />
        <Route path="events/WebWhiz" element={<WebWhiz />} />
        <Route path="events/Cinematica" element={<Cinematica />} />
        <Route path="events/FunFinity-Wars" element={<FunFinity />} />
        <Route path="events/SharK-Tank" element={<SharkTank />} />
      </Routes>

    </Router>

  );
}

export default App;
