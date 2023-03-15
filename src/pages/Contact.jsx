import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Icons

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

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
        <img src="/img/contact.svg" alt="" data-aos="zoom-in-right"/>
        <div data-aos="zoom-in-left">
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
            <input type="text" placeholder="Nombre Completo" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Numero de Telefono" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Escribe tu Mensaje"
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
