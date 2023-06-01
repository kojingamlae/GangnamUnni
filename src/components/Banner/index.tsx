import Image from "components/common/Image";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerSection>
      <StyledBanner>
        <Image
          src="/assets/banner-img-1.png"
          alt="banner"
          width="100%"
          height="100%"
          borderRadius="8px"
        />
      </StyledBanner>
    </BannerSection>
  );
};

export default Banner;

const BannerSection = styled.div`
  padding: 16px 26px 32px;
  border: 1px solid black;
`;

const StyledBanner = styled.div`
  width: 388px;
  height: 150px;
  border-radius: 8px;
`;
