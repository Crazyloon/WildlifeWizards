import NavLinkFlyout from "./nav-link-flyout";

type NaveMenuSlideOutType = {
  isOpen: boolean;
  currentRoute: string;
};

const NaveMenuSlideOut = ({ isOpen, currentRoute }: NaveMenuSlideOutType) => {
  return (
    <ul
      className={`fixed left-0 z-10 max-h-0 w-full
    justify-between overflow-hidden bg-background text-slate-900 transition-all duration-300 dark:text-white ${
      isOpen ? "h-fit max-h-64" : ""
    }`}
    >
      <NavLinkFlyout
        url="/"
        text="home"
        active={currentRoute === "/"}
        className="py-4 px-5"
      />
      <NavLinkFlyout
        url="/services"
        text="services"
        active={currentRoute === "/services"}
        className="py-4 px-5"
      />
      <NavLinkFlyout
        url="/nuisance-wildlife"
        text="nuisance wildlife"
        active={currentRoute === "/nuisance-wildlife"}
        className="py-4 px-5"
      />
      <NavLinkFlyout
        url="/estimates"
        text="estimates"
        active={currentRoute === "/estimates"}
        className="py-4 px-5"
      />
      {/* <NavLinkFlyout
          url="/login"
          text="login"
          active={currentRoute === "/login"}
          className="py-4 px-5"
        /> */}
    </ul>
  );
};

export default NaveMenuSlideOut;
