import { ColumnListType } from "data/list/column";
import styled from "styled-components";

const ColumnItem = ({ title, hospital, imgSrc, date }: ColumnListType) => {
  return (
    <StyledColumnItem>
      <ColumnImage src={imgSrc} />
      <Title>{title}</Title>
      <ColumnFooter>
        <FooterItem>{date}</FooterItem>
        <FooterItem>{hospital}</FooterItem>
      </ColumnFooter>
    </StyledColumnItem>
  );
};

export default ColumnItem;

const StyledColumnItem = styled.div`
  box-sizing: border-box;
  margin-bottom: 24px;
  cursor: pointer;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const ColumnImage = styled.img`
  width: 100%;
  max-height: 213px;
  border-radius: 8px;
`;

const Title = styled.p`
  color: rgb(0, 0, 0);
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
`;

const ColumnFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 3px;
`;

const FooterItem = styled.span`
  font-size: 12px;
  color: rgb(102, 102, 102);
`;
