import Image from "next/image";
import React from "react";
import pizza from "../../../public/pizza.png";
import RightIcons from "./RightIcons";
const Hero = () => {
  return (
    <>
      <section className="hero mt-8">
        <div className="py-12">
          <h1 className="text-4xl font-semibold leading-normal">
            Everyting <br /> is better <br /> with a{" "}
            <span className="text-red-500">pizza</span>
          </h1>
          <p className="mt-4 my-6 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, itaque!
          </p>
          <div className="flex gap-4">
            <button className="bg-red-40 flex items-center justify-between bg-red-600 px-8 py-2 rounded-full uppercase">
              Order Now <RightIcons />
            </button>
            <button className="bg-green-400 flex items-center justify-between text-white px-8 py-2 rounded-full">
              Learn More <RightIcons />
            </button>
          </div>
        </div>
        <div className="w-full h-max relative">
          <Image src={pizza} alt="pizza image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
