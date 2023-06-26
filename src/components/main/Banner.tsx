import styled from "styled-components";

const Banner = () => {
  return (
    <BannerSection>
      <StyledBanner src="/assets/banner-img-1.png" alt="banner"></StyledBanner>
    </BannerSection>
  );
};

export default Banner;

const BannerSection = styled.div`
  padding: 16px 26px 32px;
`;

const StyledBanner = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 8px;
`;
