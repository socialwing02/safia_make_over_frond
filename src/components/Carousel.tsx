import { useState, useEffect } from "react";
import { slides } from "../constant/data";

import HomeHeader from "../pages/Home/HomeHeader";
import Button from "./Button";
import { Link } from "react-router-dom";

const CarouselFade = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-[130vh] overflow-hidden">
      <HomeHeader />

      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
            </div>

            <div className="absolute top-[50%] w-full text-center text-white bg-opacity-50 py-4 font-playball z-10">
              <h3
                className={`text-[clamp(1.5rem,2.5vw,5rem)] font-bold transform transition-all duration-1000 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {slide.title}
              </h3>
              <p
                className={` text-[clamp(1.3rem,1.5vw,3rem)] transform transition-all duration-1000 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                {slide.description}
              </p>
              <div className="my-5">
                <Link to="contact">
                  <Button className="bg-red-500 ">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselFade;
