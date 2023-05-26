import react from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import TechExpertise from "./components/TechExpertise/TeckExpertise";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TechExpertise />
      <div className="pagination">
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </div>
    </div>
  );
}
