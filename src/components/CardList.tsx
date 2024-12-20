import Card from "./Card";
import { cardData } from "../constant/data";

export default function CardList() {
  return (
    <div>
      <div className="flex gap-[170px] py-10 ml-[150px]">
        {cardData.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
