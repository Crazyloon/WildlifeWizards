import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import TelephoneButton from "../components/button/TelephoneButton";
import OneByThree from "../components/structural/one-by-three";
import CallToAction from "../components/call-to-action/CallToAction";
import Hero from "../components/call-to-action/Hero";
import FrequentlyAsked from "../components/faq";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Animal Control - Wildlife Wizards</title>
        <meta
          name="description"
          content="Wildlife removal and exclusion services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className="text-gray-200">
        <CallToAction
          heading="Animal and Pest Control"
          slogan="Making pests disappear, like magic!"
        >
          <TelephoneButton />
          <h5 className="mt-4 text-zinc-300">
            Now serving the Greater Puget Sound area
          </h5>
        </CallToAction>
        <OneByThree />
        <FrequentlyAsked />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
