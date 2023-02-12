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
    <div className="grid max-w-md grid-cols-1 items-center overflow-hidden rounded-sm bg-purple-800 shadow-lg md:max-w-2xl md:auto-rows-max md:grid-cols-2 xl:flex xl:grid-cols-1 xl:flex-col">
      <div className="relative flex aspect-square justify-center rounded-t-sm md:row-start-1 md:rounded-bl-md">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={800}
          height={800}
          className="rounded-t-sm md:rounded-bl-sm md:rounded-tl-sm md:rounded-tr-none xl:rounded-bl-none"
        />
      </div>
      <div
        className={`row-start-2 flex h-full flex-col overflow-hidden rounded-b-sm py-2 px-4 text-white md:col-start-2 md:row-start-1 md:rounded-bl-none md:rounded-tr-sm md:px-2`}
      >
        <h3 className="text-white md:col-span-2 md:row-start-1">{heading}</h3>
        <p className="scroll-view overflow-auto rounded-b-sm pt-2 md:rounded-bl-none">
          {summary}
        </p>
        {href ? (
          <ReadMore className="mt-auto self-end text-sm font-bold">
            <Link href={href}>Read More</Link>
          </ReadMore>
        ) : null}
      </div>
    </div>
  );
};

export default CritterCard;
