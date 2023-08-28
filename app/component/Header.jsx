"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  return (
    <div className="flex justify-between items-center p-5 bg-transparent z-10">
      <Image src="logo.svg" roundedCircle width={120} height={120} alt="logo" />
      <div className="flex justify-between items-center gap-7 text-lg text-white font-semibold">
        <Link href="/" className="hidden sm:block">
          About
        </Link>
        <Link href="/" className="hidden sm:block">
          Services
        </Link>
        <Link href="/" className="hidden sm:block">
          Project
        </Link>
        <button className="bg-white hover:bg-sky-200 hover:text-white text-black px-5 py-2 rounded-full font-semibold text-sm hidden sm:block">
          CONTACT
        </button>
        {/* Icon for small screens */}
        <div className="block sm:hidden" >
          <Image src={"/Images/icon-hamburger.svg"} width={20} height={20} onClick={()=>Alert("Hello")}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
