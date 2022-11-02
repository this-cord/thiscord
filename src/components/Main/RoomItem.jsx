import React, { useState } from "react";
import styled from "styled-components";
import { __deleteRoom, __updateRoom } from "../../store/modules/mainSlice";

const RoomItem = () => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [name, setName] = useState();

  const onChangeBody = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

//   const cancelAndUpdateBtn = () => {
//     setIsUpdateMode(!isUpdateMode);
//   };

//   const saveAndDeleteBtn = (name) => {
//     if (isUpdateMode) {
//       const payload = {
//         name: name,
//       };

//       dispatchEvent(__updateRoom(payload));
//       setIsUpdateMode(!isUpdateMode);
//     } else {
//       dispatchEvent(__deleteRoom(name));
//     }
//   };

  return (
    <Room>
      {isUpdateMode ? (
        <NameInput
          type="text"
          placeholder={"채팅방 이름을 적어주세요"}
          name="name"
          onChange={onChangeBody}
          value={name}
        ></NameInput>
      ) : (
        <RoomName></RoomName>
      )}
      {/* <Buttons>
        <RNChange onClick={cancelAndUpdateBtn}>
          {isUpdateMode ? "취소" : "변경"}
        </RNChange>
        <RNChange onClick={() => saveAndDeleteBtn}>
          {isUpdateMode ? "저장" : "삭제"}
        </RNChange>
      </Buttons> */}
    </Room>
  );
};

export default RoomItem;

const Room = styled.div`
  width: 300px;
  height: 50px;

  display: flex;
  flex-direction: row;
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
  height: 24px;
`;

const NameInput = styled.input`
  width: 140px;
  height: 20px;

  margin-top: 12px;
`;