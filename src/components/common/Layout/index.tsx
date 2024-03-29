import Header from "components/common/Header";
import { ReactNode } from "react";
import styled from "styled-components";
import Image from "../Image";
import { color } from "styles/color";
import NavigationBar from "../NavigationBar";

interface PropsType {
  children: ReactNode;
  currentScreenName?: string;
}

const Layout = ({ children, currentScreenName = "" }: PropsType) => {
  return (
    <StyledLayout>
      <AsideBox>
        <BrandFilmBox>
          <Image
            src="/assets/brand-film.png"
            alt="brand-film"
            width="100%"
            height="100%"
          />
        </BrandFilmBox>
      </AsideBox>
      <FrameMainBox>
        <Header />
        {children}
        <NavigationBar currentScreenName={currentScreenName} />
      </FrameMainBox>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  width: 100vw;
  min-height: 100vh;
`;

const AsideBox = styled.div`
  display: block;
  width: 360px;
  min-height: 100vh;
  margin-right: 16px;
  @media only screen and (max-width: 724px) {
    display: none;
  }
`;

const BrandFilmBox = styled.div`
  width: 360px;
  height: 520px;
  margin-top: 150px;
  position: fixed;
`;

const FrameMainBox = styled.div`
  position: relative;
  width: 440px;
  height: 100%;
  background-color: ${color.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
  word-break: break-all;
`;
