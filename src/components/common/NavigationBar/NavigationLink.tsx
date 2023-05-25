import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

const NavigationLink = ({ icon, text, onClick }: PropsType) => {
  return (
    <StyledNavigationLink onClick={onClick}>
      {icon}
      <NavigationText>{text}</NavigationText>
    </StyledNavigationLink>
  );
};

export default NavigationLink;

const StyledNavigationLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 100%;
  cursor: pointer;
`;

const NavigationText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  color: #666666;
`;
