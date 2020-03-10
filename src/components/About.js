import React from "react";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
  return (
    <section id="about">
      <h1> About Me</h1>
      <img src="/assets/me.jpg" alt="Me" className="responsive-img"></img>
      <div>
        <p>
          Hi! I am Rokas Kliučinskas, a web designer/developer focused on
          crafting great web experiences from Kaunas Lithuania.
        </p>
        <p>
          Designing and Coding have been my passion since the days I started
          working with computers but I found myself into web design/development
          since 2017. I enjoy creating beautifully designed, intuitive and
          functional websites.
        </p>
      </div>
      <div>
        <p>
          Beside coding, I am interested in photography, music production and I
          also love to travel. Most of people consider me as responsable
          interesting person with good sense of humor!
        </p>
      </div>
      <div className="social-links">
        <a className="icon" href="#about">
          <FontAwesomeIcon className="icon-medium" icon={faGithubSquare} />
        </a>
        <a className="icon" href="#about">
          <FontAwesomeIcon className="icon-medium" icon={faLinkedin} />
        </a>
        <a className="icon" href="#about">
          <FontAwesomeIcon className="icon-medium" icon={faInstagram} />
        </a>
        <a className="icon" href="#about">
          <FontAwesomeIcon className="icon-medium" icon={faFacebookSquare} />
        </a>
      </div>
    </section>
  );
}
