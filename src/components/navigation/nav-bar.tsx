import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ThemeSwitch from "./theme-switch";
import NavBrandLink from "./nav-brand-link";
import { useRouter } from "next/router";
import NavLink from "./nav-link";
import NavToggle from "./nav-toggle";
import NavMenuFlyout from "./nav-menu-flyout";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="z-50 m-auto grid h-full grid-cols-5 items-center justify-between">
        <div className="col-start-1 flex h-full w-full max-w-xs items-center justify-start px-2 lg:px-0">
          <NavBrandLink url="/" />
        </div>
        <ul
          className={`col-span-3 col-start-2 hidden h-full w-full justify-center px-2 lg:flex ${
            menuOpen ? "flex overflow-visible" : ""
          }`}
        >
          <NavLink url="/" text="home" active={router.pathname === "/"} />
          <NavLink
            url="/services"
            text="services"
            active={router.pathname === "/services"}
          />
          <NavLink
            url="/nuisance-wildlife"
            text="nuisance wildlife"
            active={router.pathname === "/nuisance-wildlife"}
          />
          <NavLink
            url="/estimates"
            text="estimates"
            active={router.pathname === "/estimates"}
          />
        </ul>
        <div className="col-start-5 flex h-full w-full items-center justify-end gap-4 px-2 lg:px-0">
          <NavLink
            className="hidden lg:flex"
            url="/login"
            text="Login"
            active={router.pathname === "/login"}
          />
          <ThemeSwitch display={menuOpen ? true : true} />
          <NavToggle
            isOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            icon={faBars}
          />
        </div>
      </nav>
      <NavMenuFlyout isOpen={menuOpen} currentRoute={router.pathname} />
    </>
  );
};

export default Navigation;
