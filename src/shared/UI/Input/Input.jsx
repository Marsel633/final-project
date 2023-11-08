import React, { useState } from 'react'
import styles from "./Input.module.scss"
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible,
  AiFillEye,} from "react-icons/ai"

const Input = ({type, autocomplete, title, icon:Icon, children}) => {
  const [eye, setEye] = useState(false);
  const {register} = useForm();
  return (
    <div className={styles.inputBox}>
    <input
      className={styles.input}
      type={type}
      autoComplete={autocomplete}
      required="required"
      {...register(`${type}`, { required: true })}
    />
    {Icon && <Icon className={styles.inputSvg} />}
    <span className={styles.inputSpan}>{title}</span>
    {type === "password" ? (
  <div className={styles.eye}>
    {eye ? (
      <AiFillEye className={styles.inputSvg} onClick={() => setEye(!eye)} />
    ) : (
      <AiFillEyeInvisible
        className={styles.inputSvg}
        onClick={() => setEye(!eye)}
      />
    )}
  </div>
) : null}
    {children}
  </div>
  )
}

export default Input;