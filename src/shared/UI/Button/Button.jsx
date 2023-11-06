import React from 'react'
import styles from "./Button.module.scss"

const Button = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
        <span></span>
        {children}
    </button>
  )
}

export default Button