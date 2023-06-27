import Row from "components/common/Flex/Row";
import Footer from "components/common/Footer";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import Layout from "layouts/Layout";
import styled from "styled-components";
import { color } from "styles/color";

const SearchResultScreen = () => {
  return (
    <Layout>
      <StyledSearchResultScreen>
        <SearchRoot>
          <Row>
            <MiniLogoIcon />
            <MiniRightArrowIcon />
            눈성형
          </Row>
        </SearchRoot>
        <SearchResultStatus>'눈성형'에 대한 검색결과</SearchResultStatus>
      </StyledSearchResultScreen>
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

const SearchRoot = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  padding: 0px 26px;
  margin: 16px 0px;
  color: ${color.black};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;

const SearchResultStatus = styled.div`
  padding: 0px 26px 26px;
  text-align: center;
  color: ${color.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  border-bottom: 1px solid #d6d6d6;
`;
