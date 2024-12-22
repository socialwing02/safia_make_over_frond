import { motion } from "framer-motion";
import image1 from "../../assets/honey/10.png";
import image2 from "../../assets/honey/13.png";
import image3 from "../../assets/honey/14.png";
import image4 from "../../assets/honey/19.png";
import image5 from "../../assets/honey/image2.webp";
import image6 from "../../assets/honey/image4.jpg";
import image7 from "../../assets/honey/image8.png";
import image8 from "../../assets/honey/image9.jpg";
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
