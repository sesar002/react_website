import React, { useRef, useState } from 'react';

const Social = () => {

  const [copySuccess, setCopySuccess] = useState('Copy');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };
  return (
    <div className="social">
      <a
        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xab36f4334ec6df38c4ec0fb5ea597bb0336979e3"
        className="giveaway"
        target="_blank"
        rel="noreferrer"
      >
        BUY NOW
      </a>
      <h2>Join our social media</h2>
      <div className="social-links">
        <a
          href="https://twitter.com/on_bsc"
          className="socimg1"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a
          href="https://www.reddit.com/r/PumpDogeBSC/"
          className="socimg2"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a
          href="https://t.me/PumpDogeBSC"
          className="socimg3"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
      <h2>Contract:</h2>
      <div className="copytoclip">
        <input
          ref={textAreaRef}
          defaultValue='0xab36f4334ec6df38c4ec0fb5ea597bb0336979e3'
        />
        <button onClick={copyToClipboard}>{copySuccess}</button> 
      </div>
    </div>
  );
};

export default Social;
