import Link from "next/link";

type NavLinkType = {
  url: string;
  text: string;
  active: boolean;
  className?: string;
};

const NavLink = ({ url, text, active, className }: NavLinkType) => {
  return (
    <li className={`h-full ${active ? "bg-white/10" : ""}`}>
      <Link
        href={url}
        className={`flex h-full w-full items-center px-4 capitalize ${
          className ? className : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
