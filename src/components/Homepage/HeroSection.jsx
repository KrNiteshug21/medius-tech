import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen bg-primary-green text-white">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
        <Image
          className="object-cover object-center"
          src="/img/hero-variant-c.webp"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
      <div className="max-w-screen-lg mx-auto p-2 py-20">
        <p className="text-9xl font-semibold text-center text-secondary-green">
          Mortgages <br /> made simple
        </p>
        <div className="text-sm flex justify-between my-32 mx-10">
          <div className="text-center space-y-2">
            <button className="bg-secondary-green text-lg text-primary-green py-6 px-10 rounded-full">
              Start my Approval
            </button>
            <p>3 min | No credit impact</p>
          </div>
          <div>
            <div className="flex items-center">
              <Star size={24} strokeWidth={"0px"} fill="yellow" />
              <Star size={24} strokeWidth={"0px"} fill="yellow" />
              <Star size={24} strokeWidth={"0px"} fill="yellow" />
              <Star size={24} strokeWidth={"0px"} fill="yellow" />
              <StarHalf size={24} strokeWidth={"0px"} fill="yellow" />
            </div>
            <p>4.6 Stars | 3177 Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
