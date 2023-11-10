import React from 'react'
import styles from "./Button2.module.scss"

const Button2 = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
        {children}</button>
  )
}

export default Button2