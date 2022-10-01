import React from "react";
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <div className="text-white font-poppins grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:items-center gap-4 mt-8">
      <div className="row-start-2 sm:row-start-1 sm:col-start-1 flex items-center justify-center">
        <img src={bill} alt="cards" />
      </div>

      <div className="row-start-1 sm:col-start-2">
        <div className="flex flex-col gap-8">
          <h1 className="text-[32px] sm:text-[48px] font-bold text-center">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-dimWhite text-center">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex justify-between sm:justify-start px-4 gap-4">
            <div className="flex items-center justify-center">
              <img src={apple} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
