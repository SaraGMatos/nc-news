import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
