import Link from "next/link";

type NavLinkType = {
  url: string;
  text: string;
  active: boolean;
  className?: string;
};

const NavLink = ({ url, text, active, className }: NavLinkType) => {
  return (
    <li
      className={`flex h-full list-none ${
        active
          ? "active bg-secondary text-white dark:bg-white/10"
          : "hover:bg-secondary/95 hover:dark:bg-white/20"
      }`}
    >
      <Link
        href={url}
        className={`flex h-full w-full items-center whitespace-nowrap px-4 capitalize hover:no-underline hover:dark:no-underline ${
          active
            ? "text-white visited:text-white hover:text-white hover:visited:text-white focus:text-white hover:active:text-white dark:visited:text-white dark:hover:text-link-color-hover dark:hover:visited:text-white"
            : "dark:visited:text-link-color"
        } ${className ? className : ""}`}
      >
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
