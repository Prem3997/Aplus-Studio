import React from "react";

const ClientFooter = () => {
  return (
    <div className="xl:flex xl:flex-row 2xl:gap-20 xl:gap-4 xl:mx-14 flex flex-col gap-10 mt-36 items-center justify-center">
      <div className="xl:flex xl:flex-col xl:text-justify">
        <h1 className="text-3xl 2xl:text-3xl font-bold">Our Clients</h1>
        <p className="2xl:text-xl xl:text-lg lg:text-base opacity-75 tracking-wide mt-2">Several selected clients, who already believe in our service.</p>
      </div>
      <div className="md:flex md:flex-row md:gap-14 lg:gap-8 xl:gap-x-36 2xl:gap-x-20 xl:flex-wrap md:items-center md:flex-wrap flex flex-col md:justify-center gap-10">
        <img src="assets/google.svg" alt="google" />
        <img src="assets/airbnb.svg" alt="airbnb" />
        <img src="assets/ubereats.svg" alt="ubereats" />
        <img src="assets/amazon.svg" alt="amazon" />
        <img src="assets/swiggy.svg" alt="swiggy" />
      </div>
    </div>
  );
};

export default ClientFooter;
