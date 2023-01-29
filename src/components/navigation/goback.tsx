import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const GoBack = ({ className }: { className?: string }) => {
  return (
    <button
      className={`[&>svg]:hover:animate-bounceLeft ${
        className ? className : ""
      }`}
      onClick={() => Router.back()}
    >
      <FontAwesomeIcon className="mr-2" icon={faArrowLeftLong} />
      <span className="hover-animate-underline text-sm">Go Back</span>
    </button>
  );
};

export default GoBack;
