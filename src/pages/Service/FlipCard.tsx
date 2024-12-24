import "./FlipCard.css"; // Import the CSS file
import { flipCardData } from "../../constant/data";

const FlipCard = () => {
  return (
    <div className="bg-red-50 w-full min-h-screen py-16">
      <div className="card-list">
        {flipCardData.map((item) => (
          <div className="flip-card mx-auto" key={item.title}>
            <div className="flip-card-inner">
              {/* Front of the Card */}
              <div className="flip-card-front">
                <h1 className="text-[clamp(1.6rem,1.7vw,3.5rem)] m-2">
                  {item.title}
                </h1>
                <p className="font-light py-2 p-2 ">{item.content}</p>
              </div>
              <div className="flip-card-back">
                <img
                  src={item.image}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
