import { COLUMN_LIST } from "data/list/column";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import RightArrowIcon from "./Icon/RightArrow";
import SurgeryItem from "./SurgeryItem";

const SurgeryColumn = () => {
  return (
    <StyledSurgeryColumn>
      <ColumnHeader>
        <Title>시술칼럼</Title>
        <ViewAll>
          전체보기 <RightArrowIcon />
        </ViewAll>
      </ColumnHeader>
      <ColumnList>
        {COLUMN_LIST.map((item) => (
          <SurgeryItem {...item} />
        ))}
      </ColumnList>
    </StyledSurgeryColumn>
  );
};

export default SurgeryColumn;

const StyledSurgeryColumn = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 26px;
`;

const ColumnHeader = styled.div`
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  align-items: center;
  margin: 0px 26px 16px;
`;

const Title = styled.p`
  color: ${color.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
`;

const ViewAll = styled.button`
  ${flex({ alignItems: "center" })}
  cursor: pointer;
  padding: 0px 0px 0px 10px;
  color: #666666;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
`;

const ColumnList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px 16px;
  padding: 0px 26px;
`;
