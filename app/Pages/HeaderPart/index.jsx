import Header from "@/app/component/Header";
import Image from "next/image";

const index = () => {

  return (
    <section
      style={{ backgroundImage: "url(/Images/image-header.jpg)" }}
      className="flex flex-col min-h-screen  text-white bg-center bg-cover bg-blend-overlay "
    >
      <Header />

      <div className="mt-10 p-10">
        <h1 className="text-5xl  sm:text-4xl font-bold mb-45 text-center">
          WE ARE CREATIVES
        </h1>

        <Image
          src="/Images/icon-arrow-down.svg"
          width={20}
          height={24}
          alt="header-image"
          className="ml-auto mr-auto mt-20 w-10 h-24 "
        />
      </div>
    </section>
  );
};

export default index;
