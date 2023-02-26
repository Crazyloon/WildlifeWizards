import Link from "next/link";

type NavLinkFlyoutType = {
  url: string;
  text: string;
  active: boolean;
  className?: string;
};

const NavLinkFlyout = ({ url, text, active, className }: NavLinkFlyoutType) => {
  return (
    <li
      className={`flex list-none hover:bg-secondary/95 dark:hover:bg-white/20 ${
        active
          ? "active bg-secondary text-white no-underline dark:bg-white/10"
          : ""
      }`}
    >
      <Link
        href={url}
        className={`flex h-full w-full items-center justify-end capitalize ${
          active
            ? "text-white visited:text-white hover:text-white hover:visited:text-white focus:text-white hover:active:text-white dark:visited:text-white dark:hover:text-link-color-hover dark:hover:visited:text-white"
            : "dark:visited:text-link-color"
        } ${className ? className : ""}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLinkFlyout;
