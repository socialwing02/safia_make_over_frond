import evaluateImg from "../../assets/PhotoShoot/18.png";
import { motion } from "framer-motion";
import { fadeIn, staggerChild, staggerParent } from "../../utils/variants";
import Button from "../../components/Button";

export default function HomeEvaluate() {
  return (
    <div className="container my-10 mx-auto  ">
      <h1 className="py-[2rem] text-[clamp(2.5rem,2vw,5rem)] text-pretty pl-16">
        Glow your skin
      </h1>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8  ">
        {/* content */}

        {/* image */}
        <div className="w-[min(450px,90vw)] relative">
          <motion.img
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={evaluateImg}
            alt=""
            className=" object-cover aspect-[1] rounded-lg"
            loading="lazy"
          />
        </div>

        <motion.article
          className=" grid gap-6 "
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            className="w-[min(50ch,90vw)]  text-lg leading-8 justify-self-center"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis
            similique, consectetur reprehenderit aspernatur officiis excepturi
            impedit amet sunt magnam qui quae, alias sint dicta repudiandae, ab
            fuga ad ipsam.
          </motion.p>

          <motion.div
            className="flex gap-5 items-center justify-center lg:justify-start"
            variants={staggerChild}
            viewport={{ once: true }}
          >
            <Button>Get Started</Button>
          </motion.div>

          <div className="flex justify-around flex-wrap gap-4 mt-[1.5rem]">
            <motion.div
              className="grid"
              variants={staggerChild}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">20k +</span>
              <p>Total clients</p>
            </motion.div>
            <motion.div
              className="grid"
              variants={staggerChild}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">15+</span>
              <p>Experience</p>
            </motion.div>
            <motion.div
              className="grid"
              variants={staggerChild}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">20 +</span>
              <p>Patners</p>
            </motion.div>
          </div>
        </motion.article>
      </section>
    </div>
  );
}
