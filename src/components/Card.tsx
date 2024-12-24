import { motion } from "framer-motion";
import { CardData } from "../constant/data";
import { useNavigate } from "react-router-dom";

type Props = {
  item: CardData;
};

export default function Card({ item }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("service");
  }

  return (
    <motion.div
      className="card"
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        show: { opacity: 1, scale: [0.8, 1.3, 1] },
      }}
      transition={{ type: "spring" }}
      whileHover={{ scale: [1.05] }}
    >
      <item.icon />
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </motion.div>
  );
}
