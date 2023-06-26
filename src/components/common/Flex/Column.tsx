import styled from "styled-components";
import flex from "utils/flex";
import { FlexPropsType } from "./type";

const Column = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  height,
}: FlexPropsType) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  ${flex({ flexDirection: "column" })}
`;
