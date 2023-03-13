import * as React from "react";
import styles from "../styles/About.module.css";

// Components

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function About() {
  return (
    <div className={styles.container} id="about">
      <p className={styles.title}>
        Todo <span>Sobre Mi</span> y <span>Reconocimientos</span>
      </p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Sobre Mi
          </Tab>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Certificados
          </Tab>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Premios
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.TabPanel}>
            <div className={styles.about}>
              <img
                src="/img/sobremitab.png"
                alt=""
                className={styles.imgLeft}
              />
              <ul>
                <li>
                  ¡Hola! Mi nombre es Juan Pablo Villalba y me gusta crear cosas
                  que viven en Internet. Soy un desarrollador apasionado, con
                  fuertes habilidades administrativas y de responsabilidad,
                  buena atención al detalle y la capacidad de escribir código
                  eficiente.
                </li>
                <li>
                  Soy un programador full-stack con un enfoque en el lado
                  back-end. Desde los 16 años que estoy aprendiendo programación
                  y he trabajado en proyectos importantes para la institución
                  que estudio. Mi objetivo profesional es seguir aprendiendo y
                  creciendo como programador, y estoy interesado en trabajar en
                  proyectos que me permitan aplicar mis habilidades técnicas y
                  resolver problemas complejos.
                </li>
                <li>
                  Siempre estoy aprendiendo nuevas tecnologías y estoy buscando
                  nuevas oportunidades de trabajo en empresas innovadoras y
                  dinámicas.
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={styles.TabPanel}>
            <div className={styles.about}>
              <img
                src="/img/certificado.png"
                alt=""
                className={styles.imgLeft}
              />
              <ul>
                <li>
                  <span>Diploma de HTML5 y CSS3</span>
                  <p>Diploma expedido por OpenBootCamp en diciembre 2022.</p>
                  <a href="/">Ver Mas</a>
                </li>
                <li>
                  <span>Diploma de conceptos de la programacion</span>
                  <p>Diploma expedido por OpenBootCamp en diciembre 2022.</p>
                  <a href="/">Ver Mas</a>
                </li>
                <li>
                  <span>Certificate EF SET ENGLISH</span>
                  <p>
                    Diploma expedido por EF International Language Centers en
                    enero 2023.
                  </p>
                  <a href="/">Ver Mas</a>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.about}>
              <img src="/img/premios.png" alt="" className={styles.imgLeft} />
              <ul>
                <li>
                  <span>
                    Diploma 1° puesto Certamen Desafios TECIP de Programacion
                    Categoria 2
                  </span>
                  <p>
                    Diploma Expedido por Departamento de Informatica de la
                    Institucion diciembre 2022
                  </p>
                  <a href="/">Ver Mas</a>
                </li>
                <li>
                  <span>
                    Diploma 2° puesto Certamen Desafios TECIP de Programacion
                    Categoria 2
                  </span>
                  <p>
                    Diploma Expedido por Departamento de Informatica de la
                    Institucion mayo 2022
                  </p>
                  <a href="/">Ver Mas</a>
                </li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default About;
