import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { api } from "../utils/api";
import Navigation from "../components/navigation/navigation";
import { useState } from "react";

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
      <header className="fixed top-0 z-50 h-[70px] w-full bg-neutral-800 text-white">
        <Navigation />
      </header>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#9d15d8] to-[#5f00a9]">
        <Image
          src="/ww_hero.png"
          alt="Hero banner showing Wildlife Wizards logo"
          width={960}
          height={540}
        />
      </div>
      <main className="bg-slate-800 text-gray-200">
        <section className="flex flex-col items-center gap-2 py-12">
          <h1>Animal and Pest Control</h1>
          <i className="text-lg text-zinc-400">
            Making pests disappear, like magic!
          </i>
          <a
            href="tel:+12533139926"
            className="mt-4 block w-fit rounded-sm border border-purple-700 bg-purple-700 px-8 py-4 font-bold capitalize text-white"
          >
            Call or text today
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
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
