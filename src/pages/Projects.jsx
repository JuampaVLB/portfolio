import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

import Card from "../components/Card";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
          viewURL="https://www.linkedin.com/feed/update/urn:li:activity:7045564707063095296/"
          githubURL="https://github.com/JuampaVLB/Taller"
          teamwork={true}
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
          viewURL="https://eestn5centroestudiantil.000webhostapp.com/"
          githubURL="https://github.com/JuampaVLB/Centro-De-Estudiantes"
          teamwork={true}
        />

        <Card
          img="petzify.png"
          title="Petzify"
          message="Petzify es una red social especializada en animales domésticos que proporciona a los dueños de mascotas un entorno dedicado a compartir sus experiencias con sus compañeros peludos."
          stack="React Native, Nodejs, Express, Typescript, MongoDB, Mongoose, Cors, Axios, WebSockets"
          viewURL="https://petzify.vercel.app/"
          githubURL="https://petzify.vercel.app/"
          teamwork={true}
        />

        <Card
          img="mdmElectro.png"
          title="MDM Electro"
          message="Cree junto a un colega una página web estilo landing page para MDM Electro, una empresa de electricidad y mantenimiento técnico. Incluimos secciones que mostraban el interior de la empresa, características de sus servicios y un formulario de contacto por correo electrónico. Además, agregamos enlaces a sus redes sociales."
          stack="HTML5, CSS3, Data-AOS, Javascript, PHP"
          viewURL="https://mdm-electro.vercel.app/"
          githubURL="https://github.com/JuampaVLB/Mdm-Electro"
          teamwork={true}
        />

        <Card
          img="olimpiadas.png"
          title="Olimpiadas de Informatica"
          message="Una solución digital para el protocolo médico conocido como 'Código Azul', que se caracteriza por activar dos alarmas que requieren la presencia de personal médico. Esta solución debe permitir el acceso mediante un sistema de autenticación basado en usuario y contraseña, ofreciendo una serie de funcionalidades clave."
          stack="HTML5, CSS3, Javascript, ReactJS, Nodejs, Express, MongoDB, Mongoose, Cors, Axios"
          viewURL="https://github.com/JuampaVLB/olimpiadas-informatica-front"
          githubURL="https://github.com/JuampaVLB/olimpiadas-informatica-api"
          teamwork={true}
        />

        <Card
          img="brawlnexus.png"
          title="Brawl Nexus"
          message="Brawl Nexus es una landing page que tiene como objetivo principal promocionar una organización dedicada a la organización de torneos oficiales de Brawlhalla en distintas regiones."
          stack="HTML5, CSS3, Javascript, ReactJS, Eslint, ViteJS"
          viewURL="https://brawl-nexus.vercel.app/"
          githubURL="https://github.com/JuampaVLB/Brawl-Nexus"
          teamwork={false}
        />

        <Card
          img="portfolio.png"
          title="Portfolio"
          message="Mi actual portfolio de desarrollador Full-Stack que cuenta con toda la informacion sobre mi como lo pueden ser certificaciones, premios, proyectos, experiencias, mis redes sociales, habilidades y mucho mas!"
          stack="HTML5, CSS3, Javascript, Vite, ReactJS, CSS Modules, AOS, Chakra UI"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/portfolio"
        />

        <Card
          img="simonsays.png"
          title="Simon Says"
          message="Este proyecto es una implementación simple del juego Simon Says desarrollado en PHP y MySQL. El juego desafía a los jugadores a repetir secuencias de colores y sonidos generados aleatoriamente para una entrevista tecnica."
          stack="HTML5, CSS3, Javascript, PHP, MySQL, Docker"
          viewURL="https://github.com/JuampaVLB/simon-says#readme"
          githubURL="https://github.com/JuampaVLB/simon-says"
          teamwork={false}
        />

        <Card
          img="socketWithDatabase.png"
          title="Notes App in Realtime"
          message="NotesAPP es una aplicación web que utiliza websockets para permitir a los usuarios crear, editar y eliminar notas en tiempo real. La aplicación utiliza una base de datos para garantizar la persistencia de los datos. Es un proyecto que demuestra habilidades 1en el desarrollo web avanzado."
          stack="HTML5, CSS3, Taildwind, ReactJS, Nodejs, Socket.io, Mongoose, MongoDB, Mongoose"
          viewURL="https://github.com/JuampaVLB/NotesApp-RealTime-backend"
          githubURL="https://github.com/JuampaVLB/NotesApp-RealTime-backend"
        />

        <Card
          img="liveChat.png"
          title="Live Chat"
          message="LiveChat es una practica e introduccion que utilice para aprender sobre websockets en javascript mas especificamente con la libreria Socket.io, cuenta con su lado cliente y el lado del servidor el cual ambos envian y reciben eventos para poder lograr la comunicacion entre varios dispositivos en tiempo real."
          stack="HTML5, CSS3, NodeJS, Cors, Socket.IO, ReactJS, Tailwind"
          viewURL="https://github.com/JuampaVLB/LiveChat-RealTime-backend/tree/master/server"
          githubURL="https://github.com/JuampaVLB/LiveChat-RealTime-backend/tree/master/server"
        />
      </div>
    </div>
  );
}

export default Projects;
