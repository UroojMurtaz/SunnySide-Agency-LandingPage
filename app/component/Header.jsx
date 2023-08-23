import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-100">
      <Image src="logo.svg" roundedCircle width={120} height={120} alt="logo" />
      <div className="flex justify-between items-center gap-7 text-lg">
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Project</Link>
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-md">
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Header;
