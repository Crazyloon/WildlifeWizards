import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const NavToggle = ({ isOpen, setMenuOpen, icon }) => {
  const ref = useRef(null); // reference to the nav-toggle

  useEffect(() => {
    function handleClick(event) {
      // make sure the event.target is not fired from the dropdown toggle
      // to avoid calling setMenuOpen twice
      if (isOpen && !ref.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    // listen to the mouseup event and unregister it when the useEffect is cleaned up
    document.addEventListener("mouseup", handleClick);
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [isOpen]);

  return (
    <li
      ref={ref}
      className={`align-center absolute top-0 right-0 float-right m-0 block cursor-pointer justify-center bg-navbar text-xl text-link-text transition-colors hover:bg-secondary-hover ${
        isOpen ? "float-none text-left" : "lg:hidden"
      }`}
      onClick={() => setMenuOpen(!isOpen)}
    >
      <div className="flex h-9 items-center px-3">
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
      </div>
    </li>
  );
};

export default NavToggle;
