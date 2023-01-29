import Link from "next/link";
import Image from "next/image";

type NavBrandLinkType = {
  url: string;
};

const NavBrandLink = ({ url }: NavBrandLinkType) => {
  return (
    <Link href={url} className="flex items-center py-2">
      <Image
        className="h-10 w-10 lg:h-14 lg:w-14"
        src="/ww_wizard_hat.png"
        width={64}
        height={64}
        alt="Company Logo. A racoon in wizards robes"
      />
      <span className="mx-2">Wildlife Wizards</span>
    </Link>
  );
};

export default NavBrandLink;
