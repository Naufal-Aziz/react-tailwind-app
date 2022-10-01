import React from "react";
import Button from "./Button";
import {card} from "../assets"

const CardDeal = () => {
  return (
    <div
      id="product"
      className="text-white font-poppins flex flex-col sm:flex-row sm:items-center gap-4 mt-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[32px] sm:text-[48px] font-bold">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-dimWhite">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="hidden sm:flex cursor-pointer">
          <Button text={"Get Started"} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <img src={card} alt="cards" />
        <div className="flex sm:hidden cursor-pointer">
          <Button text={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default CardDeal;
