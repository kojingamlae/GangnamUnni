import Column from "components/common/Flex/Column";
import { styled } from "styled-components";
import { color } from "styles/color";
import StarIcon from "../search-result/Icon/Star";

const HospitalItem = () => {
  return (
    <StyledHospitalItem>
      <HospitalImage src="/assets/hospital/hospital.png" />
      <Column>
        <Title>나나성형외과의원</Title>
        <Info>
          <span>
            <StarIcon />
            9.6 (평가 <Stress>15,017</Stress>개)
          </span>{" "}
          <Bar>|</Bar>
          <span>
            {" "}
            이벤트 <Stress>83</Stress>개
          </span>
          <Bar>|</Bar>
          <span>
            시술후기 <Stress>28,571</Stress>개
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
