
import image2 from "../../assets/PhotoShoot/1.png";

export default function CardContent() {
  return (
    <div className="">
      <div className="flex flex-col mt-[140px] lg:flex-row py-5 m-5 lg:w-[130ch] items-center">
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
      <div className=" justify-center w-[900px] mx-auto  py-5 m-5  ">
        
          <h1 className="text-6xl font-playball text-center  text-yellow-600   font-bold mb-8">
            Safiya's Website
          </h1>
          <h2 className="text-4xl text-center   font-bold mb-8">Who We Are</h2>
          <p className="mb-4 ">
            At Safiya’s Makeover, we are more than just a team of makeup
            artists—we are creators of timeless beauty and cherished memories.
            Established with a passion for enhancing natural elegance, our
            mission is to make every bride feel confident, radiant, and
            unforgettable on her special day. Safiya’s Makeover is helmed by the
            exceptionally talented Safiya, whose dedication to the art of makeup
            has made her one of the most sought-after bridal makeup artists in
            Pondicherry. With years of hands-on experience and a flair for
            blending artistry with innovation, she has built a reputation for
            delivering flawless and personalized beauty solutions. Our approach
            is rooted in the belief that makeup is a celebration of
            individuality. Whether you desire a subtle, natural glow or a bold,
            glamorous transformation, we craft each look to suit your
            personality, style, and the essence of your occasion.
          </p>
 
      </div>
    </div>
  );
}
