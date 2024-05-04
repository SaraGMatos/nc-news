import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
