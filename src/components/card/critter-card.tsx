import Image from "next/image";

const CritterCard = ({
  heading,
  imgSrc,
  imgAlt,
  summary,
}: {
  heading: string;
  imgSrc: string;
  imgAlt: string;
  summary: string;
}) => {
  return (
    <div className="max-h- grid max-w-md grid-cols-1 items-center overflow-hidden rounded-lg shadow-lg md:max-w-2xl md:auto-rows-max md:grid-cols-2">
      <div className="relative flex aspect-square justify-center rounded-t-md md:row-start-1 md:rounded-bl-md">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={450}
          height={450}
          className="rounded-t-md md:rounded-bl-md md:rounded-tl-md md:rounded-tr-none"
        />
      </div>
      <div className="row-start-2 h-full overflow-hidden rounded-b-md bg-primary py-2 px-4 text-white md:col-start-2 md:row-start-1 md:max-h-[336px] md:rounded-bl-none md:rounded-tr-md md:px-2">
        <h3 className="text-white md:col-span-2 md:row-start-1">{heading}</h3>
        <p className="scroll-view max-h-[275px] overflow-auto rounded-b-md pt-2 md:rounded-bl-none xl:max-h-[250px]">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default CritterCard;
