import Row from "components/common/Flex/Row";
import Layout from "components/common/Layout";
import Comment from "components/community/Comment";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import ReactionBar from "components/search-result/ReactionBar";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";

const CommunityDetailScreen = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <Layout>
      <StyledCommunityScreen>
        <SearchRoot>
          <SearchRootInner>
            <MiniLogoIcon />
            <MiniRightArrowIcon />
            커뮤니티
          </SearchRootInner>
        </SearchRoot>
        <CommunityPost>
          <Row alignItems="center">
            <Profile src="/assets/profile/profile.png" />
            <Name>김석진</Name>
            <Dot />
            <Level>Lv.99</Level>
            <Dot />
            <CreateTime>5일 전</CreateTime>
          </Row>
          <Content>
            팔뚝살 빼고싶어ㅠㅠㅠ 점점 짧아지는 상의때문에 복부 지방 추출했는데
            이젠 부유방이랑 팔뚝이 신경쓰고 난리ㅠㅠㅠㅠㅠ 지흡이나 주사 맞은
            분들 중 추천하는데 있남유..?ㅠ
          </Content>
        </CommunityPost>
        <ReactionBar comments={[]} like={0} id="0" />
        <InputSection>
          <Input placeholder="댓글을 입력해주세요." />
          <Button>등록</Button>
        </InputSection>
        <CommentList>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </CommentList>
      </StyledCommunityScreen>
    </Layout>
  );
};

export default CommunityDetailScreen;

const StyledCommunityScreen = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;

const SearchRoot = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: ${color.black};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
  border-bottom: 1px solid rgb(236, 236, 236);
  padding: 0px 16px;
`;

const SearchRootInner = styled.div`
  ${flex({ alignItems: "center" })}
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

const CommunityPost = styled.div`
  min-height: 194px;
  padding: 26px;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
  margin-top: 24px;
  white-space: pre-line;
`;

const InputSection = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  padding: 10px 16px;
  margin: 32px 26px 16px;
  border: 1px solid rgb(188, 188, 188);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
`;

const Input = styled.input`
  border: 1px solid black;
  width: 90%;
  height: 100%;
  border-radius: 8px;
  padding: 0px 2px;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
  box-sizing: border-box;
  resize: none;
  border: none;
  font-family: sans-serif;
`;

const Button = styled.button`
  color: ${color.orange};
  cursor: pointer;
`;

const CommentList = styled.div`
  ${flex({ flexDirection: "column" })}
  min-height: 100px;
`;
