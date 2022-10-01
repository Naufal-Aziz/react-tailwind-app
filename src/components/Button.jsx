import React from "react";

const Button = ({ text }) => {
  return (
    <div className="bg-blue-gradient rounded-lg flex items-center justify-center h-[48px] w-[140px] cursor-pointer">
      <p className="text-primary">{text}</p>
    </div>
  );
};

export default Button;
