import React from "react";
import "../style.scss";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>Roadmap</h1>

      <Timeline lineColor={"white"}>
        <TimelineItem
          key="001"
          dateText="PHASE 1"
          dateInnerStyle={{
            background: "#019d38",
            color: "#000",
          }}
        >
          <h3 style={{ color: "#ff0000" }}>BEFORE LAUNCH</h3>
          <p>Set up Telegram</p>
          <p>Launch Website</p>
          <p>Social Media Launch</p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="PHASE 2"
          dateInnerStyle={{ background: "#ff0000", color: "#000" }}
        >
          <h3 style={{ color: "#ff0000" }}>TOKEN LAUNCH</h3>
          <p>Reddit CMS Posts</p>
          <p>Launch Integrity Presale</p>
          <p>Launch Integrity On PancakeSwap</p>
          <p>Apply For Listings on CoinSniper,</p>
          <p>Apply For Listings on CoinHunt,</p>
          <p>Apply For Listings on CoinGecko,</p>
          <p>Apply For Listings on CoinMarketCap,</p>
          <p>Marketing push to spread awareness</p>
          <p>10.000 telegram members</p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="PHASE 3"
          dateInnerStyle={{ background: "#ff0000", color: "#000" }}
        >
          <h3 style={{ color: "#ff0000" }}>2 WEEKS AFTER LAUNCH</h3>
          <p>
            Huge push via Influencer Marketing on Youtube, Twitter, Reddit, Tik
            Tok and much more
          </p>
          <p>Influencer marketing push</p>
          <p>Listing on coingecko</p>
          <p>Listing on coinmarketcap</p>
          <p>30.000 telegram members</p>
          <p> 30.000 $PUMPDOGE holders</p>
          <p>Community vote dashboard</p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="PHASE 4"
          dateInnerStyle={{
            background: "#ff0000",
            color: "#000",
          }}
        >
          <h3 style={{ color: "#ff0000" }}>1 MOUNTH AFTER LAUNCH</h3>
          <p>Production Of NFTs for Integrity</p>
          <p>Giveaway Of NFTs For Integrity Holders</p>
          <p>100.000 $PUMPDOGE holders</p>
          <p>100.000 telegram members</p>
          <p>Large influencer marketing push based on election results</p>
          <p>Listings on major cex</p>
          <p>More memes from community</p>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Roadmap;
