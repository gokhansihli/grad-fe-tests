import "./App.css";
import LoginPage from "./components/test-1/LoginPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test-1" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
