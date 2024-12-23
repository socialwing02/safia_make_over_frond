import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import evaluateImg from "../../assets/evaluate.webp";
import evaluateImg2 from "../../assets/evaluate2.webp";
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
    <>
      <h1 className="py-[2rem] text-[clamp(2.5rem,3vw,5rem)] text-pretty pl-16">
        Make Your Day Unforgettable
      </h1>
      <div className="grid  gap-14">
        <section className="flex flex-col lg:flex-row justify-center items-center gap-[3rem]">
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
            <motion.p className="w-[min(70ch,90vw)] text-lg leading-8 justify-self-center">
              At BrideMeUp, led by renowned artist Safiya, we specialize in
              expert fashion styling, flawless hairstyling, and perfect saree
              draping. From stunning SFX makeup to smooth airbrush finishes, we
              ensure you shine effortlessly. With travel-friendly solutions,
              trendy makeup designs, classic looks, and personalized services,
              we create unforgettable bridal experiences tailored just for you.
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

        <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[3rem]">
          <motion.article
            className="grid gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
          >
            <h1 className="text-[clamp(2rem,2.5vw,5rem)]">
              Redefining Bridal Beauty
            </h1>

            <motion.p className="w-[min(70ch,90vw)] text-lg leading-8 justify-self-center">
              We are dedicated to making your wedding day truly special. Led by
              renowned artist Safiya, our expert team provides a complete range
              of beauty services, including personalized fashion styling,
              intricate hairstyling, and flawless saree draping. We excel in
              advanced SFX makeup, smooth airbrush finishes, and travel-friendly
              beauty solutions, ensuring convenience and perfection. Whether you
              prefer trendy, modern designs or timeless, classic styles, we
              create looks tailored to enhance your unique beauty. With
              high-quality products and expert techniques, we make sure you feel
              confident, radiant, and unforgettable on your big day. BrideMeUp
              is your trusted partner for a seamless, stress-free, and stunning
              bridal experience
            </motion.p>
          </motion.article>

          <div className="w-[min(450px,90vw)] relative">
            <motion.img
              src={evaluateImg2}
              alt=""
              className="object-cover aspect-[1] rounded-lg"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
