import { MdDarkMode } from "react-icons/md";
// Icons
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";

const ThemeToggler = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const switchDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    setDark(true);
  };
  const switchLightMode = () => {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
    setDark(false);
  };
  return (
    <div className="grid place-items-center">
      <button className={`${dark ? "hidden" : ""}`} onClick={switchDarkMode}>
        <MdDarkMode className="size-6" />
      </button>
      <button className={`${dark ? "" : "hidden"}`} onClick={switchLightMode}>
        <CiLight className="size-6" />
      </button>
    </div>
  );
};

export default ThemeToggler;
