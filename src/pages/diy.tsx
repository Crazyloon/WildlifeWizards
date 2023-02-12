import Head from "next/head";
import Section from "../components/structural/section";

const Diy = () => {
  return (
    <>
      <Head>
        <title>DIY - Animal Control</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>DIY Advice</h1>
      </Section>
      <Section>
        <p className="text-center">More tips and tricks coming soon...</p>
      </Section>
    </>
  );
};

export default Diy;
