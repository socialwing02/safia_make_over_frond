import BrushIcon from "@mui/icons-material/Brush";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

export default function Card() {
  return (
    <motion.div className="card ">
      <BrushIcon sx={{ color: "pink", fontSize: "2.7rem" }} />
      <h1>Bridal Makeup</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
        placeat sunt mollitia ab quasi veniam ad reiciendis nam laudantium
        corporis qui natus enim ea maxime, rem obcaecati temporibus sapiente
        fugit!
      </p>
    </motion.div>
  );
}
