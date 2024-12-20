import image1 from "../../assets/images/safiya1.jpeg";
import image2 from "../../assets/images/safiya2.jpeg";
import image3 from "../../assets/images/safiya3.jpeg";
import image4 from "../../assets/images/safiya4.jpeg";
import image5 from "../../assets/images/safiya1.jpeg";
import image6 from "../../assets/images/safiya1.jpeg";

export default function ImageGallery() {
  return (
    <div className="flex justify-center items-center">
      <div className="gallery">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image6} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>
  );
}
