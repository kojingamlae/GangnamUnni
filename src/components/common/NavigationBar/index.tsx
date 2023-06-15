import styled from "styled-components";
import HomeIcon from "./Icon/Home";
import NavigationLink from "./NavigationLink";
import LocationIcon from "./Icon/Location";
import { color } from "styles/color";
import CommunityIcon from "./Icon/Community";
import ColumnIcon from "./Icon/Column";
import { useState } from "react";
import EventIcon from "./Icon/Event";

const NavigationBar = () => {
  const [selectedLink, setSelectedLink] = useState("home");

  return (
    <StyledNavigationBar>
      <NavigationLink
        onClick={() => setSelectedLink("home")}
        icon={
          <HomeIcon fill={selectedLink === "home" ? color.orange : "#4C4C4C"} />
        }
        text="홈"
        isSelected={selectedLink === "home"}
      />
      <NavigationLink
        onClick={() => setSelectedLink("location")}
        icon={
          <LocationIcon
            fill={selectedLink === "location" ? color.orange : "#4C4C4C"}
          />
        }
        text="병원"
        isSelected={selectedLink === "location"}
      />
      <NavigationLink
        onClick={() => setSelectedLink("event")}
        icon={
          <EventIcon
            fill={selectedLink === "event" ? color.orange : "#4C4C4C"}
          />
        }
        text="이벤트"
        isSelected={selectedLink === "event"}
      />
      <NavigationLink
        onClick={() => setSelectedLink("community")}
        icon={
          <CommunityIcon
            fill={selectedLink === "community" ? color.orange : "#4C4C4C"}
          />
        }
        text="커뮤니티"
        isSelected={selectedLink === "community"}
      />
      <NavigationLink
        onClick={() => setSelectedLink("column")}
        icon={
          <ColumnIcon
            fill={selectedLink === "column" ? color.orange : "#4C4C4C"}
          />
        }
        text="칼럼"
        isSelected={selectedLink === "column"}
      />
    </StyledNavigationBar>
  );
};

export default NavigationBar;

const StyledNavigationBar = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  border-top: 1px solid #d6d6d6;
  background-color: ${color.white};
`;
