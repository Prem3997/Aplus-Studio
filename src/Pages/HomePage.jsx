import React from "react";
import ClientFooter from "../Components/ClientFooter";

const HomePage = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col-reverse mt-12 pt-10">
        <div className="xl:w-1/3 lg:w-1/2 lg:mt-32 mt-16 flex flex-col items-center relative">
          <h1 className="xl:text-4xl lg:text-4xl text-3xl font-bold">
            A Digital Product Agency
          </h1>
          <p className="xl:text-lg lg:text-base mx-10 mt-10 text-justify opacity-75">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className="mt-8 p-5 rounded-full w-52 text-white font-bold tracking-wide text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Contact Now
          </button>
          <img
            className="absolute -left-16 -z-10"
            src="assets/circle.svg"
            alt="circle"
          />
          <img
            className="absolute 2xl:top-56 2xl:left-1/2 xl:top-80 lg:top-52 lg:left-12 md:left-80 md:top-60  top-48 right-5 -z-10"
            src="assets/bubbles.svg"
            alt="bubbles"
          />
          <img
            className="absolute 2xl:top-56 2xl:left-28  xl:top-80 lg:top-52 lg:left-64 md:left-28 md:top-60 top-48 left-5 -z-10"
            src="assets/bubbles.svg"
            alt="bubbles"
          />
        </div>
        <div className="relative xl:w-2/3 lg:w-1/2">
          <img
            className="absolute -left-16 -z-10"
            src="assets/circle.svg"
            alt="circle"
          />
          <img
            className="md:rounded-bl-[200px]"
            src="assets/agency.png"
            alt="agency"
          />
          <div className="w-60 h-60 bg-amber-100 opacity-50 absolute -z-10 rounded-r-full -bottom-40 right-36 xl:-bottom-40 lg:right-18 lg:-bottom-10 xl:right-36 md:-bottom-0 md:right-5 mb-10"></div>
        </div>
      </div>
      <ClientFooter />
    </>
  );
};

export default HomePage;
