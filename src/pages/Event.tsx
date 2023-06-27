import EventCategory from "components/event/EventCategory";
import { CATEGORY_DATA } from "data/category";
import Layout from "layouts/Layout";
import { useState } from "react";
import styled from "styled-components";
import flex from "utils/flex";

const EventScreen = () => {
  const [selectedCatecory] = useState("all");

  return (
    <Layout>
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
