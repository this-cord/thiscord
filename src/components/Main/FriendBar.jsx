import styled from "styled-components";
import FriendState from "./FriendState";

const FriendBar = (props) => {
  const online = props.online;
  const offline = props.offline;
  return (
    <UserSec>
      <UserList>
        <UserOn>
          <ListTitle>온라인</ListTitle>
          <UserOnline>
            {online &&
              online.map((data, index) => (
                <FriendState
                  onName={online[index]?.name}
                  status={online[index]?.status.slice(0, 2)}
                />
              ))}
          </UserOnline>
        </UserOn>

        <UserOff>
          <ListTitle>오프라인</ListTitle>
          <UserOffline>
            {offline &&
              offline.map((data, index) => (
                <FriendState
                  offName={offline[index]?.name}
                  status={offline[index]?.status.slice(0, 3)}
                />
              ))}
          </UserOffline>
        </UserOff>
      </UserList>
    </UserSec>
  );
};

export default FriendBar;

// 여기서 부터는 유저리스트 관련 섹션입니다.

// 유저리스트 총 섹션입니다.
const UserSec = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #2f3136;
`;

// 유저리스트 입니다.
const UserList = styled.div`
  width: 300px;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

// 유저리스트 온라인/오프라인 나누는 타이틀

// 온라인 리스트
const UserOn = styled.div`
  width: 260px;
  margin-bottom: 15px;
`;
// 온/오프 타이틀
const ListTitle = styled.div`
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;

  width: 260px;
  height: 30px;

  display: flex;
  align-items: center;
`;

// 온라인 유저 목록
const UserOnline = styled.div`
  border: 1px solid white;
  width: 260px;
  height: 200px;

  overflow-y: auto;
`;

const UserOff = styled.div`
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
