import React from "react";
import ReactDOM from "react-dom";
import "./FlipCard.css"; // Import the CSS file
import { flipCardData } from "../../constant/data";

const FlipCard = () => {
  return (
    <div className="bg-red-50 w-full min-h-screen">
      <div className="card-list max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-10">
        {flipCardData.map((item) => (
          <div className="flip-card mx-auto" key={item.title}>
            <div className="flip-card-inner">
              {/* Front of the Card */}
              <div className="flip-card-front">
                <h1 className="text-xl font-semibold py-4 m-3">{item.title}</h1>
                <p className="font-light py-4 m-3">{item.content}</p>
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

ReactDOM.render(<FlipCard />, document.getElementById("root"));
export default FlipCard;
