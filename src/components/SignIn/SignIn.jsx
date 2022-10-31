import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate(`/`);
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("이메일을 입력해주세요"),
    name: yup.string().required("이름을 입력해주세요"),
    pw: yup.string().min(8).max(16).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref("pw"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: SignIn) => {
    console.log("떠야지", data);
  };

  return (
    <SignInContainer className="SignIn">
      <SignContainer>
        <GuideSection>ThisCord 계정만들기</GuideSection>
        <Container>
          <FormCon onSubmit={handleSubmit(submitForm)}>
            <MainLabel htmlFor="email">이메일</MainLabel>
            <MainInput
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email")}
            />

            <span>{errors.email && "이메일 형식이 맞지 않습니다."}</span>
            <MainLabel htmlFor="name">이름</MainLabel>
            <MainInput
              type="text"
              placeholder="이름을 입력해주세요"
              {...register("name")}
            />
            <span>{errors.name && "이름 형식이 맞지 않습니다."}</span>
            <MainLabel htmlFor="pw">비밀번호</MainLabel>
            <MainInput
              type="text"
              placeholder="비밀번호를 입력해주세요"
              {...register("pw")}
            />
            <span>
              {errors.pw && "비밀번호는 최소8자리~16자리로 입력해주세요."}{" "}
            </span>
            <SignBtn type="submit">회원가입</SignBtn>
          </FormCon>
          <LoginGo onClick={onClickLogin}>이미 계정이 있으신가요?</LoginGo>
        </Container>
      </SignContainer>
    </SignInContainer>
  );
};

export default SignIn;

// 전체 html의 속성입니다.
const SignInContainer = styled.div`
  border: 1px solid transparent;
  background-color: #5865f2;
  color: white;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// thiscord의 기본 레이아웃입니다.
const SignContainer = styled.div`
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
