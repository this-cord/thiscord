import styled from "styled-components";
import disConnect from "../../asset/disconnect.png";

const NotFound = () => {
  return (
    <DisconnectBox>
      <Disconnected />
    </DisconnectBox>
  );
};
const DisconnectBox = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Disconnected = styled.img.attrs({ src: disConnect })`
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
`;

export default NotFound;
