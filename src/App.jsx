import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
      </Routes>
      <Header user={user} />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
