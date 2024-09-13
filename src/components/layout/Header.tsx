import { useState } from "react";
// Components
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";
import ThemeToggler from "../ui/ThemeToggler";
// Images
import CarSvg from "../../../public/car.svg"
// Icons
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="absolute top-0 flex w-full items-center justify-between bg-dark bg-opacity-20 px-4 py-2 text-light transition max-md:px-2 dark:bg-opacity-80">
      <div className="flex items-center gap-x-1 text-primary">
        <img src={CarSvg} />
        <span className="text-xl font-bold italic max-sm:text-base">
          AUTOCARE
        </span>
      </div>
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <div className="flex items-center gap-x-2">
        <ThemeToggler />
        <Button
          text="GET IN TOUCH"
          styles="rounded px-3 hidden max-md:px-2 sm:inline-block"
        />
        <button
          onClick={() => setNavIsOpen(true)}
          className="hidden max-sm:block"
        >
          <RiMenu3Fill className="size-7 text-light" />
        </button>
      </div>
    </header>
  );
};

export default Header;
