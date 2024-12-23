import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import evaluateImg from "../../assets/evaluate.webp";
import Button from "../../components/Button";

function Counter({
  start = 0,
  end,
  duration = 2000,
  isInView,
}: {
  start?: number;
  end: number;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (isInView) {
      let current = start;
      const increment = (end - start) / (duration / 16);

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isInView, start, end, duration]);

  return (
    <motion.span className="justify-self-center font-semibold text-3xl">
      {count}
    </motion.span>
  );
}

export default function HomeEvaluate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container my-10 mx-auto">
      <h1 className="py-[2rem] text-[clamp(2.5rem,2vw,5rem)] text-pretty pl-16">
        Glow your skin
      </h1>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
        <div className="w-[min(450px,90vw)] relative">
          <motion.img
            src={evaluateImg}
            alt=""
            className="object-cover aspect-[1] rounded-lg"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.article
          className="grid gap-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.p className="w-[min(50ch,90vw)] text-lg leading-8 justify-self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis
            similique, consectetur reprehenderit aspernatur officiis excepturi
            impedit amet sunt magnam qui quae, alias sint dicta repudiandae, ab
            fuga ad ipsam.
          </motion.p>

          <motion.div className="flex gap-5 items-center justify-center lg:justify-start">
            <Button>Get Started</Button>
          </motion.div>

          <div
            className="flex justify-around flex-wrap gap-4 mt-[1.5rem]"
            ref={ref}
          >
            <motion.div className="grid">
              <Counter end={20000} duration={2000} isInView={isInView} />{" "}
              <p>Total clients</p>
            </motion.div>
            <motion.div className="grid">
              <Counter end={15} duration={1500} isInView={isInView} />
              <p>Experience</p>
            </motion.div>
            <motion.div className="grid">
              <Counter end={20} duration={1500} isInView={isInView} />
              <p>Partners</p>
            </motion.div>
          </div>
        </motion.article>
      </section>
    </div>
  );
}
