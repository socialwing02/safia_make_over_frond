import { motion } from "framer-motion";
import heroImg from "../../assets/Service/service-hero.webp";
import Button from "../../components/Button";
import { fadeIn } from "../../utils/variants";

export default function ServiceHero() {
  return (
    <section className="flex flex-col items-center sm:flex-row justify-center gap-10 pt-10 px-[2rem] pb-20">
      <motion.img
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        src={heroImg}
        alt=""
        className="w-[460px] aspect-square  object-cover rounded-xl"
      />

      <motion.article
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-[min(600px,90vw)] flex flex-col gap-6"
      >
        <h1 className="text-[clamp(2rem,2.2vw,4rem)]">What We do ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          excepturi iste neque aliquid est sit error nam illo, veritatis sunt
          aspernatur repellat autem commodi officiis fugit consequatur, facilis
          possimus molestiae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor excepturi iste neque aliquid est sit error nam illo,
          veritatis sunt aspernatur repellat autem commodi officiis fugit
          consequatur, facilis possimus molestiae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor excepturi iste neque aliquid est
          sit error nam illo, veritatis sunt aspernatur repellat autem commodi
          officiis fugit consequatur, facilis possimus molestiae. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolor excepturi iste
          neque aliquid est sit error nam illo, veritatis sunt aspernatur
          repellat autem commodi officiis fugit consequatur, facilis possimus
          molestiae.
        </p>

        <div>
          <Button>Let&apos;s Connect</Button>
        </div>
      </motion.article>
    </section>
  );
}
