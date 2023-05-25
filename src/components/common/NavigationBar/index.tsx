import styled from "styled-components";
import ColumnIcon from "./Icon/Column";
import CommunityIcon from "./Icon/Community";
import EventIcon from "./Icon/Event";
import HomeIcon from "./Icon/Home";
import LocationIcon from "./Icon/Location";
import NavigationLink from "./NavigationLink";

const NavigationBar = () => {
  return (
    <StyledNavigationBar>
      <NavigationLink
        onClick={() => console.log("test")}
        icon={<HomeIcon />}
        text="홈"
      />
      <NavigationLink
        onClick={() => console.log("test")}
        icon={<LocationIcon />}
        text="병원"
      />
      <NavigationLink
        onClick={() => console.log("test")}
        icon={<EventIcon />}
        text="이벤트"
      />
      <NavigationLink
        onClick={() => console.log("test")}
        icon={<CommunityIcon />}
        text="커뮤니티"
      />
      <NavigationLink
        onClick={() => console.log("test")}
        icon={<ColumnIcon />}
        text="칼럼"
      />
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
