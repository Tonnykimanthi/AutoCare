import { useState } from "react";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";
// Icons
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="text-lightGray absolute top-0 flex w-full items-center justify-between bg-black bg-opacity-20 px-4 py-2">
      <div className="text-primary flex items-center gap-x-1">
        <img src="/public/car.svg" alt="Car" />
        <span className="text-xl font-bold italic max-sm:text-lg">
          AUTOCARE
        </span>
      </div>
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <div className="flex items-center gap-x-2">
        <Button text="GET IN TOUCH" styles="rounded" />
        <button
          onClick={() => setNavIsOpen(true)}
          className="hidden max-sm:block"
        >
          <RiMenu3Fill className="text-lightGray size-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
