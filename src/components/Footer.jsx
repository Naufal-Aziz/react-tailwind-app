import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <>
    <div className="bg-primary flex ss:flex-row flex-col justify-between font-poppins mt-8">
      <div className="ss:flex-row flex-col justify-center ss:mb-0 mb-4">
        <img src={logo} alt="" />
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {footerLinks.map((group, index) => (
        <div key={index} className="text-white mb-4">
          <h3 className="ss:mb-4 mb-2 text-[18px] font-medium">
            {group.title}
          </h3>
          <ul className="flex flex-col ss:gap-3 gap-0">
            {group.links.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-dimWhite hover:text-white ss:text-[16px] text-[12px]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>

    <div className="text-dimWhite flex justify-between py-10">
      <p>Copyright <span className="text-white">&copy;</span> 2022 Hoobank, All Rights Reserved</p>
      <ul className="flex gap-8">
        {socialMedia.map((item) => (
          <li key={item.id}>
          <a href={item.link}>
          <img src={item.icon} alt="" />
          </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Footer;
