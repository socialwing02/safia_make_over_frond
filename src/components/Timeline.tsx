import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "../constant/data";

export default function Timeline() {
  function timeLineElement() {
    const timelineElement = timelineData.map((item) => {
      return (
        <>
          <VerticalTimelineElement
            contentStyle={{ color: "#000", marginBottom: "5rem" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - 2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<item.icon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading Creative Direction, User Experience,
              Visual Design, Project Management, Team Leading Creative
              Direction, User Experience, Visual Design, Project Management,
              Team Leading
            </p>
          </VerticalTimelineElement>

          {item.star && (
            <VerticalTimelineElement
              icon={<item.icon />}
              iconStyle={{ background: "green", color: "#fff" }}
            />
          )}
        </>
      );
    });

    return timelineElement;
  }

  return (
    <div className="bg-slate-100 my-10 ">
      <VerticalTimeline lineColor="#fff">{timeLineElement()}</VerticalTimeline>
    </div>
  );
}
