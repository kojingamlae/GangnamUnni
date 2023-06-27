import Image from "components/common/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";

interface PropsType {
  name: string;
  icon: string;
}

const Category = ({ name, icon }: PropsType) => {
  const navigate = useNavigate();
  const linkName = name.replace("/", "");

  return (
    <StyledCategory onClick={() => navigate(`/search/result/${linkName}`)}>
      <Image
        src={`/assets/category/${icon}.png`}
        width="40px"
        height="40px"
        alt="category-icon"
        cursor="pointer"
      />
      <CategoryName>{name}</CategoryName>
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.a`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  gap: 10px;
  width: 91px;
  height: 86px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${color.white};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
    word-break: break-all;
  }
`;

const CategoryName = styled.p`
  color: ${color.black};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
`;
