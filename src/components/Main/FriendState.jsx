import styled from "styled-components";

const FriendState = (props) => {
  return (
    <div>
      {props.status === "on" ? (
        <User>
          {props.onName} ({props.status})
        </User>
      ) : (
        <User>
          {props.offName} ({props.status})
        </User>
      )}
    </div>
  );
};

export default FriendState;

const User = styled.div`
  width: 90%;
  height: 20px;
`;
