import React, { useEffect } from "react";
import styles from "../styles/About.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";

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
                alt="sobre mi"
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
                  <AccordionButton className={styles.AccordionButton}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={styles.AccordionBox}
                    >
                      Oracle NEXT
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.about}>
                    <img
                      src="/img/oracle.png"
                      alt="oracle"
                      className={styles.imgLeft}
                    />
                    <ul>
                      <Certificate
                        title="Lógica de programación: Primeros pasos"
                        desc="Diploma expedido por ONE Oracle en abril 2022"
                        link="https://app.aluracursos.com/certificate/contact-juampavlb/logica-de-programacion-primeros-pasos"
                      />

                      <Certificate
                        title="Lógica de programación: Practicando con juegos y animaciones"
                        desc="Diploma expedido por ONE Oracle en abril 2022"
                        link="http://surl.li/gfjex"
                      />

                      <Certificate
                        title="Lógica de programación: Conceptos primordiales"
                        desc="Diploma expedido por ONE Oracle en abril 2022"
                        link="https://app.aluracursos.com/certificate/contact-juampavlb/logica-de-programacion-conceptos-primordiales"
                      />

                      <Certificate
                        title="HTML5 y CSS3 parte 4: Avanzando en CSS"
                        desc="Diploma expedido por ONE Oracle en abril 2022"
                        link="https://app.aluracursos.com/certificate/contact-juampavlb/html5-css3-avanzando-css"
                      />
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={styles.AccordionItem}>
                <h2>
                  <AccordionButton className={styles.AccordionButton}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={styles.AccordionBox}
                    >
                      OpenBootcamp
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.about}>
                    <img
                      src="/img/openbootcamp.png"
                      alt="open bootcamp"
                      className={styles.imgLeft}
                    />
                    <ul>
                      <Certificate
                        title="Diploma de HTML5 y CSS3"
                        desc="Diploma expedido por OpenBootCamp en diciembre 2022"
                        link="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/9138ceb8-5618-4f10-895e-cb71642aa891"
                      />

                      <Certificate
                        title="Diploma de Conceptos de la Programacion"
                        desc="Diploma expedido por OpenBootCamp en diciembre 2022."
                        link="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/10a112be-c31f-466c-b07b-9f2f255d153b"
                        target="_blank"
                      />

                      <Certificate
                        title="Diploma de SQL"
                        desc="Diploma expedido por OpenBootCamp en marzo 2023."
                        link="https://community.open-bootcamp.com/user/jumpavlb/certificaciones/81eeeed4-a44a-4738-bd4e-eed665bbeeea"
                      />
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={styles.AccordionItem}>
                <h2>
                  <AccordionButton className={styles.AccordionButton}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={styles.AccordionBox}
                    >
                      Otros
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.AccordionPanel}>
                  <div className={styles.about}>
                    <img
                      src="/img/certificado.png"
                      alt="certificado"
                      className={styles.imgLeft}
                    />
                    <ul>
                      <Certificate
                        title="Certificate EF SET ENGLISH"
                        desc="Diploma expedido por EF International Language Centers en enero 2023."
                        link="https://www.efset.org/cert/voi3Pn"
                      />
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
            <div className={styles.about}>
              <img src="/img/premios.png" alt="premios" className={styles.imgLeft} />
              <ul>
                <Certificate
                  title="Diploma 1° puesto Certamen Desafios TECIP de Programacion Categoria 2"
                  desc="Diploma Expedido por Departamento de Informatica de la
                  Institucion diciembre 2022"
                  link="https://www.linkedin.com/in/juanpablovillalba/overlay/1635511946196/single-media-viewer/?profileId=ACoAAD9XiI4BZDo5ZAeu0_5ZvsF0VSRjDPX2GYI"
                />

                <Certificate
                  title="Diploma 2° puesto Certamen Desafios TECIP de Programacion Categoria 2"
                  desc="Diploma Expedido por Departamento de Informatica de la
                  Institucion mayo 2022"
                  link="https://www.linkedin.com/in/juanpablovillalba/details/honors/"
                />
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default About;
