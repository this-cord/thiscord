import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginForm from "../shared/LoginForm";
import { __addUsers } from "../../store/modules/signThunk";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initalState = {
    email: "",
    password: "",
    name: "",
  };

  const [user, setUser] = useState(initalState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addUsers(user));
    setUser(initalState);
  };

  const onClickLogin = () => {
    navigate(`/`);
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("이메일을 입력해주세요"),
    name: yup.string().required("이름을 입력해주세요"),
    pw: yup.string().min(8).max(16).required("비밀번호는 8-16자 사이입니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: SignUp) => {
    console.log("떠야지", data);
  };

  return (
    <LoginForm title={"This.Cord 계정 만들기"} subtitle="">
      <Container>
        <FormCon onSubmit={onSubmitHandler}>
          <MainLabel htmlFor="email">이메일</MainLabel>
          <MainInput
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeHandler}
            name="email"
            value={user.email}
            // {...register("email")}
          />
          <span>{errors.email && "이메일 형식이 맞지 않습니다."}</span>
          <MainLabel htmlFor="name">이름</MainLabel>
          <MainInput
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={onChangeHandler}
            name="name"
            value={user.name}
            // {...register("name")}
          />
          <span>{errors.name && "이름 형식이 맞지 않습니다."}</span>
          <MainLabel htmlFor="pw">비밀번호</MainLabel>
          <MainInput
            type="text"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeHandler}
            name="password"
            value={user.password}
            // {...register("pw")}
          />
          <span>
            {errors.pw && "비밀번호는 최소8자리~16자리로 입력해주세요."}{" "}
          </span>
          <SignBtn type="submit">회원가입</SignBtn>
        </FormCon>
        <LoginGo onClick={onClickLogin}>이미 계정이 있으신가요?</LoginGo>
      </Container>
    </LoginForm>
  );
};

export default SignUp;

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

const SignBtn = styled.button`
  border: 1px solid transparent;
  background-color: #5865f2;
  border-radius: 5px;

  color: white;

  height: 50px;

  &:hover {
    background-color: #4752c4;
    color: white;
  }
`;

// signin input 속성정보입니다.
const MainInput = styled.input`
  border: 1px solid black;
  background-color: #202225;
  border-radius: 5px;
  color: white;

  width: 400px;
  height: 50px;

  &:focus {
    outline: none;
  }
`;

// signin label 속성입니다.
const MainLabel = styled.label`
  border: 1px solid transparent;

  width: 400px;
  height: 10px;
`;

const LoginGo = styled.span`
  &:hover {
    color: white;
    font-weight: bold;
    text-decoration: underline;
  }
`;
