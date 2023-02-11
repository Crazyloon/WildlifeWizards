import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";
import TelephoneButton from "../components/button/telephone-button";
import OneByThree from "../components/structural/one-by-three";
import CallToAction from "../components/call-to-action/call-to-action";
import Hero from "../components/call-to-action/hero";
import FrequentlyAsked from "../components/faq/faq";
import Section from "../components/structural/section";
import PhoneNumber from "../components/call-to-action/phone-number";
import BusinessHours from "../components/structural/business-hours";
import RequestServiceForm from "../components/form/request-service";

const Estimates: NextPage = () => {
  return (
    <>
      <Head>
        <title>Estimates - Animal Control</title>
      </Head>
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="flex flex-col bg-purple-800 p-4 text-center text-white">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Schedule an Estimate
          </h1>
          <p>
            Fill out the form below, and we&apos;ll call you to schedule an
            inspection.
          </p>
          <p className="m-auto mt-4 w-10/12 border-t border-t-purple-400 pt-4 text-white/90 sm:w-2/3 md:text-sm lg:w-1/3">
            Or skip the wait and call us today.
          </p>
          <PhoneNumber
            phoneNumber="(206) 856-9699"
            className="text-white/90 md:text-sm"
          />
        </Section>
        <Section className="xl:m-auto xl:grid xl:max-w-5xl xl:grid-cols-[3fr_2fr]">
          <div className="w-full">
            <RequestServiceForm />
          </div>
          <aside className="mt-6 hidden xl:block">
            <BusinessHours lightBackground={true} includeSubHeading={false} />
          </aside>
        </Section>
      </main>
    </>
  );
};

export default Estimates;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
