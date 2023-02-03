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
      <Hero />
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="flex flex-col items-center gap-2 py-12 dark:bg-slate-800">
          <CallToAction
            heading="Animal and Pest Control"
            slogan="Making pests disappear, like magic!"
          >
            <TelephoneButton phoneNumber="+12068569699" />
            <PhoneNumber phoneNumber="(206) 856-9699" />
            <h5 className="mt-4 text-zinc-700 dark:text-zinc-300">
              Now serving the Greater Puget Sound area.
            </h5>
          </CallToAction>
        </Section>
        <Section>
          <RequestServiceForm />
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
