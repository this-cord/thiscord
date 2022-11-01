import styled from "styled-components";
import Logo from "../../asset/logo.png";

const Layout = (props) => {
  return (
    <>
      <LogoBox>
        <LogoImg />
      </LogoBox>
    </>
  );
};
const LogoBox = styled.div`
  background-color: #5865f2;
  height: 0;
`;

const LogoImg = styled.img.attrs({ src: Logo })`
  width: 180px;
  height: auto;
`;

export default Layout;
