import Link from "next/link";
import Image from "next/image";

type NavBrandLinkType = {
  url: string;
};

const NavBrandLink = ({ url }: NavBrandLinkType) => {
  return (
    <Link href={url}>
      <Image
        className="h-fit w-fit"
        src="/ww_company_name.png"
        width={128}
        height={64}
        alt="Company Logo. A racoon in wizards robes"
      />
    </Link>
  );
};

export default NavBrandLink;
