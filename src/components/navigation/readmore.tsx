import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { type ReactNode } from "react";

type ReadMoreProps = {
  children: ReactNode;
  className?: string;
};

const ReadMore = ({ children, className }: ReadMoreProps) => {
  return (
    <span
      className={`flex items-center gap-2 [&>svg]:hover:animate-bounceRight ${
        className ? className : ""
      }`}
    >
      {children}
      <FontAwesomeIcon
        className="mr-2 h-5 w-5 text-inherit sm:h-5 sm:w-5"
        icon={faArrowRightLong}
      />
    </span>
  );
};

export default ReadMore;
