import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { navlist } from "../constant/data";

export default function HamburgMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <span className="sm:hidden">
        <MenuIcon fontSize="large" onClick={() => setIsOpen(true)} />
      </span>

      <div
        className={`fixed inset-0 [left:30%] ${
          !isOpen && "translate-x-full"
        }  border-l-2 z-40 bg-white duration-500`}
      >
        <CloseIcon
          fontSize="large"
          sx={{ marginTop: "3rem", marginLeft: "2rem", color: "black" }}
          onClick={onClose}
        />
        <ul className="grid gap-8  mt-[4rem] ml-10">
          {navlist.map((item) => (
            <li key={item.name} className="text-4xl hover:underline text-black">
              <Link to={item.path} onClick={onClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
