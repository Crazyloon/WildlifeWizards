import Head from "next/head";
import Section from "../components/structural/section";

const Insurance = () => {
  return (
    <>
      <Head>
        <title>Insurance Policy</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Insurance</h1>
      </Section>
      <Section>
        <p className="text-center">More information coming soon...</p>
      </Section>
    </>
  );
};

export default Insurance;
