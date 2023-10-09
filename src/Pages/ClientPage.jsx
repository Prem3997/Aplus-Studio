import React from "react";
import Carousel from "../Components/Carousel";

const ClientPage = () => {
  const clientSayings = [
    {
      name: "Matthew Paul",
      desc: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
      imgSrc: "mathew",
    },
    {
      name: "Emily Johnson",
      desc: "Working with A+ Studio has been an absolute game-changer for our business. Their team's expertise in digital marketing and web development has transformed our online presence.",
      imgSrc: "emily",
    },
    {
      name: "Michael Rodriguez",
      desc: "I can't express how grateful we are for the exceptional work A+ Studio has done for us. Their innovative strategies and creative content have catapulted our brand to new heights.",
      imgSrc: "michael",
    },
    {
      name: "Sarah Patel",
      desc: "Choosing A+ Studio was the best decision we ever made. Their attention to detail, dedication to delivering results, have made our collaboration effortless.",
      imgSrc: "sarah",
    },
    {
      name: "James Williams",
      desc: "We can't thank A+ Studio enough for their outstanding work. They've not only met but exceeded our expectations in every project they've undertaken.",
      imgSrc: "james",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">What our happy client say</h1>
        <p className="2xl:text-xl xl:text-lg opacity-75 tracking-wide mt-2 text-left z-10 mb-10  md:mx-0 mx-10">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="xl:flex xl:flex-row flex flex-col items-center">
        <div className="xl:w-2/3 2xl:px-32 xl:px-10 lg:px-10">
          <Carousel carouselArrObj={clientSayings} />
        </div>
        <div className="xl:w-1/3 relative xl:flex xl:items-center xl:justify-center flex flex-row flex-wrap gap-10 justify-center mt-10">
          <img
            src="/assets/clients/circle.svg"
            className="rounded-full xl:block hidden"
            alt="circle"
          />
          <img
            src="/assets/clients/2.jpg"
            className="rounded-full xl:w-24 xl:h-24 object-cover xl:absolute relative 2xl:top-40 2xl:left-1/2 xl:-top-20 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/3.jpg"
            className="rounded-full xl:w-16 xl:h-16 object-cover xl:absolute relative 2xl:left-44 xl:left-20 xl:bottom-12 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/4.jpg"
            className="rounded-full xl:w-14 xl:h-14 object-cover xl:absolute relative 2xl:top-36 2xl:left-1/3 xl:top-32 xl:left-32 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/5.jpg"
            className="rounded-full xl:w-14 xl:h-14 object-cover xl:absolute relative 2xl:top-0 2xl:right-48  xl:top-32 xl:right-32 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/6.jpg"
            className="rounded-full xl:w-16 xl:h-16 object-cover xl:absolute relative 2xl:-top-2 2xl:left-52 xl:-bottom-10 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/7.jpg"
            className="rounded-full xl:w-24 xl:h-24 object-cover xl:absolute relative 2xl:top-1/3 2xl:right-40 xl:bottom-20 xl:right-16 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/8.jpg"
            className="rounded-full xl:w-16 xl:h-16 object-cover xl:absolute relative 2xl:-top-10 2xl:left-72 xl:bottom-32 xl:left-24 hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
          <img
            src="/assets/clients/9.jpg"
            className="rounded-full xl:w-32 xl:h-32 object-cover xl:absolute relative hover:scale-105 cursor-pointer w-32 h-32 shadow-2xl"
            alt="circle"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
