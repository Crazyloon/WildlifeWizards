import { type NextPage } from "next";
import Head from "next/head";
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
        <Section className="flex flex-col bg-purple-800 p-4 py-6 text-center text-white">
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
        <Section className="gap-2 xl:m-auto xl:grid xl:max-w-6xl xl:grid-cols-[3fr_2fr]">
          <div className="w-full">
            <RequestServiceForm />
          </div>
          <div className="mt-6 hidden flex-col xl:flex">
            <aside className="">
              <BusinessHours lightBackground={true} includeSubHeading={false} />
            </aside>
            <aside className="my-auto px-4">
              Because every job has unique requirements, we can&apos;t offer
              flat rates. Some situations can be quoted over the phone, but in
              most cases, one of our professionals will travel to your location
              to provide a through inspection and quote you for recommended
              services.
            </aside>
          </div>
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
