"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-transparent z-10">
        <Image
          src="logo.svg"
          roundedCircle
          width={120}
          height={120}
          alt="logo"
        />
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
          <div className="block sm:hidden">
            <Image
              src={"/Images/icon-hamburger.svg"}
              width={20}
              height={20}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        {/* Mobile menu */}
      </div>
      {menuOpen && (
        <div className="block sm:hidden bg-white py-10 px-5 flex flex-col  items-center m-5 gap-5 ">
          <Link href="/" className="text-slate-500 font-semibold text-lg">
            About
          </Link>
          <Link href="/" className="text-slate-500 font-semibold text-lg">
            Services
          </Link>
          <Link href="/" className="text-slate-500 font-semibold text-lg">
            Project
          </Link>
          <button className="bg-yellow-400 text-black px-6 py-4 rounded-full font-bold text-md mt-2">
            CONTACT
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
