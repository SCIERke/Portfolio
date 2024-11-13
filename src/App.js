import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> */}
      </nav>
      
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
