import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = ({ display }: { display: boolean }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme !== undefined && darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <button
      aria-roledescription="color theme toggle"
      onClick={() => {
        handleThemeToggle();
      }}
      className={`m-0 cursor-pointer text-center transition-colors ${
        display ? "flex" : "hidden lg:block "
      }`}
    >
      <div className="flex h-9 items-center px-3">
        {darkTheme ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="w-5 text-yellow-600 hover:animate-wiggle"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="w-5 text-amber-400 duration-1000 hover:animate-spin-slow"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
