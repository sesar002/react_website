import Navbar from "./navbar/Navbar";
import { useState } from "react";
import "./style.scss";
import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/Home";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home id="home" />
      <Tokenomics id="tokenomics" />
      <Roadmap id="roadmap" />
      <Team id="team" />
    </>
  );
};

export default Main;
