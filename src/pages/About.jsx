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
            Reconocimientos
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
                  ¡Hola! Mi nombre es Mohit Sehrawat y me gusta crear cosas que
                  viven en Internet. Soy un desarrollador apasionado, con
                  fuertes habilidades administrativas y de comunicación, buena
                  atención al detalle y la capacidad de escribir código
                  eficiente.
                </li>
                <li>
                  Después de completar mi curso de Desarrollo Web Full-Stack,
                  tuve la oportunidad de convertirme en Instructor para los
                  estudiantes recién incorporados, allí ayudé a más de 200
                  estudiantes a despejar sus dudas relacionadas con el
                  desarrollo web y el plan de estudios de DSA y les guié durante
                  todo el curso.
                </li>
                <li>
                  Avanzando rápido hasta hoy, estoy trabajando como
                  Desarrollador Full Stack en el gigante spin-off de IBM
                  'Kyndryl'. Después de mucha preparación, dedicación y
                  constancia, soy capaz de lograr este hito. Al comenzar el
                  siguiente capítulo de mi carrera, estoy muy ansioso por
                  aprender, crecer y contribuir a mi nuevo papel
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
                  Certificaciones sit amet consectetur adipisicing elit. Ducimus
                  ipsum obcaecati dolores recusandae inventore saepe illum
                  accusamus eaque rem? Totam soluta voluptatibus molestias sequi
                  alias quis ipsa iusto dolores dolor!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsum obcaecati dolores recusandae inventore saepe
                  illum accusamus eaque rem? Totam soluta voluptatibus molestias
                  sequi alias quis ipsa iusto dolores dolor!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsum obcaecati dolores recusandae inventore saepe
                  illum accusamus eaque rem? Totam soluta voluptatibus molestias
                  sequi alias quis ipsa iusto dolores dolor!
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
