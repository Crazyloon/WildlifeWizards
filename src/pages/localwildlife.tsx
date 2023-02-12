import Head from "next/head";
import Section from "../components/structural/section";

const LocalWildlife = () => {
  return (
    <>
      <Head>
        <title>Local Wildlife Information</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>LocalWildlife</h1>
      </Section>
      <Section>
        <p className="text-center">More information coming soon...</p>
      </Section>
    </>
  );
};

export default LocalWildlife;
