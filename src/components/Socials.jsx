import React from "react";
import styles from "../styles/Socials.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Socials() {
  return (
    <div className={styles.box}>
      <a href="/">
        <GitHubIcon />
      </a>

      <a href="/">
        <LinkedInIcon />
      </a>

      <a href="/">
        <EmailIcon />
      </a>

      <a href="#top" className={styles.arrow}>
        <ArrowUpwardIcon />
      </a>
    </div>
  );
}

export default Socials;
