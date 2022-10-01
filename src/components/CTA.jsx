import React from "react";
import Button from "./Button";

const CTA = () => (
  <div className="flex bg-black-gradient text-white font-poppins rounded-xl p-12">
    <div>
      <h1 className="font-semibold text-[48px]">Let's try our service now!</h1>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div>
      <Button text={"Get Started"} />
    </div>
  </div>
);

export default CTA;
