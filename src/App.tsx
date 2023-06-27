import { Route, Routes } from "react-router-dom";
import MainScreen from "screens/Main";
import SearchResultScreen from "screens/SearchResult";
import HospitalScreen from "screens/Hospital";
import EventScreen from "screens/Event";
import CommunityScreen from "screens/Community";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/search/result/:category" element={<SearchResultScreen />} />
      <Route path="/hospital" element={<HospitalScreen />} />
      <Route path="/event" element={<EventScreen />} />
      <Route path="/community" element={<CommunityScreen />} />
    </Routes>
  );
};

export default App;
