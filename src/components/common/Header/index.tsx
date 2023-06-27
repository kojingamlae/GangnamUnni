import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import Image from "../Image";
import ProfileIcon from "./Icon/Profile";

const Header = () => {
  return (
    <StyledHeader>
      <div />
      <HeaderLogoWrapper onClick={() => (window.location.href = "/")}>
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
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  background-color: ${color.white};
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0px 13px;
  width: 100%;
  height: 48px;
`;

const HeaderLogoWrapper = styled.div`
  ${flex({ alignItems: "center" })}
  width: calc(100% - 180px);
  height: 100%;
  left: 90px;
  top: 0px;
  position: absolute;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
`;
