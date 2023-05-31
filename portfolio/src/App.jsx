import react,{useState,useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import TechExpertise from "./components/TechExpertise/TeckExpertise";
import Footer from "./components/Footer/Footer";
import NavigationBtn from "./components/NavigationBtn/NavigationBtn";


export default function App() {

  let [currentPage, setCurrentPage] = useState(window.location.href);
  let webPages = ["#home", "#about", "#projects", "#techStack","#footer"]

  useEffect(() => {
       setCurrentPage(window.location.href="#home")
  },[])
  
   let navigateTo = (link) => {
     setCurrentPage(window.location.href = link);
   };

  return (
    <div className="app">
      <Navbar windowProps={navigateTo} />
      <Home />
      <About windowProps={navigateTo} />
      <Projects />
      <TechExpertise />
      <Footer />
      <div className="pagination">
        {webPages.map(link => {
          return <NavigationBtn key={link} link={link} windowProps={{ currentPage, navigateTo }}/>
        })}
        
      </div>
    </div>
  );
}
