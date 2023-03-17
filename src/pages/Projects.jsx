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
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/TallerApp"
          teamwork = {true}
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
          teamwork = {true}
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
          teamwork = {true}
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
          stack="HTML5, CSS3, Taildwind, ReactJS, Nodejs, Socket.io, Mongoose, MongoDB, Mongoose"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/NotesApp-RealTime-backend"
        />

        {/* 2do column */}

        <Card
          img="liveChat.png"
          title="Live Chat"
          message="LiveChat es una practica e introduccion que utilice para aprender sobre websockets en javascript mas especificamente con la libreria Socket.io, cuenta con su lado cliente y el lado del servidor el cual ambos envian y reciben eventos para poder lograr la comunicacion entre varios dispositivos en tiempo real."
          stack="HTML5, CSS3, NodeJS, Cors, Socket.IO, ReactJS, Tailwind"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/LiveChat-RealTime-backend/tree/master/server"
        />

        <Card
          img="bookApi.png"
          title="API de Libros"
          message="API Rest simple sobre libros donde podemos crear, editar, leer y borrar recursos, con base de datos, models, controller y routes."
          stack="Vite, NodeJS, Mongoose, MongoDB"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/BookAPI"
        />

        <Card
          img="liveflow.png"
          title="Liveflow"
          message="App realizada para una hackatón comunitaria donde se implemento un sistema de usuarios con tokens JWT para luego poder utilizarlos para comunicarnos en un chat general junto a otras herramientas muy practicas como Eslint."
          stack="HTML5, CSS3, NodeJS, Mongoose, Cors, JWT, MongoDB, ReactJS, Eslint, Prettier"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/LiveFlow-Backend"
          teamwork = {true}
        />

        <Card
          img="biblioapp.png"
          title="biblioApp"
          message="Proyecto en desarrollo para un biblioteca que tendra un sistema de usuarios, peticiones, stock, formularios y registros para administrar la biblioteca de forma remota y sencilla que permitira la facilidad y productividad frente a todos los clientes recurrentes. "
          stack="HTML5, CSS3, Javascript, ReactJS, Nodejs, MongoDB, Mongoose, JWT, Cors, Axios, Morgan, Bycript"
          viewURL="/"
          githubURL="/"
          teamwork = {true}
        />

        <Card
          img="portfolio.png"
          title="Portfolio"
          message="Mi actual portfolio de desarrollador Full-Stack que cuenta con toda la informacion sobre mi como lo pueden ser certificaciones, premios, proyectos, experiencias, mis redes sociales, habilidades y mucho mas!"
          stack="HTML5, CSS3, Javascript, Vite, ReactJS, CSS Modules, AOS, Chakra UI"
          viewURL="/"
          githubURL="https://github.com/JuampaVLB/portfolio"
        />
      </div>
    </div>
  );
}

export default Projects;
