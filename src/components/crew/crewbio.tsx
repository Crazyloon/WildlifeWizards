import Image from "next/image";

const CrewBio = ({
  name,
  title,
  experience,
  bio,
  imgSrc,
  imgAlt,
}: CrewData) => {
  return (
    <div className="col-auto row-auto m-auto grid auto-rows-auto grid-cols-2 justify-between gap-4 md:grid-cols-[1fr_max(400px)]">
      <div className="col-span-2 md:col-span-1">
        <h2>{name}</h2>
        <span className="block text-sm text-slate-600 dark:text-slate-400">
          {title}
        </span>
      </div>

      <div className="col-span-2 row-start-3 max-w-lg md:col-span-1 md:row-start-2">
        <h3 className="mb-1">Experience</h3>
        <ul className="ml-5 mb-2 list-disc">
          {experience.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
        <h3>Bio</h3>
        <p>
          Leif is a handyman by trade and by hobby. When he&apos;s not in his
          garage tinkering on one project or another you&apos;ll either find him
          swimming in a nearby lake, or hanging out with his house-trained pig,
          Randy.
        </p>
      </div>

      <div className="col-span-2 row-start-2 place-self-center md:col-span-1 md:row-span-2 md:row-start-1 md:max-w-sm">
        <Image
          src="/crew_ceo.png"
          width={400}
          height={600}
          alt="Leif Pedersen - Founder & CEO"
          className="rounded-sm border-2 border-purple-800"
        />
      </div>
    </div>
  );
};

export default CrewBio;

export interface CrewData {
  name: string;
  title: string;
  experience: string[];
  bio: string;
  imgSrc: string;
  imgAlt: string;
}
