import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import LoginPage from "./components/LoginPage";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
