import React, { useState } from "react";
import styles from "./Input.module.scss";
import { useFormContext } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = ({
  autocomplete,
  title,
  icon: Icon,
  registerName,
  type,
  children,
}) => {
  const [eye, setEye] = useState(false);
  const { register } = useFormContext();
  const toggleEye = () => {
    setEye(!eye);
    type="text"
  }
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        type={type}
        autoComplete={autocomplete}
        required="required"
        {...register(`${registerName}`, { required: true })}
      />
      {Icon && <Icon className={styles.inputSvg} />}
      <span className={styles.inputSpan}>{title}</span>
      {type === "password" && (
        <div className={styles.eye}>
          {eye ? (
            <AiFillEye
              className={styles.inputSvg}
              onClick={() => setEye(!eye)}
            />
          ) : (
            <AiFillEyeInvisible
              className={styles.inputSvg}
              onClick={() => setEye(!eye)}
            />
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Input;
