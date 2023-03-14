import React from "react";
import styles from "../styles/Skills.module.css";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import SkillCard from "../components/SkillCard";

function skills() {
  const skills = [
    {
      img: "html",
      title: "HTML5",
      category: "frontend",
    },
    {
      img: "css",
      title: "CSS3",
      category: "frontend",
    },
    {
      img: "javascript",
      title: "Javascript",
      category: "frontend",
    },
    {
      img: "react",
      title: "React",
      category: "frontend",
    },
    {
      img: "chakra",
      title: "Chakra UI",
      category: "frontend",
    },
    {
      img: "tailwind",
      title: "Tailwind",
      category: "frontend",
    },
    {
      img: "nodejs",
      title: "NodeJS",
      category: "backend",
    },
    {
      img: "csharp",
      title: "C#",
      category: "backend",
    },
    {
      img: "express",
      title: "ExpressJS",
      category: "backend",
    },
    {
      img: "mongodb",
      title: "MongoDB",
      category: "backend",
    },
    {
      img: "mongoose",
      title: "Mongoose",
      category: "backend",
    },
    {
      img: "mysql",
      title: "MySQL",
      category: "backend",
    },
    {
      img: "git",
      title: "GIT",
      category: "backend",
    },
    {
      img: "docker",
      title: "Docker",
      category: "backend",
    },
    {
      img: "postman",
      title: "Postman",
      category: "backend",
    },
    
  ];

  return (
    <div className={styles.container} id="skills">
      <p className={styles.title}>Mis <span>Habilidades</span> tecnicas</p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Todo
          </Tab>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Frontend
          </Tab>
          <Tab
            className={styles.tab}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Backend
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel className={styles.TabPanel}>
            {skills.map((card, index) => (
              <SkillCard img={card.img} title={card.title} />
            ))}
          </TabPanel>

          <TabPanel className={styles.TabPanel}>
            {skills.map((card, index) =>
              card.category !== "backend" ? (
                <SkillCard img={card.img} title={card.title} />
              ) : (
                ""
              )
            )}
          </TabPanel>

          <TabPanel className={styles.TabPanel}>
            {skills.map((card, index) =>
              card.category !== "frontend" ? (
                <SkillCard img={card.img} title={card.title} />
              ) : (
                ""
              )
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default skills;
