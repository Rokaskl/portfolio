import React from "react";
import "./style.scss";
import Nav from "./components/Nav";
import About from "./components/About";
import Header from "./components/Header";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Header />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
