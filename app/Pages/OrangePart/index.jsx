import React from "react";

const index = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div
        className="flex-1 relative bg-center bg-cover bg-blend-overlay min-h-screen max-h-[50vh] sm:max-h-full"
        style={{
          backgroundImage: "url(/Images/image-graphic-design.jpg)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center align-center">
          <h1
            className="text-4xl font-bold"
            style={{ color: "hsl(167, 40%, 24%)" }}
          >
            Graphic Design
          </h1>
          <p
            className="mb-20 py-5 px-10 lg:px-40 font-semibold"
            style={{ color: "hsl(167, 40%, 24%)" }}
          >
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </p>
        </div>
      </div>

      <div
        className="flex-1 relative bg-center bg-cover bg-blend-overlay min-h-screen max-h-[50vh] sm:max-h-full "
        style={{
          backgroundImage: "url(/Images/image-photography.jpg)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-center align-center ">
          <h1
            className="text-4xl font-bold "
            style={{ color: "hsl(198, 62%, 26%)" }}
          >
            Photography
          </h1>
          <p
            className="mb-20 py-5 px-10 lg:px-40 font-semibold"
            style={{ color: "hsl(198, 62%, 26%)" }}
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
