import Head from "next/head";
import Section from "../components/structural/section";
import Image from "next/image";

const Wildlife = () => {
  return (
    <>
      <Head>
        <title>Nuisance Wildlife - Animal Control</title>
      </Head>
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="flex flex-col bg-purple-800 p-4 text-center text-white">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Nusiance Wildlife
          </h1>
          <span className="text-center text-2xl sm:text-3xl">
            The Usual Suspects
          </span>
        </Section>
        <Section className="px-4 sm:px-8">
          <div className="m-auto grid max-w-4xl grid-cols-1 justify-center justify-items-center gap-x-4 gap-y-4 lg:grid-cols-2">
            <div className="flex max-w-md flex-col items-center rounded-lg border border-primary-dark dark:border-secondary">
              <h3 className="mb-2">Raccoons</h3>
              <div className="relative aspect-square h-96">
                <Image
                  src={"/raccoon.jpg"}
                  fill
                  alt="picture of a raccoon climbing out of a hole in a house"
                  className="rounded-md"
                />
              </div>
              <p className="px-4 py-2">
                One of the most common home invaders, these guys get into both
                attics and crawlspaces. A mother raccoons ideal location to
                raise her kids is your home. They may act and seem cute and
                cuddly, but don&apos;t be fooled. Their teeth are sharp and
                their claws are fast, and these smart animals know where to
                strike!
              </p>
            </div>
            <div className="flex max-w-md flex-col items-center rounded-lg border border-primary-dark dark:border-secondary">
              <h3 className="mb-2">Squirlles</h3>
              <div className="relative aspect-square h-96">
                <Image
                  src={"/squirlle.jpg"}
                  fill
                  alt="picture of a squirlle in a house"
                  className="rounded-md"
                />
              </div>
              <p className="px-4 py-2">
                These guys tend to stay up in attics, and are particularly fond
                of chewing on wires. We mainly have three varieties around here,
                those being the native Douglas, the invasive Grays, and the less
                common Flying Squirrels. Might want to tell your neighbor to
                stop feeding them.
              </p>
            </div>

            <div className="flex max-w-md flex-col items-center rounded-lg border border-primary-dark dark:border-secondary">
              <h3 className="mb-2">Rats</h3>
              <div className="relative aspect-square h-96">
                <Image
                  src={"/rat.png"}
                  fill
                  alt="picture of a rat chewing through a wall"
                  className="rounded-md"
                />
              </div>
              <p className="px-4 py-2">
                A homeowners worst nightmare come true. Rats get everywhere, are
                everywhere, and once they&apos;re in your home, they don&apos;t
                want to go anywhere else. Incredibly destructive if left
                unchecked, its best to deal with rat issues as quickly as
                possible
              </p>
            </div>
            <div className="flex max-w-md flex-col items-center rounded-lg border border-primary-dark dark:border-secondary">
              <h3 className="mb-2">Birds</h3>
              <div className="relative aspect-square h-96">
                <Image
                  src={"/ducks.jpg"}
                  fill
                  alt="picture of many ducks looking for food"
                  className="rounded-md"
                />
              </div>
              <p className="px-4 py-2">
                Well, ok, yeah, ducks aren&apos;t normally a problem, but
                woodpeckers, starlings, swallows, swifts. They find their way
                through the smallest corner gaps, and bring with them not just a
                their songs, but their kids, debris, and a slew of potential
                parasites and diseases.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Wildlife;
