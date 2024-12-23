import { navlist } from "../../constant/data";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import HamburgMenu from "../../components/HamburgMenu";
import { useEffect, useState } from "react";

export default function HomeHeader() {
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    setScroll(window.scrollY > 600);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scroll
          ? "fixed bg-white shadow-md text-black"
          : "absolute bg-transparent"
      } top-0 left-0 w-full flex justify-between px-8 items-center z-[120] transition-all duration-500`}
    >
      <Link to="/">
        <img src="safia-logo.png" alt="" className="w-[100px] object-cover" />
      </Link>
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
                      isActive
                        ? "text-red-500"
                        : scroll
                        ? "text-black"
                        : "text-white"
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
        <Link to="contact">
          <Button className="bg-red-500">Contact us</Button>
        </Link>
      </div>
      <HamburgMenu />
    </header>
  );
}
