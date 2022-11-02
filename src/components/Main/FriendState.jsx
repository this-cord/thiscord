import styled from "styled-components";

const FriendState = (props) => {
  return <User>{props.name}</User>;
};

export default FriendState;

const User = styled.div`
  width: 90%;
  height: 20px;
`;
