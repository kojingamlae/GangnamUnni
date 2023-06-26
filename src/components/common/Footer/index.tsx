import styled from "styled-components";
import flex from "utils/flex";
import Column from "../Flex/Column";
import Image from "../Image";

const Footer = () => {
  return (
    <StyledFooter>
      <LogoBox>
        <Image src="/assets/logo.svg" width="86px" height="16px" alt="logo" />
      </LogoBox>
      <Title>Company</Title>
      <Section>
        <Link>병원입점신청</Link>
        <Link>PR</Link>
        <Link>인재 영입</Link>
        <Link>이용약관.개인정보처리방침.위치기반서비스 이용약관</Link>
      </Section>
      <Section>
        <Title>Help Center</Title>
        <Link>고윤영@gmail.com</Link>
      </Section>
      <Section>
        <CompanyInfo>
          주식회사 힐링페이퍼 | 대표이사 : 홍승일
          <br /> 사업자등록번호 : 117-81-81256
          <br /> 회사대표번호 : 02-3443-8854
          <br />
          통신판매업신고 : 2015-서울서초-1147호
          <br />
          서울특별시 강남구 테헤란로 124, 삼원타워(변협 신회관 빌딩) 13층
        </CompanyInfo>
        <Copyright>©고진감래 all rights reserved.</Copyright>
      </Section>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  padding: 30px 30px calc(30px);
  background-color: #f5f5f5;
  border-top: 4px solid #d6d6d6;
`;

const LogoBox = styled.div`
  width: 86px;
  height: 16px;
  margin-bottom: 24px;
`;

const Section = styled.div`
  ${flex({ flexDirection: "column" })}
  margin-bottom: 21px;
`;

const Title = styled.p`
  color: #666666;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0px;
  margin-bottom: 9px;
`;

const Link = styled.a`
  display: block;
  color: #666666;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;

const CompanyInfo = styled.p`
  color: #888888;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;

const Copyright = styled.p`
  color: #666666;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
  margin-top: 9px;
`;
