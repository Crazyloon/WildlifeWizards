import Head from "next/head";
import Section from "../components/structural/section";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <Head>
        <title>Nuisance Wildlife - Animal Control</title>
      </Head>
      <Section className="bg-purple-800">
        <h1 className="text-center text-white">Our Services</h1>
      </Section>
      <main className="text-slate-800 dark:text-gray-200">
        <Section className="m-auto px-2 sm:px-4">
          <h2 className="mb-4 text-center">Crawlspace Remediation</h2>
          <div className="flex max-w-4xl flex-col items-center gap-6 py-4 md:mx-auto lg:max-w-6xl lg:flex-row lg:items-stretch">
            <div className="m-auto flex basis-1/2 justify-end">
              <Image
                src="/crawlspace_destruction_wide.jpg"
                width={800}
                height={600}
                alt="picture of a crawlspace ripped up by animals"
                className="rounded-sm"
              />
            </div>
            <div className="flex basis-1/2 items-center lg:max-w-none">
              <p className="max-w-xl border-dashed border-secondary p-4 lg:border xl:py-8">
                Animals often cause destruction when they invade your space.
                Wildlife Wizards can make your crawlspace look brand new again.
                We offer everything from aerosol sanitation to full crawlspace
                remediation. Clean outs also make rodent control that much
                easier, allowing us to find entry points that may not have been
                visible.
              </p>
            </div>
          </div>
          <div className="flex max-w-4xl flex-col items-center gap-6 py-4 md:mx-auto lg:max-w-6xl lg:flex-row-reverse lg:items-stretch">
            <div className="m-auto basis-1/2">
              <Image
                src="/crawlspace_droppings_wide.jpg"
                width={800}
                height={600}
                alt="picture of a crawlspace ripped up by animals"
                className="rounded-sm"
              />
            </div>
            <div className="flex max-w-lg basis-1/2 items-center lg:max-w-none">
              <p className="max-w-xl border-dashed border-secondary p-4 lg:border xl:py-8">
                In additon to destroying your property, animal invaders pose a
                serious health concern. Left to deposite their urine and feces
                unchecked, you and your family may have to contend with the
                pathogens critters can carry. The risk to your health is not
                usually imminent, but it&apos;s often best left to the
                professionals to handle cleanup.
              </p>
            </div>
          </div>
        </Section>
        <Section className="bg-primary text-white dark:bg-slate-800 dark:text-font-primary">
          <h2 className="mb-4 text-center">Attic Restoration</h2>
          <p className="mb-4 text-center">Pictures coming soon...</p>
        </Section>
      </main>
    </>
  );
};

export default Services;
