import React from "react";
import "../../style.scss";
import Buy from "./Buy";
import Sell from "./Sell";

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <h1>Pumpenomics</h1>
      <Buy />
      <Sell />
    </div>
  );
};

export default Tokenomics;
