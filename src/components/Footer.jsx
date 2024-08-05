import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 bottom-0 z-20 
      ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-5xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start'>
          <ul className='list-none sm:flex flex-col sm:flex-row gap-4 sm:ml-10 mt-4 sm:mt-0'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-[#915EFF]" : "text-secondary"
                } hover:text-white text-[10px] font-small cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
         
        </div>
        </div>
        <p className="font-small text-[10px] ">Copyright © 2024 Languitude Academy - Powered by angle90</p>
        <a href="#top" className="text-white text-[10px] font-medium ml-4 p-2 rounded-full bg-violet-500 hover:bg-white-500 transition flex items-center justify-center">
            ^
        </a>
    </footer>
  );
};

export default Footer;
