import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/" element={<Project />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/abou/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
