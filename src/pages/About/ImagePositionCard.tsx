import { motion } from "framer-motion";
import image2 from "../../assets/Logo/founder2.webp";
import { fadeIn } from "../../utils/variants";

export default function ImagePositionCard() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row text-center lg:text-left items-center justify-around lg:items-start w-full px-4 lg:px-20 py-20">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-[clamp(2.5rem,3.2vw,5rem)] text-pretty text-red-300 mb-10 font-playball ">
          The Best Makeup Artist <br />
          in Pondicherry.
        </h1>
        <p className="w-[min(60ch,90vw)] pl-6 text-[1.2rem]">
          Welcome to Safiya&apos;s Makeover, where beauty meets artistry to
          craft unforgettable transformations. Renowned as the best makeup
          artist in Pondicherry, we bring a unique blend of skill, passion, and
          creativity to every brushstroke. Our speciality lies in creating
          bespoke looks that not only enhance your natural elegance but also
          reflect the essence of your personality and style. At Safiya&apos;s
          Makeover, we believe that every bride deserves to feel like royalty.
          <br />
          <br />
          With an unwavering commitment to excellence, we cater to your
          individual needs, ensuring your bridal journey is as magical as the
          day itself. Whether it&apos;s a glowing natural finish or a bold
          statement look, we are here to make your vision a reality.
          <br />
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <img src={image2} alt="" className="h-[500px] rounded-xl" />
      </motion.div>
    </div>
  );
}
