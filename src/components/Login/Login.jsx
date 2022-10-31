import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import handleSubmit from "../SignUp/SignUp";

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
    <LogInContainer className="SignIn">
      <LogContainer>
        <GuideSection>Thiscord에 오신것을 환영합니다</GuideSection>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              placeholder="이메일을 입력해주세요"
              ref={register}
            />
            <input
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              ref={register({ required: true })}
            />
            <input type="submit" />
          </form>
        </Container>
      </LogContainer>
    </LogInContainer>
  );
};

export default Login;

const LogInContainer = styled.div`
  border: 1px solid transparent;
  background-color: #5865f2;
  color: white;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// thiscord의 기본 레이아웃입니다.
const LogContainer = styled.div`
  border: 1px solid transparent;
  background-color: #2f3136;
  border-radius: 10px;

  width: 500px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// thiscord안의 signin쪽 레이아웃입니다.
const Container = styled.div`
  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// signin쪽의 form 입니다.
const FormCon = styled.form`
  border: 1px solid transparent;

  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// signin 제목부분입니다.
const GuideSection = styled.div`
  border: 1px solid transparent;

  font-size: 30px;

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// signin 회원가입버튼부분입니다.
const SignBtn = styled.button`
  border: 1px solid transparent;
  background-color: #5865f2;
  border-radius: 5px;

  color: white;

  height: 50px;

  &::hover {
    background-color: #5865f2;
    color: white;
  }
`;

// signin input 속성정보입니다.
const MainInput = styled.input`
  border: 1px solid black;
  background-color: black;
  border-radius: 5px;
  color: white;

  width: 400px;
  height: 50px;
`;

// signin label 속성입니다.
const MainLabel = styled.label`
  border: 1px solid transparent;

  width: 400px;
  height: 10px;
`;

const LoginGo = styled.span`
  &::hover {
    color: white;
    background-color: white;
    font-weight: bold;
  }
`;
