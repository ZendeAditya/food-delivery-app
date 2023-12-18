import Image from "next/image";

import pizza from "../../../public/pizza.png";
const MenuItem = () => {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-lg">
      <div className="text-center">
        <Image
          src={pizza}
          alt="pizza"
          className="max-h-auto max-h-40 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        consequatur porro
      </p>
      <button className=" cursor-pointer bg-red-600 text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
