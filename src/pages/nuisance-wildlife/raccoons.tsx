import Image from "next/image";
import Section from "../../components/structural/section";

const Raccoons = () => {
  return (
    <>
      <Section className="bg-purple-800 text-center text-white">
        <h1 className="font">Raccoons</h1>
      </Section>
      <Section>
        <article className="m-auto flex max-w-5xl flex-col justify-center gap-6 px-4 md:flex-row xl:max-w-7xl">
          <div className="self-center">
            <Image
              src="/raccoon_box.jpg"
              alt="raccoon babies in a box"
              width={400}
              height={600}
              className="aspect-[2/3]"
            ></Image>
          </div>
          <div className="md:max-w-md">
            <h3 className="text-white">Trouble Known by Many Names</h3>
            <p className="mb-4 dark:text-stone-300">
              Racoons are known by many names, such as the trash panda, and the
              common city bear. They are notorious for finding their way into
              attics and crawlspaces, where they can cause extensive damage,
              ripping up moisture barrier and insulation. Come spiring, mothers
              will be looking for the best place to have their young, and
              nothing beats the security of a warm attic.
            </p>
            <p className="mb-4 dark:text-stone-300">
              Racoons didn&apos;t come from the city, but they thrive in such an
              environment. They are the perfect mix of cuddly and cruel. They
              are advantageous, sneaking in through doggie doors in the middle
              of the night to steal dog food, or raiding ponds, eating 20 year
              old koi fish like it was nothing more than a can of tuna.
            </p>
            <p className="mb-4 dark:text-stone-300">
              If you&apos;ve ever walked outside one morning, expecting to see
              the beautiful lawn you just paid $$$ for, only to find it
              destroyed, rolled up like it just came off the truck, then you
              know.
            </p>
            <p className="mb-4 dark:text-stone-300">They can be infuriating.</p>
          </div>
        </article>
        <article className="md:flex-row-revers m-auto flex max-w-5xl flex-col-reverse justify-center gap-6 px-4 md:flex-row xl:max-w-7xl">
          <div className="md:max-w-md">
            <h3 className="text-white">Don&apos;t Be Fooled</h3>
            <p className="mb-4 dark:text-stone-300">
              They will play cute to get what they want, staring at you with doe
              eyes, begging you for a handout. You must avoid doing so, as it
              will only lead to problems for both you and the animal. By
              supplying food, you cause the animal to become reliant, and they
              will often come to you instead of having to seek food on its own.
              This may prevent the animal from learning and developing important
              foraging techniques.
            </p>
            <p className="mb-4 dark:text-stone-300">
              If for whatever reason you decide you no longer want to supply
              your little friends with their nightly snacks, this can lead to
              trouble for you and family. Racoons often become extremely hostile
              if a food source (yes, that is what you are, nothing more) stops
              supplying food, and like a gang of thugs shaking you down for
              &apos;rent&apos; money, they will resort to intimidation and scare
              tactics. They have been known to pound on windows, destroy lawns,
              and even attack household pets.
            </p>
            <p className="mb-4 dark:text-stone-300">
              Racoons also carry Baylisascaris procyonis, or as its better know
              &apos;racoon roundworm&apos;. They can live with it, but pass the
              worms in their stool. If injected, the resulting infection can
              sometimes be fatal.
            </p>
          </div>
          <div className="self-center">
            <Image
              src="/cute_raccoon.jpg"
              alt="cute raccoon on a roof"
              width={400}
              height={600}
              className="aspect-[2/3]"
            ></Image>
          </div>
        </article>
        <article className="m-auto flex max-w-5xl flex-col justify-center gap-6 px-4 md:flex-row xl:max-w-7xl">
          <div className="self-center">
            <Image
              src="/raccoon_box.jpg"
              alt="raccoon babies in a box"
              width={400}
              height={600}
              className="aspect-[2/3]"
            ></Image>
          </div>
          <div className="md:max-w-md">
            <h3 className="text-white">Trouble Known by Many Names</h3>
            <p className="mb-4 dark:text-stone-300">
              Do not attempt to trap racoons on your own, unless you are
              prepared to deal with them the right way. Washington State laws
              forbid the transportation and relocation of racoons, and moving
              them out of their familiar territory and dropping them off
              somewhere completely new is doing nothing good for the animals.
            </p>
            <p className="mb-4 dark:text-stone-300">
              Wildlife Wizards offers multiple different solutions to any racoon
              situation, from wrangling to trapping to one way doors. So
              don&apos;t get yourself hurt, or end up breaking the law. Leave
              racoon removal in the hands of our trained professionals.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
};

export default Raccoons;
