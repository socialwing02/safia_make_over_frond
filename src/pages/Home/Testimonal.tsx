import { useState, useEffect } from "react";
import { testimonials } from "../../constant/data";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState({ exit: "", enter: "" });

  useEffect(() => {
    const interval = setInterval(() => handleNextSlide(), 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    const animationType =
      index > currentIndex
        ? { exit: "next1", enter: "next2" }
        : { exit: "prev1", enter: "prev2" };
    setAnimation(animationType);
    setCurrentIndex(index);
  };

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setAnimation({ exit: "next1", enter: "next2" });
    setCurrentIndex(nextIndex);
  };

  return (
    <section className="testimonial-container">
      <div className="testimonial">
        <h1 className="testimonial-title">Testimonial</h1>
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                animation:
                  index === currentIndex
                    ? `${animation.enter} 0.5s ease-in forwards`
                    : index === currentIndex - 1 ||
                      (currentIndex === 0 && index === testimonials.length - 1)
                    ? `${animation.exit} 0.5s ease-in forwards`
                    : "",
              }}
            >
              <img src={testimonial.img} alt={testimonial.name} />
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="indicators">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
