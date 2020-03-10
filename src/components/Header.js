import React from "react";
import Typical from "react-typical";
import Particles from "react-particles-js";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <section id="header">
      <Particles />
      <Typical
        steps={[
          "Hi! I am Rokas ✋",
          1000,
          "Hi! I am Rokas, Web Builder 👷",
          1000,
          "Hi! I am Rokas, Web Developer 👷",
          1000,
          "Hi! I am Rokas, Web Developer 👷 and Designer",
          500,
          "Hi! I am Rokas, Web Developer 👷 and Designer 🎨",
          5000
        ]}
        loop={1}
        wrapper="h1"
      />
      <a className="icon-down" href="#about">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </a>
    </section>
  );
}
