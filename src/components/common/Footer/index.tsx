import styled from "styled-components";
import Image from "../Image";

const Footer = () => {
  return (
    <StyledFooter>
      <LogoBox>
        <Image src="/assets/logo.svg" width="86px" height="16px" alt="logo" />
      </LogoBox>
      <Company>Company</Company>
      <Link>병원입점신청</Link>
      <Link>PR</Link>
      <Link>인재 영입</Link>
      <Link>이용약관.개인정보처리방침.위치기반서비스 이용약관</Link>
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

const Company = styled.p`
  color: rgb(102, 102, 102);
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0px;
  margin-bottom: 9px;
`;

const Link = styled.a`
  color: rgb(102, 102, 102);
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;
