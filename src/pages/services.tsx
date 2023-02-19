import Head from "next/head";
import Section from "../components/structural/section";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <Head>
        <title>Animal Control Services</title>
      </Head>
      <Section className="m-auto bg-purple-800 text-center text-white">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">Our Services</h1>
        <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
          We offer a wide range of services to address different types of
          wildlife problems. These services include inspection and assessment of
          the situation, humane trapping and removal of the animals, and sealing
          of entry points to prevent future invasions. We also provide cleanup
          and restoration of damaged areas, as well as preventive measures to
          avoid future wildlife problems.
        </p>
      </Section>
      <main>
        <Section className="m-auto px-2 text-font-primary dark:bg-slate-800">
          <h2 className="mb-4 text-center dark:text-white">Removal</h2>
          <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
            One of the most important aspects of wildlife removal services is
            the use of humane trapping and relocation methods. Our WCOs are
            trained to use traps that do not harm the animals and to release
            them in safe and suitable habitats away from human spaces. This
            helps to minimize the stress and trauma that the animals may
            experience during the removal process. Our WCOs also follow ethical
            and legal guidelines for handling and relocating different species
            of wild animals.
          </p>
        </Section>
        <Section className="m-auto bg-primary px-2 text-white dark:bg-secondary-dark">
          <h2 className="mb-4 text-center">Exclusion</h2>
          <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
            Another important aspect of wildlife removal services is the use of
            effective and safe methods to seal entry points and prevent future
            invasions. Our wizards are trained to identify and block potential
            entry points, such as gaps in walls, roofs, and foundations. When
            advisable, we will install barriers, screens, or fences to prevent
            animals from entering or damaging certain areas. In some cases
            one-way exits can be used to allow animals to let themselves out. By
            using these preventive measures, the Wildlife Wizards help to
            protect both people and wildlife from potential harm and conflicts.
          </p>
        </Section>
        <Section className="m-auto bg-gray-600 px-2 text-white dark:bg-inherit sm:px-4">
          <h2 className="mb-4 text-center">Crawlspace Remediation</h2>
          <div className="flex max-w-4xl flex-col items-center gap-6 py-4 md:mx-auto lg:max-w-6xl lg:flex-row lg:items-stretch">
            <div className=" flex basis-1/2 justify-end">
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
            <div className=" basis-1/2">
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
                In addition to destroying your property, animal invaders pose a
                serious health concern. Left to deposit their urine and feces
                unchecked, you and your family may have to contend with the
                pathogens critters can carry. The risk to your health is not
                usually imminent, but it&apos;s often best left to the
                professionals to handle cleanup.
              </p>
            </div>
          </div>
        </Section>
        <Section className="m-auto bg-primary px-2 text-white dark:bg-purple-900">
          <h2 className="mb-4 text-center">Attic Restoration</h2>
          <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
            Attic restoration is a service we provide after removing wild
            animals from the attic. Animals like bats, squirrels, and raccoons
            can cause significant damage to attics by chewing on wires,
            insulation, and other structural elements. These animals also leave
            behind feces, urine, and other debris that can pose health hazards
            to humans. Attic restoration involves cleaning and sanitizing the
            attic, repairing any damage, and replacing insulation to ensure that
            the space is safe and functional again.
          </p>
          <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
            We use specialized equipment and techniques to remove the animal
            waste and debris from the attic. This includes protective gear,
            high-powered vacuums, and sanitizing agents that kill any pathogens
            or bacteria left behind by the animals. After cleaning the attic,
            our wizards will assess the extent of the damage and repair any
            structural or electrical components that may have been damaged by
            the animals. When necessary we may also offer to install new
            insulation to restore the energy efficiency and comfort of the
            attic.
          </p>
          <p className="m-auto mb-4 max-w-xl px-5 md:px-5">
            Attic restoration is an important part of wildlife control services,
            as it helps to ensure that the attic is safe and functional for
            human use. It also helps to prevent future invasions by sealing
            entry points and installing barriers that prevent animals from
            accessing the attic. By providing attic restoration services, our
            wizards help you regain peace of mind and ensure that their homes
            are free of wildlife-related hazards.
          </p>
        </Section>
      </main>
    </>
  );
};

export default Services;
