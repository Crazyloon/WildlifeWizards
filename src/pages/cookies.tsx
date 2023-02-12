import Head from "next/head";
import Section from "../components/structural/section";

const Cookies = () => {
  return (
    <>
      <Head>
        <title>Cookies & Privacy</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Cookies</h1>
      </Section>
      <Section>
        <p className="text-center">More information coming soon...</p>
      </Section>
    </>
  );
};

export default Cookies;
