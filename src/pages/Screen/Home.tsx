import CarouselFade from "../../components/Carosuel";
import HeroContent from "../../components/HeroContent";
import ImageGallery from "../Home/ImageGallery";
import ImageSelection from "../Home/ImageSelection/ImageSelection";
import ImageTab from "../Home/ImageSelection/ImageTab";
import Testimonal from "../Home/Testimonal";

export default function Home() {
  return (
    <>
      <CarouselFade />
      <HeroContent />
      {/* <CardList /> */}
      <ImageGallery />
      <ImageSelection />

      <Testimonal />
    </>
  );
}
