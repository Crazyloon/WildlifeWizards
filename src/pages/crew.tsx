import Head from "next/head";
import Section from "../components/structural/section";
import { type CrewData } from "../components/crew/crewbio";
import CrewBio from "../components/crew/crewbio";

const currentYear = new Date().getFullYear();

const crewMembers: CrewData[] = [
  {
    name: "Leif Pedersen",
    title: "Founder and CEO",
    experience: [
      `Fully certified and licensed Wildlife Control Operator`,
      `Licensed Pesticide Applicator`,
      `${
        currentYear - 2015
      } Years experience in rodent, insect, and wildlife removal`,
      `${currentYear - 2011} Years customer relations experience`,
      `${
        currentYear - 2016
      } Years experience conducting full-home pest inspections`,
    ],
    bio: `Leif is a handyman by trade and by hobby. When he's not in his garage tinkering on one project or another you'll either find him swimming in a nearby lake, or hanging out with his house-trained pig, Randy.`,
    imgSrc: "/crew_ceo.png",
    imgAlt: "Leif Pedersen - Founder & CEO",
  },
];

const Crew = () => {
  return (
    <>
      <Head>
        <title>Meet Our Crew - Animal Control</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Meet Our Crew</h1>
      </Section>
      <Section className="px-2">
        <div className="m-auto max-w-md md:max-w-4xl">
          {crewMembers.map((mbr) => (
            <CrewBio
              key={mbr.imgSrc}
              name={mbr.name}
              title={mbr.title}
              experience={mbr.experience}
              bio={mbr.bio}
              imgSrc={mbr.imgSrc}
              imgAlt={mbr.imgAlt}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Crew;
