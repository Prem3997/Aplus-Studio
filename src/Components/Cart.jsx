import React from "react";

const Cart = ({ title, description, image, backgroundColor, styles }) => {
  return (
    <div
      className={`${styles} flex flex-col items-center justify-center w-80 h-96 rounded-[40px] border-2 border-solid bg-white border-[#F2F2F2] shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition ease-linear delay-100`}
    >
      <div
        className={`w-32 h-32 bg-[${backgroundColor}] flex items-center justify-center rounded-3xl`}
      >
        <img src={`assets/${image}.svg`} alt={`${image}`} />
      </div>
      <h1 className="mt-8 text-3xl font-bold">{title}</h1>
      <p className="2xl:text-xl xl:text-lg lg:text-base opacity-75 tracking-wide mt-4 mx-5">
        {description}
      </p>
    </div>
  );
};

export default Cart;
