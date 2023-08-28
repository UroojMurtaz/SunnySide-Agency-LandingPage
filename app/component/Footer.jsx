import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 gap-10"
      style={{ backgroundColor: "hsl(165, 39%, 62%)" }}
    >
      <h1
        className="text-2xl font-bold"
        style={{ color: "hsl(167, 40%, 24%)" }}
      >
        sunnyside
      </h1>
      <div>
        <ul className="flex gap-10 ">
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            About
          </li>
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            Services
          </li>
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            Projects
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5 mt-10">
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            <Image src={"/Images/icon-facebook.svg"} width={20} height={20} />
          </li>
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            <Image src={"/Images/icon-instagram.svg"} width={20} height={20} />
          </li>
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            <Image src={"/Images/icon-twitter.svg"} width={20} height={20} />
          </li>
          <li className="text-md font-bold" style={{ color: "hsl(168, 34%, 41%)" }}>
            <Image src={"/Images/icon-pinterest.svg"} width={20} height={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
