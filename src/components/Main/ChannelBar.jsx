import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChannelBar = (props) => {
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem("Access_Token");
    sessionStorage.removeItem("Refresh_Token");
    alert("로그아웃 성공");
    navigate("/");
  };

  let userName = props.userName;
  if (userName === "엄준식") {
    userName = "어떻게 사람 이름이 엄준식";
  }
  const room = props.room;
  return (
    <TotalChannel>
      <ChannelList>
        <Channel>항해</Channel>
      </ChannelList>
      <ChannelSec>
        <ChannelTop>{userName}</ChannelTop>
        <ChannelBody>
          <ChattingRoom>
            {room &&
              room.map((data, index) => <RoomName> data.roomName</RoomName>)}
            <RNChange>추가</RNChange>
          </ChattingRoom>
        </ChannelBody>
        <ChannelB>
          <UserInfo>{userName}님</UserInfo>
          <NewChatRoom onClick={onLogout}>로그아웃</NewChatRoom>
        </ChannelB>
      </ChannelSec>
    </TotalChannel>
  );
};

export default ChannelBar;

// 채널리스트+ 옆섹션
const TotalChannel = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #2f3136;
  display: flex;
  flex-direction: row;

  margin-right: auto;
`;

// 채팅방 맨 좌측 채널리스트입니다.
const ChannelList = styled.div`
  border-right: 1px solid white;

  width: 100px;
  height: 100%;

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
  width: 100%;
  height: 100%;
`;

// 채널리스트 옆 섹션 최상단
const ChannelTop = styled.div`
  border: 1px solid white;

  width: 100%;
  height: 10%;

  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 채널리스트 중간 부분

const ChannelBody = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
`;

// 채팅방
const ChattingRoom = styled.div`
  width: 260px;
  height: 25px;

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// 채팅방 이름입니다.
const RoomName = styled.div`
  width: 85%;
  height: 20px;
`;

// 채팅방 수정 버튼입니다.
const RNChange = styled.button`
  border: 1px solid white;

  width: 40px;
  height: 20px;
`;

const ChannelB = styled.div`
  background-color: #292b2f;

  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  margin: auto 10px;
`;

const NewChatRoom = styled.button`
  border: 1px solid white;

  width: 30%;
  height: 75%;
  margin: auto 10px;
`;
