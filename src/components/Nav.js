import React from "react";

export default function Nav() {
  return (
    <nav>
      <input type="checkbox" />
      <ul>
        <li className="nav-element">
          <a className="nav-link" href="#header">
            header
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" href="#about">
            about
          </a>
        </li>

        <li className="nav-element">
          <a className="nav-link" href="#resume">
            resume
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" href="#works">
            works
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link" href="#contact">
            contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
