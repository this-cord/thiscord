import React from "react";
import styled from "styled-components";
import ChannelBar from "./ChannelBar";
import ChattingRoom from "./ChattingRoom";
import FriendBar from "./FriendBar";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ChannelBar />
        <ChattingRoom />
        <FriendBar />
      </Container>
    </MainContainer>
  );
};

export default Main;

// 배경화면 전체입니다.
const MainContainer = styled.div`
  color: white;
  weight: 100vw;
  height: 100vh;
`;

// 검은 채팅방 전체입니다.
const Container = styled.div`
  background-color: #36393f;
  border-radius: 10px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
