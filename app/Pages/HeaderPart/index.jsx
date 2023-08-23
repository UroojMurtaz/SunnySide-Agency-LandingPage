import Header from "@/app/component/Header";
import Image from "next/image";
import React from "react";
// import headerimage from "../../Images/image-header.jpg"

const index = () => {
  return (
    <div className="relative">
      <Header />
      <div className="w-full bg-slate-100 absolute top-0 left-0 z-[-1] flex  justify-center">
        <Image
          src="/Images/image-header.jpg"
          width={333}
          height={233}
          alt="header-image"
          layout="responsive"
        />
      </div>
      <div className="absolute z-10 top-70 left-0 w-full flex flex-col items-center">
        <p className="text-white text-4xl font-serif font-semibold bg-opacity-50 p-4">
          WE ARE CREATIVES
        </p>
        <div className="mt-6 font-3xl">
          <Image
            src="/Images/icon-arrow-down.svg"
            width={23}
            height={23}
            alt="header-image"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
