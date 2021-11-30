import { useState } from "react";
import "./style.scss";
import Home from "./pages/Home";
import Tokenomics from "./pages/tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Footer from "./pages/Footer";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navcont">
          <p>KONTAKTIRAJTE NAS</p>
          <a href="tel:+385955407662" className="phone"></a>
          <a
            href="https://api.whatsapp.com/send?phone=+385955407662"
            className="wapp"
          ></a>
        </div>
      </nav>
      <Home />
      <Team />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default Main;
