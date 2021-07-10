import React from "react";

const Sell = () => {
  return (
    <>
      <h2>SELL</h2>
      <div className="tokecont">
        <div className="tokebox">
          <h3>Devs proteins</h3>
          <span className="tokepercent">
            1% for devs proteins, we need to pump that muscle
          </span>
        </div>
        <div className="tokebox">
          <h3>Liquidity</h3>
          <span className="tokepercent">
            With each trade, 4% is added to the liquidity pool
          </span>
        </div>
        <div className="tokebox">
          <h3>Buybackbot</h3>
          <span className="tokepercent">
            4% of all transactions are used to fund the buyback
          </span>
        </div>
        <div className="tokebox">
          <h3>Marketing</h3>
          <span className="tokepercent">
            5% will be sent to a wallet as favour for development and marketing
            purposes
          </span>
        </div>
      </div>
    </>
  );
};

export default Sell;
