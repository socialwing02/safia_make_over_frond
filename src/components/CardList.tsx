import Card from "./Card";
import { cardData } from "../constant/data";

export default function ServiceList() {
  return (
    <section className="py-10">
      <h2 className="text-center text-[clamp(1.5rem,2.6vw,4rem)]">
        Our Services
      </h2>

      <div className="flex justify-center">
        <div className="card-list">
          {cardData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
