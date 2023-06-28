import Row from "components/common/Flex/Row";
import Footer from "components/common/Footer";
import CommunityItem from "components/community/CommunityItem";
import EventItem from "components/event/EventItem";
import HospitalItem from "components/hospital/HospitalItem";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import Layout from "components/common/Layout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import { HOSPITAL_LIST_DATA } from "data/list/hospital";
import { EVENT_LIST_DATA } from "data/list/event";
import { COMMUNITY_LIST_DATA } from "data/list/community";
import { useEffect, useState } from "react";
import { PostType } from "./Community";
import { collection, getDocs } from "firebase/firestore";
import { db } from "db";

const SearchResultScreen = () => {
  const { category } = useParams();
  const [postData, setPostData] = useState<PostType[]>();

  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(postCollectionRef);
      const postData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          like: data.like,
          comments: data.comments,
          content: data.content,
          createTime: data.createTime,
          level: data.level,
          name: data.name,
        };
      });
      setPostData(postData);
    };
    getPost();
  }, []);

  return (
    <Layout>
      <StyledSearchResultScreen>
        <SearchRoot>
          <Row alignItems="center">
            <MiniLogoIcon />
            <MiniRightArrowIcon />
            {category}
          </Row>
        </SearchRoot>
        <SearchResultStatus>'{category}'에 대한 검색결과</SearchResultStatus>
        <EventBox>
          <EventText>
            이벤트<NumberOfEvent>2</NumberOfEvent>건
          </EventText>
          <EventList>
            {EVENT_LIST_DATA.slice(0, 2).map((item) => (
              <EventItem {...item} />
            ))}
          </EventList>
        </EventBox>
        <CommunityText>
          '{category}' 커뮤니티
          <NumberOfCommunity>{postData?.length}</NumberOfCommunity>건
        </CommunityText>
        <CommunityList>
          {postData?.map((item) => (
            <>
              <CommunityItem {...item} />
              <Bar />
            </>
          ))}
        </CommunityList>
        <HospitalText>
          병원<NumberOfHospital>{HOSPITAL_LIST_DATA.length}</NumberOfHospital>건
        </HospitalText>
        <HospitalList>
          {HOSPITAL_LIST_DATA.map((item) => (
            <HospitalItem {...item} />
          ))}
        </HospitalList>
        <InstallButton
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.gangnam.sister&hl=ko&gl=US"
            )
          }
        >
          앱 설치하러 가기
        </InstallButton>
      </StyledSearchResultScreen>
      <Footer />
    </Layout>
  );
};

export default SearchResultScreen;

const StyledSearchResultScreen = styled.div`
  width: 100%;
  min-height: 100vh;
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
  margin-bottom: 26px;
  border-bottom: 1px solid #ececec;
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

const InstallButton = styled.button`
  margin: 0px 26px;
  display: block;
  width: calc(100% - 52px);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  background-color: rgb(255, 237, 227);
  color: ${color.orange};
  padding: 14px 16px;
  font-size: 16px;
`;
