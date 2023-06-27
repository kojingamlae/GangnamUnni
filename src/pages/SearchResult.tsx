import Footer from "components/common/Footer";
import Layout from "layouts/Layout";
import styled from "styled-components";

const SearchResultScreen = () => {
  return (
    <Layout>
      <StyledSearchResultScreen></StyledSearchResultScreen>
      <Footer />
    </Layout>
  );
};

export default SearchResultScreen;

const StyledSearchResultScreen = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;
