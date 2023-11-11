import React from "react";
import styles from "./Form.module.scss";
import { Button } from "../../shared";
import { FormProvider, useForm } from "react-hook-form";
import { EarthAnimation, StarsAnimation } from "..";

const Form = ({ children }) => {
  const form = useForm();
  const { handleSubmit } = form;
  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <FormProvider {...form}>
          {children}
        </FormProvider>
      </div>
      <EarthAnimation />
      <StarsAnimation />
    </div>
  );
};

export default Form;
