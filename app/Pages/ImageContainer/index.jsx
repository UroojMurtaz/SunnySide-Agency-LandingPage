import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-4">
    <div className="w-full">
      <Image
        src={"/Images/image-gallery-milkbottles.jpg"}
        width={375}
        height={375}
        layout="responsive"
      />
    </div>
    <div className="w-full">
      <Image
        src={"/Images/image-gallery-orange.jpg"}
        width={375}
        height={375}
        layout="responsive"
      />
    </div>
    <div className="w-full">
      <Image
        src={"/Images/image-gallery-cone.jpg"}
        width={375}
        height={375}
        layout="responsive"
      />
    </div>
    <div className="w-full">
      <Image
        src={"/Images/image-gallery-sugarcubes.jpg"}
        width={375}
        height={375}
        layout="responsive"
      />
    </div>
  </div>
  );
};

export default index;
