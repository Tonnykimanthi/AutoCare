import React from "react";
// Icons
import { MdOutlineClose } from "react-icons/md";

type NavbarProps = {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ navIsOpen, setNavIsOpen }: NavbarProps) => {
  return (
    <nav
      className={`max-sm:bg-dark bottom-0 left-0 right-0 top-0 origin-top-right items-center justify-center transition max-sm:fixed max-sm:flex ${navIsOpen ? "max-sm:scale-100 max-sm:opacity-100" : "max-sm:scale-0 max-sm:opacity-0"}`}
    >
      <button
        onClick={() => setNavIsOpen(false)}
        className="hover:text-dark border-light absolute right-4 top-4 hidden rounded-full border p-1 transition hover:bg-white max-sm:block"
      >
        <MdOutlineClose className="size-7" />
      </button>
      <ul className="p flex gap-x-5 gap-y-10 font-medium max-sm:flex-col">
        <li className="relative w-fit cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-full">
          HOME
        </li>
        <li className="relative w-fit cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-full">
          SERVICES
        </li>
        <li className="relative w-fit cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-full">
          ABOUT
        </li>
        <li className="relative w-fit cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:after:w-full">
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
