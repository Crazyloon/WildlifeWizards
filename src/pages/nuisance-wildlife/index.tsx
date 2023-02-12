import Head from "next/head";
import Section from "../../components/structural/section";
import CritterCard from "../../components/card/critter-card";

const Wildlife = () => {
  return (
    <>
      <Head>
        <title>Nuisance Wildlife - Animal Control</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
          Nuisance Wildlife
        </h1>
      </Section>
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="px-2 sm:px-4 md:mx-auto">
          <div className="m-auto grid max-w-4xl grid-cols-1 justify-center justify-items-center gap-4 lg:max-w-5xl xl:grid-cols-3 2k:max-w-7xl 4k:max-w-12xl 4k:grid-cols-5  uw:max-w-uw uw:grid-cols-8">
            <CritterCard
              heading="Raccoons"
              imgSrc="/raccoon.jpg"
              imgAlt="picture of a raccoon climbing out of a hole in a house"
              summary="One of the most common home invaders, these guys get into both
                attics and crawlspaces. A mother raccoons ideal location to
                raise her kids is your home. They may act and seem cute and
                cuddly, but don't be fooled. Their teeth are sharp and
                their claws are fast, and these smart animals know where to
                strike!"
              href="/nuisance-wildlife/raccoons"
            />
            <CritterCard
              heading="Squirrels"
              imgSrc="/squirrel.jpg"
              imgAlt="picture of a squirrel in a house"
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
              href="/rats"
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
            <CritterCard
              heading="Bats"
              imgSrc="/bat.jpg"
              imgAlt="picture of a bat on a person's hand"
              summary="I've been seeing more and more of these guys lately, they seem to be everywhere. Often tricky to get rid of, bats are the one of the few animals confirmed to carry rabies in Washington State.

              I've dedicated hours upon hours of on site learning during my inspections, and can confidently say, that I am the best Bat Guy in Washington State. That being said, bats can never be underestimated."
            />
            <CritterCard
              heading="Beavers"
              imgSrc="/beaver.jpg"
              imgAlt="picture of a beaver captured in a trap"
              summary="Beavers are both adorable and menacing. They seem like chunky, cuddly balls of fur, when in actuality they could take off a finger if they decided to. They make dams.

              And dams cause flooding, which could be your basement. Which could lead to thousands upon thousands of dollars in damage"
            />
            <CritterCard
              heading="Mountain Beavers"
              imgSrc="/mountain_beaver.jpg"
              imgAlt="picture of a mountain beaver eating an apple in a trap"
              summary="You've probably never seen one, but you've seen their work. Mtn. beavers spend most of their time underground, only venturing above to gather food.

              Which might be your hostas, laurels, or rhodies. They cut branches off, then drag then down into the depths of their tunnel system, never to be seen again. "
            />
            <CritterCard
              heading="Otters"
              imgSrc="/otter.jpg"
              imgAlt="picture of an otter lounging"
              summary="Although rather uncommon home invaders, otters will sometimes find their way into crawlspaces and under decks. They can be incredibly destructive, and mother otters are one of the most difficult to approach, as they do not back down. Deceptively strong, do not try to remove these ones yourself."
            />
            <CritterCard
              heading="Ants and Other Creepy Crawlers"
              imgSrc="/ant.jpg"
              imgAlt="picture of an ant perched on a twig"
              summary="A common pest, ants enter houses for a number of reasons. Food, water, shelter, all are viable reasons as to why you have a trail of these little guys running across your kitchen or bathroom floor. Normally fairly easy to eliminate, but it takes time. Not an overnight or one trip service."
            />
            <CritterCard
              heading="Rabbits"
              imgSrc="/rabbit.jpg"
              imgAlt="picture of a rabbit in the grass"
              summary="Rabbits are one of those animals that you love or absolutely cannot stand. Normally, they're just kind of there, munching on grass or clovers. No biggie.

              But you just planted those azaleas, and now they've been chewed up. That new groundcover? That's $25 a piece? And you bought 5! And they're ALL GONE?!?
              
              We can trap for rabbits, yes."
            />
            <CritterCard
              heading="Bobcats"
              imgSrc="/bobcat.jpg"
              imgAlt="picture of a bobcat trapped in a net"
              summary="Bobcats are more common than most people realize, but because of their elusive nature, they're rarely seen. While they don't frequently hunt household pets, they do occasionally, so precautions should be taken if they live in your area. More commonly, they're responsible for the loss of many smaller farm animals, such as poultry, lambs, goats, and pigs."
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Wildlife;
