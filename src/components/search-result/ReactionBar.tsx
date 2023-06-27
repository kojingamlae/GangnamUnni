import { useState } from "react";
import styled from "styled-components";
import CommentIcon from "./Icon/Comment";
import LikeIcon from "./Icon/Like";
import ViewIcon from "./Icon/View";

const ReactionBar = () => {
  const [like, setLike] = useState(0);

  const toggleLike = () => setLike((prev) => (!prev ? prev + 1 : prev - 1));

  return (
    <StyledReactionBar>
      <Button onClick={toggleLike}>
        <LikeIcon />
        좋아요 {like}
      </Button>
      <Button>
        <CommentIcon />
        답변 0
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
