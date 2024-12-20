import cardimage1 from "../assets/images/Card/1.png";
import cardimage2 from "../assets/images/Card/2.png";
import cardimage3 from "../assets/images/Card/3.png";

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

import safiya1 from "../assets/images/safiya1.jpeg";
import safiya2 from "../assets/images/safiya2.jpeg";
import safiya3 from "../assets/images/safiya3.jpeg";
import safiya4 from "../assets/images/safiya4.jpeg";

export const slides = [
  {
    id: 1,
    image: safiya1,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 2,
    image: safiya4,
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
    image: safiya2,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
  {
    id: 6,
    image: safiya2,
    title: "Bridal ",
    description: "Every bridal makeup can be found here",
  },
];
