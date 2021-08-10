import Navbar from "./navbar/Navbar";
import { useState } from "react";
import "./style.scss";
import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/Home";
import Tokenomics from "./pages/tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Social from "./pages/Social";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div id="home" className="navigate" />
      <Home />
      <Social />
      <div id="team" className="navigate" />
      <Team />
      <div id="tokenomics" className="navigate" />
      <Tokenomics />
      <div id="roadmap" className="navigate" />
      <Roadmap />
      <Footer />
    </>
  );
};

export default Main;
