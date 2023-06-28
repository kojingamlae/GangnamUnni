import Row from "components/common/Flex/Row";
import { styled } from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";

const Comment = () => {
  return (
    <StyledComment>
      <Row alignItems="center">
        <Profile src="/assets/profile/profile.png" />
        <Name>부소마학생</Name>
        <Dot />
        <Level>Lv.99</Level>
        <Dot />
        <CreateTime>5일 전</CreateTime>
      </Row>
      <Content>
        추출하느니 지흡하는게 낫다고 보는데..ㅠㅠ 나도 안해본게 없어서 결국엔
        전신지흡으로 마무리..이제야 만족해 ㅋㅋㅋ 레아트 지흡으로 전후차이도
        좋고 사후관리 잘해줘서 나는 다레아트에서 해결했거든 상담한번가봐
      </Content>
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled.div`
  padding: 16px 26px;
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

const Content = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 32px;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
  white-space: pre-line;
`;
