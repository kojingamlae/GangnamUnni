import { Route, Routes } from "react-router-dom";
import MainScreen from "pages/Main";
import SearchResultScreen from "pages/SearchResult";
import HospitalScreen from "pages/Hospital";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/search/result/:category" element={<SearchResultScreen />} />
      <Route path="/hospital" element={<HospitalScreen />} />
    </Routes>
  );
};

export default App;
