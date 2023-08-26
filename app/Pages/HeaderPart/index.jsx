import Header from "@/app/component/Header";
import Image from "next/image";
import React from "react";
// import headerimage from "../../Images/image-header.jpg"

const index = () => {
  return (
    <section
      style={{ backgroundImage: "url(/Images/image-header.jpg)" }}
      className="flex flex-col min-h-screen  text-white bg-center bg-cover bg-blend-overlay "
    >
      <Header />

      <div className="text-center mx-auto ">
        <h1 className="text-4xl font-semibold mb-45">WE ARE CREATIVES</h1>
        <Image
          className="inline-block mt-20"
          src="/Images/icon-arrow-down.svg"
          width={27}
          height={27}
          alt="header-image"
        />
      </div>
    </section>
  );
};

export default index;
