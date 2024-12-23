import ServiceList from "../../components/CardList";
import CarouselFade from "../../components/Carousel";
import HeroContent from "../../components/HeroContent";
import Marquee from "../../components/Marquee";
import { marqueeHoneyImages } from "../../constant/data";
import HomeEvaluate from "../Home/EvaluateUs";
import ImageGallery from "../Home/ImageGallery";
import Testimonals from "../Home/Testimonal";

export default function Home() {
  return (
    <>
      <CarouselFade />
      <ServiceList />
      <HeroContent />
      <ImageGallery />
      <Marquee images={marqueeHoneyImages} animateClassName="enableAnimation" />
      <HomeEvaluate />
      <Testimonals />
    </>
  );
}
