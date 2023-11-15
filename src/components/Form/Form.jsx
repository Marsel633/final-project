import React from "react";
import styles from "./Form.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { EarthAnimation, StarsAnimation, TokyoAnimation } from "..";

const Form = ({ children, formType }) => {
  const form = useForm();
  const { handleSubmit } = form;
  const getFormType = () => {
    if (formType === "login") {
      return <TokyoAnimation />;
    } else if (formType === "sign up") {
      return <EarthAnimation />;
    }
    return null;
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <FormProvider {...form}>{children}</FormProvider>
      </div>
      {getFormType()}
      <StarsAnimation />
    </div>
  );
};

export default Form;
