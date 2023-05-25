import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const NavigationItem = ({ children }: PropsType) => {
  return <StyledNavigationItem>{children}</StyledNavigationItem>;
};

export default NavigationItem;

const StyledNavigationItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 100%;
  cursor: pointer;
`;
