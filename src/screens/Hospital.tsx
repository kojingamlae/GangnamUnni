import HospitalItem from "components/hospital/HospitalItem";
import Layout from "components/common/Layout";
import styled from "styled-components";
import flex from "utils/flex";
import { HOSPITAL_LIST_DATA } from "data/list/hospital";

const HospitalScreen = () => {
  return (
    <Layout currentScreenName="hospital">
      <StyledHospitalScreen>
        <HospitalHeader>
          <NumberOfHospital>
            병원 목록 ({HOSPITAL_LIST_DATA.length})
          </NumberOfHospital>
          <Filter>추천순</Filter>
        </HospitalHeader>
        <HospitalList>
          {HOSPITAL_LIST_DATA.map((item) => (
            <HospitalItem {...item} />
          ))}
        </HospitalList>
      </StyledHospitalScreen>
    </Layout>
  );
};

export default HospitalScreen;

const StyledHospitalScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
`;

const HospitalHeader = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  padding: 11px 16px;
  border-bottom: 1px solid #cdcdcd;
`;

const NumberOfHospital = styled.span`
  color: #666666;
  font-size: 12px;
  font-weight: 500;
`;

const Filter = styled.span`
  color: #666666;
  font-size: 12px;
  font-weight: 500;
`;

const HospitalList = styled.div`
  ${flex({ flexDirection: "column" })}
  padding: 24px 26px;
`;
