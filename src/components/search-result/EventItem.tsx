import Column from "components/common/Flex/Column";
import styled from "styled-components";
import { color } from "styles/color";
import StarIcon from "./Icon/Star";

const EventItem = () => {
  return (
    <StyledEventItem>
      <EventImage src="/assets/event/eye.png" />
      <Column>
        <Location>강남역 . 썅역</Location>
        <Title>옐로우 토탈 눈성형</Title>
        <Star>
          <StarIcon />
          <NumberOfStar>9.8</NumberOfStar>
          <NumberOfHuman>(1713)</NumberOfHuman>
        </Star>
        <Price>52.9만원</Price>
      </Column>
    </StyledEventItem>
  );
};

export default EventItem;

const StyledEventItem = styled.div`
  display: flex;
  padding: 16px 26px;
  cursor: pointer;
  border-bottom: 1px solid rgb(236, 236, 236);
`;

const EventImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 16px;
`;

const Location = styled.p`
  color: #666666;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;

const Title = styled.p`
  color: ${color.black};
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0px;
`;

const Star = styled.span``;

const NumberOfStar = styled.span`
  color: ${color.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  margin-right: 2px;
`;

const NumberOfHuman = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
`;

const Price = styled.p`
  color: ${color.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  margin-right: 4px;
`;
