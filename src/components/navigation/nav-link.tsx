import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type NavLinkType = {
  url: string;
  text: string;
  icon: IconProp;
  active: boolean;
  display: boolean;
};

const NavLink = ({ url, text, icon, display, active }: NavLinkType) => {
  return (
    <li
      className={`align-center hover:bg-secondary-hover float-left m-0 h-9 cursor-pointer justify-center text-xl transition-colors ${
        active ? "text-font-color bg-secondary" : ""
      } ${display ? "float-none block" : "hidden lg:block"}`}
    >
      <Link href={url} passHref>
        <a
          className={`flex ${
            display ? "px-3" : "px-5"
          } text-link-text visited:text-link-text hover:text-link-text  items-center py-1 hover:no-underline`}
        >
          <FontAwesomeIcon icon={icon} />
          <span className="ml-3" id="posts">
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
