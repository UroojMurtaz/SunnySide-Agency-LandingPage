import Image from "next/image";
import React from "react";

const index = () => {
  const testimonial = [
    {
      id: 1,
      name: "Emily R.",
      job: "Marketing Director",
      image: "image-emily.jpg",
      content:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      id: 2,
      name: "Thomas S.",
      job: "Chief Operating Officer",
      image: "image-thomas.jpg",
      content:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    },
    {
      id: 3,
      name: "Jennie F.",
      job: "Business Owner",
      image: "image-jennie.jpg",
      content:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];
  return (
    <div className="p-20">
      <h1
        className="text-center m-10 mb-10 text-2xl font-bold"
        style={{ color: "hsl(210, 4%, 67%)" }}
      >
        CLIENT TESTIMONIALS
      </h1>
      <div className="flex flex-col sm:flex-row justify-around gap-10">
        {testimonial.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-7"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={`/Images/${item.image}`}
                width={34}
                height={34}
                alt="client"
                layout="responsive"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-center font-semibold" style={{ color: "hsl(213, 9%, 39%)" }}>
              {item.content}
            </p>
            <div className="text-center">
              <h1
                style={{ color: "hsl(212, 27%, 19%)" }}
                className="font-bold text-1xl"
              >
                {item.name}
              </h1>
              <h2 className="text-sm" style={{ color: "hsl(210, 4%, 67%)" }}>
                {item.job}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
