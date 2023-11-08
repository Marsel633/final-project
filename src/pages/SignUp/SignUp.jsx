import React from "react";
import { Form, Title } from "../../components";
import { Input } from "../../shared";
import {AiOutlineUser, AiOutlineMail,AiFillLock} from "react-icons/ai"

const SignUp = () => {
  return (
    <Form btnTitle="Register">
        <Title text="Sign Up" padding={30}/>
        <Input type="text" autocomplete="off" title="Name" icon={AiOutlineUser}/>
        <Input type="email" autocomplete="off" title="Email" icon={AiOutlineMail}/>
        <Input type="password" title="Password" icon={AiFillLock}/>
        <Input type="password" title="Confirm the Password" icon={AiFillLock}/>
    </Form>
  );
};

export default SignUp;
