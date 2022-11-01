import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <TotalChannel>
          <ChannelList>
            <Channel>메인서버</Channel>
          </ChannelList>
          <ChannelSec>
            <ChannelTop>김항해의 This.Cord</ChannelTop>
            <ChannelBody>
              <ChattingRoom>
                <RoomName>채팅방1</RoomName>
                <RNChange>변신</RNChange>
              </ChattingRoom>
            </ChannelBody>
            <ChannelBottom>
              <ChannelB>
                <UserInfo>김항해님</UserInfo>
                <NewChatRoom>채팅방개설</NewChatRoom>
              </ChannelB>
            </ChannelBottom>
          </ChannelSec>
        </TotalChannel>

        <ChatRoom>
          <ChatRoomTop>
            <ChatTitle># general</ChatTitle>
          </ChatRoomTop>
          <ChatRoomBody>채널방 중간</ChatRoomBody>
          <Chat>
            <ChatSec>
              <ChatInput></ChatInput>
              <SubmitBtn>보내기</SubmitBtn>
            </ChatSec>
          </Chat>
        </ChatRoom>
        <UserSec>
          <UserTitle>채팅방1의 인원리스트</UserTitle>
          <UserList>
            <UserOn>
              <ListTitle>온라인</ListTitle>
              <UserOnline>
                <User>김똥개</User>
                <User>김동개</User>
                <User>김통개</User>
                <User>김동개</User>
                <User>김통개</User>
                <User>김동개</User>
                <User>김통개</User>
                <User>김동개</User>
                <User>김통개</User>
                <User>김동개</User>
              </UserOnline>
            </UserOn>

            <UserOff>
              <ListTitle>오프라인</ListTitle>
              <UserOffline>
                <User>박첨지</User>

                <User>지첨지</User>
              </UserOffline>
            </UserOff>
          </UserList>
        </UserSec>
      </Container>
    </MainContainer>
  );
};

export default Main;

// 배경화면 전체입니다.
const MainContainer = styled.div`
  border: 1px solid transparent;
  background-color: #5865f2;
  color: white;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 검은 채팅방 전체입니다.
const Container = styled.div`
  border: 1px solid transparent;
  background-color: #2f3136;
  border-radius: 10px;

  width: 1300px;
  height: 600px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 채널리스트+ 옆섹션
const TotalChannel = styled.div`
  border: 1px solid white;

  width: 400px;
  height: 600px;

  display: flex;
  flex-direction: row;

  margin-right: auto;
`;

// 채팅방 맨 좌측 채널리스트입니다.
const ChannelList = styled.div`
  border: 1px solid white;

  width: 100px;
  height: 600px;

  margin-right: auto;

  display: flex;
  justify-content: center;
`;

const Channel = styled.div`
  border: 1px solid white;
  border-radius: 30px;
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
`;

// 채널리스트 옆 섹션
const ChannelSec = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 600px;

  margin-left: auto;
`;

// 채널리스트 옆 섹션 최상단
const ChannelTop = styled.div`
  border: 1px solid white;

  width: 298px;
  height: 100px;

  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 채널리스트 중간 부분

const ChannelBody = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 400px;

  display: flex;
  justify-content: center;
`;

// 채팅방

const ChattingRoom = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 25px;

  margin-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 채팅방 이름입니다.
const RoomName = styled.div`
  border: 1px solid white;

  width: 200px;
  height: 20px;
`;

// 채팅방 수정 버튼입니다.
const RNChange = styled.button`
  border: 1px solid white;

  width: 40px;
  height: 20px;
`;

// 채널리스트 옆 최하단
const ChannelBottom = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 95px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChannelB = styled.div`
  border: 1px solid white;

  width: 270px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  border: 1px solid white;

  width: 180px;
  height: 45px;

  display: flex;
  align-items: center;
`;

const NewChatRoom = styled.button`
  border: 1px solid white;

  width: 50px;
  height: 45px;
`;

// 여기서부터는 채팅방쪽 섹션입니다.

// 채팅방쪽 메인섹션 입니다.
const ChatRoom = styled.div`
  border: 1px solid white;

  width: 600px;
  height: 600px;

  margin-left: auto;
  display: flex;
  flex-direction: column;
`;
// 채팅방 쪽의 상단쪽입니다.

const ChatRoomTop = styled.div`
  border: 1px solid white;

  width: 600px;
  height: 108px;
  margin: auto;

  display: flex;
  align-items: center;
`;

//채팅방 제너럴
const ChatTitle = styled.div`
  border: 1px solid white;

  width: 200px;
  height: 40px;

  margin-left: 20px;
  font-size: 30px;

  display: flex;
  align-items: center;
`;

// 메인 채팅이 보여지는 곳입니다.
const ChatRoomBody = styled.div`
  border: 1px solid white;

  width: 600px;
  height: 430px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

// 채팅방 채팅 칸입니다.
const Chat = styled.div`
  border: 1px solid white;

  width: 600px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 채팅방 채팅 input+btn 섹션

const ChatSec = styled.div`
  border: 1px solid white;

  width: 550px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 채팅방 채팅입력칸
const ChatInput = styled.input`
  background-color: white;

  width: 450px;
  height: 40px;

  &:hover {
    text-decoration: underline;
  }
`;

// 채팅방 채팅 전송칸
const SubmitBtn = styled.button`
  border: 1px solid black;
  background-color: white;

  width: 80px;
  height: 43px;

  font-size: 20px;
`;

// 여기서 부터는 유저리스트 관련 섹션입니다.

// 유저리스트 총 섹션입니다.
const UserSec = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 600px;

  margin-left: auto;
`;

// 유저리스트 타이틀 섹션입니다.
const UserTitle = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 유저리스트 입니다.
const UserList = styled.div`
  border: 1px solid white;

  width: 300px;
  height: 498px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

// 유저리스트 온라인/오프라인 나누는 타이틀

// 온라인 리스트
const UserOn = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 230px;

  margin-bottom: 15px;
`;
// 온/오프 타이틀
const ListTitle = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 30px;

  display: flex;
  align-items: center;
`;

// 온/오프 상관없는 유저
const User = styled.div`
  border: 1px solid white;

  width: 230px;
  height: 20px;
`;

// 온라인 유저 목록
const UserOnline = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 200px;

  overflow-y: auto;
`;

const UserOff = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 230px;
`;

// 오프라인 유저 목록
const UserOffline = styled.div`
  border: 1px solid white;

  width: 260px;
  height: 200px;

  overflow-y: auto;
`;
