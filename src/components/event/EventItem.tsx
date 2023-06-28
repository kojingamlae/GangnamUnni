import Column from "components/common/Flex/Column";
import { EventItemDataType } from "data/list/event";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";
import StarIcon from "../search-result/Icon/Star";

const EventItem = ({ ...props }: EventItemDataType) => {
  return (
    <StyledEventItem>
      <EventImage src={props.imgUrl} />
      <Column>
        <Location>{props.location}</Location>
        <Title>{props.title}</Title>
        <Star>
          <StarIcon />
          <NumberOfStar>{props.startOfnumber}</NumberOfStar>
          <NumberOfHuman>({props.numberOfhuman})</NumberOfHuman>
        </Star>
        <Price>{props.price}만원</Price>
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

const Star = styled.span`
  ${flex({ alignItems: "center" })}
`;

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
