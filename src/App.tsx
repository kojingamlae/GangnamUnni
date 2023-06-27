import { Route, Routes } from "react-router-dom";
import MainScreen from "pages/Main";
import SearchResultScreen from "pages/SearchResult";
import HospitalScreen from "pages/Hospital";
import EventScreen from "pages/Event";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/search/result/:category" element={<SearchResultScreen />} />
      <Route path="/hospital" element={<HospitalScreen />} />
      <Route path="/event" element={<EventScreen />} />
    </Routes>
  );
};

export default App;
