import React from "react";
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../../utils/motion";
// Constants
import navbarList from "../../constants/navbarList";
// Icons
import { MdOutlineClose } from "react-icons/md";

type NavbarProps = {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ navIsOpen, setNavIsOpen }: NavbarProps) => {
  return (
    <nav
      className={`bottom-0 left-0 right-0 top-0 origin-top-right items-center justify-center transition max-sm:fixed max-sm:flex max-sm:bg-dark ${navIsOpen ? "max-sm:scale-100 max-sm:opacity-100" : "max-sm:scale-0 max-sm:opacity-0"}`}
    >
      <button
        onClick={() => setNavIsOpen(false)}
        className="absolute right-4 top-4 hidden rounded-full border border-light p-1 transition hover:bg-white hover:text-dark max-sm:block"
      >
        <MdOutlineClose className="size-7" />
      </button>
      <ul className="flex gap-x-5 gap-y-10 font-medium max-sm:flex-col">
        {navbarList.map((item, index) => (
          <motion.li
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            key={index}
            className={`relative ${index === 0 ? "after:w-full" : ""} w-fit cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-full max-md:text-sm`}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
