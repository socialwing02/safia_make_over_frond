import CardList from "../../components/CardList";
import CarouselFade from "../../components/Carosuel";
import HeroContent from "../../components/HeroContent";
import Marquee from "../../components/Marquee";
import { marqueeHoneyImages } from "../../constant/data";
import ImageGallery from "../Home/ImageGallery";
import Testimonial from "../Home/Testimonal";

export default function Home() {
  return (
    <>
      <CarouselFade />
      <HeroContent />
      <ImageGallery />

      <CardList />
      <Marquee images={marqueeHoneyImages} animateClassName="enableAnimation" />
      <Testimonial />
    </>
  );
}
