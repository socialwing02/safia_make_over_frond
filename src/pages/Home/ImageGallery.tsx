import image1 from "../../assets/honey/10.png";
import image2 from "../../assets/honey/13.png";
import image3 from "../../assets/honey/14.png";
import image4 from "../../assets/honey/19.png";
import image5 from "../../assets/honey/image2.webp";
import image6 from "../../assets/honey/image4.jpg";
import image7 from "../../assets/honey/image8.png";
import image8 from "../../assets/honey/image9.jpg";

export default function ImageGallery() {
  return (
    <div className="flex justify-center items-center pb-[8rem] c:\Users\HP\Downloads\image9.jpg c:\Users\HP\Downloads\image8.pngborder-2 border-black">
      <div className="gallery">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
      </div>
    </div>
  );
}
