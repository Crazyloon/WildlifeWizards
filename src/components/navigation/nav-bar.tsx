import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ThemeSwitch from "./theme-switch";
import NavBrandLink from "./nav-brand-link";
import { useRouter } from "next/router";
import NavLink from "./nav-link";
import NavToggle from "./nav-toggle";
import NaveMenuSlideOut from "./nav-menu-slideout";

const navLinks = [
  {
    title: "services",
    url: "/services",
  },
  {
    title: "nuisance-wildlife",
    url: "/nuisance-wildlife",
  },
  {
    title: "estimates",
    url: "/estimates",
  },
  {
    title: "about",
    url: "/about",
  },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="z-50 m-auto grid h-full grid-cols-5 items-center justify-between">
        <div className="col-start-1 flex h-full w-full max-w-xs items-center justify-start pl-2">
          <NavBrandLink url="/" />
        </div>
        <ul
          className={`col-span-3 col-start-2 hidden h-full w-full justify-center px-2 md:flex ${
            menuOpen ? "flex overflow-visible" : ""
          }`}
        >
          {navLinks.map((page) => (
            <NavLink
              key={page.title}
              url={page.url}
              text={page.title}
              active={router.pathname === page.url}
            />
          ))}
        </ul>
        <div className="col-start-5 flex h-full w-full items-center justify-end gap-4 lg:pr-2">
          {/* <NavLink
            className="hidden lg:flex"
            url="/login"
            text="Login"
            active={router.pathname === "/login"}
          /> */}
          <ThemeSwitch display={menuOpen ? true : true} />
          <NavToggle
            isOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            icon={faBars}
          />
        </div>
      </nav>
      <NaveMenuSlideOut
        pages={navLinks}
        isOpen={menuOpen}
        currentRoute={router.pathname}
      />
    </>
  );
};

export default Navigation;
