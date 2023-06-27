import Row from "components/common/Flex/Row";
import Footer from "components/common/Footer";
import CommunityItem from "components/search-result/CommunityItem";
import EventItem from "components/search-result/EventItem";
import HospitalItem from "components/search-result/HospitalItem";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import Layout from "layouts/Layout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";

const SearchResultScreen = () => {
  const { category } = useParams();

  return (
    <Layout>
      <StyledSearchResultScreen>
        <SearchRoot>
          <Row>
            <MiniLogoIcon />
            <MiniRightArrowIcon />
            {category}
          </Row>
        </SearchRoot>
        <SearchResultStatus>'{category}'에 대한 검색결과</SearchResultStatus>
        <EventBox>
          <EventText>
            이벤트<NumberOfEvent>714</NumberOfEvent>건
          </EventText>
          <EventList>
            {[0, 1, 2, 3].map((item) => (
              <EventItem key={item} />
            ))}
          </EventList>
        </EventBox>
        <CommunityText>
          '{category}' 커뮤니티<NumberOfCommunity>714</NumberOfCommunity>건
        </CommunityText>
        <CommunityList>
          {[0, 1, 2, 3].map((item) => (
            <>
              <CommunityItem key={item} />
              <Bar />
            </>
          ))}
        </CommunityList>
        <HospitalText>
          병원<NumberOfHospital>714</NumberOfHospital>건
        </HospitalText>
        <HospitalList>
          {[0, 1, 2, 3].map((item) => (
            <HospitalItem />
          ))}
        </HospitalList>
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

const EventBox = styled.div`
  padding: 26px 0px;
`;

const EventList = styled.div`
  ${flex({ flexDirection: "column" })}
`;

const EventText = styled.p`
  margin: 0px 26px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.black};
`;

const NumberOfEvent = styled.span`
  color: ${color.orange};
  margin-left: 6px;
`;

const CommunityText = styled.p`
  margin: 0px 26px 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.black};
`;

const NumberOfCommunity = styled.span`
  color: ${color.orange};
  margin-left: 6px;
`;

const CommunityList = styled.div`
  ${flex({ flexDirection: "column" })}
  margin-bottom: 26px;
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
`;

const HospitalList = styled.div`
  ${flex({ flexDirection: "column" })}
  padding: 0px 26px;
`;

const HospitalText = styled.p`
  margin: 0px 26px 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.black};
`;

const NumberOfHospital = styled.span`
  color: ${color.orange};
  margin-left: 6px;
`;
