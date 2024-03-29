import { db } from "db";
import { doc, updateDoc } from "@firebase/firestore";
import styled from "styled-components";
import CommentIcon from "./Icon/Comment";
import LikeIcon from "./Icon/Like";
import ViewIcon from "./Icon/View";
import { useEffect, useState } from "react";
import FillLikeIcon from "./Icon/FillLike";
import { useNavigate } from "react-router-dom";

interface ReactionType {
  id: string;
  like: number;
  comments: string[];
}

const updateLike = async (id: string, like: number) => {
  const likeRef = doc(db, "post", id);
  await updateDoc(likeRef, { like });
};

const ReactionBar = ({ like, comments, id }: ReactionType) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(like);
  const [postLikeStatus, setLikeStatus] = useState(false);

  useEffect(() => {
    setLikeCount(like);
  }, [like]);

  const onClick = () => {
    if (postLikeStatus) {
      updateLike(id, like - 1);
      setLikeCount((prev) => prev - 1);
    } else {
      updateLike(id, like + 1);
      setLikeCount((prev) => prev + 1);
    }
    setLikeStatus((prev) => !prev);
  };
  return (
    <StyledReactionBar>
      <Button onClick={onClick}>
        {postLikeStatus ? <FillLikeIcon /> : <LikeIcon />}
        좋아요 {likeCount}
      </Button>
      <Button onClick={() => navigate(`/community/${id}`)}>
        <CommentIcon />
        답변 {comments.length}
      </Button>
      <Button>
        <ViewIcon />
        조회 0
      </Button>
    </StyledReactionBar>
  );
};

export default ReactionBar;

const StyledReactionBar = styled.div`
  width: 100%;
  display: flex;
  height: 52px;
  padding: 0px 16px;
  justify-content: center;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #666666;
  background-color: unset;
  border: unset;
  gap: 4px;
  padding: unset;
  cursor: pointer;
`;
