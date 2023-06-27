import { Route, Routes } from "react-router-dom";
import MainScreen from "pages/Main";
import SearchResultScreen from "pages/SearchResult";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/search/result" element={<SearchResultScreen />} />
    </Routes>
  );
};

export default App;
