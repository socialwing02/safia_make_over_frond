import CarouselFade from "../../components/Carosuel";
import HeroContent from "../../components/HeroContent";
import ImageGallery from "../Home/ImageGallery";

export default function Home() {
  return (
    <>
      <CarouselFade />
      <HeroContent />
      {/* <CardList /> */}

      <ImageGallery />
    </>
  );
}
