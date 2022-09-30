import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <div className="text-white font-poppins flex ss:flex-row flex-col w-full justify-between">
    {stats.map((item, i) => (
      <div key={item.id} className="flex ss:flex-row flex-col items-center gap-4 p-4">
        <div className={`${i === 1? 'block' : 'hidden'} bg-white ss:w-[20px] w-[230px] h-[1px] ss:rotate-90`} />
        <h2 className="font-semibold text-[41px]">{item.value}</h2>
        <h3 className="font-normal uppercase text-gradient text-[20px]">
          {item.title}
        </h3>
        <div className={`${i ===  1? 'block' : 'hidden'} bg-white ss:w-[20px] w-[230px] h-[1px] ss:rotate-90`} />
      </div>
    ))}
  </div>
);

export default Stats;
