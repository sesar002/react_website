import React from "react";
import "../style.scss";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>Roadmap</h1>

      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="BEFORE LAUNCH"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#3c2db9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>PHASE 1</h3>
          <p>Set up Telegram</p>
          <p>Launch Website</p>
          <p>Social Media Launch</p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="TOKEN LAUNCH"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#3c2db9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>PHASE 2</h3>
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
          dateText="2 WEEKS AFTER LAUNCH"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#3c2db9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>PHASE 3</h3>
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
          dateText="1 MOUNTH AFTER LAUNCH"
          dateInnerStyle={{
            border: "none",
            background: "#61b8ff",
            color: "#000",
          }}
          bodyContainerStyle={{
            background: "#3c2db9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>PHASE 4</h3>
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
