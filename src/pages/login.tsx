import Head from "next/head";
import Section from "../components/structural/section";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login - Wildlife Wizards</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>Login</h1>
      </Section>
      <Section>
        <p className="text-center">More information coming soon...</p>
      </Section>
    </>
  );
};

export default Login;
