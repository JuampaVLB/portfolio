import React from "react";
import styles from "../styles/Contact.module.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Icons

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="contact"
    >
      <p className={styles.title}>
        Toma un <span>Cafe</span> y <span>Habla</span> Conmigo
      </p>
      <div className={styles.containerFlex}>
        <img src="/img/contact.svg" alt="" />
        <div>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/juanpablovillalba/" target="_blank">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/JuampaVLB" target="_blank">
              <GitHubIcon /> GitHub
            </a>
            <a href="mailto:contacto.juanpablovillalba@gmail.com" target="_blank">
              <MailOutlineIcon /> Gmail
            </a>
          </div>
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Number" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <p className={styles.footer}>
        Diseñado y construido por Juan Pablo, 2023 Todos los derechos reservados
      </p>
    </div>
  );
}

export default Contact;
