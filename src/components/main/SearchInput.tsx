import { color } from "styles/color";
import styled from "styled-components";
import SearchIcon from "./Icon/Search";
import { Navigate, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState("");
  const onClick = () => {
    navigate(`/search/result/${searchResult}`);
    setSearchResult("");
  };

  return (
    <SearchInputSection>
      <StyledSearchInput>
        <Input
          placeholder="궁금한 시술, 병원 이름을 검색해보세요"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchResult(e.target.value)
          }
          value={searchResult}
        />
        <SearchIcon cursor="pointer" onClick={onClick} />
      </StyledSearchInput>
    </SearchInputSection>
  );
};

export default SearchInput;

const SearchInputSection = styled.div`
  padding: 16px 26px 0px;
`;

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  border: 1px solid ${color.orange};
  border-radius: 100px;
  padding: 7px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  padding-left: 13px;
  background-color: ${color.white};
  color: ${color.black};
`;
