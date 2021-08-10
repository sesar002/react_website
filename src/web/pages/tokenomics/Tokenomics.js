import React from "react";
import "../../style.scss";


const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <h1>Pumpenomics</h1>
      <div className="tokecont">
        <div className="tokebox">
          <h3>Liquidity</h3>
          <span className="tokepercent">
            With each trade, 5% is added to the liquidity pool
          </span>
        </div>
        <div className="tokebox">
          <h3>Marketing</h3>
          <span className="tokepercent">
            5% will be sent to a wallet as favour for development and marketing
            purposes
          </span>
        </div>
        <div className="tokebox">
          <h3>Holders</h3>
          <span className="tokepercent">
            1% redistributed to holders
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
