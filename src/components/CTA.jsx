import React from "react";
import Button from "./Button";

const CTA = () => (
  <div className="flex flex-col sm:flex-row bg-black-gradient text-white font-poppins rounded-xl p-6 sm:p-12 sm:justify-between">
    <div className="mb-8 sm:mb-0">
      <h1 className="font-semibold text-[24px] sm:text-[48px]">Let's try our service now!</h1>
      <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px]">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="flex items-center">
      <Button text={"Get Started"} />
    </div>
  </div>
);

export default CTA;
