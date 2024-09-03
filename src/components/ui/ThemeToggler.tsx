import { MdDarkMode } from "react-icons/md";
// Icons
import { useState } from "react";
import { CiLight } from "react-icons/ci";

const ThemeToggler = () => {
  const [dark, setDark] = useState(false);

  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div>
      <button
        className={`${dark ? "hidden" : ""}`}
        onClick={() => setDark(true)}
      >
        <MdDarkMode className="size-6" />
      </button>
      <button
        className={`${dark ? "" : "hidden"}`}
        onClick={() => setDark(false)}
      >
        <CiLight className="size-6" />
      </button>
    </div>
  );
};

export default ThemeToggler;
