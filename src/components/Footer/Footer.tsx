import { navlist } from "../../constant/data";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  function handleMapclick() {
    const mapURL = "https://maps.app.goo.gl/FBcD6WucasEiyfpU8";
    window.open(mapURL, "_blank");
  }

  return (
    <footer className=" border-t-2 bg-gray-200 flex flex-col gap-9 sm:gap-0 sm:flex-row items-center   justify-around p-10">
      <div>
        <h1 className="text-3xl py-4">Quick Links</h1>
        <ul className="grid  gap-2">
          {navlist.map((item) => (
            <li className="text-xl hover:underline" key={item.name}>
              <Link key={item.name} to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-3xl py-4 ">Services</h1>
        <ul className="grid  gap-2 ">
          <li className="text-xl">Bridal</li>
          <li className="text-xl">Photoshoot</li>
          <li className="text-xl">Sree Drapist</li>
          <li className="text-xl">SFX Makeup</li>
          <li className="text-xl">Airbrush Makeup</li>
          <li className="text-xl">Customise Flowers</li>
        </ul>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-3xl py-4 ">Contact</h1>

        <div className="grid gap-6">
          <div className="flex gap-2 ">
            <LocalPhoneIcon />
            <span className="hover:underline">
              <a href="tel:08668079374">08668079374</a>
            </span>
          </div>
          <div className="flex gap-2">
            <EmailIcon />
            <span className="hover:underline">
              <a href="mailto:Safiyasekar87@gmail.com">
                Safiyasekar87@gmail.com
              </a>
            </span>
          </div>
          <div
            className="flex  gap-2 hover:cursor-pointer hover:underline"
            onClick={handleMapclick}
          >
            <LocationOnIcon />
            <p className="grid uppercase">
              <span>Safiya&apos;s makeover</span>
              <span>
                333, Bharathi St, MG Road Area,
                <br /> Puducherry, 605001.
              </span>
              <span>Tamil nadu 629810</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
