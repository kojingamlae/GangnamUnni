import HospitalItem from "components/hospital/HospitalItem";
import Layout from "layouts/Layout";
import styled from "styled-components";
import flex from "utils/flex";

const HospitalScreen = () => {
  return (
    <Layout>
      <StyledHospitalScreen>
        <HospitalHeader>
          <NumberOfHospital>병원 목록 (907)</NumberOfHospital>
          <Filter>추천순</Filter>
        </HospitalHeader>
        <HospitalList>
          {[0, 1, 2, 3].map((item) => (
            <HospitalItem />
          ))}
        </HospitalList>
      </StyledHospitalScreen>
    </Layout>
  );
};

export default HospitalScreen;

const StyledHospitalScreen = styled.div`
  width: 100%;
  height: 100%;
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
