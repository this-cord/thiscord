import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { __getDetail, __getPage } from "../../store/modules/mainThunk";

import ChannelBar from "./ChannelBar";
import ChattingRoom from "./ChattingRoom";
import FriendBar from "./FriendBar";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getDetail(1));
  }, [dispatch]);
  const mainPage = useSelector((state) => state.post?.page);
  const detail = useSelector((state) => state.post?.detail);

  const name = mainPage?.name;
  const room = mainPage?.chattingRoom;
  const onlineUser = mainPage?.onlineUser;
  const offlineUser = mainPage?.offlineUser;

  console.log(detail);

  return (
    <MainContainer>
      <Container>
        <ChannelBar userName={name} room={room} />
        <ChattingRoom room={room} />
        <FriendBar online={onlineUser} offline={offlineUser} />
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
