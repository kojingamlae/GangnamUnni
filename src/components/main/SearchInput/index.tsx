import Image from "components/common/Image";
import { color } from "styles/color";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <SearchInputSection>
      <SearchInputWrapper>
        <StyledSearchInput placeholder="궁금한 시술, 병원 이름을 검색해보세요" />
        <Image
          src="/assets/search.svg"
          width="30px"
          height="30px"
          cursor="pointer"
          alt="search"
        />
      </SearchInputWrapper>
    </SearchInputSection>
  );
};

export default SearchInput;

const SearchInputSection = styled.div`
  padding: 16px 26px 0px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  border: 1px solid ${color.orange};
  border-radius: 100px;
  padding: 7px;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  padding-left: 13px;
  background-color: ${color.white};
  color: ${color.black};
`;
