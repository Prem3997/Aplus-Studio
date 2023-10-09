import React from "react";
import Cart from "../Components/Cart";

const BusinessPage = () => {
  return (
    <div className="mt-16 xl:flex xl:flex-row flex flex-col justify-center items-center relative lg:border-solid lg:border-t-2 lg:border-gray-200">
      <div className="xl:w-1/3 flex flex-col gap-10 mx-20 2xl:mt-96 xl:mt-72 items-center">
        <h1 className="2xl:text-7xl xl:text-5xl font-bold z-10 text-3xl">
          How can we help your Business ?
        </h1>
        <p className="2xl:text-xl xl:text-lg opacity-75 tracking-wide mt-2 text-left z-10 mb-10">
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <div className="w-60 h-60 bg-amber-100 opacity-50 absolute -z-10 rounded-tl-full 2xl:top-64 2xl:left-10 xl:top-44 lg:hidden xl:block"></div>
      </div>
      <div className="xl:w-2/3 relative xl:mt-0 my-10">
        <div className="xl:flex xl:flex-row xl:flex-wrap 2xl:gap-32 xl:gap-24 xl:absolute z-10 flex flex-row flex-wrap justify-center py-5 gap-10 xl:border-b-2 xl:border-gray-200">
          <Cart
            styles="2xl:ml-32"
            title="Business Idea Planning"
            description="We present you a proposal and discuss niffty-gritty like"
            image="box_search"
            backgroundColor="#F1F7FF"
          />
          <Cart
            styles="2xl:-mt-44 xl:-mt-44"
            title="Financial Planning System"
            description="Protocols apart from aengage models, pricing billing"
            image="empty_wallet"
            backgroundColor="#FFF7E3"
          />
          <Cart
            styles="2xl:-mt-20 2xl:ml-56 xl:-mt-14"
            title="Development App"
            description="Communication protocols apart from engagement models"
            image="development"
            backgroundColor="#FFF2F8"
          />
          <Cart
            styles="2xl:-mt-64 xl:-mt-52"
            title="Market Analysis Project"
            description="Protocols apart from aengage models, pricing billing"
            image="market_analysis"
            backgroundColor="#DEFFEE"
          />
          <img
            className="absolute hidden xl:block left-1/2 top-3/4 -z-10"
            src="assets/ellipse.svg"
            alt="ellipse"
          />
        </div>
        <div className="w-[1040px] h-[618px] bg-[#F4F9FF] rounded-tl-full absolute right-0 xl:block hidden"></div>
      </div>
      <img
        className="absolute hidden xl:block left-60 top-96"
        src="assets/bubbles.svg"
        alt="bubbles"
      />
      <img
        className="absolute hidden xl:block left-0 top-96"
        src="assets/bubbles.svg"
        alt="bubbles"
      />
    </div>
  );
};

export default BusinessPage;
