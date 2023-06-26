import styled from "styled-components";
import { color } from "styles/color";
import { ReactNode } from "react";
import flex from "utils/flex";

interface PropsType {
  icon: ReactNode;
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

const NavigationLink = ({ icon, text, onClick, isSelected }: PropsType) => {
  return (
    <StyledNavigationLink onClick={onClick}>
      {icon}
      <NavigationText color={isSelected ? color.orange : "#666666"}>
        {text}
      </NavigationText>
    </StyledNavigationLink>
  );
};

export default NavigationLink;

const StyledNavigationLink = styled.a`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  width: calc(100% / 4);
  height: 100%;
  cursor: pointer;
`;

const NavigationText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
`;
