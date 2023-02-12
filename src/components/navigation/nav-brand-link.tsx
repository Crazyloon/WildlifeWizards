import Link from "next/link";
import Image from "next/image";

type NavBrandLinkType = {
  url: string;
};

const NavBrandLink = ({ url }: NavBrandLinkType) => {
  return (
    <Link
      href={url}
      className="flex items-center visited:text-link-color hover:text-link-color-hover dark:visited:text-link-color"
    >
      <Image
        className="h-[28px] w-[30px] lg:h-[45px] lg:w-[48px]"
        src="/ww_wizard_hat.png"
        width={64}
        height={64}
        alt="Company Logo. A racoon in wizards robes"
      />
      <span className="ml-2 hidden whitespace-nowrap lg:inline-block">
        Wildlife Wizards
      </span>
    </Link>
  );
};

export default NavBrandLink;
