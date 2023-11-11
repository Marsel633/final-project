import React, { useEffect } from "react";
import { Form, Title } from "../../components";
import { Button, Input } from "../../shared";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import {MdAddAPhoto} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss"
import { FormProvider, useForm } from "react-hook-form";
import { userStore } from "../../store";

const SignUp = () => {
  const form = useForm();
  const { handleSubmit, reset } = form;
  const { registerUser, user } = userStore;
  const navigate = useNavigate();

  const onSubmit = (values) => {
    registerUser(values);
    navigate('/home');
    reset();
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/profile");
  //   }
  // }, [user.data]);  

  return (
    <Form>
      <FormProvider {...form}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Title text="Sign Up" padding={30} />
          <Input
            type="text"
            autocomplete="off"
            title="Name"
            registerName="name"
            icon={AiOutlineUser}
          />
          <Input
            type="Email"
            registerName="email"
            autocomplete="off"
            title="email"
            icon={AiOutlineMail}
          />
          {/* <Input
            type="file"
            registerName="photo"
            autocomplete="off"
            title="Add Photo"
            icon={MdAddAPhoto}
          /> */}
          <Input
            type="password"
            registerName="password"
            autocomplete="off"
            title="Password"
            icon={AiFillLock}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <div className={styles.login__signup}>
          <p>
            Already have an account?{" "}
            <a
              className={styles.link}
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Login Here
            </a>
          </p>
        </div>
      </FormProvider>
    </Form>
  );
};

export default SignUp;
