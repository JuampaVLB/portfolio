import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

import ToggleColorMode from './ToggleColorMode';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


// Components


function Navbar() {

  const [clicked, SetClicked] = useState(false);

  const handleClick = () => {
    SetClicked(!clicked);
    console.log("clicked");
  }

  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>juampa<span>vlb</span></a>
                <ul>
                    <div className={`links ${clicked ? styles.active : styles.links}`}>
                    <a href="#home">
                        <button onClick={handleClick}>Inicio</button>
                    </a>

                    <a href="#about">
                        <button onClick={handleClick}>Sobre Mi</button>
                    </a>

                    <a href="#projects">
                        <button onClick={handleClick}>Proyectos</button>
                    </a>

                    <a href="#skills">
                        <button onClick={handleClick}>Habilidades</button>
                    </a>

                    <a href="#contact">
                        <button onClick={handleClick}>Contacto</button>
                    </a>
                    </div>
                    <div className={styles.burguer}>
                        {clicked ? (
                            <CloseIcon onClick={handleClick} className={styles.close}/>
                        ) : (
                            <MenuIcon onClick={handleClick} />
                        )}
                    </div>
                        
                    <div className={`${clicked ? styles.deactivate : styles.moon}`}>
                        <ToggleColorMode />
                    </div>
                    
                </ul>
        </nav>
    </header>
  )
}



export default Navbar
