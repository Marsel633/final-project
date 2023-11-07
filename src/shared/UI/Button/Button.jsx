import React from 'react'
import styles from "./Button.module.scss"

const Button = ({children, ...props}) => {
  return (
    <button {...props} class={styles.button}>
            <svg height="45" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect className={styles.shape} height="40" width="150" />
            </svg>
<span class={styles.span}>{children}</span>
        </button>
  )
}

export default Button