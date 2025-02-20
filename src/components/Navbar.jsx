import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed 
      top-0 z-50 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh] transition-all`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[130px] sm:h-[80px] w-[130px] h-[80px] object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-10 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[18px] font-medium uppercase tracking-widest cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={toggle}
          className="sm:hidden flex justify-end items-center"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu icon"
            className="w-9 h-9 object-contain cursor-pointer transition-transform duration-300"
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-flashWhite opacity-[0.98] z-40 transition-transform duration-500 ${
            toggle ? "translate-x-0" : "translate-x-full"
          } sm:hidden flex flex-col items-center justify-center`}
        >
          <button
            aria-label="Close menu"
            className="absolute top-5 right-5"
            onClick={() => setToggle(false)}
          >
            <img
              src={close}
              alt="close"
              className="w-7 h-7 object-contain cursor-pointer"
            />
          </button>

          <ul className="flex flex-col items-center space-y-10 mt-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-french" : "text-eerieBlack"
                } text-[28px] font-bold uppercase tracking-widest cursor-pointer`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
