import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ModalPage from "./ModalPage";
import { __addRoom, __getRoomById } from "../../store/modules/mainSlice";
import useInput from "../../hooks/useInput";
import ChannelBar from "./ChannelBar";
import ChattingRoom from "./ChattingRoom";
import FriendBar from "./FriendBar";

const Main = () => {
  const dispatch = useDispatch();

  // const params = useParams();
  // const roomId = params.id;

  // useEffect(() => {
  //   dispatch(__getRoomById(roomId));
  // }, [dispatch, roomId]);
  // console.log("룸 아이디", roomId);
  // const roomData = useSelector((state) => state.mainSlice.data);

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
