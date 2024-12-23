import StarIcon from "@mui/icons-material/Star";

import { motion } from "framer-motion";
import { staggerChildScale, staggerParent } from "../../utils/variants";
import { testimonials, TestimonialType } from "../../constant/data";
import { numericDate } from "../../utils/util";

type Props = {
  item: TestimonialType;
};

export function TestimonialCard({ item }: Props) {
  return (
    <div className="w-[min(480px,90vw)] border-2 grid gap-2 p-3 rounded-lg shadow-md">
      <div className="flex gap-3 items-center">
        <img src={item.img} alt="" className="w-10 h-10 rounded-full" />
        <div className="grid">
          <h3 className="font-semibold">{item.name}</h3>
          <h5 className="text-sm text-gray-500"> {numericDate(item.date)}</h5>
        </div>
      </div>

      <div>
        <p>{item.text}</p>
      </div>

      <motion.div variants={staggerParent} initial="hidden" whileInView="show">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span key={index} variants={staggerChildScale}>
            <StarIcon sx={{ color: "yellow" }} />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
      {testimonials.map((item, index) => (
        <TestimonialCard item={item} key={index} />
      ))}
    </div>
  );
}
