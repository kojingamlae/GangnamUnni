import Footer from "components/common/Footer";
import Banner from "components/main/Banner";
import Categories from "components/main/Categories";
import SearchInput from "components/main/SearchInput";
import SurgeryColumn from "components/main/SurgeryColumn";

import Layout from "layouts/Layout";
import styled from "styled-components";

const MainScreen = () => {
  return (
    <Layout>
      <StyledMainScreen>
        <SearchInput />
        <Banner />
        <Categories />
        <SurgeryColumn />
      </StyledMainScreen>
      <Footer />
    </Layout>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;
