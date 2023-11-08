import React from "react";
import styles from "./Form.module.scss";
import { Button } from "../../shared";
import { useForm } from "react-hook-form";
import { EarthAnimation, StarsAnimation, useNav } from "..";



const Form = ({ children, submitFunc, btnTitle }) => {
  const { handleSubmit } = useForm();
  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <form className={styles.form} onSubmit={handleSubmit({ submitFunc })}>
          {children}
          <Button type="submit">{btnTitle}</Button>
        </form>
      </div>
      <EarthAnimation />
      <StarsAnimation />
    </div>
  );
};

export default Form;
