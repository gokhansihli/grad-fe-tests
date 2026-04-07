import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./components/test-1/LoginPage";
import MovieSearch from "./components/test-2/MovieSearch";
import RegionGuess from "./components/test-3/RegionGuess";
import FindX from "./components/test-4/FindX";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test-1" element={<LoginPage />} />
      <Route path="/test-2" element={<MovieSearch />} />
      <Route path="/test-3" element={<RegionGuess />} />
      <Route path="/test-4" element={<FindX />} />
    </Routes>
  );
}

export default App;
