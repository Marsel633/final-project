import React, { useEffect } from "react";
import { Form, Title } from "../../components";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Button, Input } from "../../shared";
import styles from "./Login.module.scss";
import { continueWithIcons } from "../../assets/arrays";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { getUserStore } from "../../store";

const Login = () => {
  const form = useForm();
  const { handleSubmit, reset } = form;
  const navigate = useNavigate();
  const {getUserInfo, userInfo} = getUserStore;
  const onSubmit = (values) => {
    getUserInfo(values);
  };

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/profile")
    }
  }, [userInfo.data])

  return (
    <Form>
      <FormProvider {...form}>
        <form className={`${styles.form} form`} onSubmit={handleSubmit(onSubmit)}>
          <Title text="Login" padding={40} />
          <Input
            type="text"
            title="Username"
            registerName="username"
            autocomplete="off"
            icon={AiOutlineUser}
          />
          <Input type="password" registerName="password" title="Password" icon={AiFillLock} />
          <Button type="submit">Login</Button>
        </form>
        <div className={styles.login__signup}>
          <p>
            Not Registered?{" "}
            <a
              className={styles.link}
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              Create an account
            </a>
          </p>
          <p className={styles.login__p}>Or login with</p>
          <div className={styles.login__socials}>
            {continueWithIcons.map((item) => (
              <button key={item.id}>{item}</button>
            ))}
          </div>
        </div>
      </FormProvider>
    </Form>
  );
};

export default Login;
