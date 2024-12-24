import Card from "./Card";
import { cardData } from "../constant/data";
import { motion } from "framer-motion";

export default function ServiceList() {
  return (
    <section className="py-10">
      <h2 className="text-center text-[clamp(1.5rem,2.6vw,4rem)]">
        Our Services
      </h2>

      <div className="flex justify-center">
        <motion.div
          className="card-list"
          variants={{
            show: {
              transition: { staggerChildren: 0.09 },
            },
          }}
          initial="hidden"
          whileInView="show"
        >
          {cardData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
