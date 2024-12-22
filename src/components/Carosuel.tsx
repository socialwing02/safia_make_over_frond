import { useState, useEffect } from "react";
import { navlist, slides } from "../constant/data";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const CarouselFade = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-[130vh] overflow-hidden">
      <header className="absolute top-0 left-0 w-full text-white bg-transparent flex justify-between p-8 border-b-2 border-transparent items-center z-10">
        <img src="/.png" alt="" />
        <div className="sm:flex gap-20 items-center hidden">
          <nav>
            <ul className="flex gap-10">
              {navlist.map((item) => (
                <li
                  key={item.name}
                  className="relative group text-lg font-semibold"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  <span className="absolute left-0 bottom-0 h-[2.5px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="bg-red-500">Contact us</Button>
        </div>
      </header>

      {/* Carousel Content */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-[40%] w-full text-center text-black bg-opacity-50 py-4">
              <h3
                className={`text-4xl font-bold transform transition-all duration-1000 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {slide.title}
              </h3>
              <p
                className={`transform transition-all duration-1000 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 z-10"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 z-10"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselFade;
