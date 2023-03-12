import React from 'react'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container} id='home'>
      <div className={styles.presentation}>
        <p>Hola, mi nombre es</p>
        <h1>Juan Pablo Villalba</h1>
        <h2>Full Stack Developer</h2>
        <a href='../../public/docs/Juan Pablo Villalba.pdf' target="_BLANK">Descargar CV</a>
      </div>
      <div className={styles.image}>
      <img src="../../public/img/profile.png" alt="Juan Pablo Villalba" />
      </div>
      
    </div>
  )
}

export default Home