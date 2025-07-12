import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dog from "./pages/Dog";


const App = () => {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/dog" style={{ marginRight: "10px" }}>Dog</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
};

export default App;
