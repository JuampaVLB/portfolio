import React from "react";
import styles from "../styles/Socials.module.css";

import 'animate.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Socials() {
  return (
    <div className={styles.box}>
      <a href="https://github.com/JuampaVLB" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <GitHubIcon />
      </a>

      <a href="https://www.linkedin.com/in/juanpablovillalba/" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <LinkedInIcon />
      </a>

      <a href="mailto:contacto.juanpablovillalba@gmail.com" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <EmailIcon />
      </a>

      <a href="#top" className={`${styles.arrow} animate__animated animate__slideInRight`}>
        <ArrowUpwardIcon />
      </a>
    </div>
  );
}

export default Socials;
