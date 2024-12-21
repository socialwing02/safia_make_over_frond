import React, { useState, useEffect } from "react";

import image1 from "../../assets/PhotoShoot/1.png";
import image2 from "../../assets/PhotoShoot/12.png";
import image3 from "../../assets/PhotoShoot/11.png";
import image4 from "../../assets/PhotoShoot/10.png";

export default function Testimonial() {
  const testimonials = [
    {
      img: image1,
      name: "Sujatha",
      text: "She is very kind and professional😍 I am really satisfied with the makeup look created for me..Out of all my makeups done so ever.. she is best makeup artist in town👍 She handled my skin very carefully and also suggested good look for my face structure.. All of my frnds and family complemented my makeup as best over the other makeup I have done. Thank u so much mam... I Highly recommend her for the awesome work she made ",
    },
    {
      img: image2,
      name: "Farhana",
      text: "Got service for me and my brother's wife we both loved the makeup alot. I felt like myself even after wearing the makeup and my brother's wife was the bride she looked absolutely stunning everyone praised her look . My brother doesn't like heavy make-ups he himself praised us that we are looking stunning 💝 thank you so much 😍😍 …",
    },
    {
      img: image3,
      name: "Kavitha",
      text: "It was an amazing experience with safiya makeover, its an fabulous working experience with u mam your final makeup was so amazed us, much more better than what we expect ❤️❤️❤️",
    },
    {
      img: image4,
      name: "Joshua",
      text: "Safiya’s Makeover made my wedding day unforgettable with her amazing bridal makeup skills. She was professional, friendly, and made sure I looked gorgeous. I’m so grateful for her incredible work!",
    },
  ];

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
