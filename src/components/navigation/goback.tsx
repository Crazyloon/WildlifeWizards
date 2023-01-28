import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const GoBack = (props) => {
  return (
    <div className="[&>svg]:hover:animate-bounceLeft">
      <FontAwesomeIcon className="mr-2" icon={faArrowLeftLong} />
      <button
        className="hover-animate-underline text-sm"
        onClick={() => Router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default GoBack;
