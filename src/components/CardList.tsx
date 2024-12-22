import Card from "./Card";
import { cardData } from "../constant/data";

export default function CardList() {
  return (
    <div className="flex justify-center">
      <div className="card-list">
        {cardData.map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}
