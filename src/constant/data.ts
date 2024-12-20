import cardimage1 from '../assets/images/Card/1.png'
import cardimage2 from '../assets/images/Card/2.png'
import cardimage3 from '../assets/images/Card/3.png'
import cardimage4 from '../assets/images/Card/4.png'
import cardimage5 from '../assets/images/Card/5.png'
export const navlist = [
  { name: "Home", path: "/" },
  { name: "Services", path: "service" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

export type CardData={
  title:string,
  desc:string
  image:string
}

export const cardData:CardData[] =[
  {
    title:"haii",
    desc:"hshhshshshshh",
    image :cardimage1
   
  },
  {
    title:"hhaha",
    desc:"hshh",
    image:cardimage2
   
  },
  {
    title:"hhaha",
    desc:"hshh",
    image:cardimage3
   
  }
]
