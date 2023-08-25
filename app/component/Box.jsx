import Image from "next/image";
import React from "react";

const Box = ({ title, content, imageName, reverse }) => {
  return (
    <div
      className={`w-full flex flex-col-reverse 
    ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"}
    `}
    >
      <div className="container flex-1 flex items-center justify-center">
        <div className="p-10 sm:p-20 w:[100%]  sm:w-[82%] ">
          <div className="text-2xl text-slate-700 font-bold mb-4 sm:text-center md:text-start sm:text-3xl">
            {title}
          </div>
          <p className=" flex  text-slate-400 font-semibold mb-5">{content}</p>
          <button className="py-1 font-semibold text-sm mt-2 relative">
            LEARN MORE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 shadow-md"></span>
          </button>
        </div>
      </div>

      <div className="flex-1 ">
        <Image
          src={`/Images/${imageName}`}
          alt="transform"
          width={1200}
          height={800}
          layout="responsive"
          quality={80}
        />
      </div>
    </div>
  );
};

export default Box;
