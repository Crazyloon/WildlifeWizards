import Head from "next/head";
import Section from "../components/structural/section";
import CritterCard from "../components/card/critter-card";

const Wildlife = () => {
  return (
    <>
      <Head>
        <title>Nuisance Wildlife - Animal Control</title>
      </Head>
      <Section className="flex flex-col bg-purple-800 p-4 text-center text-white">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
          Nusiance Wildlife
        </h1>
      </Section>
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="px-2 sm:px-4 md:mx-auto">
          <h2 className="mb-6 text-center text-2xl sm:text-3xl">
            The Usual Suspects
          </h2>
          <div className="m-auto grid max-w-4xl grid-cols-1 justify-center justify-items-center gap-4 xl:max-w-7xl xl:grid-cols-2">
            <CritterCard
              heading="Raccoons"
              imgSrc="/raccoon.jpg"
              imgAlt="picture of a raccoon climbing out of a hole in a hosue"
              summary="One of the most common home invaders, these guys get into both
                attics and crawlspaces. A mother raccoons ideal location to
                raise her kids is your home. They may act and seem cute and
                cuddly, but don't be fooled. Their teeth are sharp and
                their claws are fast, and these smart animals know where to
                strike!"
            />
            <CritterCard
              heading="Squirlles"
              imgSrc="/squirlle.jpg"
              imgAlt="picture of a squirlle in a house"
              summary="These guys tend to stay up in attics, and are particularly fond
              of chewing on wires. We mainly have three varieties around here,
              those being the native Douglas, the invasive Grays, and the less
              common Flying Squirrels. Might want to tell your neighbor to
              stop feeding them."
            />
            <CritterCard
              heading="Rats"
              imgSrc="/rat.png"
              imgAlt="picture of a rat chewing through a wall"
              summary="A homeowners worst nightmare come true. Rats get everywhere, are
              everywhere, and once they're in your home, they don't
              want to go anywhere else. Incredibly destructive if left
              unchecked, its best to deal with rat issues as quickly as
              possible."
            />
            <CritterCard
              heading="Birds"
              imgSrc="/ducks.jpg"
              imgAlt="picture of many ducks looking for food"
              summary="Well, ok, yeah, ducks aren't normally a problem, but
              woodpeckers, starlings, swallows, swifts. They find their way
              through the smallest corner gaps, and bring with them not just a
              their songs, but their kids, debris, and a slew of potential
              parasites and diseases."
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Wildlife;
