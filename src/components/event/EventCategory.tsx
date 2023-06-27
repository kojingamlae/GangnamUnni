import { styled } from "styled-components";
import Image from "components/common/Image";
import flex from "utils/flex";
import { color } from "styles/color";

interface PropsType {
  icon: string;
  name: string;
  isSelected: boolean;
}

const EventCategory = ({ icon, name, isSelected }: PropsType) => {
  return (
    <StyledEventCategory isSelected={isSelected}>
      <Image
        src={`/assets/category/${icon}.png`}
        width="30px"
        height="30px"
        alt="category-icon"
        cursor="pointer"
      />
      <Name isSelected={isSelected}>{name}</Name>
    </StyledEventCategory>
  );
};

export default EventCategory;

const StyledEventCategory = styled.div<{ isSelected: boolean }>`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  gap: 8px;
  min-width: 66px;
  height: 100%;
  padding: 10px 0px;
  text-align: center;
  color: ${(props) => (props.isSelected ? color.orange : color.black)};
  cursor: pointer;
`;

const Name = styled.span<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? color.orange : color.black)};
  font-size: 10px;
  font-weight: 400;
`;
