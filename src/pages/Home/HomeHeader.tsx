import React, { useState } from "react";
import { navlist } from "../../constant/data";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import HamburgMenu from "../../components/HamburgMenu";

export default function HomeHeader() {
  const [IsDropped, setIsDropped] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsDropped(true);
  }

  function handleMouseLeave() {
    setIsDropped(false);
  }

  return (
    <header className="absolute top-0 left-0 w-full text-white bg-transparent flex justify-between p-8 border-b-2 border-transparent items-center z-10">
      <img src="/.png" alt="" />
      <div className="sm:flex gap-20 items-center hidden">
        <nav>
          <ul className="flex gap-10">
            {navlist.map((item) => (
              <li
                key={item.name}
                className="relative group text-lg font-semibold"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
                <span className="absolute left-0 bottom-0 h-[2.5px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="bg-red-500">Contact us</Button>
      </div>

      <HamburgMenu />
    </header>
  );
}
