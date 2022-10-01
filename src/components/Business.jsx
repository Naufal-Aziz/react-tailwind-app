import React from "react";
import { useState } from "react";
// import {Button} from './Button'
import { features } from "../constants";
import Button from "./Button";

const Business = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div id="features" className="text-white font-poppins flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-[32px] sm:text-[48px] font-bold">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="hidden sm:flex cursor-pointer">
        <Button text={"Get Started"}/>
        </div>
      </div>
      <div>
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === isActive ? "bg-black-gradient" : "bg-primary"
            } flex p-4 rounded-xl justify-between cursor-pointer`}
            onClick={() => setIsActive(index)}
          >
            <img src={item.icon} alt={`icon${index}`} />
            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-dimWhite text-[16px]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center sm:hidden">
        <Button text={"Get Started"}/>
        </div>
    </div>
  );
};

export default Business;
