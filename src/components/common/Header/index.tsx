import styled from "styled-components";
import { color } from "styles/color";
import Image from "../Image";
import ProfileIcon from "./Icon/Profile";

const Header = () => {
  return (
    <StyledHeader>
      <div />
      <HeaderLogoWrapper>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width="86px"
          height="16px"
          cursor="pointer"
        />
      </HeaderLogoWrapper>
      <ProfileIcon cursor="pointer" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: ${color.white};
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 13px;
  width: 100%;
  height: 48px;
`;

const HeaderLogoWrapper = styled.div`
  width: calc(100% - 180px);
  height: 100%;
  left: 90px;
  top: 0px;
  position: absolute;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;
