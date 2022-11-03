import styled from "styled-components";

const ChattingRoom = () => {
  return (
    <ChatRoom>
      <ChatRoomTop>
        <ChatTitle># 일반</ChatTitle>
      </ChatRoomTop>
      <ChatRoomBody>채널방 중간</ChatRoomBody>
      <Chat>
        <ChatSec>
          <ChatInput placeholder="# 일반 에 메세지 보내기"></ChatInput>
        </ChatSec>
      </Chat>
    </ChatRoom>
  );
};

export default ChattingRoom;

// 여기서부터는 채팅방쪽 섹션입니다.
// 채팅방쪽 메인섹션 입니다.
const ChatRoom = styled.div`
  border: 1px solid white;
  background-color: #36393f;

  width: 100vw;
  height: 100vh;

  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

// 채팅방 쪽의 상단쪽입니다.
const ChatRoomTop = styled.div`
  border-bottom: 1px solid white;
  width: 100%px;
  height: 100px;

  display: flex;
  align-items: center;
`;

//채팅방 제너럴
const ChatTitle = styled.div`
  width: 200px;
  height: 40px;

  margin-left: 20px;
  font-size: 30px;

  display: flex;
  align-items: center;
`;

// 메인 채팅이 보여지는 곳입니다.
const ChatRoomBody = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

// 채팅방 채팅 칸입니다.
const Chat = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 채팅방 채팅 input+btn 섹션

const ChatSec = styled.div`
  width: 97%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 채팅방 채팅입력칸
const ChatInput = styled.input`
  background-color: #40444b;

  color: white;

  width: 100%;
  height: 40px;
`;

// 채팅방 채팅 전송칸
const SubmitBtn = styled.button`
  background-color: white;

  width: 80px;
  height: 43px;

  font-size: 20px;
`;
