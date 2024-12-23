import { NavLink } from "react-router-dom";
import { navlist } from "../constant/data";
import Button from "./Button";
import HamburgMenu from "./HamburgMenu";

export default function MainHeader() {
  return (
    <>
      <header className="bg-white flex justify-between p-8 border-b-2 items-center">
        <img src="/log.png" alt="" />

        <div className="hidden sm:inline-block">
          <nav className="flex items-center gap-10">
            <ul className="flex gap-12">
              {navlist.map((item) => (
                <li
                  key={item.name}
                  className="relative group text-lg font-semibold"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${
                        isActive ? "text-red-500" : "text-black"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  <span className="absolute left-0 bottom-0 h-[2.5px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <Button>Contact us</Button>
          </nav>
        </div>

        <HamburgMenu />
      </header>
    </>
  );
}
