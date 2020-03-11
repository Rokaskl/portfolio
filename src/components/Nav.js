import React, { useState } from "react";

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
    <nav>
      <div
        class={"hamburger-container " + (opened ? "open" : "close")}
        onClick={toggleOpen}
      >
        <div class="hamburger"></div>
        <div class="plus"></div>
      </div>

      <ul class={(clicked ? "clicked " : " ") + (opened ? "open" : "close")}>
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
          <a className="nav-link" onClick={closeNav} href="#resume">
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
