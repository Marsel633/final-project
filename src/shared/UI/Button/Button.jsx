import React from 'react'
import styles from "./Button.module.scss"

const Button = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
        <span>{children}</span>
    </button>
  )
}

export default Button