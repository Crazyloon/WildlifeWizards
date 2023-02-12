import Head from "next/head";
import Section from "../components/structural/section";

const Crew = () => {
  return (
    <>
      <Head>
        <title>Meet Our Crew - Animal Control</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Crew</h1>
      </Section>
      <Section>
        <p className="text-center">More information coming soon...</p>
      </Section>
    </>
  );
};

export default Crew;
