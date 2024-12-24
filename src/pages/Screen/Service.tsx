import Flipcard from "../Service/FlipCard";
import ServiceListSection from "../Service/ServiceListSection";
import ServiceHero from "../Service/ServiceHero";
import MakeupInfoSection from "../Service/MakeupInfoSection";
import CubeSection from "../Service/ContentLast";

export default function Service() {
  return (
    <div className="overflow-hidden">
      <ServiceHero />
      <ServiceListSection />
      <Flipcard />
      <MakeupInfoSection />
      <CubeSection />
    </div>
  );
}
