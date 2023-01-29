import NavLink from "./nav-link";

type NavMenuFlyoutType = {
  isOpen: boolean;
  currentRoute: string;
};

const NavMenuFlyout = ({ isOpen, currentRoute }: NavMenuFlyoutType) => {
  return (
    <ul
      className={`absolute right-0 flex-col justify-between bg-white/90 text-slate-900 dark:bg-neutral-800/90 dark:text-white ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <NavLink
        url="/"
        text="home"
        active={currentRoute === "/"}
        className="py-4 pr-8"
      />
      <NavLink
        url="/services"
        text="services"
        active={currentRoute === "/services"}
        className="py-4 pr-8"
      />
      <NavLink
        url="/common-nuisance-wildlife"
        text="common nuisance wildlife"
        active={currentRoute === "/common-nuisance-wildlife"}
        className="py-4 pr-8"
      />
      <NavLink
        url="/contact"
        text="contact"
        active={currentRoute === "/contact"}
        className="py-4 pr-8"
      />
      <NavLink
        url="/estimates"
        text="estimates"
        active={currentRoute === "/estimates"}
        className="py-4 pr-8"
      />
      <NavLink
        url="/login"
        text="login"
        active={currentRoute === "/login"}
        className="py-4 pr-8"
      />
    </ul>
  );
};

export default NavMenuFlyout;
