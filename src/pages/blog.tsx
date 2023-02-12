import Head from "next/head";
import Section from "../components/structural/section";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Animal Control</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Blog</h1>
      </Section>
      <Section>
        <p className="text-center">Articles are on the way soon...</p>
      </Section>
    </>
  );
};

export default Blog;
