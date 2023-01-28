import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ThemeSwitch from "./theme-switch";
import NavBrandLink from "./nav-brand-link";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-auto flex h-full max-w-[1800px] items-center justify-around lg:px-4">
      <div className="flex max-w-xs grow justify-start px-2 lg:px-0">
        <NavBrandLink url="/" />
      </div>
      <ul
        className={`flex max-w-2xl grow justify-between overflow-hidden ${
          menuOpen ? "overflow-visible" : ""
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Common Nuisance Wildlife</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Estimates</Link>
        </li>
      </ul>
      <div className="flex max-w-xs grow items-center justify-end gap-4 px-2 lg:px-0">
        <Link href="/">Login</Link>
        <i>
          <ThemeSwitch display={menuOpen ? true : true} />
        </i>
      </div>
    </nav>
  );
};

export default Navigation;
