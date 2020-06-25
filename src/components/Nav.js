import React, { useState } from "react";
import pdf from "../files/resume.pdf";

export default function Nav(props) {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(false);
  const toggleOpen = () => {
    opened ? setOpened(false) : setOpened(true);
    setClicked(true);
  };
  const closeNav = () => {
    setOpened(false);
  };
  return (
    <nav className={"" + (opened ? "open" : "close")}>
      <div
        className={"hamburger-container " + (opened ? "open" : "close")}
        onClick={toggleOpen}
      >
        <div className="hamburger"></div>
        <div className="plus"></div>
      </div>
      <img src="/assets/nav-blob.svg" alt="" className="nav-blob"></img>
      <ul
        className={(clicked ? "clicked " : " ") + (opened ? "open" : "close")}
      >
        <li className="nav-element">
          <a className="nav-link" onClick={closeNav} href="#header">
            header
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" onClick={closeNav} href="#about">
            about
          </a>
        </li>

        <li className="nav-element">
          <a className="nav-link" href={pdf} onClick={closeNav}>
            resume
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" onClick={closeNav} href="#works">
            works
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" onClick={closeNav} href="#contact">
            contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
