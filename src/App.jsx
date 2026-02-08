import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import Home from "../src/pages/Home.jsx";
import Birthday from "./pages/Birthdays.jsx";
import Game from "./components/Game.jsx"
import Proposal from "./pages/Proposal.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Birthday" element={<Birthday />} />
       <Route path="/Game" element={<Game/>}/>
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
