import React from "react";
import widthimage from "../../assets/Carousel/1-min.png";

export default function ImagePositionCard() {
  return (
    <div className="bg-slate-300  py-10">
      <div className="flex flex-col lg:flex-row text-center lg:text-left items-center lg:items-start w-full px-4 lg:px-20 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/2 text-2xl lg:text-4xl">
          <h1 className="w-full font-playball text-8xl  lg:w-[10ch] ">
            This is Safi's website. I have been a professional makeup artist . .
            .
          </h1>
        </div>
        <div className="w-full lg:w-[50ch] lg:w-1/2 text-lg lg:text-xl">
        <h1 className="text-6xl text-red-400 pb-5 font-playball ">The Best Makeup Artist in Pondicherry.</h1>
          <p>
            Welcome to Safiya’s Makeover, where beauty meets artistry to craft
            unforgettable transformations. Renowned as the best makeup artist in
            Pondicherry, we bring a unique blend of skill, passion, and
            creativity to every brushstroke. Our speciality lies in creating
            bespoke looks that not only enhance your natural elegance but also
            reflect the essence of your personality and style. At Safiya’s
            Makeover, we believe that every bride deserves to feel like royalty.<br/><br/>
            With an unwavering commitment to excellence, we cater to your
            individual needs, ensuring your bridal journey is as magical as the
            day itself. Whether it’s a glowing natural finish or a bold
            statement look, we are here to make your vision a reality.<br/><br /> Led by
            the talented and dedicated Safiya, our team is composed of skilled
            professionals who are as passionate about your beauty as you are
            about your special day. With years of experience and a deep
            understanding of the latest trends, Safiya and her team have
            perfected the art of delivering flawless, long-lasting makeup that
            photographs beautifully and leaves a lasting impression.
          </p>
        </div>
      </div>
      <div className="relative top-[140px] flex  justify-center">
        <img
          className="object-cover w-full max-w-[800px] rounded-lg shadow-lg"
          src={widthimage}
          alt="About Safi"
        />
      </div>
    </div>
  );
}
