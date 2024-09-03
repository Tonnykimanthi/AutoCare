import { useState } from "react";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";
// Icons
import { RiMenu3Fill } from "react-icons/ri";
import ThemeToggler from "../ui/ThemeToggler";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className="absolute top-0 flex w-full items-center justify-between bg-opacity-20 px-4 py-2 text-light transition max-sm:px-2 bg-dark dark:bg-opacity-80">
      <div className="flex items-center gap-x-1 text-primary">
        <img src="/public/car.svg" alt="Car" />
        <span className="text-xl font-bold italic max-sm:text-base">
          AUTOCARE
        </span>
      </div>
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <div className="flex items-center gap-x-2">
        <ThemeToggler />
        <Button
          text="GET IN TOUCH"
          styles="rounded px-3 hidden max-sm:px-3 sm:inline-block"
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
