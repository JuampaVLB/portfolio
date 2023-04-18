import React, { useEffect } from "react";
import styles from "../styles/About.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Components

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.container} id="about">
      <p className={styles.title}>
        Todo <span>Sobre Mi</span> y <span>Reconocimientos</span>
      </p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Sobre Mi
          </Tab>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Certificados
          </Tab>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
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
                data-aos="zoom-in"
              />
              <ul data-aos="zoom-in">
                <li>
                  <span className="about-title">Sobre Mi</span>
                  ¡Hola! Mi nombre es Juan Pablo Villalba tengo actualmente 18
                  años, me gusta crear cosas que viven en Internet. Soy un
                  desarrollador apasionado, con fuertes habilidades
                  administrativas y de responsabilidad, buena atención al
                  detalle y la capacidad de escribir código eficiente.
                </li>
                <li>
                  <span className="about-title">Especialización</span>
                  Soy un programador full-stack con un enfoque en el lado
                  back-end. Desde los 16 años que estoy aprendiendo programación
                  y he trabajado en proyectos importantes para la institución
                  que estudio. Mi objetivo profesional es seguir aprendiendo y
                  creciendo como programador, y estoy interesado en trabajar en
                  proyectos que me permitan aplicar mis habilidades técnicas y
                  resolver problemas complejos.
                </li>
                <li>
                  <span className="about-title">Actualmente</span>
                  Siempre estoy aprendiendo nuevas tecnologías y estoy buscando
                  nuevas oportunidades de trabajo en empresas innovadoras y
                  dinámicas.
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={styles.TabPanel}>
            <Accordion allowToggle className={styles.Accordion}>
              <AccordionItem className={styles.AccordionItem}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" className={styles.AccordionBox}>
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      OpenBootcamp
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.about}>
                    <img
                      src="/img/certificado.png"
                      alt=""
                      className={styles.imgLeft}
                    />
                    <ul>
                      <li>
                        <span>Diploma de HTML5 y CSS3</span>
                        <p>
                          Diploma expedido por OpenBootCamp en diciembre 2022.
                        </p>
                        <a
                          target="_blank"
                          href="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/9138ceb8-5618-4f10-895e-cb71642aa891"
                        >
                          Ver Mas
                        </a>
                      </li>
                      <li>
                        <span>Diploma de SQL</span>
                        <p>Diploma expedido por OpenBootCamp en marzo 2023.</p>
                        <a
                          target="_blank"
                          href="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/81eeeed4-a44a-4738-bd4e-eed665bbeeea"
                        >
                          Ver Mas
                        </a>
                      </li>
                      <li>
                        <span>Diploma de Conceptos de la Programacion</span>
                        <p>
                          Diploma expedido por OpenBootCamp en diciembre 2022.
                        </p>
                        <a
                          href="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/10a112be-c31f-466c-b07b-9f2f255d153b"
                          target="_blank"
                        >
                          Ver Mas
                        </a>
                      </li>
                      <li>
                        <span>Certificate EF SET ENGLISH</span>
                        <p>
                          Diploma expedido por EF International Language Centers
                          en enero 2023.
                        </p>
                        <a
                          href="https://www.efset.org/cert/voi3Pn"
                          target="_blank"
                        >
                          Ver Mas
                        </a>
                      </li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
                  <a
                    href="https://www.linkedin.com/in/juanpablovillalba/overlay/1635511946196/single-media-viewer/?profileId=ACoAAD9XiI4BZDo5ZAeu0_5ZvsF0VSRjDPX2GYI"
                    target="_blank"
                  >
                    Ver Mas
                  </a>
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
                  <a
                    href="https://www.linkedin.com/in/juanpablovillalba/details/honors/"
                    target="_blank"
                  >
                    Ver Mas
                  </a>
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
