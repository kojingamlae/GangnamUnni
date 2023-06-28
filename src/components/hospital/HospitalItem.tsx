import Column from "components/common/Flex/Column";
import { HospitalItemDataType } from "data/list/hospital";
import { styled } from "styled-components";
import { color } from "styles/color";
import StarIcon from "../search-result/Icon/Star";

const HospitalItem = ({ ...props }: HospitalItemDataType) => {
  return (
    <StyledHospitalItem>
      <HospitalImage src={props.imgUrl} />
      <Column>
        <Title>{props.title}</Title>
        <Info>
          <span>
            <StarIcon />
            {props.starOfnumber} (평가{" "}
            <Stress>{props.evaluationOfnumber}</Stress>개)
          </span>
          <Bar>|</Bar>
          <span>
            이벤트 <Stress>{props.eventOfnumber}</Stress>개
          </span>
          <Bar>|</Bar>
          <span>
            시술후기 <Stress>{props.reviewOfnumber}</Stress>개
          </span>
        </Info>
      </Column>
    </StyledHospitalItem>
  );
};

export default HospitalItem;

const StyledHospitalItem = styled.div`
  cursor: pointer;
  padding-bottom: 20px;
`;

const HospitalImage = styled.img`
  width: 100%;
  height: 144px;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(
      -45deg,
      rgb(224, 224, 224),
      rgb(224, 224, 224),
      rgb(241, 241, 241),
      rgb(241, 241, 241)
    )
    0% 0% / 400% 400%;
  animation: 1s ease-in 0s infinite normal none running gradientBG;
`;

const Title = styled.p`
  color: ${color.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
`;

const Info = styled.p`
  font-style: normal;
  color: #666666;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;

const Stress = styled.span`
  color: ${color.orange};
`;

const Bar = styled.div`
  height: 100%;
  display: inline-block;
  padding: 0px 8px;
  color: #d6d6d6;
  font-size: 12px;
`;
