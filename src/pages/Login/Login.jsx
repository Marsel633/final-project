import React from "react";
import { Form, Title, useNav } from "../../components";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Input } from "../../shared";
import styles from "./Login.module.scss"
import { continueWithIcons } from "../../assets/arrays";

const Login = () => {
  const { goTo } = useNav();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form btnTitle="Login" submitFunc={onSubmit}>
      <Title text="Login" padding={40}/>
      <Input
        type="text"
        title="Username"
        autocomplete="off"
        icon={AiOutlineUser}
      />
      <Input type="password" title="Password" icon={AiFillLock} />
      <div className={styles.login__signup}>
        <p>Not Registered? <a
          onClick={() => {
            goTo("/signup");
          }}
        >
          {" "}
          Create an account
        </a></p>
        <p className={styles.login__p}>Or login with</p>
          <div className={styles.login__socials}>
            {continueWithIcons.map((item) => (
              <button key={item.id}>{item}</button>
            ))}
          </div>
      </div>
    </Form>
  );
};

export default Login;
