import React, { useState } from "react";
import styles from "./Login.module.scss";
import {
  EarthAnimation,
  StarsAnimation,
  Title,
  useNav,
} from "../../components";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineUser,
  AiFillLock,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Button } from "../../shared";

const Login = () => {
  const [eye, setEye] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const { goTo } = useNav();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__form}>
        <Title text="Login" />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBox}>
            <input
              className="input"
              type="email"
              autoComplete="off"
              required="required"
              {...register("email", { required: true })}
            />
            <AiOutlineUser className="inputSvg" />
            <span className="inputSpan">Username</span>
          </div>
          <div className={styles.inputBox}>
            <input
              className="input"
              type={eye ? "text" : "password"}
              required="required"
              {...register("password", { required: true })}
            />
            <AiFillLock className="inputSvg" />
            <span className="inputSpan">Password</span>
            <div className={styles.eye}>
              {eye ? (
                <AiFillEye className="inputSvg" onClick={() => setEye(!eye)} />
              ) : (
                <AiFillEyeInvisible className="inputSvg" onClick={() => setEye(!eye)} />
              )}
            </div>
          </div>
          <Button type="submit">Войти</Button>
        </form>
        <p>
          Not Registered?
          <a
            onClick={() => {
              goTo("/signup");
            }}
          >
            {" "}
            Create an account
          </a>
        </p>
      </div>
      <EarthAnimation />
      <StarsAnimation />
    </div>
  );
};

export default Login;
