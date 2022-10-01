import React from "react";
import { feedback } from "../constants";
import { quotes } from "../assets";
import { useState } from "react";

const Testimonials = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="mt-8">
      <div className="flex flex-col text-start sm:flex-row items-center mb-4">
        <h1 className="text-[32px] sm:text-[48px] font-bold font-poppins text-white">
          What people are saying about us
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4">
        {feedback.map((item, index) => (
          <div
            onClick={() => setIsActive(index)}
            key={item.id}
            className={`${
              index == isActive ? "bg-black-gradient" : "bg-primary"
            } grid grid-rows-2 text-white font-poppins px-4 py-4 sm:px-8 sm:py-8 rounded-xl hover:cursor-pointer`}
          >
            <div className="flex flex-row sm:flex-col gap-4 sm:gap-4 items-start">
              <img src={quotes} alt="quotes" className="w-[24px] sm:w-[48px] sm:mb-8" />
              <p className="">{item.content}</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={item.img} alt="avatar" className="w-[48px] h-[48px]" />
              <div className="flex flex-col">
                <h3>{item.name}</h3>
                <h4 className="text-dimWhite">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
