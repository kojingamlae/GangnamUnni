import Layout from "components/common/Layout";
import styled from "styled-components";
import Row from "components/common/Flex/Row";
import { color } from "styles/color";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import CommunityCategory from "components/community/CommunityCategory";
import KingIcon from "components/community/Icon/King";
import HealIcon from "components/community/Icon/Heal";
import InjectionIcon from "components/community/Icon/Injection";
import DocterIcon from "components/community/Icon/Docter";
import PeopleIcon from "components/community/Icon/People";
import { useState } from "react";
import flex from "utils/flex";
import CommunityItem from "components/community/CommunityItem";
import { COMMUNITY_LIST_DATA } from "data/list/community";

const CommunityScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("베스트");

  return (
    <Layout currentScreenName="community">
      <StyledCommunituScreen>
        <SearchRoot>
          <Row alignItems="center">
            <MiniLogoIcon />
            <MiniRightArrowIcon />
            베스트
          </Row>
        </SearchRoot>
        <CommunityCategories>
          <CommunityCategory
            icon={<KingIcon />}
            name="베스트"
            isSelected={selectedCategory === "베스트"}
            onClick={() => setSelectedCategory("베스트")}
          />
          <CommunityCategory
            icon={<HealIcon />}
            name="병원질문"
            isSelected={selectedCategory === "병원질문"}
            onClick={() => setSelectedCategory("병원질문")}
          />
          <CommunityCategory
            icon={<InjectionIcon />}
            name="시술/수술질문"
            isSelected={selectedCategory === "시술/수술질문"}
            onClick={() => setSelectedCategory("시술/수술질문")}
          />
          <CommunityCategory
            icon={<DocterIcon />}
            name="의사"
            isSelected={selectedCategory === "의사"}
            onClick={() => setSelectedCategory("의사")}
          />
          <CommunityCategory
            icon={<PeopleIcon />}
            name="자유수다"
            isSelected={selectedCategory === "자유수다"}
            onClick={() => setSelectedCategory("자유수다")}
          />
        </CommunityCategories>
        <CommunityList>
          {COMMUNITY_LIST_DATA.map((item) => (
            <CommunityItem {...item} />
          ))}
        </CommunityList>
      </StyledCommunituScreen>
    </Layout>
  );
};

export default CommunityScreen;

const StyledCommunituScreen = styled.div`
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

const CommunityCategories = styled.div`
  display: flex;
  padding: 16px 26px;
  gap: 8px;
  overflow-x: scroll;
  user-select: none;
  border-bottom: 1px solid #d6d6d6;
`;

const CommunityList = styled.div`
  ${flex({ flexDirection: "column" })}
`;
