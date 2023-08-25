'use client'
 
import Image from "next/image";
import Link from "next/link";
import React ,{useState} from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  return (
    <div className="flex justify-between items-center p-5 bg-transparent z-10">
      <Image src="logo.svg" roundedCircle width={120} height={120} alt="logo" />
      <div className="flex justify-between items-center gap-7 text-lg text-white font-semibold">
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Project</Link>
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm">
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Header;
