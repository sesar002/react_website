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
      <h1>Roadmap</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0559c3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0559c3" }}
          date="before launch"
          iconStyle={{ background: "green", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            nibh risus, at auctor sem rhoncus non. Nam nec accumsan elit. Sed
            quis risus blandit, molestie leo id, fringilla ante. Curabitur magna
            libero, ornare ut lacus sed, condimentum vestibulum ex. In venenatis
            elementum ante, sit amet maximus augue lobortis vel.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="launch"
          contentStyle={{ background: "#0559c3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0559c3" }}
          iconStyle={{ background: "red", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            nibh risus, at auctor sem rhoncus non. Nam nec accumsan elit. Sed
            quis risus blandit, molestie leo id, fringilla ante. Curabitur magna
            libero, ornare ut lacus sed, condimentum vestibulum ex. In venenatis
            elementum ante, sit amet maximus augue lobortis vel.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="week after launch"
          contentStyle={{ background: "#0559c3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0559c3" }}
          iconStyle={{ background: "red", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            nibh risus, at auctor sem rhoncus non. Nam nec accumsan elit. Sed
            quis risus blandit, molestie leo id, fringilla ante. Curabitur magna
            libero, ornare ut lacus sed, condimentum vestibulum ex. In venenatis
            elementum ante, sit amet maximus augue lobortis vel.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="two weeks after launch"
          contentStyle={{ background: "#0559c3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0559c3" }}
          iconStyle={{ background: "red", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            nibh risus, at auctor sem rhoncus non. Nam nec accumsan elit. Sed
            quis risus blandit, molestie leo id, fringilla ante. Curabitur magna
            libero, ornare ut lacus sed, condimentum vestibulum ex. In venenatis
            elementum ante, sit amet maximus augue lobortis vel.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1 mounth after lounch"
          contentStyle={{ background: "#0559c3", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0559c3" }}
          iconStyle={{ background: "red", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            nibh risus, at auctor sem rhoncus non. Nam nec accumsan elit. Sed
            quis risus blandit, molestie leo id, fringilla ante. Curabitur magna
            libero, ornare ut lacus sed, condimentum vestibulum ex. In venenatis
            elementum ante, sit amet maximus augue lobortis vel.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;
