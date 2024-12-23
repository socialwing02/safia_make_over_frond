import image2 from "../../assets/Testimonal/client2.webp";

const Service = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-5 lg:w-[min(1100px,90vw)] items-center mx-auto">
        <div className="text-center lg:text-left lg:w-1/2 p-4 order-2 lg:order-none">
          <h1 className="text-3xl font-playball text-center  text-yellow-600   font-bold mb-8">
            How to know if HD Makeup is the right choice for you?
          </h1>
          <p className="mb-8">
            If you want to achieve a flawless look yet maintain more of a
            natural appearance, then HD makeup should be your go-to. It is
            suitable for all skin types and will prevent your makeup from
            looking caked-up which would be a nightmare for any bride. If you
            want to look camera-ready in the truest sense, HD Makeup Artist
            should be your choice!
          </p>
          <h2 className="text-3xl font-playball text-center  text-yellow-600   font-bold mb-8">
            Is HD Makeup better than Airbrush Makeup?
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
        <div className="lg:w-1/2 p-4 order-1 lg:order-none">
          <img
            src={image2}
            alt="Safiya's Photo"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
