import Image from "next/image";
import React from "react";
import sallad1 from "../../../public/sallad1.png";
import sallad2 from "../../../public/sallad2.png";
import MenuItem from "./MenuItem";
import SectionHeader from "@/app/components/SectionHeader";
const HomeMenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start  ">
        <div className=" absolute left-0 -top-[70px] -z-10">
          <Image src={sallad1} alt="salad" width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={sallad2} width={107} height={195} alt={"sallad"} />
        </div>
        <div className="text-center">
          <SectionHeader subheader={"check out"} header={"Menu"} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-28 p-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
