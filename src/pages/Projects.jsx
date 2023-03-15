import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

import Card from "../components/Card";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  return (
    <div
      className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="projects"
    >
      <p className={styles.title}>
        Mis <span>Proyectos</span>
      </p>
      <div className={styles.containerCards} data-aos="fade-up">
        <Card
          img="taller.png"
          title="Pañol App"
          message="Este proyecto fue creado en grupo, consistia en un sistema digital de manejo de herramientas, que se desarrollo para la
          E.E.S.T.N°5, SECUNDARIA TECNICA NUMERO 5 DE LIBERTAD.
          El cual abordo problemáticas cómo, la perdida de
          documentos, control completo de stock, manejo de pedidos y
          agilidad a nivel control."
          stack="HTML5, CSS3, Javascript, NodeJS, MongoDB, Mongoose, EJS."
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/TallerApp"
        />

        <Card
          img="centroDeEstudiantes.png"
          title="Centro De Estudiantes"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Javascript."
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/Centro-De-Estudiantes"
        />

        <Card
          img="mdmElectro.png"
          title="MDM Electro"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Data-AOS, Javascript, PHP"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/Mdm-Electro"
        />

        <Card
          img="socketWithDatabase.png"
          title="Notes App in Realtime"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Taildwind, ReactJS, Nodejs, Socket.io, MongoDB, Mongoose"
          viewURL="/"
          githubURL="/"
        />

        {/* 2do column */}

        <Card
          img="taller.png"
          title="Pañol App"
          message="Este proyecto fue creado en grupo, consistia en un sistema digital de manejo de herramientas, que se desarrollo para la
          E.E.S.T.N°5, SECUNDARIA TECNICA NUMERO 5 DE LIBERTAD.
          El cual abordo problemáticas cómo, la perdida de
          documentos, control completo de stock, manejo de pedidos y
          agilidad a nivel control."
          stack="HTML5, CSS3, Javascript, NodeJS, MongoDB, Mongoose, EJS."
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/TallerApp"
        />

        <Card
          img="centroDeEstudiantes.png"
          title="Centro De Estudiantes"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Javascript."
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/Centro-De-Estudiantes"
        />

        <Card
          img="mdmElectro.png"
          title="MDM Electro"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Data-AOS, Javascript, PHP"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/Mdm-Electro"
        />

        <Card
          img="socketWithDatabase.png"
          title="Notes App in Realtime"
          message="Este proyecto fue un trabajo encargado para el
          secundario técnico N°5, para su página oficial, el crear
          una sección completamente orientada al centro
          estudiantil. Contando con información del mismo,
          noticias semanales y un formulario de problematicas e
          ideas anónimas."
          stack="HTML5, CSS3, Taildwind, ReactJS, Nodejs, Socket.io, MongoDB, Mongoose"
          viewURL="/"
          githubURL="/"
        />
      </div>
    </div>
  );
}

export default Projects;
