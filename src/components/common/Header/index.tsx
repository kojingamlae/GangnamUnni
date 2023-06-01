import styled from "styled-components";
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
      <ProfileIcon />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  padding: 0px 13px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
