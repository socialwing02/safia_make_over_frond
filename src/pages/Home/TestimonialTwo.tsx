import StarIcon from "@mui/icons-material/Star";

import image from "../../assets/PhotoShoot/1.png";
import { motion } from "framer-motion";
import { staggerChildScale, staggerParent } from "../../utils/variants";

export function TestimonialCard() {
  return (
    <div className="w-[min(480px,90vw)] border-2 grid gap-2 p-3 rounded-lg shadow-md">
      <div className="flex gap-3 items-center">
        <img src={image} alt="" className="w-10 h-10 rounded-full" />
        <div className="grid">
          <h3 className="font-semibold"> Mary Queen</h3>
          <h5> occasion</h5>
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          sapiente enim consequuntur odit excepturi voluptatum incidunt beatae
          sit temporibus.
        </p>
      </div>

      <motion.div variants={staggerParent} initial="hidden" whileInView="show">
        {Array.from({ length: 5 }).map((i, index) => (
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
      {Array.from({ length: 6 }).map((i, index) => (
        <TestimonialCard key={index} />
      ))}
    </div>
  );
}
