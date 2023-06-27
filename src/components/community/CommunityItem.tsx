import Row from "components/common/Flex/Row";
import { CommunityItemDataType } from "data/list/community";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import ReactionBar from "../search-result/ReactionBar";

const CommunityItem = ({ ...props }: CommunityItemDataType) => {
  return (
    <>
      <StyledCommunityItem>
        <Row alignItems="center">
          <Profile src="/assets/profile/profile.png" />
          <Name>{props.name}</Name>
          <Dot />
          <Level>Lv.{props.level}</Level>
          <Dot />
          <CreateTime>{props.createTime}일 전</CreateTime>
        </Row>
        <ContentBox>
          <Content>{props.content}</Content>
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
