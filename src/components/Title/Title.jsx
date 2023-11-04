import React from 'react'
import styles from "./Title.module.scss"

const Title = ({text, padding}) => {
  return (
    <h3 style={{paddingBottom: {padding}}} className={styles.title}>{text}</h3>
  )
}

export default Title