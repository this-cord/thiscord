import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addRoom, __getRoomById } from "../../store/modules/mainSlice";
import { useInput } from "../../hooks/useInput";
import { useParams } from "react-router-dom";

Modal.setAppElement("#root");

export default function ModalPage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getRoomById(roomId));
  // }, [dispatch, roomId]);

  // console.log("룸아디", roomId);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [name, onChangeNameHandler, setRoomName] = useInput();

  const onCreate = () => {
    const newRoom = {
      name: name,
    };

    dispatch(__addRoom(newRoom));
    console.log("생성완료!", newRoom);
    // dispatch(__getRoomById(roomId));
  };
  console.log(onCreate);
  return (
    <div className="App">
      <OpenModal onClick={() => setIsOpen(true)}>채팅방생성</OpenModal>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <ModalContainer>
          <ModalCover>
            <ModalTitle>채팅방 이름을 입력해주세요</ModalTitle>
            <ModalInput
              type="text"
              placeholder={"채팅방 이름을 적어주세요"}
              name="name"
              onChange={onChangeNameHandler}
              value={name}
            ></ModalInput>
            <Btns>
              <NewRoom onClick={onCreate}>생성하기</NewRoom>
              <CloseModal onClick={() => setIsOpen(false)}>취소하기</CloseModal>
            </Btns>
          </ModalCover>
        </ModalContainer>
      </Modal>
    </div>
  );
}

const OpenModal = styled.button`
  background-color: white;
  color: black;
  width: 60px;
  height: 50px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalCover = styled.div`
  border: 3px solid white;

  color: black;

  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.div`
  border: 1px solid transparent;

  background-color: white;
  color: black;
  margin-top: 50px;
  font-size: 40px;

  width: 500px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;

  width: 400px;
  height: 50px;
`;

const Btns = styled.div`
  border: 1px solid white;
  background-color: white;

  width: 300px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewRoom = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  color: black;

  width: 100px;
  height: 30px;
  margin-right: 20px;
`;
const CloseModal = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  color: black;

  width: 100px;
  height: 30px;
`;
