import React, { useEffect, useState } from "react";

const Carousel = ({ carouselArrObj }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let carouselTimer = setInterval(() => {
      if (activeIndex === 4) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 5000);
    return ()=>clearInterval(carouselTimer)
  });

  return (
    <div className="lg:flex lg:flex-row flex flex-col items-center justify-center gap-16 lg:mx-0 mx-24">
      <img
        src={`/assets/clients/${carouselArrObj[activeIndex].imgSrc}.jpg`}
        alt="client"
        className="2xl:w-96 2xl:h-96 xl:w-80 xl:h-80  w-64 h-64 rounded-b-full rounded-l-full object-cover border-1 border-solid bg-gray-50 shadow-2xl"
      />
      <div className="flex flex-col lg:items-start items-center justify-center border-solid border-gray-200 border-t-2 py-5">
        <h1 className="text-3xl font-bold mb-4">
          {carouselArrObj[activeIndex].name}
        </h1>
        <p className="2xl:text-xl xl:text-lg opacity-75 tracking-wide mt-2 z-10 mb-10 text-justify h-20">
          {carouselArrObj[activeIndex].desc}
        </p>
        <div className="flex flex-row gap-6 md:mt-4 mt-16">
          <div
            onClick={() => setActiveIndex(0)}
            className={`w-4 h-4 rounded-full ${
              activeIndex !== 0 ? "bg-gray-300" : "bg-blue-500"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => setActiveIndex(1)}
            className={`w-4 h-4 rounded-full ${
              activeIndex !== 1 ? "bg-gray-300" : "bg-blue-500"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => setActiveIndex(2)}
            className={`w-4 h-4 rounded-full ${
              activeIndex !== 2 ? "bg-gray-300" : "bg-blue-500"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => setActiveIndex(3)}
            className={`w-4 h-4 rounded-full ${
              activeIndex !== 3 ? "bg-gray-300" : "bg-blue-500"
            } cursor-pointer`}
          ></div>
          <div
            onClick={() => setActiveIndex(4)}
            className={`w-4 h-4 rounded-full ${
              activeIndex !== 4 ? "bg-gray-300" : "bg-blue-500"
            } cursor-pointer`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
