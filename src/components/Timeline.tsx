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
            key={item.id}
            contentStyle={{ color: "#000", marginBottom: "5rem" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={item.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<item.icon />}
          >
            <h3 className="text-lg ">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.sub}</h4>
            <p className="text-base font-normal">{item.content}</p>
          </VerticalTimelineElement>

          {item.star && (
            <VerticalTimelineElement
              icon={<item.starIcon />}
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
      <VerticalTimeline lineColor="#fff" animate={true}>
        {timeLineElement()}
      </VerticalTimeline>
    </div>
  );
}
