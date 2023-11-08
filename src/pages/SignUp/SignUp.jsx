import React, { useEffect } from "react";
import { Form, Title } from "../../components";
import { Input } from "../../shared";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { observer } from "mobx-react-lite";
import { counterStore } from "../../store";
import { useNavigate } from "react-router-dom";


const SignUp = observer(() => {
  const registerUser = counterStore;
  const navigate = useNavigate();
  const onSubmit = (values) => {
    registerUser(values);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [this.user.data])
  
  return (
    <Form btnTitle="Register" submitFunc={onSubmit}>
      <Title text="Sign Up" padding={30} />
      <Input type="text" autocomplete="off" title="Name" icon={AiOutlineUser} />
      <Input
        type="email"
        autocomplete="off"
        title="Email"
        icon={AiOutlineMail}
      />
      <Input type="password" title="Password" icon={AiFillLock} />
      <Input type="password" title="Confirm the Password" icon={AiFillLock} />
    </Form>
  );
});

export default SignUp;
