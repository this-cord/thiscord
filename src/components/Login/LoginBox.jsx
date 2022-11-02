import styled from "styled-components";
import LoginForm from "../shared/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { __loginUser } from "../../store/modules/signThunk";
import { useDispatch } from "react-redux";

const LoginBox = () => {
  const initalState = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initalState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  /*
email: test001@gmail.com"
name:"테스트용"
password: "test001@"
*/
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __loginUser({
        email: userData.email,
        password: userData.password,
      })
    );
    if (sessionStorage.Access_Token !== undefined) {
      alert("로그인 성공");
      navigate("/main");
    }
  };
  return (
    <LoginForm
      title={"돌아오신 것을 환영해요!"}
      subtitle={"다시 만나다니 너무 반가워요!"}
    >
      <Container>
        <FormCon onSubmit={onSubmitHandler}>
          <MainLabel htmlFor="email">이메일</MainLabel>
          <MainInput
            type="email"
            name="email"
            value={userData.email}
            onChange={onChangeHandler}
            required
          />
          <MainLabel htmlFor="pw">비밀번호</MainLabel>
          <MainInput
            type="text"
            name="password"
            value={userData.password}
            onChange={onChangeHandler}
            required
          />
          <LoginBtn type="submit">로그인</LoginBtn>
          <span>
            계정이 필요한가요?
            <SignLink to="/sign">가입하기</SignLink>
          </span>
        </FormCon>
      </Container>
    </LoginForm>
  );
};

export default LoginBox;

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
// signin 회원가입버튼부분입니다.
const LoginBtn = styled.button`
  border: 1px solid transparent;
  background-color: #5865f2;
  border-radius: 5px;

  color: #f2f2f2;

  height: 50px;

  &:hover {
    background-color: #4752c4;
    color: #f2f2f2;
  }
`;

// signin input 속성정보입니다.
const MainInput = styled.input`
  border: 1px solid black;
  background-color: #202225;
  border-radius: 5px;
  color: #f2f2f2;

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
  height: 0px;
`;

const SignLink = styled(Link)`
  text-decoration: none;
  color: #00aff4;
  &:hover {
    text-decoration: underline;
  }
`;
