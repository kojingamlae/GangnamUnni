import styled from "styled-components";
import ColumnIcon from "../Icon/Column";
import CommunityIcon from "../Icon/Community";
import EventIcon from "../Icon/Event";
import HomeIcon from "../Icon/Home";
import LocationIcon from "../Icon/Location";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <StyledNavigationBar>
      <NavigationItem>
        <HomeIcon />
        <NavigationText>홈</NavigationText>
      </NavigationItem>

      <NavigationItem>
        <LocationIcon />
        <NavigationText>병원</NavigationText>
      </NavigationItem>

      <NavigationItem>
        <EventIcon />
        <NavigationText>이벤트</NavigationText>
      </NavigationItem>

      <NavigationItem>
        <CommunityIcon />
        <NavigationText>커뮤니티</NavigationText>
      </NavigationItem>

      <NavigationItem>
        <ColumnIcon />
        <NavigationText>칼럼</NavigationText>
      </NavigationItem>
    </StyledNavigationBar>
  );
};

export default NavigationBar;

const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 65px;
  width: 100%;
  border-top: 1px solid #d6d6d6;
`;

const NavigationText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  color: #666666;
`;
