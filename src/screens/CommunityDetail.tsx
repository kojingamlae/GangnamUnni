import Row from "components/common/Flex/Row";
import Layout from "components/common/Layout";
import Comment from "components/community/Comment";
import MiniLogoIcon from "components/search-result/Icon/MiniLogo";
import MiniRightArrowIcon from "components/search-result/Icon/MiniRightArrow";
import ReactionBar from "components/search-result/ReactionBar";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "db";
import { PostType } from "./Community";

const CommunityDetailScreen = () => {
  const { id } = useParams();

  // const data = COMMUNITY_DETAIL_DATA[Number(id)];
  const [postComment, setPostComment] = useState("");
  const [postData, setPostData] = useState<PostType>();

  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDoc(doc(postCollectionRef, id));
      const data = querySnapshot.data();

      if (data) {
        const post: PostType = {
          id: querySnapshot.id,
          name: data.name,
          level: data.level,
          createTime: data.createTime,
          content: data.content,
          like: data.like,
          comments: data.comments,
          likeStatus: data.likeStatus,
        };
        setPostData(post);
        console.log(postData);
      }
    };
    getPost();
  }, []);

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
            <Name>{postData?.name}</Name>
            <Dot />
            <Level>Lv.{postData?.level}</Level>
            <Dot />
            <CreateTime>{postData?.createTime}일 전</CreateTime>
          </Row>
          <Content>{postData?.content}</Content>
        </CommunityPost>
        <ReactionBar
          comments={postData?.comments ?? []}
          like={postData?.like ?? 0}
          id={postData?.id ?? "0"}
        />
        <InputSection>
          <Input
            placeholder="댓글을 입력해주세요."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPostComment(e.target.value)
            }
          />
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
  min-height: 104px;
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
