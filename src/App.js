import React, { useState } from "react";
import "./style.scss";
import Nav from "./components/Nav";
import About from "./components/About";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Header />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
