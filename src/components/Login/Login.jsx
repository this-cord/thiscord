import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import handleSubmit from "../SignUp/SignUp";
import LoginBox from "./LoginBox";
/*
email: dudgns911@naver.com"
name:"정영훈"
password:"test123@"
*/

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { register, setRegister } = useForm();
  const onSubmit = (data) => {
    setState(data);
    console.log(state);
  };
  console.log("렌더링");

  return (
    <>
      <LoginBox />
    </>
  );
};

export default Login;
