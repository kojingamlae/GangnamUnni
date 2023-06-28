import ColumnItem from "components/column/ColumnItem";
import Layout from "components/common/Layout";
import { COLUMN_LIST } from "data/list/column";
import styled from "styled-components";

const ColumnScreen = () => {
  return (
    <Layout currentScreenName="column">
      <StyledColumnScreen>
        <ColumnList>
          {COLUMN_LIST.map((item) => (
            <ColumnItem {...item} />
          ))}
        </ColumnList>
      </StyledColumnScreen>
    </Layout>
  );
};

export default ColumnScreen;

const StyledColumnScreen = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;

const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 26px;
`;
