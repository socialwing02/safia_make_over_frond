import bgImg from "../../assets/Service/service-image.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { serviceslist } from "../../constant/data";

export default function ServiceListSection() {
  return (
    <section className="service-hero">
      <div className="w-[800px] mx-5 bg-white rounded-[40px] flex flex-col sm:flex-row justify-between p-6 gap-4">
        <>
          <div className="flex-1 flex flex-col justify-center items-center ">
            <ul className="text-[clamp(1.4rem,1.2vw,2.2rem)] grid  gap-2 font-semibold">
              {serviceslist.map((item) => (
                <li className="flex gap-3" key={item.name}>
                  <span>
                    <ArrowRightAltIcon fontSize="small" />
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </>

        <img
          src={bgImg}
          alt=""
          className="w-[400px] aspect-square object-cover rounded-xl  "
        />
      </div>
    </section>
  );
}
