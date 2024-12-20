import React, { useState, useEffect } from "react";
import safiya1 from "../assets/images/safiya1.jpeg";
import safiya2 from "../assets/images/safiya2.jpeg";
import safiya3 from "../assets/images/safiya3.jpeg";
import safiya4 from "../assets/images/safiya4.jpeg";

const CarouselFade = () => {
  const slides = [
    {
      id: 1,
      image: safiya1,
      title: "1st Image",
      description: "Voici la (taataataaaa) première image ;p",
    },
    {
      id: 2,
      image: safiya4,
      title: "Second slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 3,
      image: safiya3,
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 4,
      image: safiya4,
      title: "Fourth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      id: 5,
      image: safiya2,
      title: "Fifth slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
        id: 6,
        image: safiya2,
        title: "Fifth slide label",
        description:
          "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
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
            <div className="absolute bottom-32 w-full text-center text-black bg-opacity-50 py-4">
              <h3
                className={`text-4xl font-bold  transform transition-all duration-1000 ${
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

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselFade;
