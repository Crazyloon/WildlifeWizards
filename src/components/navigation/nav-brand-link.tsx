import Link from "next/link";
import Image from "next/image";

type NavBrandLinkType = {
  url: string;
};

const NavBrandLink = ({ url }: NavBrandLinkType) => {
  return (
    <Link
      href={url}
      className="flex items-center visited:text-link-color hover:text-link-color-hover hover:no-underline dark:visited:text-link-color hover:dark:no-underline"
    >
      <Image
        className="h-[28px] w-[30px] lg:h-[45px] lg:w-[48px]"
        src="/ww_wizard_hat.png"
        width={64}
        height={64}
        alt="Company Logo. A racoon in wizards robes"
      />
      <span className="ml-2 mt-1 whitespace-nowrap bg-gradient-to-br from-[#9d15d8] to-[#5f00a9] bg-clip-text font-brand text-sm text-transparent dark:from-[#e5a8ff] dark:to-[#b350ff] md:hidden lg:mt-[6px] lg:inline-block lg:font-bold">
        Wildlife Wizards
      </span>
    </Link>
  );
};

export default NavBrandLink;
