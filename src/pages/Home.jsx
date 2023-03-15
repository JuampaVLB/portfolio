import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useColorMode } from "@chakra-ui/color-mode";

import "animate.css";

function Home() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="home"
      data-aos="fade-up"
    >
      <div
        className={`${styles.presentation}`}
      >
        <p>Hola, mi nombre es</p>
        <h1>Juan Pablo Villalba</h1>
        <h2>Full Stack Developer</h2>
        <a href="/docs/Juan Pablo Villalba.pdf" target="_BLANK">
          Descargar CV
        </a>
      </div>
      <div className={styles.image}>
        <img
          src="/img/profile.png"
          alt="Juan Pablo Villalba"
          className="animate__animated animate__zoomIn"
        />
      </div>
    </div>
  );
}

export default Home;
