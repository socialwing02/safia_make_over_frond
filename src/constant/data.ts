export const navlist = [
  { name: "Home", path: "/" },
  { name: "Services", path: "service" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

import HailIcon from "@mui/icons-material/Hail";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import StyleIcon from "@mui/icons-material/Style";
import BrushIcon from "@mui/icons-material/Brush";
import AirlinesIcon from "@mui/icons-material/Airlines";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

export type CardData = {
  title: string;
  desc: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  color?: string;
};

export const cardData: CardData[] = [
  {
    icon: HailIcon,
    title: "Fashion",
    color: "pink",
    desc: "Discover the latest trends in fashion, from sleek minimalism to bold, statement pieces. Elevate your wardrobe with timeless classics or experiment with vibrant, modern styles. Fashion is all about self-expression!",
  },
  {
    icon: StyleIcon,
    title: "Hair Stylist",
    color: "#d8e89e",
    desc: "Transform your hair with our expert hairstylists! Whether you’re looking for a trendy cut, vibrant color, or an elegant updo, we tailor every style to suit your personality. Book now for a hair makeover that turns heads!",
  },
  {
    icon: CheckroomIcon,
    color: "#daf779",
    title: "Saree Drapist",
    desc: "Let our expert Saree Drapists create a flawless, elegant look for you. Whether it's a traditional drape or a modern twist, we ensure your saree fits perfectly for any occasion.",
  },
  {
    icon: BrushIcon,
    color: "#d45faf",
    title: "SFX Makeup",
    desc: "Unleash your creativity with stunning SFX makeup! From realistic wounds to eerie transformations, our artists bring your wildest visions to life. Perfect for films, parties, or Halloweens.",
  },
  {
    icon: AirlinesIcon,
    title: "Airbrush Makeup",
    desc: "Achieve flawless, natural-looking skin with airbrush makeup! Our expert artists use precision to create a smooth, long-lasting finish for weddings, events, or photoshoots.",
  },
  {
    icon: EmojiNatureIcon,
    title: "Customise Flowers",
    desc: "Create your perfect bouquet with our customized flower arrangements! Choose from a variety of blooms, colors, and styles to match any occasion. Whether it’s for a wedding, birthday, or just because, we make it special!",
  },
];

import safiya1 from "../assets/Carousel/img1.webp";
import safiya2 from "../assets/Carousel/img2.webp";
import safiya3 from "../assets/Carousel/img3.webp";
import safiya4 from "../assets/Carousel/img4.webp";
import safiya5 from "../assets/Carousel/img5.webp";
import safiya6 from "../assets/Carousel/img6.webp";

export const slides = [
  {
    id: 1,
    image: safiya1,
    title: "Timeless Elegance, Redefined",
    description: "Perfect artistry for every occasion",
  },
  {
    id: 2,
    image: safiya2,
    title: "Look Perfect on Your Big Day ",
    description: "Expert makeup artists enhancing your unique style",
  },
  {
    id: 3,
    image: safiya3,
    title: "Elegance in Every Strand ",
    description: "A perfect match for your unique bridal look",
  },
  {
    id: 4,
    image: safiya4,
    title: "Perfect Pleats for Your Special Day ",
    description: "Flawless draping that enhances your bridal look.    ",
  },
  {
    id: 5,
    image: safiya5,
    title: "Transforming Imagination into Reality ",
    description: "Realistic effects for cinematic and theatrical projects.",
  },
  {
    id: 6,
    image: safiya6,
    title: "Flawless Perfection That Lasts All Day ",
    description: "	Flawless, picture-perfect finish by professionals.",
  },
];

// import image1 from "../assets/PhotoShoot/1.png";
// import image2 from "../assets/PhotoShoot/10.png";
// import image3 from "../assets/PhotoShoot/11.png";
// import image4 from "../assets/PhotoShoot/12.png";
// import image5 from "../assets/PhotoShoot/16.png";
// import image6 from "../assets/PhotoShoot/20.png";
// import image7 from "../assets/PhotoShoot/24.png";
// import image8 from "../assets/PhotoShoot/25.png";

// export const bridal = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
// ];

import client1 from "../assets/Testimonal/client1.webp";
import client2 from "../assets/Testimonal/client2.webp";
import client3 from "../assets/Testimonal/client3.webp";
import client4 from "../assets/Testimonal/client4.webp";
import client5 from "../assets/Testimonal/client5.webp";
import client6 from "../assets/Testimonal/client6.webp";

export type TestimonialType = {
  img: string;
  name: string;
  text: string;
  date: string;
};

export const testimonials: TestimonialType[] = [
  {
    img: client1,
    name: "Joshua Jayaraj",
    date: "22-12-2024",
    text: "Safiya’s Makeover made my wedding day unforgettable with her amazing bridal makeup skills. She was professional, friendly, and made sure I looked gorgeous. I’m so grateful for her incredible work!",
  },
  {
    img: client2,
    date: "10-12-2024",
    name: "Abilash M ",
    text: "	I am so glad I chose Safiya’s Makeover for my bridal makeup. The results were stunning, and the makeup lasted all day long. Safiya’s attention to detail is truly exceptional.",
  },
  {
    img: client3,
    date: "28-11-2024",
    name: "Samjhana Chhetri",
    text: "Miss.Safiya is amazing! She nailed the look and the makeup lasted all day. Super professional and made me feel gorgeous! Highly recommend!",
  },
  {
    img: client4,
    name: "Logeshwari Murugesan",
    date: "17-10-2024",
    text: "I asked for dusky skin makeover as bridesmaid for my family function .Safiya mam did it flawlessly.The make up stay was also good.I highly recommend her .",
  },
  {
    img: client5,
    name: "Sujatha Arumugam",
    date: "1-10-2024",
    text: "She is very kind and professional😍 I am really satisfied with the makeup look created for me..Out of all my makeups done so ever.. she is best makeup artist in town👍 She handled my skin very carefully and also suggested good look for my face structure.. All of my frnds and family complemented my makeup as best over the other makeup I have done. Thank u so much mam... I Highly recommend her for the awesome work she made 🫰",
  },

  {
    img: client6,
    name: "Farhana begam",
    date: "15-9-2024",
    text: "Got service for me and my brother's wife we both loved the makeup alot. I felt like myself even after wearing the makeup and my brother's wife was the bride she looked absolutely stunning everyone praised her look . My brother doesn't like heavy make-ups he himself praised us that we are looking stunning 💝 thank you so much 😍😍",
  },
];

import marquee1 from "../assets/honey/honey1.webp";
import marquee2 from "../assets/honey/honey2.webp";
import marquee3 from "../assets/honey/honey3.webp";
import marquee4 from "../assets/honey/honey-4.webp";
import marquee5 from "../assets/honey/honey5.webp";
import marquee6 from "../assets/honey/honey6.webp";
import marquee7 from "../assets/honey/honey7.webp";
import marquee8 from "../assets/honey/honey8.webp";

export const marqueeHoneyImages = [
  marquee1,
  marquee2,
  marquee3,
  marquee4,
  marquee5,
  marquee6,
  marquee7,
  marquee8,
];

import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CelebrationIcon from "@mui/icons-material/Celebration";

export const timelineData = [
  {
    date: "2008-2009",
    title: "Passion Awakens",
    sub: "The Beginning",
    content:
      "Safiya's journey into the world of beauty began in 2008, fueled by a passion for makeup and transformation. She started experimenting with basic techniques, practising with friends and family to refine her skills. This early enthusiasm set the stage for her future as a professional makeup artist.",
    id: 1,
    icon: FavoriteIcon,
  },
  {
    date: "2010-2011",
    title: "Pursuit of Excellence",
    sub: "Studying in Dubai",
    content:
      "In 2010, Safiya moved to Dubai to study at a prestigious beauty academy, immersing herself in advanced makeup techniques. The exposure to global trends and diverse cultures elevated her creativity and expertise. This transformative experience shaped her approach to creating unique and elegant looks.",
    id: 2,
    icon: SchoolIcon,
  },
  {
    date: "2014-2015",
    title: "Freelance Makeup Artist",
    sub: "The Journey Begins",
    content:
      "Returning to Pondicherry, Safiya launched her career as a freelance makeup artist, blending international techniques with personalised artistry. Her dedication and flawless work quickly gained her recognition in the bridal and event makeup scene. Clients were drawn to her ability to craft stunning, long-lasting looks.",
    id: 3,
    icon: WorkIcon,
  },
  {
    date: "2017-2018",
    title: "Launching Safiya’s Makeover",
    sub: "A Dream Realized",
    content:
      "In 2017, Safiya founded Safiya’s Makeover, a brand that delivers exceptional bridal and event makeup services. She built a team of professionals committed to enhancing natural beauty with tailored artistry. Her brand quickly became a trusted name for elegance and excellence in Pondicherry.",
    id: 4,
    icon: RocketLaunchIcon,
  },
  {
    date: "2020-2021",
    title: " Expanding Expertise",
    sub: "Adapting to Trends",
    content:
      "Safiya adapted to emerging trends, mastering airbrush and HD makeup while incorporating minimalist styles. She also introduced virtual consultations, ensuring clients’ needs were met during challenging times. This adaptability reinforced her position as a forward-thinking and innovative artist.",
    id: 5,
    icon: WhatshotIcon,
  },
  {
    date: "2022-2023",
    title: "Makeup Academy Launch & Global Recognition",
    sub: "Breaking Barriers",
    content:
      "Safiya launched the Safiya’s Makeup Academy and set a Guinness World Record for flawless bridal makeup in just 25 minutes.This achievement showcased her unmatched expertise and inspired future artists",
    id: 6,
    icon: TravelExploreIcon,
  },
  {
    date: "2023-2024",
    title: "Celebrating Excellence",
    sub: "A Legacy of Beauty",
    content:
      "Today, Safiya stands as the best makeup artist in Pondicherry, and she is celebrated for her expertise and innovation. Her brand continues to redefine bridal beauty with bespoke services tailored to individual needs. Safiya’s Makeover remains a symbol of artistry, trust, and timeless elegance.",
    id: 7,
    icon: CelebrationIcon,
    star: true,
    starIcon: StarIcon,
  },
];

import flip1 from "../assets/FlipCard/flip1.webp";
import flip2 from "../assets/FlipCard/flip2.webp";
import flip3 from "../assets/FlipCard/flip3.webp";
import flip4 from "../assets/FlipCard/flip4.webp";
import flip5 from "../assets/FlipCard/flip5.webp";
import flip6 from "../assets/FlipCard/flip6.webp";

export const flipCardData = [
  {
    image: flip1,
    title: "Fashion",
    content:
      "A fashion makeover is more than just changing your wardrobe—it’s an opportunity to rediscover yourself and express your individuality. It’s a chance to step out of your comfort zone, experiment with fresh styles, and create a look that mirrors your personality and aspirations.",
  },
  {
    image: flip2,
    title: "Hair Stylist",
    content:
      "Hair styling is about understanding what works best for you. It’s not just about following trends but creating a look that complements your face shape, hair texture, and lifestyle. Whether you’re looking for a sleek bob, luscious curls, or a bold new color, a professional stylist can bring your vision to life while ensuring your hair remains healthy and vibrant.",
  },

  {
    image: flip3,
    title: "Saree Drapist",
    content:
      "The saree is a timeless symbol of grace, elegance, and tradition. Draping it is not just an art; it’s a way to showcase the rich heritage of fashion while celebrating individuality. A skilled saree drapist can transform this versatile garment into a masterpiece, enhancing your beauty and confidence for any occasion.",
  },
  {
    image: flip4,
    title: "SFX Makeup",
    content:
      "Special Effects (SFX) makeup is a mesmerizing blend of art and science, bringing imagination to life through transformative creations. From realistic wounds and aging effects to mythical creatures and otherworldly characters, SFX makeup pushes the boundaries of conventional beauty to tell captivating stories.",
    width: "20px",
  },
  {
    image: flip5,
    title: "Airbrush Makeup",
    content:
      "Airbrush makeup is a game-changer in the beauty world, offering a flawless and natural finish for any occasion. This innovative technique uses a fine mist of makeup applied with an airbrush tool, ensuring even coverage that blends seamlessly into your skin.",
  },
  {
    image: flip6,
    title: "Customise Flowers",
    content:
      "Custom floral designs allow you to tailor every aspect of the bouquet or arrangement. From choosing specific blooms to match a theme or color palette, to incorporating personal elements like favorite flowers or symbolic greenery, customization ensures your floral gift is truly one of a kind.",
  },
];

export const serviceslist = [
  { name: "Fashion" },
  { name: "Hair Stylist" },
  { name: "Saree Drapist" },
  { name: "SFX Makeup" },
  { name: "Airbrush Makeup" },
  { name: "Customise Flowers" },
];
