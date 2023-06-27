import styled from "styled-components";
import { color } from "styles/color";

const SurgeryItem = () => {
  return (
    <StyledSurgeryItem>
      <SurgeryImage src="/assets/surgery/surgery-img.png" alt="surgery-img" />
      <Tags>#필러 #쥬비덤 #뉴라미스</Tags>
      <Desc>
        [필러] 쥬비덤? 뉴라미스? 필러 종류 및 필러 유지기간, 시술 주기
      </Desc>
    </StyledSurgeryItem>
  );
};

export default SurgeryItem;

const StyledSurgeryItem = styled.div`
  width: calc(50% - 8px);
  cursor: pointer;
`;

const SurgeryImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 300 / 157;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #666666;
`;

const Desc = styled.p`
  color: ${color.black};
  overflow: hidden;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
`;
