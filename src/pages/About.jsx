import * as React from "react";
import styles from "../styles/About.module.css";

// Components

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function About() {
  return (
    <div className={styles.container} id="about">
      <p className={styles.title}>
        Todo <span>Sobre Mi</span> y <span>Certificaciones</span>
      </p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab className={styles.tab} _selected={{ color: 'white', bg: '#FECC01' }}>Sobre Mi</Tab>
          <Tab className={styles.tab} _selected={{ color: 'white', bg: '#FECC01' }}>Certificaciones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.TabPanel}>
            <div className={styles.about}>
              <img src="/img/img2.jpg" alt="" className={styles.imgLeft}/>
              <ul>
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
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ipsum obcaecati dolores recusandae inventore saepe
                  illum accusamus eaque rem? Totam soluta voluptatibus molestias
                  sequi alias quis ipsa iusto dolores dolor!
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={styles.TabPanel}>
            <div className={styles.about}>
              <img src="/img/img3.jpg" alt="" className={styles.imgLeft}/>
              <ul>
                <li>
                  Certificaciones sit amet consectetur adipisicing elit.
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
