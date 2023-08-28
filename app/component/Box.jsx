import Image from "next/image";
import React from "react";

const Box = ({ title, content, imageName, reverse,underLineColor }) => {
  console.log("under",underLineColor)
  console.log("title",title)
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
          <button className="px-1 font-bold text-sm mt-2 relative"
          style={{color:"hsl(212, 27%, 19%)"}}
          >
            LEARN MORE
            <span className="absolute bottom-0 left-0 w-full h-1 shadow-md opacity-30 p-1 rounded-full"
             style={{backgroundColor :reverse ? "hsl(7, 99%, 70%)":"hsl(51, 100%, 49%)"}}
            ></span>
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
