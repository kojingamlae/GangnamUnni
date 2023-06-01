import Banner from "components/Banner";
import MainLayout from "layouts/MainLayout";
import styled from "styled-components";

const MainScreen = () => {
  return (
    <MainLayout>
      <StyledMainScreen>
        <Banner />
      </StyledMainScreen>
    </MainLayout>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div`
  width: 100%;
  border: 1px solid black;
`;
