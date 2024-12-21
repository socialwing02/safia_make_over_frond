import Marquee from "../../../components/Marquee";
import { bridal } from "../../../constant/data";

export default function HairSection() {
  return (
    <div>
      <Marquee images={bridal} animateClassName="enableAnimationReverse" />
    </div>
  );
}
