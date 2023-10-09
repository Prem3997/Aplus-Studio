import React, { useRef } from "react";

const ContactPage = ({ ref }) => {
  return (
    <div className="my-10 border-t-2 lg:border-gray-200" ref={ref}>
      <div className="bg-[#F4F9FF] my-32 2xl:mx-32 xl:mx-16 lg:rounded-[75px] lg:flex lg:flex-row flex flex-col items-center justify-around">
        <div className="flex flex-col items-start lg:mt-0 mt-24 md:px-0 px-4">
          <h1 className="text-4xl font-bold">Subscribe Newsletter</h1>
          <p className="2xl:text-xl xl:text-lg opacity-50 tracking-wide mt-2 text-left">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className="md:w-[543px] md:h-[292px] w-[443px] h-[292px] bg-[#2639ED] lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-l-[400px] flex flex-row items-center justify-around lg:my-0 my-10 md:rounded-full">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="xl:w-[579px] md:w-[479px] w-[400px] md:px-16 px-4 py-8 rounded-full xl:-ml-48 lg:-ml-32 md:-ml-36 -ml-10 shadow-2xl border-solid border-2 border-gray-200 outline-none text-base"
          />
          <button className="md:-ml-96 -ml-72 bg-[#2639ED] text-white px-10 py-5 rounded-full ">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
