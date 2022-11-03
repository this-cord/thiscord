import styled from "styled-components";

const FriendState = (props) => {
  return (
    <div>
      {props.status === "on" ? (
        <div>
          {props.onName} ({props.status})
        </div>
      ) : (
        <div>
          {props.offName} ({props.status})
        </div>
      )}
    </div>
  );
};

export default FriendState;

const User = styled.div`
  width: 90%;
  height: 20px;
`;
