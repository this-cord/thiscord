import styled from "styled-components";
import Layout from "./Layout";

const LoginForm = (props) => {
  return (
    <>
      <Layout />
      <LoginForms className="SignIn">
        <SignBox>
          <GuideSection>{props.title}</GuideSection>
          <SubGuide>{props.subtitle}</SubGuide>
          {props.children}
        </SignBox>
      </LoginForms>
    </>
  );
};

const LoginForms = styled.div`
  border: 1px solid transparent;
  background-color: #5865f2;
  color: white;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// thiscord의 기본 레이아웃입니다.
const SignBox = styled.div`
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

// signin 제목부분입니다.
const GuideSection = styled.div`
  border: 1px solid transparent;

  font-family: S-CoreDream-3Light;
  font-size: 32px;

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubGuide = styled.div`
  border: 1px solid transparent;
  font-size: 14px;
`;

export default LoginForm;
