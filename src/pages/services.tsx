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
        <Section className="m-auto">
          <div className="">
            <h2 className="mb-4 text-center">Crawlspace Restoration</h2>
            <div className="mb-8 flex max-w-4xl flex-col items-center justify-center gap-6 px-2 sm:px-4 md:m-auto md:flex-row md:px-8 lg:max-w-5xl lg:gap-12">
              <div className="m-auto basis-1/3">
                <Image
                  src="/crawlspace_destruction.jpg"
                  width={400}
                  height={400}
                  alt="picture of a crawlspace ripped up by animals"
                />
              </div>
              <p className="basis-2/3">
                We here at Wildlife Wizards can make your crawlspace look brand
                new again. We offer everything from aerosol sanitation to full
                crawlspace remediation. Clean outs also make rodent control that
                much easier, allowing us to find entry points that may not have
                been visible.
              </p>
            </div>
            <div className="flex max-w-4xl flex-col items-center justify-center gap-6 px-2 sm:px-4 md:m-auto md:flex-row-reverse md:px-8 lg:max-w-5xl lg:gap-12">
              <div className="m-auto basis-1/3">
                <Image
                  src="/crawlspace_droppings.jpg"
                  width={400}
                  height={400}
                  alt="picture of a crawlspace ripped up by animals"
                />
              </div>
              <p className="basis-2/3">
                Animals in the home pose a serious health concern. Their urine
                and feces could carry pathogens that cause severe health issues,
                sometimes even death.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Services;
