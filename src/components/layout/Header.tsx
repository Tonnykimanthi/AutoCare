import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="text-lightGray absolute top-0 flex w-full items-center justify-between bg-black bg-opacity-20 px-5 py-2">
      <div className="text-primary flex items-center gap-x-1">
        <img src="/public/car.svg" alt="" className="" />
        <span className="text-xl font-bold italic">AUTOCARE</span>
      </div>
      <nav>
        <ul className="flex gap-x-5 font-medium">
          <li className="after:bg-primary relative cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full">
            HOME
          </li>
          <li className="after:bg-primary relative cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full">
            ABOUT
          </li>
          <li className="after:bg-primary relative cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full">
            SERVICES
          </li>
          <li className="after:bg-primary relative cursor-pointer after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full">
            CONTACT
          </li>
        </ul>
      </nav>
      <Button text="GET IN TOUCH" styles="rounded" />
    </header>
  );
};

export default Header;
