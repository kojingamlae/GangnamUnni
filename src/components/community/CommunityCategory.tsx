import { ReactNode } from "react";
import styled from "styled-components";
import { color } from "styles/color";

interface PropsType {
  icon: ReactNode;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const CommunityCategory = ({ icon, name, isSelected, onClick }: PropsType) => {
  return (
    <StyledCommunityCategory onClick={onClick}>
      <RoundIcon isSelected={isSelected}>{icon}</RoundIcon>
      <Name isSelected={isSelected}>{name}</Name>
    </StyledCommunityCategory>
  );
};

export default CommunityCategory;

const StyledCommunityCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-basis: 72px;
  flex-shrink: 0;
  cursor: pointer;
`;

const RoundIcon = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: ${(props) =>
    props.isSelected ? `2px solid ${color.orange}` : "none"};
  border-radius: 50%;
  background-color: #f5f5f5;
`;

const Name = styled.p<{ isSelected: boolean }>`
  font-size: 14px;
  font-weight: ${(props) => props.isSelected && "bold"};
  line-height: 20px;
  letter-spacing: 0px;
  color: ${(props) => (props.isSelected ? color.orange : color.black)};
  text-align: center;
  white-space: nowrap;
`;
