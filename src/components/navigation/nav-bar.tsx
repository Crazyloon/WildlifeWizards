import Link from "next/link";
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
      <nav className="m-auto flex h-full max-w-[1800px] items-center justify-between lg:px-4">
        <div className="flex h-full w-0 max-w-xs grow items-center justify-start px-2 lg:px-0">
          <NavBrandLink url="/" />
        </div>
        <ul
          className={`hidden h-full max-w-3xl grow justify-between px-8 lg:flex xl:px-4 ${
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
            url="/common-nuisance-wildlife"
            text="common nuisance wildlife"
            active={router.pathname === "/common-nuisance-wildlife"}
          />
          <NavLink
            url="/contact"
            text="contact"
            active={router.pathname === "/contact"}
          />
          <NavLink
            url="/estimates"
            text="estimates"
            active={router.pathname === "/estimates"}
          />
        </ul>
        <div className="flex h-full w-0 max-w-xs shrink grow basis-0 items-center justify-end gap-4 px-2 lg:px-0">
          <Link className="hidden lg:block" href="/login">
            Login
          </Link>
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
