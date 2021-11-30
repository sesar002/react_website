import React from "react";
import "../style.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1 className="otkup">Proces otkupa</h1>
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b2b2b2", color: "#000" }}
          icon={"1"}
          iconStyle={{
            background: "#000",
            color: "#fff",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title black">
            Nazovite nas!
          </h3>
          <p className="black">
            Nazovite nas i pošaljite slike Vašeg automobila ili nam pošaljite
            adresu na koju stižemo <b className="black">ODMAH</b>!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b2b2b2", color: "#000" }}
          iconStyle={{ background: "#000" }}
          icon={"2"}
          iconStyle={{
            background: "#000",
            color: "#fff",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title black">PROCJENA!</h3>

          <p className="black">
            Vaš automobil procjenjujemo uživo ili PREKO slika te ostvarujemo
            svoju ponudu
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b2b2b2", color: "#000" }}
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={"3"}
          iconStyle={{
            background: "#000",
            color: "#fff",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title black">OTKUP</h3>

          <p className="black">
            Isplatu vršimo ODMAH, a sve troškove snosimo sami. Vrijednost Vašeg
            automobila ovisi o trenutnoj ponudi i potražnji na tržištu
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;
