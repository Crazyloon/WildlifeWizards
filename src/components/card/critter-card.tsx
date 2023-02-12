import Image from "next/image";
import ReadMore from "../navigation/readmore";
import Link from "next/link";

const CritterCard = ({
  heading,
  imgSrc,
  imgAlt,
  summary,
  href,
}: {
  heading: string;
  imgSrc: string;
  imgAlt: string;
  summary: string;
  href?: string;
}) => {
  return (
    <div className="grid max-w-md grid-cols-1 items-center overflow-hidden rounded-sm shadow-lg md:max-w-2xl md:auto-rows-max md:grid-cols-2">
      <div className="relative flex aspect-square justify-center rounded-t-sm md:row-start-1 md:rounded-bl-md">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={450}
          height={450}
          className="rounded-t-sm md:rounded-bl-sm md:rounded-tl-sm md:rounded-tr-none"
        />
      </div>
      <div
        className={`row-start-2 flex h-full flex-col overflow-hidden rounded-b-sm bg-purple-800 py-2 px-4 text-white md:col-start-2 md:row-start-1 md:max-h-[336px] md:rounded-bl-none md:rounded-tr-sm md:px-2 ${
          href ? "justify-between" : ""
        }`}
      >
        <h3 className="text-white md:col-span-2 md:row-start-1">{heading}</h3>
        <p className="scroll-view max-h-[275px] overflow-auto rounded-b-sm pt-2 md:rounded-bl-none xl:max-h-[250px]">
          {summary}
        </p>
        {href ? (
          <ReadMore className="self-end text-sm font-bold">
            <Link href={href}>Read More</Link>
          </ReadMore>
        ) : null}
      </div>
    </div>
  );
};

export default CritterCard;
