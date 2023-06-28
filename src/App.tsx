import { Route, Routes } from "react-router-dom";
import MainScreen from "screens/Main";
import SearchResultScreen from "screens/SearchResult";
import HospitalScreen from "screens/Hospital";
import EventScreen from "screens/Event";
import CommunityScreen from "screens/Community";
import CommunityDetailScreen from "screens/CommunityDetail";
import ColumnScreen from "screens/Column";
import ScrollTop from "utils/scrollTop";

const App = () => {
  ScrollTop();
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/search/result/:category" element={<SearchResultScreen />} />
      <Route path="/hospital" element={<HospitalScreen />} />
      <Route path="/event" element={<EventScreen />} />
      <Route path="/community" element={<CommunityScreen />} />
      <Route path="/community/:id" element={<CommunityDetailScreen />} />
      <Route path="/column" element={<ColumnScreen />} />
    </Routes>
  );
};

export default App;
