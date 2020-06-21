import React from "react";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faPython,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Works() {
  return (
    <section id="works">
      <div className="skills">
        <FontAwesomeIcon className="icon-medium" icon={faHtml5} />
        <FontAwesomeIcon className="icon-medium" icon={faCss3} />
        <FontAwesomeIcon className="icon-medium" icon={faJsSquare} />
        <FontAwesomeIcon className="icon-medium" icon={faReact} />
        <object
          type="image/svg+xml"
          data="/assets/c-logo.svg"
          className="icon-medium sharp-icon"
          aria-label="CSharp Icon"
        />
        <FontAwesomeIcon className="icon-medium" icon={faPhp} />
        <FontAwesomeIcon className="icon-medium" icon={faPython} />
      </div>
      <h2>Works</h2>
      <div className="projects">
        <div className="project">
          <img
            className="project-img"
            id="commentme-img"
            src="/assets/commentme.png"
            alt=""
          ></img>
          <div className="project-about">
            <h3 className="project-title">Comment Me</h3>
            <p className="project-text">
              <b>Currently working on.</b> <br /> <br />
              It started as University project, but going to be something
              bigger. For creating website I used <b> React</b> and <b>SCSS</b>
            </p>
          </div>
        </div>
        <div className="project">
          <img
            className="project-img"
            id="mms-img"
            alt=""
            src="/assets/mms.PNG"
          ></img>
          <div className="project-about">
            <h3 className="project-title">Membership management system</h3>
            <p className="project-text">
              Project done druing NFQ coding Academy. Simple membership
              management system where administrator can CRUD users, accept
              requests to become member. Also all other non members can fill
              request form to become member. For creating website I used{" "}
              <b> React</b>, <b> Redux</b> and <b>SCSS</b>
            </p>
            <p className="project-text">
              <b>My responsibilities:</b> Whole Front-End
            </p>
            <button
              onClick={() => {
                window.open("https://github.com/nfqakademija/mms");
              }}
            >
              Code
            </button>
          </div>
        </div>
        <h2>Other Cool projects</h2>
        <div className="project">
          <img
            className="project-img"
            id="gal-img"
            alt=""
            src="/assets/gal.PNG"
          ></img>
          <div className="project-about">
            <h3 className="project-title">CSS grid gallery</h3>
            <p className="project-text"></p>
            <p className="project-text">
              Small project to learn CSS Grid usage. Made with vanilla
              <b> JS</b>, <b>HTML</b> and <b>CSS</b>. Also{" "}
              <a href="https://unsplash.com/">Unsplash API</a> was used for
              random images
            </p>
          </div>
        </div>
        <div className="project">
          <img
            className="project-img"
            id="music-img"
            src="/assets/music.PNG"
            alt=""
          ></img>
          <div className="project-about">
            <h3 className="project-title">Online Music Machine</h3>
            <p className="project-text"></p>
            <p className="project-text">
              Also cool small project. Made with vanilla
              <b> JS</b>, <b>HTML</b> and <b>CSS</b>. By marking squeres on
              timeline you can create some simple beats.
            </p>
          </div>
        </div>
        <div className="project">
          <img
            className="project-img"
            id="pingpong-img"
            src="/assets/pingpong.PNG"
            alt=""
          ></img>
          <div className="project-about">
            <h3 className="project-title">Ping Pong Game</h3>
            <p className="project-text"></p>
            <p className="project-text">
              Fully working <b>2</b> players game. Made with vanilla
              <b> JS</b>, <b>HTML</b> and <b>CSS</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
