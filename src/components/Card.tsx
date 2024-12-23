import { motion } from "framer-motion";
import { CardData } from "../constant/data";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  item: CardData;
};

export default function Card({ item }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("service");
  }

  return (
    <motion.div className="card" onClick={handleClick}>
      <item.icon />
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </motion.div>
  );
}
