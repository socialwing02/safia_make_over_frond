import React from "react";

import testmonialImg from "../../assets/happy-customer.jpg";
import TestimonialList from "./TestimonialTwo";

export default function Testimonals() {
  return (
    <section className="py-[4rem]">
      <h1 className="text-center text-[clamp(2rem,2.3vw,4rem)]">
        What Our client Says
      </h1>

      <div className="flex justify-center py-[2rem]">
        <TestimonialList />
      </div>
    </section>
  );
}
