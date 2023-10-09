import React from "react";
import VideoCard from "../Components/VideoCard";

const ProductAgency = () => {
  return (
    <div className="xl:flex xl:flex-row xl:mt-96 mt-24 lg:border-t-2 lg:border-gray-200 flex flex-col-reverse items-center gap-10 border-none">
      <div className="w-1/2 relative 2xl:mt-44 xl:mt-56">
        <VideoCard />
        <img
          src="/assets/circle_agency.svg"
          className="absolute -bottom-14 right-40 -z-10"
        />
      </div>
      <div className="w-1/2 text-left relative 2xl:mt-44 xl:mt-56">
        <div className="w-44 h-44 bg-[#EFF1FF] rounded-br-full absolute -z-10 -top-6 -left-10"></div>
        <h1 className="text-5xl font-bold 2xl:w-2/3 tracking-wide">
          Great Digital Product Agency since 2016
        </h1>
        <p className="mt-10 2xl:w-2/3  md:text-lg  md:text-justify text-base tracking-wide leading-6 opacity-75 mr-10">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir requirements.
        </p>
      </div>
    </div>
  );
};

export default ProductAgency;
