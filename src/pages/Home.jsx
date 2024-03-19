import React from "react";
import styles from "../styles/Home.module.css";

import { useColorMode } from "@chakra-ui/color-mode";

import "animate.css";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const date = new Date();
  const age = date.getFullYear() - 2005;

  return (
    <div
      className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="home"
    >
      <div className={`${styles.presentation}`}>
        <p>Hola, mi nombre es</p>
        <h1>Juan Pablo Villalba</h1>
        <h2>Full Stack Developer</h2>
        <p className={styles.year}>{age} años</p>
        <a href="#contact">Contactarme</a>
      </div>
      <div className={styles.image}>
        <img
          src="/img/profile.jpg"
          alt="Juan Pablo Villalba"
          className="animate__animated animate__zoomIn"
        />
      </div>
    </div>
  );
}

export default Home;
