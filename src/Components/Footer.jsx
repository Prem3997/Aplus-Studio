import React from "react";

const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-start flex flex-col items-start justify-center 2xl:mx-32 mx-14 mt-10 2xl:gap-48 gap-10 border-t-2 lg:border-gray-200 py-16 ">
        <div className="flex flex-col items-start text-justify lg:w-1/3">
          <h1 className="text-3xl font-bold">A+ Studio</h1>
          <p className="xl:text-lg opacity-75 tracking-wide mt-2 text-left mb-10">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="flex flex-row gap-4">
            <img
              src="assets/icons/fb.svg"
              className="w-9 h-9 cursor-pointer hover:scale-105"
            ></img>
            <img
              src="assets/icons/twitter.svg"
              className="w-9 h-9 cursor-pointer hover:scale-105"
            ></img>
            <img
              src="assets/icons/linkedin.svg"
              className="w-9 h-9 cursor-pointer hover:scale-105"
            ></img>
          </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col lg:w-2/3 2xl:gap-40 xl:gap-24 lg:gap-7 gap-14">
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold mb-6">What We Do</h1>
            <p className="text-lg cursor-pointer hover:scale-105">Web Design</p>
            <p className="text-lg cursor-pointer hover:scale-105">App Design</p>
            <p className="text-lg cursor-pointer hover:scale-105">
              Social Media Manager
            </p>
            <p className="text-lg cursor-pointer hover:scale-105">
              Market Analysis Project
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold mb-6">Company</h1>
            <p className="text-lg cursor-pointer hover:scale-105">About</p>
            <p className="text-lg cursor-pointer hover:scale-105">Careers</p>
            <p className="text-lg cursor-pointer hover:scale-105">
              Become Investor
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold mb-6">Support</h1>
            <p className="text-lg cursor-pointer hover:scale-105">FAQ</p>
            <p className="text-lg cursor-pointer hover:scale-105">Policy</p>
            <p className="text-lg cursor-pointer hover:scale-105">Business</p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-xl font-bold mb-6">Contact</h1>
            <p className="text-lg cursor-pointer hover:scale-105">Whatsapp</p>
            <p className="text-lg cursor-pointer hover:scale-105">Support 24</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 lg:border-gray-200  2xl:mx-32 mx-14">
        <p className="py-6 text-sm opacity-40">
          Copyright © {new Date().getFullYear()} A+ Studio | Developed By{" "}
          <a
            href="https://www.linkedin.com/in/prem-balaji-429583162/"
            target="_blank"
            className="hover:underline"
          >
            Prem Balaji{" "}
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
