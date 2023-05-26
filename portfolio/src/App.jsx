import react from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


export default function App() {
  return <div className="app">

    <Navbar />
    <Home />
    {/* <About />
    <Projects />
    <TechExpertise/> */}
               
  </div>;
}
