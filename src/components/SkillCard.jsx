import React from 'react'

import styles from "../styles/SkillCard.module.css"

function SkillCard(props) {
  return (
    <div className={styles.container}>
      <img src={`/img/icons/${props.img}.svg`} alt={props.img} />
      <p>{props.title}</p>
    </div>
  )
}

export default SkillCard
