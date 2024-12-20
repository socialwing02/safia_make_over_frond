import cardimage1 from "../assets/honey/10.png";
import cardimage2 from "../assets/honey/13.png";
import cardimage3 from "../assets/honey/19.png";

export const navlist = [
  { name: "Home", path: "/" },
  { name: "Services", path: "service" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

export type CardData = {
  title: string;
  desc: string;
  image: string;
};

export const cardData: CardData[] = [
  {
    title: "haii",
    desc: "hshhshshshshh",
    image: cardimage1,
  },
  {
    title: "hhaha",
    desc: "hshh",
    image: cardimage2,
  },
  {
    title: "hhaha",
    desc: "hshh",
    image: cardimage3,
  },
];

import safiya1 from "../assets/Carousel/1-min.png";
import safiya2 from "../assets/Carousel/2-min.png";
import safiya3 from "../assets/Carousel/3-min.png";
import safiya4 from "../assets/Carousel/4-min.png";
import safiya5 from "../assets/Carousel/5-min.png";
import safiya6 from "../assets/Carousel/6-min.png";

export const slides = [
  {
    id: 1,
    image: safiya1,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 2,
    image: safiya2,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 3,
    image: safiya3,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 4,
    image: safiya4,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 5,
    image: safiya5,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 6,
    image: safiya6,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
];

import image1 from "../assets/PhotoShoot/1.png";
import image2 from "../assets/PhotoShoot/10.png";
import image3 from "../assets/PhotoShoot/11.png";
import image4 from "../assets/PhotoShoot/12.png";
import image5 from "../assets/PhotoShoot/16.png";
import image6 from "../assets/PhotoShoot/20.png";
import image7 from "../assets/PhotoShoot/24.png";
import image8 from "../assets/PhotoShoot/25.png";

export const bridal = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
