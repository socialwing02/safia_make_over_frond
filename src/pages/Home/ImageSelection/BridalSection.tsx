import Marquee from "../../../components/Marquee";
import { bridal } from "../../../constant/data";

export default function BridalSection() {
  return (
    <div>
      <Marquee images={bridal} animateClassName="enableAnimation" />
    </div>
  );
}
