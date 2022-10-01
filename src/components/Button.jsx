import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-blue-gradient text-[16px] rounded-lg px-[20px] py-[10px]">
      {text}
    </button>
  );
};

export default Button;
