import Row from "components/common/Flex/Row";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import ReactionBar from "./ReactionBar";

const CommunityItem = () => {
  return (
    <>
      <StyledCommunityItem>
        <Row alignItems="center">
          <Profile src="/assets/profile/profile.png" />
          <Name>푸존</Name>
          <Dot />
          <Level>Lv.4</Level>
          <Dot />
          <CreateTime>약 24시간 전</CreateTime>
        </Row>
        <ContentBox>
          <Content>
            남자눈 있잖아 쌍수 말고 눈매교정만 해도 훨씬 더 괜찮아질까? 눈꺼풀도
            처지고 눈이 좀 답답해보이거든 그리구
          </Content>
        </ContentBox>
      </StyledCommunityItem>
      <ReactionBar />
    </>
  );
};

export default CommunityItem;

const StyledCommunityItem = styled.div`
  padding: 26px;
`;

const Profile = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
`;

const Dot = styled.span`
  margin-right: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0px;
  border: 1px solid #666666;
  border-radius: 50%;
`;

const Name = styled.span`
  color: ${color.black};
  margin-right: 8px;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
`;

const Level = styled.span`
  ${flex({ alignItems: "center" })}
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  gap: 2px;
  height: 20px;
  padding: 2px 6px;
  background-color: #f5f5f5;
  color: #666666;
  border-radius: 10px;
  box-sizing: border-box;
`;

const CreateTime = styled.span`
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  color: #999999;
  white-space: nowrap;
`;

const ContentBox = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${color.black};
`;

const Content = styled.p`
  margin-top: 12px;
  white-space: pre-line;
`;
