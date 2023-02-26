import NavLinkFlyout from "./nav-link-slideout";

type NavData = {
  url: string;
  title: string;
};

type NaveMenuSlideOutType = {
  isOpen: boolean;
  currentRoute: string;
  pages: NavData[];
};

const NaveMenuSlideOut = ({
  isOpen,
  currentRoute,
  pages,
}: NaveMenuSlideOutType) => {
  return (
    <ul
      className={`fixed left-0 z-10 max-h-0 w-full justify-between
    overflow-hidden bg-background transition-all duration-300 md:hidden ${
      isOpen ? "h-fit max-h-64" : ""
    }`}
    >
      {pages.map((page) => (
        <NavLinkFlyout
          key={page.title}
          url={page.url}
          text={page.title}
          active={currentRoute === page.url}
          className="py-4 px-5"
        />
      ))}
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
