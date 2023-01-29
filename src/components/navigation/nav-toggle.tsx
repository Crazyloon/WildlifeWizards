import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

type NavToggleType = {
  isOpen: boolean;
  setMenuOpen: (isOpen: boolean | (() => boolean)) => void;
  icon: IconProp;
};

const NavToggle = ({ isOpen, setMenuOpen, icon }: NavToggleType) => {
  const ref = useRef<HTMLDivElement>(null); // reference to the nav-toggle

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // make sure the event.target is not fired from the dropdown toggle
      // to avoid calling setMenuOpen twice
      if (
        isOpen &&
        event.button !== 2 &&
        !ref.current?.contains(event.target as Node)
      ) {
        setMenuOpen(() => false);
      }
    }
    // listen to the mouseup event and unregister it when the useEffect is cleaned up
    document.addEventListener("mouseup", handleClick);
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [isOpen, setMenuOpen]);

  return (
    <div
      ref={ref}
      className={`align-center text-link-text cursor-pointer justify-center text-xl ${
        isOpen ? "float-none text-left" : "lg:hidden"
      }`}
      onClick={() => setMenuOpen(!isOpen)}
    >
      <div className="flex h-9 items-center px-3">
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
      </div>
    </div>
  );
};

export default NavToggle;
