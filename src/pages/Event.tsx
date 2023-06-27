import EventCategory from "components/event/EventCategory";
import EventItem from "components/event/EventItem";
import { CATEGORY_DATA } from "data/category";
import Layout from "layouts/Layout";
import { useState } from "react";
import styled from "styled-components";
import { color } from "styles/color";
import flex from "utils/flex";

const EventScreen = () => {
  const [selectedCatecory] = useState("all");

  return (
    <Layout currentScreenName="event">
      <StyledEventScreen>
        <EventCategories>
          {CATEGORY_DATA.map((item) => (
            <EventCategory
              key={item.id}
              name={item.name}
              icon={item.icon}
              isSelected={selectedCatecory === item.icon}
            />
          ))}
        </EventCategories>
        <EventText>
          '코성형' 이벤트<NumberOfEvent>715</NumberOfEvent>건
        </EventText>
        <EventList>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <EventItem />
          ))}
        </EventList>
      </StyledEventScreen>
    </Layout>
  );
};

export default EventScreen;

const StyledEventScreen = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;

const EventCategories = styled.div`
  ${flex({ alignItems: "center" })}
  border-bottom: 1px solid #cdcdcd;
  overflow-x: auto;
  height: 66px;
  /* hidden scroll */
  scrollbar-width: none; /* Firefox에서 스크롤바 제거 */
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 제거 */

  &::-webkit-scrollbar {
    width: 0; /* Chrome/Safari에서 스크롤바 제거 */
    height: 0;
  }
`;

const EventList = styled.div`
  ${flex({ flexDirection: "column" })}
`;

const EventText = styled.p`
  padding: 16px;
  color: ${color.black};
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0px;
`;

const NumberOfEvent = styled.span`
  color: ${color.orange};
  margin-left: 6px;
`;
