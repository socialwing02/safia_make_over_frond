import { motion } from "framer-motion";

import { staggerChild, staggerParent } from "../../utils/variants";
import { marqueeHoneyImages } from "../../constant/data";

export default function ImageGallery() {
  return (
    <div className="hidden sm:flex justify-center items-center pb-[8rem] c:\Users\HP\Downloads\image9.jpg c:\Users\HP\Downloads\image8.pngborder-2 border-black">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        className="gallery"
      >
        {marqueeHoneyImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-48 h-48 object-cover rounded-md"
            variants={staggerChild}
          />
        ))}
      </motion.div>
    </div>
  );
}
