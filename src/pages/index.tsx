import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import TelephoneButton from "../components/button/TelephoneButton";
import OneByThree from "../components/structural/one-by-three";
import CallToAction from "../components/call-to-action/CallToAction";
import Hero from "../components/call-to-action/Hero";
import FrequentlyAsked from "../components/faq/faq";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wildlife Wizards - Animal Control</title>
        <meta
          name="description"
          content="Licensed and Experienced Nuisance Wildlife Control Operator. We offer nuisance animal control, home inspections and exclusion, animal trapping and removal, and pesticide applications"
        />
        <meta name="author" content="Wildlife Wizards" />
        <meta property="og:url" content="https://wildlifewizards.com/" />
        <meta property="og:site_name" content="Wildlife Wizards" />
        <meta property="og:title" content="Wildlife Wizards" />
        <meta
          property="og:description"
          content="Making Pests Disappear, Like Magic!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ww_raccoon_wizard_home.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Wildlife Wizards" />
        <meta name="twitter:description" content="Animal and Pest Control " />
        <meta name="twitter:image" content="/ww_raccoon_wizard_home.png" />
        <meta name="twitter:image:alt" content="Wildlife Wizards" />
        <meta name="theme-color" content="#212730" />
        <meta
          name="google-site-verification"
          content="f9bbrNtkypRloh30QrxdFKbY4eHtYs3Q3Pti5HwLkEw"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className="text-slate-800 dark:text-gray-200">
        <CallToAction
          heading="Animal and Pest Control"
          slogan="Making pests disappear, like magic!"
        >
          <TelephoneButton />
          <h5 className="mt-4 text-zinc-700 dark:text-zinc-300">
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
