import { NavLink } from "react-router-dom";
import { navlist } from "../constant/data";
import Button from "./Button";

export default function MainHeader() {
  return (
    <header className="bg-white flex justify-between p-8 border-b-2 items-center">
      logo
      <nav>
        <ul className="flex gap-12">
          {navlist.map((item) => (
            <li key={item.name} className="relative group text-lg">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
              <span className="absolute left-0 bottom-0 h-[2.5px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
      <Button>Contact us</Button>
    </header>
  );
}
