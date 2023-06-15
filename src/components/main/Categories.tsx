import { CATEGORY_DATA } from "data/category";
import styled from "styled-components";
import { color } from "styles/color";
import Category from "./Category";

const Categories = () => {
  return (
    <CategoriesSection>
      <Title>관심있는 시술을 선택해보세요.</Title>
      <StyledCategories>
        {CATEGORY_DATA.map((item) => (
          <Category key={item.id} name={item.name} icon={item.icon} />
        ))}
      </StyledCategories>
    </CategoriesSection>
  );
};

export default Categories;

const CategoriesSection = styled.div`
  width: 100%;
`;

const Title = styled.p`
  color: ${color.black};
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0px;
  padding: 0px 26px 16px;
`;

const StyledCategories = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 0px 26px;
  place-items: center;
`;
