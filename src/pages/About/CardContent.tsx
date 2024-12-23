import image2 from "../../assets/PhotoShoot/1.png";

export default function CardContent() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row py-5 lg:w-[min(1100px,90vw)] items-center mx-auto">
        <div className="lg:w-1/2 p-4 order-1 lg:order-none">
          <img
            src={image2}
            alt="Safiya's Photo"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left lg:w-1/2 p-4 order-2 lg:order-none">
          <h1 className="text-6xl font-playball text-center  text-yellow-600   font-bold mb-8">
            Meet
          </h1>
          <h2 className="text-4xl text-center   font-bold mb-8">
            The wonder behind the magic
          </h2>
          <h2 className="text-4xl text-center font-playball  font-bold mb-8">
            Safiya
          </h2>
          <p className="mb-4">
            Safiya, the heart and soul behind Safiya’s Makeover, is a seasoned
            makeup artist with a passion for creating flawless bridal looks.
            With a keen eye for detail and an innate understanding of beauty,
            Safiya has quickly become one of Pondicherry’s most sought-after
            makeup artists. Her journey began with a deep love for makeup, which
            led her to refine her skills under the guidance of industry experts.
            Today, she continues to elevate the bridal makeup experience,
            ensuring each client’s vision is beautifully realized.
          </p>
        </div>
      </div>
    </div>
  );
}
