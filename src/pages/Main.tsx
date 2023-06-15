import Banner from "components/main/Banner";
import Categories from "components/main/Categories";
import SearchInput from "components/main/SearchInput";

import MainLayout from "layouts/MainLayout";
import styled from "styled-components";

const MainScreen = () => {
  return (
    <MainLayout>
      <StyledMainScreen>
        <SearchInput />
        <Banner />
        <Categories />
      </StyledMainScreen>
    </MainLayout>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div`
  width: 100%;
`;
