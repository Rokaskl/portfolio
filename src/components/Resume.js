import React from "react";
import ProgressBar from "./ProgressBar";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faPython,
  faPhp
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Resume() {
  return (
    <section id="resume">
      <h1> Resume</h1>
      <div className="skills">
        <FontAwesomeIcon className="icon-medium" icon={faHtml5} />
        <FontAwesomeIcon className="icon-medium" icon={faCss3} />
        <FontAwesomeIcon className="icon-medium" icon={faJsSquare} />
        <FontAwesomeIcon className="icon-medium" icon={faReact} />
        <object
          type="image/svg+xml"
          data="/assets/c-logo.svg"
          className="icon-medium sharp-icon"
        />
        <FontAwesomeIcon className="icon-medium" icon={faPhp} />
        <FontAwesomeIcon className="icon-medium" icon={faPython} />
      </div>
      <div className="resume-block">
        <div className="education">
          <h2>education</h2>
          <div>
            <p className="date">2017 - 2021 (Ongoing) </p>
            <h3>Kaunas University of Technology</h3>
            <h4>Bachelor of Computing(Software Systems)</h4>
          </div>
          <div>
            <p className="date">2019</p>
            <h3>NFQ Academy</h3>
            <h4>Full-stack Developer courses</h4>
          </div>
        </div>
        <div className="contacts">
          <h2>contacts</h2>
          <div>
            <h3>Email</h3>
            <h4>rokasklkl@gmail.com</h4>
          </div>
          <div>
            <h3>Phone</h3>
            <h4>+37069197232</h4>
          </div>
        </div>
        <div className="work">
          <h2>work experience</h2>
          <h3>To be continued...</h3>
        </div>
      </div>
    </section>
  );
}
